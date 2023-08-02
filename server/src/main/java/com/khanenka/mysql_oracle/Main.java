package com.khanenka.mysql_oracle;

import java.util.Arrays;
import java.util.Locale;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {

//        String s = new String("example");
//        String s1 = new String("example");
//
//        System.out.println(s == s1);
//        System.out.println(s.equals(s1));

        System.out.println(abbrevName("sam harris"));
    }

    public static String abbrevName(String name) {


     String first = String.valueOf(name.charAt(0));
        int x=name.indexOf(" ")+1;
        String two= String.valueOf(name.charAt(x));
        return first.toUpperCase(Locale.ROOT)+"."+two.toUpperCase(Locale.ROOT);
    }

    }