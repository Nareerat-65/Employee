const apiUrl = ' https://data.opendevelopmentmekong.net/dataset/ab20b509-2b7f-442e-8448-05d3a17651ac/resource/cfe757fb-69b6-4f82-92cd-e5dfca865eb5/download/health_facilities_th.csv'; // กำหนด URL ของ API ที่ใช้ดึงข้อมูลโรงพยาบาล

document.addEventListener('DOMContentLoaded', () => {
    loadHospitals();

    const cancelButton = document.querySelector('.cancel-button');
    cancelButton.addEventListener('click', () => {
        window.location.href = 'page_repair.html'; // เปลี่ยนหน้าไปยัง page_repair.html
    });
});

function showMap(selectElement) {
    if (selectElement.value === 'google-map') {
        document.getElementById('map').style.display = 'block';
        initMap();
    } else {
        document.getElementById('map').style.display = 'none';
    }
}

function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

async function loadHospitals() {
    try {
        const response = await fetch(apiUrl); // ดึงข้อมูล JSON
        if (!response.ok) throw new Error('Network response was not ok');
        const hospitals = await response.json(); // แปลงข้อมูลเป็น JSON

        // dropdown element
        const dropdown = document.getElementById('hospital');

        // Loop เพื่อเพิ่มตัวเลือกใน dropdown
        hospitals.forEach(hospital => {
            const option = document.createElement('option');
            option.value = hospital.id || hospital.name; // ใช้ ID หรือชื่อ
            option.textContent = hospital.name; // แสดงชื่อโรงพยาบาล
            dropdown.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching hospitals:', error);
    }
}