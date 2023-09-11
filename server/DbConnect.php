<?php
    /**
    * Database Connection
    */
         $server = 'localhost';
         $dbname = 'collage';
         $user = 'root';
         $pass = '';
        
         $conn = new mysqli($server, $user, $pass, $dbname);

         if ($conn->connect_error) {
            # code...
            die("Connection Failed". $conn->connect_error);
         }
         echo "Connection Successfull"
?>