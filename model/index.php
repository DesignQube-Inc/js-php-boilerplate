<?php

include('header.php'); //includes the database connectivity files

//========================================================================================================//

$result 		 = json_decode($_POST['myData']); //decodes the data from the request from the client
$con_obj     	 = new dbcon();                   //new instance created for db connectivity
$connect_ref 	 = $con_obj -> connect();           //contains the object to store connect_red
$type            = $result -> type;                 //request type to perform particular type



//========================================================================================================//

$response 		  = array();                       //response array stores response data

//========================================================================================================//

$templateBasicDataObj = new TemplateBasicData();

//========================================================================================================//

date_default_timezone_set('Asia/Calcutta');		   //default timezone set to Asia/Calcutta

//========================================================================================================//


if($type == "githubReference"){

    $template_name = $result -> templateName;
    $response      = $templateBasicDataObj -> get_github_url($template_name,$connect_ref);

}

echo (json_encode($response)); //encodes the php object to json string



class TemplateBasicData{

    function get_github_url($template_name,$connect_ref){

        $sql = "SELECT `github_url` FROM `template_details` WHERE `template_name`=?";

        if($stmt = $connect_ref -> prepare($sql)){
            $stmt -> bind_param('s',$template_name);
            $stmt -> execute();
            $stmt -> bind_result($github_url);
            $stmt -> fetch();
            $stmt -> close();
        }

        return $github_url;

    }

}