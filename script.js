function searchCosmicData() {
    const num = document.getElementById('userInput').value;
    const box = document.getElementById('content-box');

    if (num === '1') {
        box.innerHTML = `
            <h2>1. Mercury (बुध)</h2>
            <div class="emoji-icon">🌑</div>
            <div class="section-title">Planetary Details:</div>
            <ul style="line-height: 1.8; color: #ccc;">
                <li>Mercury is the smallest planet.</li>
                <li>It is the closest planet to the Sun.</li>
                <li>It has no moons.</li>
                <li>It is a rocky planet.</li>
                <li>It has many craters.</li>
                <li>It is very hot during the day and very cold at night.</li>
            </ul>
        `;
    } else if (num === '2') {
        box.innerHTML = `
            <h2>2. Venus (शुक्र)</h2>
            <div class="emoji-icon">🌟</div>
            <div class="section-title">Planetary Details:</div>
            <ul style="line-height: 1.8; color: #ccc;">
                <li>Venus is the second planet from the Sun.</li>
                <li>It is the hottest planet.</li>
                <li>It is known as Earth's sister planet.</li>
                <li>It has a thick atmosphere.</li>
                <li>It has no moons.</li>
                <li>It shines very brightly in the sky.</li>
            </ul>
        `;
    } else if (num === '3') {
        box.innerHTML = `
            <h2>3. Earth (पृथ्वी)</h2>
            <div class="emoji-icon">🌍</div>
            <div class="section-title">Planetary Details:</div>
            <ul style="line-height: 1.8; color: #ccc;">
                <li>Earth is the third planet from the Sun.</li>
                <li>It is our home planet.</li>
                <li>It is the only known planet with life.</li>
                <li>It has air and water.</li>
                <li>About 71% of Earth is covered with water.</li>
                <li>It has one natural satellite, the Moon.</li>
            </ul>
        `;
    } else if (num === '4') {
        box.innerHTML = `
            <h2>4. Mars (मंगल)</h2>
            <div class="emoji-icon">🟠</div>
            <div class="section-title">Planetary Details:</div>
            <ul style="line-height: 1.8; color: #ccc;">
                <li>Mars is the fourth planet from the Sun.</li>
                <li>It is known as the Red Planet.</li>
                <li>Its surface contains iron oxide.</li>
                <li>It has two moons.</li>
                <li>It is a cold and rocky planet.</li>
                <li>Scientists are studying Mars for signs of past life.</li>
            </ul>
        `;
    } else if (num === '5') {
        box.innerHTML = `
            <h2>5. Jupiter (बृहस्पति)</h2>
            <div class="emoji-icon">🪐</div>
            <div class="section-title">Planetary Details:</div>
            <ul style="line-height: 1.8; color: #ccc;">
                <li>Jupiter is the fifth planet from the Sun.</li>
                <li>It is the largest planet in our solar system.</li>
                <li>It is a gas giant.</li>
                <li>It has a giant storm called the Great Red Spot.</li>
                <li>It has many moons.</li>
                <li>It has faint rings around it.</li>
            </ul>
        `;
    } else if (num === '6') {
        box.innerHTML = `
            <h2>6. Saturn (शनि)</h2>
            <div class="emoji-icon">🪐✨</div>
            <div class="section-title">Planetary Details:</div>
            <ul style="line-height: 1.8; color: #ccc;">
                <li>Saturn is the sixth planet from the Sun.</li>
                <li>It is famous for its beautiful rings.</li>
                <li>It is a gas giant.</li>
                <li>Its rings are made of ice and rocks.</li>
                <li>It has many moons.</li>
                <li>It is the second-largest planet.</li>
            </ul>
        `;
    } else if (num === '7') {
        box.innerHTML = `
            <h2>7. Uranus (अरुण)</h2>
            <div class="emoji-icon">🌐</div>
            <div class="section-titles">Planetary Details:</div>
            <ul style="line-height: 1.8; color: #ccc;">
                <li>Uranus is the seventh planet from the Sun.</li>
                <li>It is an ice giant.</li>
                <li>It has a blue-green colour.</li>
                <li>It rotates on its side.</li>
                <li>It has faint rings.</li>
                <li>It is an extremely cold planet.</li>
            </ul>
        `;
    } else {
        box.innerHTML = `
            <h2 style="color: #ff4d4d; text-align: center;">⚠️ Invalid Input</h2>
            <p style="text-align: center;">Please enter a valid number between 1 and 7.</p>
        `;
    }
}