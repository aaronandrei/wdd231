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
        let website = document.createElement('a');
        let logo = document.createElement('img');

        name.textContent = `${company.name}`;

        address.textContent = `${company.address}`;

        phone.textContent = `${company.phone}`;

        website.textContent = `${company.website}`;

        website.setAttribute('href', company.website);
        website.setAttribute('target', '_blank');

        logo.setAttribute('src', company.icon);
        logo.setAttribute('alt', `Logo of ${company.name}.`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '90');
        // logo.setAttribute('height', '200');

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    });
}

getCompaniesData();