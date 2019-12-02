<?php
/** List */
$routes['/api/list']['GET'] = 'list/get.php';
$routes['/api/list']['POST'] = 'list/post.php';
$routes['/api/list']['PUT'] = 'list/put.php';
$routes['/api/list']['DELETE'] = 'list/delete.php';

/** Topic */
$routes['/api/topic']['GET'] = 'topic/get.php';
$routes['/api/topic']['POST'] = 'topic/post.php';
$routes['/api/topic']['PUT'] = 'topic/put.php';
$routes['/api/topic']['DELETE'] = 'topic/delete.php';

/** Activity */
$routes['/api/activity']['GET'] = 'activity/get.php';
$routes['/api/activity']['POST'] = 'activity/post.php';
$routes['/api/activity']['PUT'] = 'activity/put.php';
$routes['/api/activity']['DELETE'] = 'activity/delete.php';

/** Project */
$routes['/api/project']['GET'] = 'project/get.php';
$routes['/api/project']['POST'] = 'project/post.php';
$routes['/api/project']['PUT'] = 'project/put.php';
$routes['/api/project']['DELETE'] = 'project/delete.php';

/** Report */
$routes['/api/report']['GET'] = 'report/get.php';

/** Workgroup */
$routes['/api/workgroup']['GET'] = 'workgroup/get.php';

/** Search */
$routes['/api/search']['GET'] = 'search/get.php';
$routes['/api/search']['POST'] = 'search/post.php';

/** เอาไว้เทส session หน้า login ของ php */
//$routes['/api/login']['GET'] = 'account/login.php';


$routes['/api/login']['POST'] = 'account/login.php';
$routes['/api/logout']['POST'] = 'account/logout.php';
$routes['/api/profile']['GET'] = 'account/profile.php';