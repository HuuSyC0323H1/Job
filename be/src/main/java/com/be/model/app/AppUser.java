package com.be.model.app;

import com.be.model.acc.Users;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "appusers")
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;

    private String lastName;

    private String fullName;

    private LocalDate dob;

    private String phoneNumber;

    @Column(columnDefinition = "TEXT")
    private String avatarImage;

    private String hobbies;

    private String address;

    @OneToOne
    private Users users;

    private LocalDateTime lastOnline;
}