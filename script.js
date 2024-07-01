document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggleDarkMode');
    const body = document.body;
    const currentTimeUTC = document.getElementById('currentTimeUTC');
    const currentDayUTC = document.getElementById('currentDay');

    // Function to update current time and day
    function updateCurrentTimeAndDay() {
        const now = new Date();
        const hours = now.getUTCHours().toString().padStart(2, '0');
        const minutes = now.getUTCMinutes().toString().padStart(2, '0');
        const seconds = now.getUTCSeconds().toString().padStart(2, '0');
        const currentTime = `${hours}:${minutes}:${seconds} UTC`;

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfWeek = days[now.getUTCDay()];

        currentTimeUTC.textContent = currentTime;
        currentDayUTC.textContent = dayOfWeek;
    }

    updateCurrentTimeAndDay();

    setInterval(updateCurrentTimeAndDay, 1000);

    // Dark mode toggle functionality
    toggleSwitch.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});
