const form = document.getElementById('yourFormId');
const timestampField = document.getElementById('timestamp');

form.addEventListener('submit', () => {
    const currentTime = new Date().getTime() / 1000; // Get current timestamp in seconds
    timestampField.value = currentTime;
});