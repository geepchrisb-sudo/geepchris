(function() {
    // Wait for DOM to be ready
    function initHeader() {
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

    // If DOM already loaded, run immediately, otherwise wait
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeader);
    } else {
        initHeader();
    }
})();