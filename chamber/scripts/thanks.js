const info = new URLSearchParams(window.location.search);
// console.log(info);

document.querySelector('#results').innerHTML = `
<p>Thank you, ${info.get('first')} ${info.get('last')}.</p>
<p></p>
<p>We appreciate you applying ${info.get('organization')} to join as a member of the Houston Chamber of Commerece.</p>
<p>We will reach out if we have any questons at the contact information provided.</p>
<p>Phone: ${info.get('phone')}</p>
<p>Email: ${info.get('email')}</p>
<p>${info.get('timestamp')}</p>
`

// &timestamp=