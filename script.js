document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { title: 'Producto 1', description: 'Descripción del producto 1', image: 'image1.jpg' },
        { title: 'Producto 2', description: 'Descripción del producto 2', image: 'image2.jpg' },
        { title: 'Producto 3', description: 'Descripción del producto 3', image: 'image3.jpg' },
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
