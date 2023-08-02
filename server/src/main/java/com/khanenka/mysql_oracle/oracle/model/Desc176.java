package com.khanenka.mysql_oracle.oracle.model;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "T_176_DESCRIPTION")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Desc176 {



    @Id
    @Column(name = "ID_176")
    @GeneratedValue(strategy =GenerationType.SEQUENCE ,generator="some_seq_gen_name")
    @SequenceGenerator(name="some_seq_gen_name", sequenceName="SOME_SEQ", allocationSize=1)
    private Integer id176;


    @Column(name = "TEXT")
    @Nullable
    private String text;
    @Column(name = "THEME")
    @Nullable
    private String theme;

    @Enumerated(EnumType.STRING)
    private SchetOrStk schetOrStk;

    @DateTimeFormat(pattern = "dd.MM.yyyy")
    @Column(name = "DATE_OF_CREATION")
    @Nullable
    private Date dateOfCreation;

    @Column(name = "AUTHOR")
    @Nullable
    private String author;

    @Column(name="EDIT_NAME")
    @Nullable
    private String editName;


}
