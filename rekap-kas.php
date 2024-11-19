<?php
// Path ke file CSV
$filePath = 'rekap-kas.csv';

if (file_exists($filePath)) {
    // Buka file CSV
    $file = fopen($filePath, 'r');

    echo "<!DOCTYPE html>";
    echo "<html lang='en'>";
    echo "<head>";
    echo "<meta charset='UTF-8'>";
    echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
    echo "<title>Rekap Kas Kelas</title>";
    echo <link rel="stylesheet" href="styles.css">
    echo "</head>";
    echo "<body>";
    echo "<h1>Rekap Kas Kelas</h1>";
    echo "<table>";
    
    // Loop untuk membaca file CSV baris demi baris
    $isHeader = true;
    while (($row = fgetcsv($file, 1000, ',')) !== FALSE) {
        echo "<tr>";
        foreach ($row as $cell) {
            if ($isHeader) {
                // Tambahkan header tabel
                echo "<th>" . htmlspecialchars($cell) . "</th>";
            } else {
                // Tambahkan data tabel
                echo "<td>" . htmlspecialchars($cell) . "</td>";
            }
        }
        echo "</tr>";
        $isHeader = false;
    }
    echo "</table>";
    echo "</body>";
    echo "</html>";

    fclose($file);
} else {
    echo "File CSV tidak ditemukan!";
}
?>