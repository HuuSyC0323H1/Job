package com.be.service.impl;

import com.be.dto.request.Register;
import com.be.dto.response.MessageResponse;
import com.be.model.acc.ERole;
import com.be.model.acc.Roles;
import com.be.model.acc.Users;
import com.be.model.app.AppUser;
import com.be.service.AppUserService;
import com.be.service.RegisterService;
import com.be.service.RoleService;
import com.be.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.regex.Pattern;

@Service
public class RegisterServiceImpl implements RegisterService {

    private final AppUserService appUserService;

    private final UserService userService;

    private final RoleService roleService;

    private final PasswordEncoder passwordEncoder;

    public RegisterServiceImpl(AppUserService appUserService, UserService userService, RoleService roleService, PasswordEncoder passwordEncoder) {
        this.appUserService = appUserService;
        this.userService = userService;
        this.roleService = roleService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public MessageResponse registerUser(Register signUpRequest) {
        String emailRegex = "(([^<>()\\[\\]\\\\.,;:\\s+@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@(gmail\\.com|example\\.com\\.vn|microsoft\\.com\\.vn)";
        Pattern emailPatten = Pattern.compile(emailRegex);

        String passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#?!@$%^&*-])[A-Za-z\\d@$!%*?&]{8,}$";
        Pattern passwordPatten = Pattern.compile(passwordRegex);
        if (!emailPatten.matcher(signUpRequest.getEmail()).matches()){
            return new MessageResponse("Error: Invalid email format !" + "Email should end with @gmail.com or example.com.vn and maybe microsoft.com.vn");
        }
        if (!passwordPatten.matcher(signUpRequest.getPassword()).matches()){
            return new MessageResponse("Error: Password does not meet the required criteria" + "Password must meet:<br/>" +
                    "- Requires at least one lowercase letter.<br/>" +
                    "- Requires at least one capital letter.<br/>" +
                    "- Requires at least one digit.<br/>" +
                    "- Requires at least one special character from the list.<br/>" +
                    "- Requires a minimum length of 8 characters and can contain letters, numbers, and special characters from the list" );
        }
        String userName = signUpRequest.getFirstName().toLowerCase() + signUpRequest.getLastName().toLowerCase();
        if (appUserService.existsByFullName(userName)) {
            return new MessageResponse("Error: Username is already taken!");
        }

        if (userService.existsByEmail(signUpRequest.getEmail())) {
            return new MessageResponse("Error: Email is already in use!");
        }

        if (!signUpRequest.getPassword().equals(signUpRequest.getConfirmPassword())){
            return new MessageResponse("Error: Password do not match");
        }

        Users user = new Users();
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getListRoles();
        Set<Roles> roles = new HashSet<>();

        if (strRoles == null || strRoles.isEmpty()) {
            Roles userRole = roleService.findByRoleName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                if (role.equals("admin")) {
                    Roles adminRole = roleService.findByRoleName(ERole.ROLE_ADMIN)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(adminRole);
                } else {
                    Roles userRole = roleService.findByRoleName(ERole.ROLE_USER)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(userRole);
                }
            });
        }
        user.setListRoles(roles);
        userService.save(user);
        AppUser appUser = new AppUser();
        appUser.setUsers(user);
        appUser.setLastOnline(LocalDateTime.now());
        appUser.setFirstName(signUpRequest.getFirstName());
        appUser.setLastName(signUpRequest.getLastName());
        appUser.setFullName(userName);
        appUser.setAvatarImage("https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png");
        appUserService.save(appUser);
        return new MessageResponse("User registered successfully!");
    }
}
