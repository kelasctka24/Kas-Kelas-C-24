async function loadRekap() {
    const csvUrl = 'const csvUrl = 'https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/fdhl1135/Pembayaran-Kas-TKA-1C/main/rekap_kas.csv';
    try {
        const response = await fetch(csvUrl);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        console.log('Data CSV:', data); // Data mentah CSV
        console.log('Parsed Rows:', rows); // Data setelah diparse
        const data = await response.text();
        const rows = data.split('\n').map(row => row.split(',')); // Pisahkan berdasarkan koma

        // Bangun tabel HTML dari data CSV
        let table = '<table border="1" cellspacing="0" cellpadding="5">';
        rows.forEach((row, index) => {
            table += '<tr>';
            row.forEach(cell => {
                table += index === 0 
                    ? `<th>${cell.trim()}</th>` // Header tabel
                    : `<td>${cell.trim()}</td>`; // Isi tabel
            });
            table += '</tr>';
        });
        table += '</table>';

        document.getElementById('rekap-container').innerHTML = table;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('rekap-container').innerHTML = '<p>Gagal memuat file rekap kas.</p>';
    }
}

loadRekap();
