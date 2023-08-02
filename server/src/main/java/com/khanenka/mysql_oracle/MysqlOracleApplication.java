package com.khanenka.mysql_oracle;


import com.khanenka.mysql_oracle.oracle.model.UserDesc176;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.reactive.context.AnnotationConfigReactiveWebApplicationContext;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication

public class MysqlOracleApplication {



	public static void main(String[] args) throws InterruptedException {

		SpringApplication.run(MysqlOracleApplication.class, args);
	}
}
