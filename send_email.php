<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $resume = $_FILES['resume'];

    $to = 'jobs@resumedestination.in';  // Change this to your email address
    $subject = 'Contact Form Submission';
    $headers = "From: $email";

    $mailContent = "Name: $name\n";
    $mailContent .= "Email: $email\n";
    $mailContent .= "Message: \n$message\n";

    // Sending the email
    if (mail($to, $subject, $mailContent, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }

    // Handle file upload (resume)
    if ($resume['error'] == UPLOAD_ERR_OK) {
        $uploadDir = 'uploads/';
        $uploadFile = $uploadDir . basename($resume['name']);

        if (move_uploaded_file($resume['tmp_name'], $uploadFile)) {
            echo "File is valid and was successfully uploaded.\n";
        } else {
            echo "Possible file upload attack!\n";
        }
    }
}
?>
