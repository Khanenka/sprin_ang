package com.khanenka.mysql_oracle.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import java.sql.SQLException;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(entityManagerFactoryRef = "oracleEntityManagerFactory", transactionManagerRef = "oracleTransactionManager",
        basePackages = {"com.khanenka.mysql_oracle.oracle.repo"})

public class OracleConfig {

    @Primary
    @Bean
    @ConfigurationProperties(prefix = "oracle.datasource")
    public DataSourceProperties oracleDataSourceProperties() throws SQLException {

        try {
        return new DataSourceProperties();
        } catch (Exception e) {
            throw new RuntimeException(e+"словил ошибку");
        }
    }

    @Primary
    @Bean
    @ConfigurationProperties(prefix = "oracle.datasource.hikari")
    public DataSource oracleDataSource(@Qualifier("oracleDataSourceProperties") DataSourceProperties dataSourceProperties) {

        return dataSourceProperties.initializeDataSourceBuilder().build();
    }

    @Primary
    @Bean
    public LocalContainerEntityManagerFactoryBean oracleEntityManagerFactory(@Qualifier("oracleDataSource") DataSource oracleDataSource, EntityManagerFactoryBuilder builder) {
        return builder.dataSource(oracleDataSource).packages("com.khanenka.mysql_oracle.oracle.model")
                .persistenceUnit("oracle").build();
    }

    @Primary
    @Bean
    public PlatformTransactionManager oracleTransactionManager(@Qualifier("oracleEntityManagerFactory") EntityManagerFactory factory) {
       return new JpaTransactionManager(factory);

    }




}

