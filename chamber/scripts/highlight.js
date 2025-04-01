document.addEventListener("DOMContentLoaded", function () {
    const url = 'https://aaronandrei.github.io/wdd231/chamber/data/members.json';
    const container = document.getElementById("businesshighlight");

    async function fetchCompanies() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            displayCompanies(data.companies);
        } catch (error) {
            console.error("Error fetching company data:", error);
        }
    }

    function displayCompanies(companies) {
        // Filter companies with membership level 3 or 2
        const eligibleCompanies = companies.filter(company => company.membership_level === 3 || company.membership_level === 2);

        // Shuffle and select 3 random companies
        const selectedCompanies = eligibleCompanies.sort(() => 0.5 - Math.random()).slice(0, 3);

        // Clear previous content
        container.innerHTML = "";

        // Generate HTML for selected companies
        selectedCompanies.forEach(company => {
            const card = document.createElement("div");
            card.classList.add("business-card");

            card.innerHTML = `
                <div class="card">
                    <img src="${company.icon}" alt="${company.name}" class="card-icon">
                    <h3>${company.name}</h3>
                    <p><strong>Address:</strong> ${company.address}</p>
                    <p><strong>Phone:</strong> ${company.phone}</p>
                    <p><strong>Membership Level:</strong> ${company.membership_level}</p>
                    <a href="${company.website}" target="_blank" class="card-link">Visit Website</a>
                </div>
            `;

            container.appendChild(card);
        });
    }

    fetchCompanies();
});
