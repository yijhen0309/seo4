function loadCategory(category, title) {
    document.getElementById('category-title').innerText = title;
    const grid = document.getElementById('category-grid');
    const filtered = products.filter(p => p.category === category);
    
    const categoryMap = {
        'perfume': '高級香水',
        'home-fragrance': '居家香氛',
        'candles': '香氛蠟燭',
        'diffusers': '藝術擴香'
    };

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <a href="product.html?id=${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <div class="product-category">${categoryMap[product.category] || product.category}</div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${product.price}</div>
                </div>
            </a>
        `;
        grid.appendChild(card);
    });
}
