// This script fetches HTML files and injects them into the DOM
async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Failed to load ${file}`);
        const html = await response.text();
        document.getElementById(id).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${file}:`, error);
    }
}

// Load header and footer on page load
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header-container", "/components/header.html");
    loadComponent("footer-container", "/components/footer.html");
});
