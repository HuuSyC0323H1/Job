package com.be.service;

import com.be.model.acc.ERole;
import com.be.model.acc.Roles;

import java.util.Optional;

public interface RoleService {
    Optional<Roles> findByRoleName(ERole roleName);

}
