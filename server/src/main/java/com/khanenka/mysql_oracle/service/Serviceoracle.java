package com.khanenka.mysql_oracle.service;

import com.khanenka.mysql_oracle.oracle.model.OracleDB;

import java.text.ParseException;
import java.util.List;

public interface Serviceoracle {
    List<OracleDB> saver() throws ParseException;
}
