<?php

$routes = [];
$route  = explode('?', str_replace('/backend', '', $_SERVER['REQUEST_URI']))[0];
$method = $_SERVER['REQUEST_METHOD'];
