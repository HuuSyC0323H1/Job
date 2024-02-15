package com.be.controller;

import com.be.dto.request.Login;
import com.be.dto.request.Register;
import com.be.dto.response.JwtResponse;
import com.be.dto.response.MessageResponse;
import com.be.security.jwt.JwtUtils;
import com.be.service.RoleService;
import com.be.service.UserService;
import com.be.service.impl.LoginServiceImpl;
import com.be.service.impl.RegisterServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/api/auth")
public class UserController {
    final AuthenticationManager authenticationManager;
    final JwtUtils jwtUtils;
    final UserService userService;
    final RoleService roleService;
    final LoginServiceImpl loginService;
    final RegisterServiceImpl registerUser;
    final PasswordEncoder passwordEncoder;

    public UserController(AuthenticationManager authenticationManager, JwtUtils jwtUtils, UserService userService, RoleService roleService, LoginServiceImpl loginService, RegisterServiceImpl registerUser, PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
        this.userService = userService;
        this.roleService = roleService;
        this.loginService = loginService;
        this.registerUser = registerUser;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public ResponseEntity<?> LoginUser(@Valid @RequestBody Login loginRequest) {
        try {
            JwtResponse jwtResponse = loginService.loginUser(loginRequest);
            return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtResponse.getToken()).body(jwtResponse);
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid login credentials");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody Register signUpRequest) {
        try {
            MessageResponse response = registerUser.registerUser(signUpRequest);
            if (response.getMessage().equals("User registered successfully!")){
                return ResponseEntity.ok(response);
            }else {
                return ResponseEntity.badRequest().body(response);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Internal server error");
        }
    }
}
