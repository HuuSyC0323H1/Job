package com.be.service;

import com.be.model.app.AppUser;

public interface AppUserService {
    AppUser findByFullName(String fullName);

    AppUser save(AppUser appUser);

    boolean existsByFullName(String fullName);
}
