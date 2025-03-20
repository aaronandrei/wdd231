const url = 'https://aaronandrei.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#cards');
async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        // let portrait = document.createElement('img');

        name.textContent = `${company.name}`;

        address.textContent = `${company.address}`;

        phone.textContent = `${company.phone}`;

        website.textContent = `${company.website}`;

        // portrait.setAttribute('src', prophet.imageurl);
        // portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        // portrait.setAttribute('loading', 'lazy');
        // portrait.setAttribute('width', '340');
        // portrait.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    });
}

getCompaniesData();