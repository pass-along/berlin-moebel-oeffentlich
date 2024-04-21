<script>
    document.addEventListener('DOMContentLoaded', function() {
        fetch('https://weitergeben.org/wp-json/wgorg/v1/infosystem/get-offers?country=DE&zip=10119&radius=25&categories=Alle')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.container');
            data.forEach(item => {
                const möbelDiv = document.createElement('div');
                möbelDiv.className = 'möbel';
                möbelDiv.innerHTML = `
                    <h2>${item.name}</h2>
                    <p><strong>Kategorie:</strong> ${item.category}</p>
                    <p><strong>Zustand:</strong> ${item.condition}</p>
                    <p><strong>Verfügbarkeit:</strong> ${item.availability}</p>
                    <p><strong>Preis:</strong> ${item.price}</p>
                `;
                container.appendChild(möbelDiv);
            });
        });
    });
</script>