export default function initalPage() {
    const content = document.querySelector('#content');
    //content.classList.add('outer-border');

    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container', 'outer-border');

    const reviewOuter = document.createElement('div');
    reviewOuter.classList.add('review-outer', 'outer-border');

    const infoHoursOuter = document.createElement('div');
    infoHoursOuter.classList.add('info-hours-outer', 'outer-border');


    const heading = document.createElement('div');
    heading.classList.add('heading');
    heading.textContent = 'The Gilded Fork';

    const reviewOuterPara = document.createElement('p');
    reviewOuterPara.textContent = "In the heart of the city, The Gilded Fork stands as a beacon of refined dining, seamlessly marrying the elegance of fine dining with the principles of sustainability. As a professional reviewer with years of experience tasting the world's finest cuisines, I approached this farm-to-table haven with high expectations. I left not only satisfied but profoundly impressed.";

    const customer = document.createElement('p');
    customer.classList.add('customer');
    customer.textContent = "Review by Jonathan Everhart, Renowned Food Critic";

    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.innerHTML = `
                <h1>The Gilded Fork - Operating Hours</h1>
                <h2>Monday to Thursday:</h2>
                <p><strong>Lunch:</strong> 11:30 AM - 2:30 PM</p>
                <p><strong>Dinner:</strong> 5:30 PM - 10:00 PM</p>

                <h2>Friday:</h2>
                <p><strong>Lunch:</strong> 11:30 AM - 2:30 PM</p>
                <p><strong>Dinner:</strong> 5:30 PM - 11:00 PM</p>

                <h2>Saturday:</h2>
                <p><strong>Brunch:</strong> 10:00 AM - 2:00 PM</p>
                <p><strong>Dinner:</strong> 5:00 PM - 11:00 PM</p>

                <h2>Sunday:</h2>
                <p><strong>Brunch:</strong> 10:00 AM - 2:00 PM</p>
                <p><strong>Dinner:</strong> 5:00 PM - 9:00 PM</p>

                <h2>Special Hours:</h2>
                <p><strong>Happy Hour (Monday to Friday):</strong> 4:00 PM - 6:00 PM</p>
                <p><strong>Chef's Tasting Menu (Friday and Saturday):</strong> 7:00 PM - 10:00 PM (Reservation Required)
                </p>
                <p><strong>Private Events and Catering:</strong> Available upon request.</p>
                `;

    headingContainer.appendChild(heading);
    reviewOuter.appendChild(reviewOuterPara);
    reviewOuter.appendChild(customer);
    infoHoursOuter.appendChild(hours);

    content.appendChild(headingContainer);
    content.appendChild(reviewOuter);
    content.appendChild(infoHoursOuter);

    return content;
}