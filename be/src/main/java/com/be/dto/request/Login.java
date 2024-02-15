package com.be.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Login {

    private String password;

    @Email(message = "Email should be valid")
    @Pattern(regexp = "(([^<>()\\[\\]\\\\.,;:\\s+@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@(gmail\\.com|example\\.com\\.vn|microsoft\\.com\\.vn)", message = "Email should end with @gmail.com")
    private String email;

}
