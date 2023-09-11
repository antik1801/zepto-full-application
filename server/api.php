<?php

    include "DbConnect.php";
    header('connect-type: application/json');
    $server = 'localhost';
    $dbname = 'collage';
    $user = 'root';
    $pass = '';
   
    $conn = new mysqli($server, $user, $pass, $dbname);

    
    $request=$_SERVER['REQUEST_METHOD'];
    switch($request){
        case 'GET':
            getmethod();
            break;
        case 'PUT':
            echo '{"name": "PUT... Gazi Ehsanul Haque"}';
            break;
        case 'PATCH':
            echo '{"name": "PATCH ...Gazi Ehsanul Haque"}';
            break;
        case 'POST':
            echo '{"name" : "POST ... Gazi Ehsanul Haque"}';
            break;
        case 'DELETE':
            echo '{"name": "Delete ... Gazi Ehsanul Haque"}';
            break;
        default:
            echo '{"name": "DATA NOT FOUND"}';
            break;
    }

    function getmethod(){
        $sql = 'SELECT * FROM allfonts';
        $result = mysqli_query($conn,$sql);
        if (mysqli_num_rows($result) > 0) {
            # code...
            $rows = array();
            while($r = mysqli_fetch_assoc($result)){
                $rows['result'] = $r;

            }
            echo json_encode($rows);

        }
        else {
            # code...
            echo '{result: "No Data Found"}';
        }
    }

?>