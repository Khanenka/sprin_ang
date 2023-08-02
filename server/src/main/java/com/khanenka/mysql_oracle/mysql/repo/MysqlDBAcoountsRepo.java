package com.khanenka.mysql_oracle.mysql.repo;

import com.khanenka.mysql_oracle.mysql.model.MysqlDB;
import com.khanenka.mysql_oracle.mysql.model.MysqlDBAccounts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Objects;

@Repository
public interface MysqlDBAcoountsRepo extends JpaRepository<MysqlDBAccounts, Integer> {
    @Query(value = "select a.*,s.*, cs.description descpr from accounts a \n" +
            "left join statuses s on a.status = s.status\n" +
            "left join classofservice cs on a.cos = cs.cos\n" +
            " where code = sha(:code)", nativeQuery = true)
    List<MysqlDBAccounts> findHashPass(@Param("code") String code);


    @Query(value = "select a.*,s.*,  cs.description descpr from accounts a \n" +
            "left join statuses s on a.status = s.status \n" +
            "left join classofservice cs on a.cos = cs.cos\n" +
            "where a.id = (:id)", nativeQuery = true)
    List<MysqlDBAccounts> findAccByID(@Param("id") String id);
}
