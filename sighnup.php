<?php
    // Get form data
    $student_id = $_POST['student_id'];
    $gmail = $_POST['gmail'];
    $phone = $_POST['phone'];

    // Validate Gmail
    if (!filter_var($gmail, FILTER_VALIDATE_EMAIL) || !preg_match('/@gmail\.com$/', $gmail)) {
        echo "<script>alert('Invalid Gmail ID.'); window.history.back();</script>";
        exit();
    }

    // Validate Phone Number
    if (!preg_match('/^[0-9]{10}$/', $phone)) {
        echo "<script>alert('Phone Number must be exactly 10 digits.'); window.history.back();</script>";
        exit();
    }

    // Proceed with signup...
?>
