package com.be.dto.response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class JwtResponse {
    private Long userid;
    private String token;
    private String type = "Barren";
    private String password;
    private String email;


    private List<String> listRoles;

    public JwtResponse(String token, Long userid, String password, String email, List<String> listRoles) {
        this.token = token;
        this.userid = userid;
        this.password = password;
        this.email = email;
        this.listRoles = listRoles;
    }


}
