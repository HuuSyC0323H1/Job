package com.be.service.impl;

import com.be.dto.request.Login;
import com.be.dto.response.JwtResponse;
import com.be.security.UserDetailsImpl;
import com.be.security.jwt.JwtUtils;
import com.be.service.LoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LoginServiceImpl implements LoginService {
    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    private final AuthenticationManager authenticationManager;

    private final JwtUtils jwtUtils;

    public LoginServiceImpl(AuthenticationManager authenticationManager, JwtUtils jwtUtils) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    @Override
    public JwtResponse loginUser(Login loginRequest) throws AuthenticationException {
        String jwtToken = null;
        UserDetailsImpl userDetails = null;
        List<String> roles = null;
        try {
            if (loginRequest.getEmail() != null && !loginRequest.getEmail().isEmpty()) {
                Authentication authentication = authenticationManager
                        .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

                SecurityContextHolder.getContext().setAuthentication(authentication);

                userDetails = (UserDetailsImpl) authentication.getPrincipal();
                if (userDetails != null) {
                    jwtToken = jwtUtils.generateTokenFromUsername(userDetails.getUsername());
                    roles = userDetails.getAuthorities().stream()
                            .map(GrantedAuthority::getAuthority)
                            .collect(Collectors.toList());
                }
            }
            return new JwtResponse(jwtToken,
                    userDetails != null ? userDetails.getUserId() : null,
                    userDetails != null ? userDetails.getPassword() : null,
                    userDetails != null ? userDetails.getEmail() : null,
                    roles);
        } catch (Exception e) {
            logger.error("An error occurred during login.", e);
            return new JwtResponse(null, null, null, null, null);
        }
    }
}
