document.addEventListener('DOMContentLoaded', function() {
    const repairTableBody = document.getElementById('repair-table-body');
    const repairs = JSON.parse(localStorage.getItem('repairs')) || [];

    repairs.forEach(repair => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${repair.date}</td>
            <td>${repair.license}</td>
            <td>${repair.category}</td>
            <td>${repair.device}</td>
            <td>${repair.reason}</td>
            <td>${repair.driver}</td>
            <td><button class="status-button">กำลังซ่อม</button></td>
        `;
        repairTableBody.appendChild(row);
    });

    // Re-apply the event listeners for the status buttons
    const statusButtons = document.querySelectorAll('.status-button');
    statusButtons.forEach(button => {
        button.addEventListener('click', function() {
            button.textContent = 'พร้อมใช้งาน';
            button.style.backgroundColor = '#A8E5B1';
            button.disabled = true;

        });
    });
});

function addRepair() {
    window.location.href = 'from_repair.html';
}