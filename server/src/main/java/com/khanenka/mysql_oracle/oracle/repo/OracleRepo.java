package com.khanenka.mysql_oracle.oracle.repo;

import com.khanenka.mysql_oracle.oracle.model.OracleDB;
import org.springframework.data.domain.Pageable;


import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OracleRepo extends JpaRepository<OracleDB, String> {
    @Query(nativeQuery = true, value = "select *  from T_176_STATUS t")
    List<OracleDB> findAllFields();

}
