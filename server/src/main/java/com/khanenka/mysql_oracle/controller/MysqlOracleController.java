package com.khanenka.mysql_oracle.controller;


import com.khanenka.mysql_oracle.mysql.model.MysqlDB;
import com.khanenka.mysql_oracle.mysql.model.MysqlDBAccounts;
import com.khanenka.mysql_oracle.mysql.model.MysqlDBSAccounts;
import com.khanenka.mysql_oracle.mysql.repo.MysqlDBAcoountsRepo;
import com.khanenka.mysql_oracle.mysql.repo.MysqlDBSAccountsRepo;
import com.khanenka.mysql_oracle.mysql.repo.MysqlRepo;
import com.khanenka.mysql_oracle.oracle.model.Desc176;
import com.khanenka.mysql_oracle.oracle.model.OracleDB;
import com.khanenka.mysql_oracle.oracle.repo.OracleDesc176Repo;
import com.khanenka.mysql_oracle.oracle.repo.OracleRepo;
import com.khanenka.mysql_oracle.oracle.repo.OracleUsernameDesc176InputRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;


@RestController
@EnableWebMvc
@CrossOrigin(origins = "http://localhost:4200")
@Transactional
public class MysqlOracleController implements WebMvcConfigurer {

    @Autowired
    OracleUsernameDesc176InputRepo oracleUsernameDesc176InputRepo;
    @Autowired
    OracleRepo oracleRepo;
    @Autowired
    MysqlRepo mysqlRepo;
    @Autowired
    MysqlDBAcoountsRepo mysqlDBAcoountsRepo;

    @Autowired
    MysqlDBSAccountsRepo mysqlDBSAccountsRepo;

    @Autowired
    OracleDesc176Repo oracleDesc176Repo;


    @GetMapping("/oracle")

    public ResponseEntity<List<OracleDB>> getFields() {


        List<OracleDB> all = new ArrayList<>();


        return new ResponseEntity<>(all, HttpStatus.OK);

    }


    @GetMapping("/getAllFieldsMysqlDB")

    public ResponseEntity<List<MysqlDB>> getAllFieldsMysqlDB() throws ParseException {

        Calendar calendar = Calendar.getInstance();
        calendar.getTime();
        Date date = new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");


// получаем текущую дату и время с Calendar ()
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.HOUR_OF_DAY, -24);
        String format1 = format.format(cal.getTime());
        List<MysqlDB> all1 = mysqlRepo.findAll(format1);

        return new ResponseEntity<>(all1, HttpStatus.OK);
    }

    private ApplicationContext context;


    @GetMapping("/oracledate")

    public List<OracleDB> findByDate(Integer name, String date) throws ParseException {

        List<OracleDB> allFields = oracleRepo.findAllFields();
        List<OracleDB> oracleFields = new ArrayList<>();

        SimpleDateFormat formatForDateNow = new SimpleDateFormat("MM.dd.yyyy");
        allFields.stream().sorted(Comparator.comparing(oracleDB -> oracleDB.getId())).forEach(oracle -> {


                    Locale locale = Locale.getDefault();
                    SimpleDateFormat format = new SimpleDateFormat("MM.dd.yyyy", locale);
                    String result1 = format.format(oracle.getStatetime());


                    if (oracle.getUsername() != null && result1.equals(date) && oracle.getUsername().equals(name)) {


                    }

                }
        );


        for (OracleDB oracleDB : allFields) {
            Locale locale = Locale.getDefault();
            SimpleDateFormat format = new SimpleDateFormat("MM.dd.yyyy", locale);
            String result1 = format.format(oracleDB.getStatetime());
            if (oracleDB.getUsername() != null && result1.equals(date) && oracleDB.getUsername().equals(name)) {
                OracleDB oracleObj = new OracleDB();
                oracleObj.setId(oracleDB.getId());
                oracleObj.setState(oracleDB.getState());
                oracleObj.setUsername(oracleDB.getUsername());
                oracleObj.setStatetime(oracleDB.getStatetime());
                oracleFields.add(oracleObj);


            }
        }


        List<OracleDB> collect = oracleFields.stream().sorted(
                Comparator.comparing(OracleDB::getId)
        ).collect(Collectors.toList());


        return collect;
    }

    @GetMapping("/accountspass")
    List<MysqlDBAccounts> getAllFeildsByHashPassword(String code) {

//        UserDesc176Input userDesc176Input = new UserDesc176Input(0,auth.getName(), LocalDateTime.now());
//
//        System.out.println(oracleUsernameDesc176InputRepo.saveAndFlush(userDesc176Input));
//        oracleUsernameDesc176InputRepo.saveAndFlush(userDesc176Input);


        return (mysqlDBAcoountsRepo.findHashPass(code));
    }

    @GetMapping("/saccountspass")
    List<MysqlDBSAccounts> getAllFeildsByHashPasswordSAccounts(String accountID) {

//        UserDesc176Input userDesc176Input = new UserDesc176Input(0,auth.getName(), LocalDateTime.now());
//
//        System.out.println(oracleUsernameDesc176InputRepo.saveAndFlush(userDesc176Input));
//        oracleUsernameDesc176InputRepo.saveAndFlush(userDesc176Input);


        return (mysqlDBSAccountsRepo.findHashPassSAccounts(accountID));
    }


    @GetMapping("/accountbynumber")
    List<MysqlDBAccounts> getAllFieldByNumber(String id) {


//        UserDesc176Input userDesc176Input = new UserDesc176Input(0,auth.getName(), LocalDateTime.now());
//
//        System.out.println(oracleUsernameDesc176InputRepo.saveAndFlush(userDesc176Input));
//        oracleUsernameDesc176InputRepo.saveAndFlush(userDesc176Input);


        return mysqlDBAcoountsRepo.findAccByID(id);
    }

    @GetMapping("/saccountbynumber")
    List<MysqlDBSAccounts> getAllFieldsByNumber(String id) {

//        UserDesc176Input userDesc176Input = new UserDesc176Input(0,auth.getName(), LocalDateTime.now());
//
//        System.out.println(oracleUsernameDesc176InputRepo.saveAndFlush(userDesc176Input));
//        oracleUsernameDesc176InputRepo.saveAndFlush(userDesc176Input);


        return mysqlDBSAccountsRepo.findByNumber(id);
    }

//    @Autowired
//    Date date ;

    @PostMapping(value = "/savedesc176", produces = MediaType.APPLICATION_JSON_VALUE)

    public ResponseEntity createDesc176(@RequestBody Desc176 desc176) {
        Date date=new Date();
//        System.out.println(date);
        desc176.setDateOfCreation(date);
        return new ResponseEntity<>(oracleDesc176Repo.save(desc176), HttpStatus.CREATED);

    }

    @GetMapping("/getalldesc176")
    List<Desc176> getAllDesc176() {


        return (List<Desc176>) oracleDesc176Repo.findAll();
    }


    @GetMapping("/getdesc176")
    ResponseEntity<Map<String, Object>> getAllSortDesc176(
            @RequestParam(required = false) String text,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "2") int size


//
    ) {

        try {
            List<Desc176> desc176 = new ArrayList<Desc176>();

            Pageable pagingSort = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "dateOfCreation"));

            Page<Desc176> pageDesc176;
            if (text == null) {
                pageDesc176 = oracleDesc176Repo.findAll(pagingSort);


            } else {
                pageDesc176 = oracleDesc176Repo.findBytextContainingIgnoreCase(text, pagingSort);


                desc176 = pageDesc176.getContent();


            }

            Map<String, Object> response = new HashMap<>();
            response.put("text", text);
            response.put("desc176", desc176);
            response.put("currentPage", pageDesc176.getNumber());
            response.put("totalItems", pageDesc176.getTotalElements());
            response.put("totalPages", pageDesc176.getTotalPages());


            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {

            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getdesctbysort176")
    List<Desc176> getTextbySortDesc176(String text) {


        return (List<Desc176>) oracleDesc176Repo.findAll(Sort.by(text));
    }


}







