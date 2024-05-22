export default function menuPage() {
    const content = document.querySelector('#content');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container', 'outer-border');

    const heading = document.createElement('div');
    heading.classList.add('heading');
    heading.textContent = 'The Gilded Fork - Menu';

    const menuSectionLunch = document.createElement('div');
    menuSectionLunch.classList.add('menu-section', 'outer-border');

    const menuSectionDinner = document.createElement('div');
    menuSectionDinner.classList.add('menu-section', 'outer-border');


    menuSectionLunch.innerHTML = `
    <h2>Lunch</h2>
        
        <div class="menu-item">
            <h4>Heirloom Tomato Salad</h4>
            <p>Vibrant heirloom tomatoes, creamy burrata, fresh basil, and balsamic reduction.</p>
        </div>
        
        <div class="menu-item">
            <h4>Quinoa & Kale Bowl</h4>
            <p>Organic quinoa, baby kale, roasted chickpeas, avocado, and lemon-tahini dressing.</p>
        </div>
        
        <div class="menu-item">
            <h4>Grilled Chicken Panini</h4>
            <p>Free-range chicken, pesto, sun-dried tomatoes, and mozzarella on artisanal bread.</p>
        </div>
        
        <div class="menu-item">
            <h4>Smoked Salmon Tartine</h4>
            <p>House-cured salmon, dill cream cheese, capers, and red onion on sourdough.</p>
        </div>
        
        <div class="menu-item">
            <h4>Roasted Butternut Squash Soup</h4>
            <p>Silky butternut squash, a hint of sage, and a swirl of crème fraîche.</p>
        </div>
    `;

    menuSectionDinner.innerHTML = `
    <h2>Dinner</h2>
        
        <div class="menu-item">
            <h4>Grass-Fed Beef Steak</h4>
            <p>Perfectly cooked steak with roasted root vegetables and a rich red wine reduction.</p>
        </div>
        
        <div class="menu-item">
            <h4>Seared Scallops</h4>
            <p>Succulent scallops with a cauliflower purée, asparagus, and truffle oil drizzle.</p>
        </div>
        
        <div class="menu-item">
            <h4>Wild Mushroom Risotto</h4>
            <p>Creamy Arborio rice with wild mushrooms, Parmesan, and a touch of white wine.</p>
        </div>
        
        <div class="menu-item">
            <h4>Lamb Tagine</h4>
            <p>Slow-cooked lamb with apricots, almonds, and aromatic Moroccan spices.</p>
        </div>
        
        <div class="menu-item">
            <h4>Artisanal Cheese Board</h4>
            <p>A selection of local cheeses, house-made preserves, and crusty sourdough bread.</p>
        </div>
    `;

    headingContainer.appendChild(heading);
    content.appendChild(headingContainer);
    content.appendChild(menuSectionLunch);
    content.appendChild(menuSectionDinner);

    return content;
}