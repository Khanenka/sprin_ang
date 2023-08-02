package com.khanenka.mysql_oracle.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import java.sql.SQLException;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(entityManagerFactoryRef = "mysqlServerEntityManagerFactory",
        transactionManagerRef = "mysqlServerTransactionManager",
        basePackages = "com.khanenka.mysql_oracle.mysql.repo")
public class MysqlConfig {



    @Bean
    @ConfigurationProperties(prefix = "mysqlserver.datasource")
    public DataSourceProperties mysqlServerDataSourceProperties() throws SQLException {

        return new DataSourceProperties();
    }

    @Bean
    @ConfigurationProperties(prefix = "mysql.datasource.hikari")
    public DataSource mysqlServerDataSource(@Qualifier("mysqlServerDataSourceProperties") DataSourceProperties dataSourceProperties) {
        return dataSourceProperties.initializeDataSourceBuilder().build();
    }

    @Bean(name = "mysqlServerEntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean mysqlServerEntityManagerFactory(@Qualifier("mysqlServerDataSource") DataSource mysqlServerDataSource, EntityManagerFactoryBuilder builder) {

        return builder.dataSource(mysqlServerDataSource)
                .packages("com.khanenka.mysql_oracle.mysql.model")
                .persistenceUnit("mysql")
                .build();

    }

    @Bean
    public PlatformTransactionManager mysqlServerTransactionManager(@Qualifier("mysqlServerEntityManagerFactory")
                                                                    EntityManagerFactory factory) {
        return new JpaTransactionManager(factory);
    }



}

