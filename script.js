// Carousel Logic
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;
function showSlide(idx) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
    });
}


// Food Data
const foodData = [
    // Veg Items (20)
    { id: 1, name: "Paneer Butter Masala", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JfZHtD_jlggLqhDlthd7Jg2o4gt7OrWH7w&s", price: 220, category: "veg" },
    { id: 2, name: "Veg Biryani", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9Tw6cZWpDVACgNwAaqls8uxiPMPrUimMTA&s", price: 180, category: "veg" },
    { id: 3, name: "Dal Tadka", img: "https://www.cookwithmanali.com/wp-content/uploads/2014/08/Dal-Tadka-500x500.jpg", price: 140, category: "veg" },
    { id: 4, name: "Butter Naan", img: "https://www.cookwithmanali.com/wp-content/uploads/2014/11/Soft-Homemade-Naan.jpg", price: 40, category: "veg" },
    { id: 5, name: "Aloo Gobi", img: "https://shwetainthekitchen.com/wp-content/uploads/2024/01/aloo-gobi.jpg", price: 130, category: "veg" },
    { id: 6, name: "Palak Paneer", img: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/palak-paneer-3.jpg", price: 210, category: "veg" },
    { id: 7, name: "Chana Masala", img: "https://cdn.loveandlemons.com/wp-content/uploads/opengraph/2023/07/chana-masala-recipe.jpg", price: 160, category: "veg" },
    { id: 8, name: "Mix Veg Curry", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/vegetable-curry-recipe.jpg", price: 150, category: "veg" },
    
    // Non Veg Items (20)
    { id: 9, name: "Chicken Curry", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmKNnitP-2wKXQhJ-UlLW_zBLE1C5L4z4cQ&s", price: 260, category: "nonveg" },
    { id: 10, name: "Mutton Rogan Josh", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG4NzlAOAymhG7oq3N-zXo6Mukylg61OI08w&s", price: 320, category: "nonveg" },
    { id: 11, name: "Egg Curry", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAie9daMbqWQwnsSTvNl-P2MuBRS821g8fqQ&s", price: 170, category: "nonveg" },
    { id: 12, name: "Fish Fry", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq37_FBSEHMo3-8oM3-PFoQ8Jjb7rYKQ5LZQ&s", price: 210, category: "nonveg" },
    { id: 13, name: "Butter Chicken", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/04/butter-chicken-recipe.jpg", price: 280, category: "nonveg" },
    { id: 14, name: "Chicken Biryani", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIycguxFgTpIN3L00tYQhJ2WkypXj5w_QkQ&s", price: 240, category: "nonveg" },
    { id: 15, name: "Mutton Biryani", img: "https://www.licious.in/blog/wp-content/uploads/2022/06/mutton-hyderabadi-biryani-01-750x750.jpg", price: 320, category: "nonveg" },
    { id: 16, name: "Prawn Masala", img: "https://www.whiskaffair.com/wp-content/uploads/2023/02/Shrimp-Masala-2-3.jpg", price: 350, category: "nonveg" },
  
];

// Render Food Cards
const foodList = document.getElementById('food-list');
function renderFood(category, search = "") {
    let filtered = foodData.filter(f =>
        (category === "all" || f.category === category) &&
        (f.name.toLowerCase().includes(search.toLowerCase()))
    );
    foodList.innerHTML = filtered.length ? filtered.map(f => `
        <div class="food-card" data-id="${f.id}">
          <img src="${f.img}" alt="${f.name}">
          <div class="food-title">${f.name}</div>
          <div class="food-price">₹${f.price}</div>
          <button class="add-btn">Add to Cart</button>
        </div>
      `).join('') : `<div style="grid-column:1/-1;text-align:center;color:#888;">No items found.</div>`;
}
// Initial render
renderFood("veg");

// Category Filter
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.onclick = function () {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderFood(btn.dataset.category); // Removed search parameter
    };
});

// Cart Logic
let cartCount = 0;
function updateCartBadge() {
    document.getElementById('cart-badge').textContent = cartCount;
}
foodList.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-btn')) {
        cartCount++;
        updateCartBadge();
        e.target.textContent = "Added!";
        e.target.disabled = true;
        setTimeout(() => {
            e.target.textContent = "Add to Cart";
            e.target.disabled = false;
        }, 900);
    }
});

// Smooth scroll to About Us section
document.querySelectorAll('.navbar ul li a').forEach(link => {
    if (link.textContent.trim().toLowerCase() === 'about us') {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' });
        });
    }
});