package com.khanenka.mysql_oracle.controller;

import com.khanenka.mysql_oracle.oracle.model.Desc176;
import com.khanenka.mysql_oracle.oracle.model.SchetOrStk;
import com.khanenka.mysql_oracle.oracle.repo.OracleDesc176Repo;
import com.khanenka.mysql_oracle.oracle.repo.OracleUsernameDesc176InputRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.Date;
import java.util.List;


@EnableScheduling
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@Transactional
public class Desc176Controller {


    @Autowired
    OracleDesc176Repo oracleDesc176Repo;
    @Autowired
    OracleUsernameDesc176InputRepo oracleUsernameDesc176InputRepo;


    @GetMapping("/findstk")
    List<Desc176> getDescStk(SchetOrStk schetOrStk) {
        return oracleDesc176Repo.findAllStk(SchetOrStk.STK);
    }

    @GetMapping("/findschet")
    List<Desc176> getDescSchet(SchetOrStk schetOrStk) {
        return oracleDesc176Repo.findAllSchet(SchetOrStk.SCHET);
    }

    Date date1 = new Date(1685048400000L);

    @Scheduled(fixedRate = 36000)
    @PutMapping("/addresses/{id}")
    Desc176 replaceEmployee() throws SQLException {


        Desc176 newAddress = new Desc176();
        newAddress.setText("стк не пополняются");
        newAddress.setTheme("пополнение");
        newAddress.setDateOfCreation(date1);
        return oracleDesc176Repo.findById(1512)
                .map(address -> {
                    address.setText(newAddress.getText());
                    address.setDateOfCreation(date1);
                    return oracleDesc176Repo.save(address);
                })
                .orElseGet(() -> {

                    return oracleDesc176Repo.save(newAddress);
                });
    }



    @PutMapping("/desc176/{id}")
    Desc176 editDesc176(@RequestBody Desc176 desc176, @PathVariable Integer id)  {
        Date date = new Date();

      return   oracleDesc176Repo.findById(id).map(desc176new ->

                {
                    desc176new.setText(desc176.getText());
                    desc176new.setTheme(desc176.getTheme());
                    desc176new.setDateOfCreation(date);
                    desc176new.setSchetOrStk(desc176.getSchetOrStk());
                    if(desc176.getAuthor()!=null){
                        desc176new.setEditName(desc176.getEditName());
                    }else{
                        desc176new.setAuthor(desc176.getAuthor());
                    }
                    return oracleDesc176Repo.save(desc176new);
                })
                .orElseGet(() -> {

                    return oracleDesc176Repo.save(desc176);
                });

    }

    @DeleteMapping("/del_desc176/{id}")
    void deleteDesc176(@PathVariable Integer id){

        oracleDesc176Repo.deleteById(id);
       

    }
}





