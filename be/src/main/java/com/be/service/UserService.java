package com.be.service;

import com.be.model.acc.Users;

public interface UserService {

    Users save(Users users);
    boolean existsByEmail(String email);
}
