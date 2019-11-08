<?php

$routes['/api/list']['GET'] = 'list/get.php';
$routes['/api/list']['POST'] = 'list/post.php';
$routes['/api/list']['PUT'] = 'list/put.php';
$routes['/api/list']['DELETE'] = 'list/delete.php';

/** เอาไว้เทส session หน้า login ของ php */
//$routes['/api/login']['GET'] = 'account/login.php';


$routes['/api/login']['POST'] = 'account/login.php';
$routes['/api/logout']['POST'] = 'account/logout.php';
$routes['/api/profile']['GET'] = 'account/profile.php';