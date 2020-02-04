<?php
//Connection to db will be established here. Caution :Local Host and Live Db details will differ ,change accordingly

class dbcon
{
    public function connect()
    {
        $hostname = "localhost";
        $username = "root";
        $password = "root";
        $database = "designqube";
        $mysqli = new mysqli($hostname, $username, $password, $database);
        //  $port = "3306";
        //  $socket = "/Applications/MAMP/tmp/mysql/mysql.sock";
        //  $mysqli = new mysqli($hostname, $username, $password, $database,$port,$socket);
        //Connection Failed
        if (mysqli_connect_errno()) {
            echo "Connection Failed: " . mysqli_connect_errno();
            exit();
        }

        return $mysqli;
    }
}
