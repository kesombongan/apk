<?php
// Mendapatkan data JSON dari webhook
$data = json_decode(file_get_contents('php://input'), true);

// Proses data
error_log(print_r($data, true));

// Kirim respons ke layanan webhook
http_response_code(200);
echo 'Webhook received';
?>
