document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('interest-cards');

    fetch('data/interest.json')
        .then(response => response.json())
        .then(data => {
            data.places.forEach(place => {
                const card = document.createElement('div');
                card.className = 'card';

                card.innerHTML = `
            <h2>${place.name}</h2>
            <figure>
              <img src="${place.image}" alt="${place.name}" width="300" height="200">
            </figure>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <button onclick="alert('More info about ${place.name}')">Learn More</button>
          `;

                container.appendChild(card);
            });
        })
        .catch(err => console.error("Error loading JSON:", err));
});

document.addEventListener("DOMContentLoaded", () => {
    const messageElement = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    if (!lastVisit) {
        // First visit
        messageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitTime = parseInt(lastVisit, 10);
        const timeDiff = now - lastVisitTime;
        const daysBetween = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysBetween < 1) {
            messageElement.textContent = "Back so soon! Awesome!";
        } else if (daysBetween === 1) {
            messageElement.textContent = "You last visited 1 day ago.";
        } else {
            messageElement.textContent = `You last visited ${daysBetween} days ago.`;
        }
    }

    // Store the current time for next visit
    localStorage.setItem("lastVisit", now.toString());
});
