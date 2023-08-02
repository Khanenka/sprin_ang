package com.khanenka.mysql_oracle.oracle.repo;

import com.khanenka.mysql_oracle.oracle.model.UserDesc176;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDesc176Repo extends JpaRepository<UserDesc176,Integer> {

    UserDesc176 findByUserName(String username);

}
