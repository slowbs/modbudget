<?php

$data = json_decode(file_get_contents('php://input'));

if (isset($_GET['id'])) {
    /** Validation */
    if (empty($data->bookno)) {
        http_response_code(400);
        exit(json_encode([
            'message' => 'กรอก bookno'
        ]));
    } elseif (empty($data->text)) {
        http_response_code(400);
        exit(json_encode([
            'message' => 'กรอก text'
        ]));
    }

    // echo json_encode([
    //     'message' => 'valid'
    // ]);
    $query = "UPDATE list SET bookno = ?, datepick = ?, type = ?, text = ?, income = ?,
        outcome = ?, refund = ?, note = ? WHERE id = ?";
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param(
        $stmt,
        'ssssssssi',
        $data->bookno,
        $data->datepick,
        $data->type,
        $data->text,
        $data->income,
        $data->outcome,
        $data->refund,
        $data->note,
        $_GET['id']
    );
    mysqli_stmt_execute($stmt);
    $error_message = mysqli_error($database);

    /** เช็ค error */
    if ($error_message) {
        http_response_code(400);
        exit(json_encode([
            'message' => $error_message
        ]));
    }

    exit(json_encode([
        'message' => 'แก้ไขสำเร็จ'
    ]));
}
http_response_code(400);
echo json_encode([
    'message' => 'รายการ Request ไม่ถูกต้อง'
]);
