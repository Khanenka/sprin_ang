package com.khanenka.mysql_oracle.oracle.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.LocalDateTime;
import java.util.Date;



@Entity
@Table(name = "USER_DESC176_INPUT")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class UserDesc176Input {

    @Id
    @Column(name = "USER_ID_INPUT")
    private long UserDesc176Input;


    @Column(name = "USERNAME_INPUT")
    private String UsernameInput;


    @Column(name = "USER_DATE_INPUT")
    private LocalDateTime UserDateInput;



}
