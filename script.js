// Обработка клика по кнопке "Скачать"
document.querySelectorAll('.download-btn').forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        // Открытие ссылки на скачивание в новой вкладке
        window.open('https://dl.dropboxusercontent.com/scl/fi/0tzte2g8aomaov6aj0ba0/Multi-Login.exe?rlkey=uihhsgusqvtz40mjlvu4uejr0&st=ghf3g2ii&dl=1', '_blank');
    });
});

// Опционально: Закрытие бокового меню при клике вне его
document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    if (sidebar && !sidebar.contains(event.target) && sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
    }
});
