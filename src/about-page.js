export default function aboutPage() {
    const content = document.querySelector('#content');

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container', 'outer-border');

    const heading = document.createElement('div');
    heading.classList.add('heading');
    heading.textContent = 'The Gilded Fork - About Us';

    const history = document.createElement('div');
    history.classList.add('history', 'outer-border');
    history.innerHTML = `
        <h2>Our History</h2>
        <p>Founded in 2005, The Gilded Fork began as a small, passionate project by Chef Eleanor Wainwright. With a vision to create a dining experience that celebrates both luxury and sustainability, Chef Eleanor transformed an old warehouse into the elegant establishment we know today.</p>
    `;

    const ethos = document.createElement('div');
    ethos.classList.add('ethos', 'outer-border');
    ethos.innerHTML = `
        <h2>Our Ethos</h2>
        <p>At The Gilded Fork, we believe that exceptional dining can be achieved without compromising the planet. Our farm-to-table approach ensures that every ingredient is locally sourced, organic, and sustainably produced. We are committed to supporting local farmers and reducing our carbon footprint.</p>
    `;

    const mission = document.createElement('div');
    mission.classList.add('mission', 'outer-border');
    mission.innerHTML = `
        <h2>Our Mission</h2>
        <p>Our mission is to provide an unparalleled culinary experience that delights the senses and nurtures the soul. We strive to create a welcoming atmosphere where guests can savor the finest dishes crafted with care and integrity.</p>
    `;

    headingContainer.appendChild(heading);
    aboutContainer.appendChild(history);
    aboutContainer.appendChild(ethos);
    aboutContainer.appendChild(mission);

    content.appendChild(headingContainer);
    content.appendChild(aboutContainer);

    return content;
}
