const form = document.querySelector('.designOne');
const timestampField = document.querySelector('#timestamp');

// form.addEventListener('submit', () => {
//     const currentTime = new Date().getTime() / 1000; // Get current timestamp in seconds
//     timestampField.value = currentTime;
// });

window.addEventListener('DOMContentLoaded', () => {
    const timestampInput = document.getElementById('timestamp');
    if (timestampInput) {
        const now = new Date();

        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        };

        const readableTimestamp = now.toLocaleString('en-US', options);
        timestampInput.value = readableTimestamp;
    }
});

const membershipDetails = {
    "non-profit": "Ideal for charitable organizations and small non-profit. No membership fees.",
    "bronze": "Basic benefits like directory listing and networking access. $300 per year.",
    "silver": "Includes all Bronze benefits plus promotional features. $500 per year.",
    "gold": "Premium visibility, featured listings, and VIP event invites. $700 per year."
  };
  
  function createModal(content) {
    const modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal-box">
        <span class="close-btn">&times;</span>
        <p>${content}</p>
      </div>
    `;
    document.body.appendChild(modal);
  
    modal.querySelector(".close-btn").onclick = () => modal.remove();
    modal.onclick = (e) => {
      if (e.target === modal) modal.remove();
    };
  }
  
  document.querySelectorAll(".m-card").forEach(card => {
    card.addEventListener("click", () => {
      const level = card.getAttribute("data-level");
      createModal(membershipDetails[level]);
    });
  });
  
  function createModal(content) {
    const modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal-box">
        <span class="close-btn">&times;</span>
        <p>${content}</p>
      </div>
    `;
    document.body.appendChild(modal);
  
    const closeModal = () => {
      modal.classList.add("fade-out");
      setTimeout(() => modal.remove(), 300); // Wait for animation to finish
    };
  
    modal.querySelector(".close-btn").onclick = closeModal;
    modal.onclick = (e) => {
      if (e.target === modal) closeModal();
    };
  }
  