<?php
//ปิด error
@ini_set('display_errors', '0');

/** Development */
$host = 'localhost';
$user = 'slowbs';
$password = 'sodsongig4';
$dbname = 'modbudget';

/** Production */
if( PRODUCTION )
{
    $host = '61.19.202.217';
    $user = 'hdc';
    $password = 'hdcnst';
    $dbname = 'modbudget';
}


/** Test in 5.104 */
elseif( TESTLAN )
{
    $host = '192.168.5.104';
    $user = 'slowbs';
    $password = 'sodsongig4';
    $dbname = 'modbudget';
}


$database = mysqli_connect($host,$user,$password,$dbname);
mysqli_set_charset($database,"utf8");

if(!$database){
    http_response_code(500);
    echo json_encode([
        'message' => 'DB cannot connect',
        'error' => mysqli_connect_error()
    ]);
    exit;
}