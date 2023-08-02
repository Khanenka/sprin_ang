package com.khanenka.mysql_oracle.oracle.model;


import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "USER_DESC176")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class UserDesc176  {

    @Id
    @Column(name = "USER_ID")
    private int userId;

    @Column(name = "USERNAME")
    private String userName;

    @Column(name = "PASSWORD")
    private String userPass;

    @Column(name = "ROLE")
    private String role;

    @Column(name = "ENABLED")
    private String enabled;







}