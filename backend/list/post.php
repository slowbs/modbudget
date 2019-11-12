<?php

$data = json_decode(file_get_contents('php://input'));

/** Validation */
if(isset($data->bookno) && isset($data->text))
{
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
    $balance = ($data->income - $data->outcome);
    $query = "INSERT into list (bookno, datepick, type, text, income, outcome, refund, balance, note) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param($stmt, 'sssssssss',
        $data->bookno,
        $data->datepick,
        $data->type,
        $data->text,
        $data->income,
        $data->outcome,
        $data->refund,
        $balance,
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