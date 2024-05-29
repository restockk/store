document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { title: 'Termo Stanley Quencher H2.0', description: '$35.00 USD', image: './img/imgProductos/termoStanly.jpg', link:'https://amzn.to/4bVahG5', category: ['h', 'd']},
        { title: 'Samsung Tab S9 FE 128gb', description: '$369.00 USD', image: './img/imgProductos/samsungTab.jpg', link:'https://amzn.to/451HJbB', category: ['t']},
        { title: 'Auriculares Sony WH-CH520', description: '$38.00 USD', image: './img/imgProductos/auricularesSony.webp', link:'https://amzn.to/3VjdTLB', category: ['t']},
    ];

    const productContainer = document.getElementById('contenedor-de-productos');
    const searchInput = document.getElementById('buscar');
    const categorySelect = document.getElementById('categoria');

    function renderProducts(filter = '', category = 'all') {
        productContainer.innerHTML = '';

        const filteredProducts = products.filter(product => {
            const matchesTitle = product.title.toLowerCase().includes(filter.toLowerCase());
            const matchesCategory = category === 'all' || product.category.includes(category);
            return matchesTitle && matchesCategory;
        });

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2><a href="${product.link}">${product.title}</a></h2>
                <p>${product.description}</p>
                <a class="botonComprar" href="${product.link}">Comprar</a>
            `;
            productContainer.appendChild(card);
        });
    }

    searchInput.addEventListener('input', () => {
        renderProducts(searchInput.value, categorySelect.value);
    });

    categorySelect.addEventListener('change', () => {
        renderProducts(searchInput.value, categorySelect.value);
    });

    renderProducts();
});
