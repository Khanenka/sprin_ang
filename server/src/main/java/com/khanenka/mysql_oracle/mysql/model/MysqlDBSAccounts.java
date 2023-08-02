package com.khanenka.mysql_oracle.mysql.model;

import lombok.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.lang.Nullable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.ZonedDateTime;
import java.util.Date;

@Entity
@Table(name = "accounts")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class MysqlDBSAccounts {

    @Id
    private Integer id;

    private String accountID;

    private Integer userID;

    private String phone;

    private String pin;

    private String puk;

    private String description;

    @Nullable
    private Date creationDate;

    @Nullable
    private Date expirationDate;

    @Nullable

    private Date activationDate;

    @Nullable
    private Date disableDate;
    @Nullable
    private Date rechargeDate;

    private Integer balance;

    private Integer cos;

    private Integer wbl;

    private Integer svc;

    private Integer locked;
    @Nullable
    private Date dateOfLock;


    private Date testdate;

    private String codeX;

    private Integer parentID;

    private String rues_Code;

    private String stack_Action_Code;

    private String stack_Amount;

    @Column(name="descpr")
    private String descpr;

    @Column(name="name")
    private String name;

    @Column(name="surname")
    private String surname;


    @Column(name="address")
    private String address ;

    @Column(name="city")
    private String city;

    @Column(name="zipCode")
    private String zipCode;

    @Column(name="country")
    private String country;

    @Column(name="company")
    private String company;

    @Column(name="fax")
    private String fax;

    @Column(name="contact_number1")
    private String contact_number1 ;

    @Column(name="email")
    private String email;

    @Column(name="note")
    private String note;

}
