<?php
session_start();

header('Content-type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

require 'configs/defines.php';
require 'configs/routes.php';
require 'configs/database.php';

if($method == 'OPTIONS') exit;
if(isset($routes[$route][$method])) {
    require $routes[$route][$method];
}
else
{
    http_response_code(404);
    echo json_encode(['message' => 'ไม่เจอหน้า']);
}


/* echo "Route = " . $route . "<br>";
echo "METHOD = " . $method; */

// switch($route) {
//     case '/api/member':
//         //http_response_code(200);
//         if($method == 'GET'){
//             echo json_encode(['message' => 'GET Member']);
//             break;
//         }
//         elseif($method == 'POST'){
//             $request = json_decode(file_get_contents('php://input'));
//             echo json_encode([
//                 'message' => 'POST Member',
//                 'php_data' =>  'จาก php',
//                 'post_data' => $request->message,
//                 'post_data2' => $request->message2
//                 ]);
//             break;
//         }
//         elseif($method == 'PUT'){
//             $request = json_decode(file_get_contents('php://input'));
//             echo json_encode([
//                 'message' => 'UPDATE Member',
//                 'php_data' =>  'จาก php',
//                 'put_data' => $request->message,
//                 'put_data2' => $request->message2,
//                 'id' => $_GET['id']
//                 ]);
//             break;
//         }
//         elseif($method == 'DELETE'){
//             echo json_encode(['message' => 'DELETE Member']);
//             break;
//         }
//         elseif($method == 'OPTIONS') exit;

//     default : 
//     http_response_code(404);
//         echo json_encode(['message' => 'ไม่เจอหน้า']);
//         }

?>