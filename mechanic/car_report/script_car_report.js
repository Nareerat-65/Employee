const results = {};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('carReportForm');
    form.addEventListener('submit', submitForm);
});
//ส่งไปหน้า success
function submitForm(event) {
    event.preventDefault(); 
    location.href = 'car_report_success.html'; 
}

//ปิดหรือปิดการใช้งานของ dropdown และ text field
function toggleDropdown(name) {
    const radioNo = document.querySelector(`input[name="${name}"][value="no"]`);
    const dropdown = document.getElementById(`${name}-dropdown`);
    const otherField = document.getElementById(`${name}-other`);

    dropdown.disabled = !radioNo.checked;

    if (!radioNo.checked) {
        otherField.disabled = true; 
        otherField.value = "";     
    }

    const selectedValue = document.querySelector(`input[name="${name}"]:checked`).value;
    results[name] = { status: selectedValue, dropdown: dropdown.value, other: otherField.value };
    console.log(results);
}
//เปิดหรือปิดการใช้งาน text field หาก dropdown ถูกตั้งค่าเป็น "other"
function updateDropdown(name) {
    const dropdown = document.getElementById(`${name}-dropdown`);
    const otherField = document.getElementById(`${name}-other`);

    
    if (dropdown.value === "other") {
        otherField.disabled = false;
    } else {
        otherField.disabled = true;
        otherField.value = ""; 
    }

    results[name].dropdown = dropdown.value;
    results[name].other = otherField.value;
    console.log(results);
}
//รีเซ็ตฟอร์ม
function resetForm() {
    document.getElementById('carReportForm').reset();
    
}

