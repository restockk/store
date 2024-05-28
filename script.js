document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { title: 'Termo Stanley Quencher H2.0', description: '$35.00 dolares', image: './img/imgProductos/termoStanly.jpg', link:'https://amzn.to/4bVahG5' },
        { title: 'Samsung Tab S9 FE 128gb', description: '$369.00 dolares', image: './img/imgProductos/samsungTab.jpg', link:'https://amzn.to/451HJbB' },
        { title: 'Sony WH-CH520', description: '$38.00 dolares', image: './img/imgProductos/auricularesSony.webp', link:'https://amzn.to/3VjdTLB' },
        // Añade más productos según sea necesario
    ];

    const productContainer = document.getElementById('contenedor-de-productos');
    const searchInput = document.getElementById('buscar');

    function renderProducts(filter = '') {
        productContainer.innerHTML = ''; // Limpia el contenedor

        const filteredProducts = products.filter(product => 
            product.title.toLowerCase().includes(filter.toLowerCase())
        );

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <a class="botonComprar" href="${product.link}">Comprar</a>
            `;
            productContainer.appendChild(card);
        });
    }

    searchInput.addEventListener('input', () => {
        renderProducts(searchInput.value);
    });

    // Renderiza todos los productos inicialmente
    renderProducts();
});
