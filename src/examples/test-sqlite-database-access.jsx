﻿//@include ../bin/porky.jsx;var thisParentFolder = File($.fileName).parent;var thisRootFolder = File("~").fsName;var thisAbsolutePath = unescape( thisParentFolder.toString().replace("~", thisRootFolder) );    thisAbsolutePath = thisAbsolutePath.replace(/\\/g, "/");// GLOBAL OBJECTSsettings.dataSource.type = "SQLite";settings.dataSource.server = "";settings.dataSource.name = thisAbsolutePath + "/database.sqlite";settings.dataSource.username = "-";settings.dataSource.password = "-";alert("This database file will be used:\n\n" + settings.dataSource.name);var mySQLiteResult = "";mySQLiteResult = connectToDataSource("SELECT * FROM evenmorerows LIMIT 1000,1");/*    mySQLiteResult = connectToDataSource("SELECT COUNT(ClientLastname) AS ZAEHLER FROM MyTable");    mySQLiteResult = connectToDataSource("SELECT * FROM MyTable");    mySQLiteResult = connectToDataSource("UPDATE MyTable SET ClientLastname='Möller' WHERE ClientLastname='Müller'");    mySQLiteResult = connectToDataSource("SELECT MyOtherTable.ClientFirstname, MyTable.ClientLastname FROM MyTable, MyOtherTable");    mySQLiteResult = connectToDataSource("CREATE TABLE byebye(Spalte1 varchar(256), Spalte2 varchar(256), Spalte3 INT)");    mySQLiteResult = connectToDataSource("INSERT INTO byebye (Spalte1, Spalte2, Spalte3) VALUES ('hallo', 'oli', 'ü')");    mySQLiteResult = connectToDataSource("SELECT * FROM byebye");    mySQLiteResult = connectToDataSource("DELETE FROM byebye WHERE(Spalte3='ü')");    mySQLiteResult = connectToDataSource("ALTER TABLE byebye ADD Zeitstempel TIMESTAMP");    mySQLiteResult = connectToDataSource("SELECT name FROM sqlite_master");    mySQLiteResult = connectToDataSource("PRAGMA table_info(byebye)");    mySQLiteResult = connectToDataSource("DROP TABLE byebye");*/alert("This comes from the database\n" + mySQLiteResult);mySQLiteResult = json_parse(mySQLiteResult);mySQLiteResult = mySQLiteResult[0].col7;alert("Accessing keys directly is possible!\n" + mySQLiteResult);