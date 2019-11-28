<?php

$data = json_decode(file_get_contents('php://input'));

/** Validation */
if(isset($data->budgetno) && isset($data->name) && isset($data->balance))
{
    #check null
    if(empty($data->budgetno)){
        http_response_code(400);
        exit(json_encode([
            'message' => 'กรอก หมายเลขงบ'
        ]));
    }
    elseif(empty($data->name)){
        http_response_code(400);
        exit(json_encode([
            'message' => 'กรอก ชื่อ'
        ]));
    }
    // elseif(empty($data->balance)){
    //     http_response_code(400);
    //     exit(json_encode([
    //         'message' => 'กรอก งบประมาณ'
    //     ]));
    // }

    // echo json_encode([
    //     'message' => 'valid'
    // ]);
    // $balance = ($data->income - $data->outcome);
    $query = "INSERT into budget (budgetno, name, total, balance) VALUES (?, ?, ?, ?)";
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param($stmt, 'ssss',
        $data->budgetno,
        $data->name,
        $data->balance,
        $data->balance
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