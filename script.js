document.querySelectorAll('.region').forEach(region => {
    region.addEventListener('click', function(event) {
        const infoBox = document.getElementById('infoBox');
        const infoContent = document.getElementById('infoContent');
        
        // Tıklanan mahalleye ait bilgiyi al
        infoContent.textContent = this.getAttribute('data-info');

        // Kutucuğu tıklanan yerde göster
        const x = event.pageX;
        const y = event.pageY;

        infoBox.style.left = x + 'px';
        infoBox.style.top = y + 'px';
        infoBox.style.display = 'block';
    });
});

// Bilgi balonundaki butonlara tıklama olayları
document.querySelectorAll('.info-option').forEach(button => {
    button.addEventListener('click', function() {
        alert(this.textContent + ' butonuna tıkladınız.');
    });
});
