package com.khanenka.mysql_oracle.mysql.model;

import lombok.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.bind.Name;
import org.springframework.lang.Nullable;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "accounts")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Transactional
public class MysqlDBAccounts {


    @Id
    private Integer id;


    private Integer balance;


    private String code;


    private Integer type;

    private String description;

    @Nullable
    private Date dateOfCreation;

    @Nullable
    private Date dateOfFirstUse;

    @Nullable
    private Date dateOfLastUse;

    private Integer locked;

    @Nullable
    private Date dateOfLock;


    private String operater;


    private Integer flag;

    @Nullable
    private Date expiryDate;

    @Nullable
    private Integer validityPeriod;


    private Integer cos;


    private Integer distributerId;


    private String codeX;

    @Column(name="descpr")
    private String descpr;











}

