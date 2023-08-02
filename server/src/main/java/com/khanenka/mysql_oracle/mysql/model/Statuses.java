package com.khanenka.mysql_oracle.mysql.model;


import lombok.*;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Statuses {
    @Id

    private int id;

    private int status;

    private String description;



}
