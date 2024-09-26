document.querySelectorAll('.region').forEach(region => {
    region.addEventListener('click', function() {
        const infoBox = document.getElementById('infoBox');
        const infoContent = document.getElementById('infoContent');
        
        // Tıklanan bölgeye ait bilgiyi al
        infoContent.textContent = this.getAttribute('data-info');

        // Kutucuğu göster
        infoBox.style.display = 'block';
    });
});
