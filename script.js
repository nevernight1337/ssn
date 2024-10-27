// Обработка клика по кнопке "Скачать"
document.querySelectorAll('.download-btn').forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        // Здесь вы можете добавить функциональность для скачивания файла
        // Например, перенаправление на страницу скачивания или запуск скачивания
        alert('Скачивание началось!');
    });
});

// Опционально: Закрытие бокового меню при клике вне его
document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});
