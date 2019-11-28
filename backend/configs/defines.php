<?php

/** เช็ค Server */
// print_r($_SERVER);
define('PRODUCTION', $_SERVER['SERVER_NAME'] == '61.19.202.217');
define('TESTLAN', $_SERVER['SERVER_NAME'] == '192.168.5.104');

$routes = [];
$route  = explode('?', str_replace('/backend', '', $_SERVER['REQUEST_URI']))[0];
$method = $_SERVER['REQUEST_METHOD'];
