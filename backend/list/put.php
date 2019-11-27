<?php

$data = json_decode(file_get_contents('php://input'));

if (isset($_GET['id'])) {
    $id = $_GET['id'];
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
    // $trudate = $data->datepick;
    // $truedate->add(new \DateInterval('PT1H'));
    // date_default_timezone_set('GMT');
    /** ต้อง interval วันเพิ่ม ngprime timezone ไม่ได้ */
    $query = "UPDATE list SET bookno = ?, datepick = ?, text = ?, income = ?,
        outcome = ?, refund = ?, note = ?, datepick = DATE_ADD(datepick, INTERVAL 1 DAY)
        WHERE id = ?";
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param(
        $stmt,
        'sssssssi',
        $data->bookno,
        // $trudate,
        $data->datepick,
        $data->text,
        $data->income,
        $data->outcome,
        $data->refund,
        $data->note,
        $_GET['id']
    );
    mysqli_stmt_execute($stmt);
    // mysqli_query($database, "select total into @csum from total where id = $data->type;");
    // mysqli_query($database, "UPDATE list set balance = (@csum := @csum + income - outcome + refund) where type = $data->type");
    // mysqli_query($database, "UPDATE total set balance = @csum where id = $data->type");
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
