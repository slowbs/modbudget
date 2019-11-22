<?php

$data = json_decode(file_get_contents('php://input'));

/** Validation */
if(isset($data->bookno) && isset($data->text))
{

    /** ดึงค่า balance จาก total */
    $sql = "SELECT * from total where id = $data->type";
    // $sql = "SELECT * FROM `c1` WHERE 1";
    $query = mysqli_query($database, $sql);
    // $result = mysqli_fetch_assoc($query, MYSQLI_ASSOC);
    $result = mysqli_fetch_array($query, MYSQLI_ASSOC);
    // echo json_encode($result);
    $balance = $result[balance];

    #check null
    if(empty($data->bookno)){
        http_response_code(400);
        exit(json_encode([
            'message' => 'กรอก bookno'
        ]));
    }
    elseif(empty($data->text)){
        http_response_code(400);
        exit(json_encode([
            'message' => 'กรอก text'
        ]));
    }

    // echo json_encode([
    //     'message' => 'valid'
    // ]);
    // $balance = $balance + ($data->income - $data->outcome + $data->refund);
    $balance = '0';
    $query = "INSERT into list (bookno, datepick, text, budgetno, activityno, income, outcome, refund, balance, person, workgroup, note) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param($stmt, 'ssssssssssss',
        $data->bookno,
        $data->datepick,
        $data->text,
        $data->budgetno,
        $data->activityno,
        $data->income,
        $data->outcome,
        $data->refund,
        $balance,
        $data->person,
        $data->workgroup,
        $data->note
    );
    mysqli_stmt_execute($stmt);
    $error_message = mysqli_error($database);
    
    /** เช็ค error */
    if($error_message){
        http_response_code(400);
        exit(json_encode([
            'message' => $error_message
        ]));
    }
    
    echo json_encode([
        'message' => 'เพิ่มสำเร็จ'
    ]);
}
else{
    http_response_code(400);
    exit(json_encode([
        'message' => 'รายการ Request ไม่ถูกต้อง'
    ]));
}



            // echo json_encode([
            //     'message' => 'POST Member',
            //     'php_data' =>  'จาก php',
            //     //'post_data' => $request->message
            //     'post_data' => $data
            //     ]);

