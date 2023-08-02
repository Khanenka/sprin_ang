package com.khanenka.mysql_oracle.mysql.repo;

import com.khanenka.mysql_oracle.mysql.model.MysqlDB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Repository
@Transactional
public interface MysqlRepo extends JpaRepository<MysqlDB, Integer> {

    @Query(value = "SELECT * FROM user_log  WHERE DATE_FORMAT(statetime,'%Y-%m-%d') = :date",nativeQuery = true)
    List<MysqlDB> findAll( @Param("date")String statetime);


}
