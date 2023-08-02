package com.khanenka.mysql_oracle.mysql.model;

import lombok.*;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class MysqlDB {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Value("t_name")
    private String username;
    @Value("t_statetime")
    private Date statetime;
    @Value("t_state")
    private long state;
    @Value("t_pass")
    private String code;

}
