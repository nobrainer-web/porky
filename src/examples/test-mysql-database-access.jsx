﻿#include ../bin/porky.jsx;// GLOBAL OBJECTSsettings.dataSource.type = "MySQL";settings.dataSource.server = "127.0.0.1";settings.dataSource.name ="myDatabase";settings.dataSource.username = "myUsername";settings.dataSource.password = "myPassword";var mySQLResult = "";try{    mySQLResult = connectToDataSource("SELECT * FROM porky");    alert("This comes from the database\n" + mySQLResult);    mySQLResult = connectToDataSource("INSERT INTO porky (col1, col2, col3) VALUES ('hallo', 'oli', 'äöüß')");    mySQLResult = connectToDataSource("SELECT * FROM porky");    mySQLResult = json_parse(mySQLResult);    alert("Accessing keys directly is possible!\n" + mySQLResult[mySQLResult.length-1].col3);}catch(e){    alert("Error\nCheck console window for details!");}