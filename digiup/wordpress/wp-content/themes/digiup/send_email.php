<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $appointment_date = filter_var($_POST['appointment_date'], FILTER_SANITIZE_STRING);

    $admin_email = "admin@example.com"; 
    $subject = "Nova Reserva de Consulta - Projeto Digiup";
    $message = "Detalhes da Reserva:\n\n"
             . "Email: $email\n"
             . "Telefone: $phone\n"
             . "Data da Consulta: $appointment_date\n";

    $headers = "From: no-reply@example.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    $admin_mail_sent = mail($admin_email, $subject, $message, $headers);
    $user_mail_sent = mail($email, $subject, $message, $headers);

    if ($admin_mail_sent && $user_mail_sent) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método de solicitação inválido.']);
}
?>
