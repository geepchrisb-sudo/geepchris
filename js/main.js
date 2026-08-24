// Load Components
function loadComponent(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
            // Re-init sticky navbar and mobile menu AFTER header loads
            initNavbarScripts();
        })
        .catch(err => console.error("Error loading component:", err));
}

// Navbar & Mobile Menu Logic (Moved here so it works on every page)
function initNavbarScripts() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileClose = document.querySelector(".mobile-menu-close");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
            document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "";
        });
    }

    if (mobileClose) {
        mobileClose.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            document.body.style.overflow = "";
        });
    }

    const mobileServicesToggle = document.querySelector(".mobile-services-toggle");
    const mobileServicesDropdown = document.querySelector(".mobile-services-dropdown");

    if (mobileServicesToggle) {
        mobileServicesToggle.addEventListener("click", () => {
            mobileServicesToggle.classList.toggle("active");
            mobileServicesDropdown.classList.toggle("active");
        });
    }

    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            document.body.style.overflow = "";
        });
    });

    window.addEventListener("scroll", () => {
        if (navbar) {
            const scrolled = window.pageYOffset;
            if (scrolled > 80) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }
    });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header-container", "/components/header.html");
    loadComponent("footer-container", "/components/footer.html");
});