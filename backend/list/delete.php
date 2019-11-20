<?php
if (isset($_GET['id'])) {
    /** ทดสอบแสดงค่าที่ GET มาได้ */
    //echo json_encode($_GET);
    if (is_array($_GET['id'])) {
        $ids    = $_GET['id'];
        //$in     = array_fill(0, count($ids), '?');
        $in     = implode(',', array_fill(0, count($ids), '?'));
        $query  = "DELETE FROM list where id IN ($in)";
        $stmt   = mysqli_prepare($database, $query);
        mysqli_stmt_bind_param($stmt, str_repeat('i', count($ids)), ...$ids);
        mysqli_stmt_execute($stmt);

        $error_message = mysqli_error($database);

        /** เช็ค error */
        if ($error_message) {
            http_response_code(400);
            exit(json_encode(['message' => $error_message]));
        }

        echo json_encode(['message' => 'ลบสำเร็จ']);
    }
    /** กรณีลบครั้งละรายการ */
    else {
        $query = 'DELETE FROM list WHERE id =  ?';
        $stmt = mysqli_prepare($database, $query);
        mysqli_stmt_bind_param($stmt, 'i', $_GET['id']);
        mysqli_stmt_execute($stmt);

        // echo json_encode([
        //     'message' => 'DELETE METHOD', 'id' => $_GET['id']
        // ]);
        mysqli_query($database, "select total into @csum from total where id = $data->type;");
        mysqli_query($database, "UPDATE list set balance = (@csum := @csum + income - outcome + refund) where type = $data->type");
        mysqli_query($database, "UPDATE total set balance = @csum where id = $data->type");
        $error_message = mysqli_error($database);

        /** เช็ค error */
        if ($error_message) {
            http_response_code(400);
            exit(json_encode(['message' => $error_message]));
        }

        echo json_encode(['message' => 'ลบสำเร็จ']);
    }

    // $query = 'DELETE FROM members WHERE mem_id =  ?';
    // $stmt = mysqli_prepare($database, $query);
    // mysqli_stmt_bind_param($stmt, 'i', $_GET['id']);
    // mysqli_stmt_execute($stmt);
    // // echo json_encode([
    // //     'message' => 'DELETE METHOD', 'id' => $_GET['id']
    // // ]);
    // $error_message = mysqli_error($database);

    // /** เช็ค error */
    // if($error_message) 
    // {
    //     http_response_code(400);
    //     exit(json_encode(['message' => $error_message]));
    // }

    // echo json_encode(['message' => 'ลบสำเร็จ']);
} else {
    http_response_code(400);
    echo json_encode([
        'message' => 'The request is invalid'
    ]);
}
