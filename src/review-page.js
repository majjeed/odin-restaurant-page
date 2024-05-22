export default function reviewPage() {
    const content = document.querySelector('#content');

    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review-container');

    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container', 'outer-border');

    const heading = document.createElement('div');
    heading.classList.add('heading');
    heading.textContent = 'The Gilded Fork - Reviews';

    const review1 = document.createElement('div');
    review1.classList.add('review', 'outer-border');
    review1.innerHTML = `
        <p><strong>Review by Amelia Johnson, Food Enthusiast:</strong></p>
        <p>"Dining at The Gilded Fork was an unforgettable experience. The ambiance, the flavors, the presentation—all were impeccable. The heirloom tomato salad was a burst of freshness, and the grass-fed beef steak was cooked to perfection. Truly a gem in the city's dining scene."</p>
    `;

    const review2 = document.createElement('div');
    review2.classList.add('review', 'outer-border');
    review2.innerHTML = `
        <p><strong>Review by Michael Thompson, Culinary Blogger:</strong></p>
        <p>"The Gilded Fork offers an exquisite blend of sustainability and luxury. The wild mushroom risotto was creamy and rich, with earthy undertones that were simply delightful. Their commitment to locally-sourced ingredients is evident in every bite."</p>
    `;

    const review3 = document.createElement('div');
    review3.classList.add('review', 'outer-border');
    review3.innerHTML = `
        <p><strong>Review by Isabella Martinez, Restaurant Critic:</strong></p>
        <p>"A must-visit for any food lover. The seared scallops with cauliflower purée were divine, and the lamb tagine transported me to the heart of Morocco. Exceptional service and a beautiful setting make The Gilded Fork a standout choice."</p>
    `;

    headingContainer.appendChild(heading);
    reviewContainer.appendChild(review1);
    reviewContainer.appendChild(review2);
    reviewContainer.appendChild(review3);

    content.appendChild(headingContainer);
    content.appendChild(reviewContainer);

    return content;
}
