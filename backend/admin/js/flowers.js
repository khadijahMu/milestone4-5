window.onload = async () => {
    const grid = document.getElementById('flowerGrid');
    const res = await fetch('http://localhost:5000/api/flowers');
    const flowers = await res.json();
  
    flowers.forEach(flower => {
      const div = document.createElement('div');
      div.className = 'flower-card';
      div.innerHTML = `
        <img src="${flower.imageUrl}" alt="${flower.name}" />
        <h3>${flower.name}</h3>
        <p>${flower.category}</p>
        <p>$${flower.price.toFixed(2)}</p>
        <p>${flower.description}</p>
      `;
      grid.appendChild(div);
    });
  };
  