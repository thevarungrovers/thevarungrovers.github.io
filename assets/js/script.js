// Favicon
// Get the preferred color scheme from the system or browser
const preferredColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const favicon = document.getElementById('favicon');

// Set the image source based on the preferred color scheme
if (preferredColorScheme === 'dark') {
    favicon.href = 'assets/img/logos/vg-dark-mode.svg';
} else {
    favicon.href = 'assets/img/logos/vg-light-mode.svg';
}

// Footer
document.getElementById(`current-year`).innerHTML = new Date().getFullYear();