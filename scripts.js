// Countdown timer for the birthday wishes section
const countdown = document.getElementById('countdown');
const targetDate = new Date('YYYY-MM-DDT00:00:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (difference < 0) {
        clearInterval(interval);
        countdown.innerHTML = "Happy Birthday!";
    }
};

const interval = setInterval(updateCountdown, 1000);
