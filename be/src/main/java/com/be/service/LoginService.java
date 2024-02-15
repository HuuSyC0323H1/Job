package com.be.service;

import com.be.dto.request.Login;
import com.be.dto.response.JwtResponse;
import org.springframework.security.core.AuthenticationException;

public interface LoginService {
        JwtResponse loginUser(Login loginRequest) throws AuthenticationException;

}
