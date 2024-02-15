package com.be.service;

import com.be.dto.request.Register;
import com.be.dto.response.MessageResponse;

public interface RegisterService {
        MessageResponse registerUser(Register signUpRequest);
}
