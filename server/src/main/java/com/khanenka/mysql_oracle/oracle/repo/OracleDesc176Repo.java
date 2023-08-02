package com.khanenka.mysql_oracle.oracle.repo;


import com.khanenka.mysql_oracle.oracle.model.Desc176;
import com.khanenka.mysql_oracle.oracle.model.SchetOrStk;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface OracleDesc176Repo extends PagingAndSortingRepository<Desc176, Integer> {

    @Query(nativeQuery = true, value = "select *  from T_176_DESCRIPTION t where SCHETORSTK = 'STK'")
    List<Desc176> findAllStk(@Param("STK") SchetOrStk schetOrStk);

    @Query(nativeQuery = true, value = "select *  from T_176_DESCRIPTION t where SCHETORSTK = 'SCHET'")
    List<Desc176> findAllSchet(@Param("SCHET") SchetOrStk schetOrStk);



    Page<Desc176> findBytextContainingIgnoreCase(String text, Pageable pageable);

    @Query(nativeQuery = true, value ="select * from TELCOMM.T_176_DESCRIPTION t  ORDER BY DATE_OF_CREATION DESC")
    Iterable<Desc176> findAll();

    @Query(nativeQuery = true, value ="select * from TELCOMM.T_176_DESCRIPTION t ORDER BY DATE_OF_CREATION DESC")
    Page<Desc176> findAll(Pageable pageable);


    @Query(nativeQuery = true, value ="UPDATE TELCOMM.T_176_DESCRIPTION\n" +
            "   SET TEXT = (:text),\n" +
            "    THEME = (:theme),\n" +
            "    DATE_OF_CREATION = (:date),\n" +
            "    SCHETORSTK = (:schetOrStk)\n" +
            "    AUTHOR = (:author),\n" +
            " WHERE ID_176 = :id ")
    Desc176 findByIdEdit( Integer id);
//,@Param("text") String text,@Param("theme") String theme,  Date date,@Param("schetOrStk") SchetOrStk schetOrStk


    void deleteById(Integer id);

}
