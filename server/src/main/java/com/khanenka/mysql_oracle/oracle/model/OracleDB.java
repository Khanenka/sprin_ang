package com.khanenka.mysql_oracle.oracle.model;


import lombok.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.lang.Nullable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "T_176_STATUS")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class OracleDB {

    @Id
    @Value("t_id")
    private long id;



    @Value("t_username")
    @Nullable
    private Integer username;

    @Value("t_statetime")
    @Nullable
    private Date statetime;

    @Value("t_state")
    @Nullable
    private long state;



}
