<?php

 header("Content-type: text/html;charset=\"utf-8\"");
    $error = ""; $mensajeExito = "";

    if ($_POST) {
        if ($_POST['email'] && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) === false) {
            $error .= "E-mail no válido.<br>";   
        }
        if ($error != "") {
            $error = '<div class="alert alert-danger" role="alert"><p><b>Se generó un error:</b></p>' . $error . '</div>';
        } else {
            $nombre = $_POST['name'];
            $mail = $_POST['email'];
            $asunto = $_POST['subject'];
            $telefono = $_POST['phone'];
            $mensajeC = $_POST['message'];
            
            $header = 'From: ' . $mail . " \r\n";
            $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
            $header .= "Mime-Version: 1.0 \r\n";
            $header .= "Content-Type: text/plain";

            $mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
            $mensaje .= "Su e-mail es: " . $mail . " \r\n";
            $mensaje .= "Asunto: " . $asunto . " \r\n";
            $mensaje .= "Mensaje: " . $mensajeC . " \r\n";
            $mensaje .= "Enviado el " . date('d/m/Y', time());

            $para = 'ci@corella.com.mx';
            $asunto = 'Mensaje de su sitio web Agencia Aduanal Corella Internacional';

            if (mail($para, $asunto, utf8_decode($mensaje), $header)) {
                $mensajeExito = '<div class="alert alert-success" role="alert">Mensaje enviado con éxito :)</div>'; 
                header("Location: index.html", TRUE, 301);   
            } else {
                $error = '<div class="alert alert-danger" role="alert"><p><strong>Mensaje sin enviar :(</div>';  
            } 
        }  
    }
?>
