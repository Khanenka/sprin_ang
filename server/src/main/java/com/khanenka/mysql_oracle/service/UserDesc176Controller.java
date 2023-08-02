package com.khanenka.mysql_oracle.service;

import com.khanenka.mysql_oracle.oracle.model.UserDesc176Input;
import com.khanenka.mysql_oracle.oracle.repo.OracleUsernameDesc176InputRepo;
import com.khanenka.mysql_oracle.oracle.repo.UserDesc176Repo;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@Transactional
public class UserDesc176Controller {

    @Autowired
    UserDesc176Repo userDesc176Repo;
    @Autowired
    OracleUsernameDesc176InputRepo oracleUsernameDesc176InputRepo;




    @GetMapping("/user")
    public UserDesc176Input user(String username, String password) {

//        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//        UserDesc176Input userDesc176Input = new UserDesc176Input(0, auth.getName(), LocalDateTime.now());

//        System.out.println(oracleUsernameDesc176InputRepo.saveAndFlush(userDesc176Input));
//        oracleUsernameDesc176InputRepo.saveAndFlush(userDesc176Input);


//        System.out.println(LocalDateTime.now());
        UserDesc176Input user = new UserDesc176Input();
        user.setUsernameInput(username);
        user.setUserDateInput(LocalDateTime.now());


        return user;
    }

    @GetMapping("/admin")
    public String admin() {


        System.out.println(LocalDateTime.now());
        return "Admin";
    }
}
