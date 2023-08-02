package com.khanenka.mysql_oracle.mysql.repo;


import com.khanenka.mysql_oracle.mysql.model.MysqlDBSAccounts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface MysqlDBSAccountsRepo extends JpaRepository<MysqlDBSAccounts,String> {

    @Query(value = "select a.*,su.*,s.*,IF(date_format(expirationDate, '%d.%m.%Y')='00.00.0000', null,expirationDate) as testdate, cs.description descpr  from saccounts  a \n" +
            "left join statuses s on a.state = s.status \n" +
            "left join classofservice cs on a.cos = cs.cos\n" +
            "LEFT JOIN subscriberdata su \n" +
            "ON a.UserID = su.ID \n"+
            "where accountID = UPPER(sha(:accountID))", nativeQuery = true)

    List<MysqlDBSAccounts> findHashPassSAccounts(@Param("accountID") String accountID);

    @Query(value = "select a.*,su.*,s.*,IF(date_format(expirationDate, '%d.%m.%Y')='00.00.0000', null,expirationDate) as testdate, cs.description descpr from saccounts a \n" +
            "left join statuses s on a.state = s.status\n" +
            "left join classofservice cs on a.cos = cs.cos\n" +
            "LEFT JOIN subscriberdata su \n" +
            "ON a.UserID = su.ID \n"+
            "where a.id = (:ID)", nativeQuery = true)

    List<MysqlDBSAccounts> findByNumber(@Param("ID") String id);

}
