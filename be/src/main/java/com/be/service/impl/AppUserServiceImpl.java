package com.be.service.impl;

import com.be.model.app.AppUser;
import com.be.repository.AppUserRepository;
import com.be.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppUserServiceImpl implements AppUserService {

    @Autowired
    private AppUserRepository appUserRepository;

    @Override
    public AppUser findByFullName(String fullName) {
        return appUserRepository.findByFullName(fullName);
    }

    @Override
    public boolean existsByFullName(String fullName) {
        return appUserRepository.existsByFullName(fullName);
    }

    @Override
    public AppUser save(AppUser appUser){
        return appUserRepository.save(appUser);
    }
}
