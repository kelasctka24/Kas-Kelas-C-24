async function loadRekapFromGoogleDrive() {
    const csvUrl = 'https://drive.google.com/file/d/12tMNxpSf_wVXPb7TZeuq-XdOHfpeSUxp/view?usp=drivesdk 
        const response = await fetch(csvUrl);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.text();
        const rows = data.split('\n').map(row => row.split(',')); // Pisahkan berdasarkan koma

        // Buat tabel dari data CSV
        let table = '<table border="1" cellspacing="0" cellpadding="5">';
        rows.forEach((row, index) => {
            table += '<tr>';
            row.forEach(cell => {
                table += index === 0 
                    ? `<th>${cell.trim()}</th>` // Header
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

loadRekapFromGoogleDrive();
