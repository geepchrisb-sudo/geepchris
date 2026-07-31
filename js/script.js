/* ===================================================
   GEEPCHRIS BRIDGE — Complete JavaScript with Animations
   =================================================== */

console.log("JavaScript file loaded successfully");

// ==================================================
// SECTION 0: DARK / LIGHT MODE TOGGLE (Navbar & Mobile)
// ==================================================
const themeToggleNav = document.getElementById('themeToggleNav');
const themeToggleMobile = document.getElementById('themeToggleMobile');
let currentTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme on load
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}

function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

if (themeToggleNav) {
    themeToggleNav.addEventListener('click', toggleTheme);
}

if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', toggleTheme);
}

// ==================================================
// SECTION 0: GLOBAL SECTION ANIMATIONS
// ==================================================
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section-animate').forEach(section => {
    sectionObserver.observe(section);
});

// ==================================================
// SECTION 1: HERO - MOBILE MENU (Full Screen)
// ==================================================
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileClose = document.querySelector(".mobile-menu-close");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "";
});

if (mobileClose) {
    mobileClose.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
    });
}

// Mobile services accordion
const mobileServicesToggle = document.querySelector(".mobile-services-toggle");
const mobileServicesDropdown = document.querySelector(".mobile-services-dropdown");

if (mobileServicesToggle) {
    mobileServicesToggle.addEventListener("click", () => {
        mobileServicesToggle.classList.toggle("active");
        mobileServicesDropdown.classList.toggle("active");
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
    });
});

// ==================================================
// SECTION 1: HERO - IMAGE SLIDESHOW WITH TEXT
// ==================================================
const slides = document.querySelectorAll(".hero-slide");
const mainTextLine1 = document.querySelector(".hero-main-text .line1");
const mainTextLine2 = document.querySelector(".hero-main-text .line2");
const subText = document.querySelector(".hero-sub-text");

// Hero slide content data
const heroContentData = [
    {
        line1: "We Handle the Process.",
        line2: "You Enjoy the Outcome.",
        sub: "We connect people and businesses to the institutions, systems, and opportunities they need—handling the complexity so they can move forward with confidence."
    },
    {
        line1: "Power Your Business with",
        line2: "Reliable Moniepoint Financial Services",
        sub: "From POS terminals and business accounts to loans, ATM cards, and more, we provide trusted financial solutions that help your business grow with confidence."
    },
    {
        line1: "Travel the World with",
        line2: "Confidence and Expert Guidance",
        sub: "Whether you're applying for a visa, renewing your international passport, or processing proof of funds, we simplify every step of your travel journey."
    },
    {
        line1: "Turn Your Business Idea into",
        line2: "a Legally Registered Business",
        sub: "We handle business name registration, company incorporation, and every essential document you need to establish your business professionally."
    },
    {
        line1: "Open Your Corporate",
        line2: "Business Account with Ease",
        sub: "We assist registered businesses with the documentation and application process required to open secure and reliable corporate business bank accounts."
    },
    {
        line1: "Build a Professional Website",
        line2: "That Works for Your Business",
        sub: "From business websites to custom web applications, we create modern, responsive, and high-performing digital solutions designed to strengthen your online presence and support your growth."
    }
];

let currentSlideIndex = 0;
let slideTimer = null;
let isTransitioning = false;

function updateHeroText(index) {
    const data = heroContentData[index];
    if (!data) return;

    // Update text content
    mainTextLine1.textContent = data.line1;
    mainTextLine2.textContent = data.line2;
    subText.textContent = data.sub;

    // Reset animations
    mainTextLine1.classList.remove("active");
    mainTextLine2.classList.remove("active");
    subText.classList.remove("active");
    
    // Reset button animations
    document.querySelectorAll('.hero-actions .primary-btn, .hero-actions .secondary-btn').forEach(btn => {
        btn.classList.remove('visible');
    });

    // Trigger animations with delays - Line1 from right, Line2 from left
    setTimeout(() => {
        mainTextLine1.classList.add("active");
    }, 0);

    setTimeout(() => {
        mainTextLine2.classList.add("active");
    }, 120);

    setTimeout(() => {
        subText.classList.add("active");
    }, 320);

    setTimeout(() => {
        document.querySelectorAll('.hero-actions .primary-btn, .hero-actions .secondary-btn').forEach(btn => {
            btn.classList.add('visible');
        });
    }, 500);
}

function changeSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    // Update image
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });

    // Update text
    updateHeroText(index);

    setTimeout(() => {
        isTransitioning = false;
    }, 1200);
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    changeSlide(currentSlideIndex);
}

function startSlideshow() {
    if (slideTimer) clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, 7000);
}

function resetSlideshow() {
    clearInterval(slideTimer);
    startSlideshow();
}

// Initialize first slide
changeSlide(0);
startSlideshow();

// ==================================================
// SECTION 1: HERO - AIRCRAFT SYSTEM
// ==================================================
const aircraft = document.querySelector(".aircraft");

function flyAircraft() {
    const startTop = Math.random() * 20 + 10;
    const duration = Math.random() * 10000 + 15000;

    aircraft.style.transition = "none";
    aircraft.style.opacity = "0";
    aircraft.style.top = `${startTop}%`;
    aircraft.style.left = "-120px";
    aircraft.style.right = "auto";
    aircraft.style.transform = "none";

    setTimeout(() => {
        aircraft.style.transition = `transform ${duration}ms linear, opacity 1000ms ease`;
        aircraft.style.opacity = "0.85";
        aircraft.style.transform = "translateX(140vw) translateY(-40px)";
    }, 100);

    setTimeout(() => {
        aircraft.style.opacity = "0";
    }, duration);

    setTimeout(flyAircraft, Math.random() * 15000 + 25000);
}

setTimeout(flyAircraft, 8000);

// ==================================================
// SECTION 1: HERO - REVEAL ANIMATION
// ==================================================
window.addEventListener("load", () => {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        navbar.style.opacity = "0";
        navbar.style.transform = "translateY(-20px)";
    }

    setTimeout(() => {
        if (navbar) {
            navbar.style.transition = "all .8s ease";
            navbar.style.opacity = "1";
            navbar.style.transform = "translateY(0)";
        }
    }, 100);

    // Trigger initial hero text animation - Line1 from right, Line2 from left
    setTimeout(() => {
        mainTextLine1.classList.add("active");
    }, 100);

    setTimeout(() => {
        mainTextLine2.classList.add("active");
    }, 220);

    setTimeout(() => {
        subText.classList.add("active");
    }, 420);

    setTimeout(() => {
        document.querySelectorAll('.hero-actions .primary-btn, .hero-actions .secondary-btn').forEach(btn => {
            btn.classList.add('visible');
        });
    }, 600);
});

// ==================================================
// SECTION 1: HERO - CTA MICRO INTERACTIONS
// ==================================================
document.querySelectorAll(".primary-btn, .nav-btn").forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-4px) scale(1.02)";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0) scale(1)";
    });
});

// ==================================================
// GLOBAL: SMOOTH SCROLL FOR ANCHOR LINKS
// ==================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    });
});

// ==================================================
// GLOBAL: NAVBAR SCROLL EFFECT
// ==================================================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;

    if (scrolled > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}, { passive: true });

// ==================================================
// SECTION 2: TRUST CARDS - COUNTER ANIMATION
// ==================================================
function animateCounter(el, target, duration = 2000) {
    el.textContent = "0";
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            el.textContent = target.toLocaleString() + "+";
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(start).toLocaleString() + "+";
        }
    }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const numberEl = entry.target.querySelector(".trust-number");
        if (numberEl) {
            if (entry.isIntersecting) {
                const target = parseInt(numberEl.dataset.target);
                animateCounter(numberEl, target);
            } else {
                numberEl.textContent = "0";
            }
        }
    });
}, { threshold: 0.4 });

document.querySelectorAll(".trust-card").forEach(card => {
    counterObserver.observe(card);
});

// ==================================================
// SECTION 2: TRUST CARDS - FADE IN ANIMATION
// ==================================================
const trustCardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const delay = parseInt(entry.target.dataset.delay) || 0;
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("animate-in");
            }, delay);
        } else {
            entry.target.classList.remove("animate-in");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".trust-card").forEach(card => {
    trustCardObserver.observe(card);
});

// ==================================================
// SECTION 3: SERVICES - MOBILE SIDE FLIP CARDS
// ==================================================
document.querySelectorAll('.service-mobile-toggle').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const card = this.closest('.service-card');
        if (card) {
            document.querySelectorAll('.service-card.flipped').forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('flipped');
                }
            });
            card.classList.toggle('flipped');
        }
    });
});

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (this.classList.contains('flipped')) {
                if (!e.target.closest('.service-cta') && !e.target.closest('.service-mobile-toggle')) {
                    this.classList.remove('flipped');
                }
            }
        }
    });
});

document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.service-card.flipped').forEach(card => {
            if (!card.contains(e.target)) {
                card.classList.remove('flipped');
            }
        });
    }
});

// ==================================================
// SECTION: VISA COUNTRIES SLIDER (Firestore)
// ==================================================

// Firestore Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHSOM7-GZXQ7tYySYTRiyCAHZOn9SQhhE",
    authDomain: "geepchris-bridge.firebaseapp.com",
    projectId: "geepchris-bridge",
    storageBucket: "geepchris-bridge.firebasestorage.app",
    messagingSenderId: "61219875988",
    appId: "1:61219875988:web:a393bb73ce2b85991b9881"
};

if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = typeof firebase !== 'undefined' ? firebase.firestore() : null;

// Country flag data — Complete list of all 195 countries including Holy See
const visaCountries = [
    { name: "Afghanistan", flag: "🇦🇫", flagUrl: "https://flagcdn.com/w40/af.png" },
    { name: "Albania", flag: "🇦🇱", flagUrl: "https://flagcdn.com/w40/al.png" },
    { name: "Algeria", flag: "🇩🇿", flagUrl: "https://flagcdn.com/w40/dz.png" },
    { name: "Andorra", flag: "🇦🇩", flagUrl: "https://flagcdn.com/w40/ad.png" },
    { name: "Angola", flag: "🇦🇴", flagUrl: "https://flagcdn.com/w40/ao.png" },
    { name: "Antigua and Barbuda", flag: "🇦🇬", flagUrl: "https://flagcdn.com/w40/ag.png" },
    { name: "Argentina", flag: "🇦🇷", flagUrl: "https://flagcdn.com/w40/ar.png" },
    { name: "Armenia", flag: "🇦🇲", flagUrl: "https://flagcdn.com/w40/am.png" },
    { name: "Australia", flag: "🇦🇺", flagUrl: "https://flagcdn.com/w40/au.png" },
    { name: "Austria", flag: "🇦🇹", flagUrl: "https://flagcdn.com/w40/at.png" },
    { name: "Azerbaijan", flag: "🇦🇿", flagUrl: "https://flagcdn.com/w40/az.png" },
    { name: "Bahamas", flag: "🇧🇸", flagUrl: "https://flagcdn.com/w40/bs.png" },
    { name: "Bahrain", flag: "🇧🇭", flagUrl: "https://flagcdn.com/w40/bh.png" },
    { name: "Bangladesh", flag: "🇧🇩", flagUrl: "https://flagcdn.com/w40/bd.png" },
    { name: "Barbados", flag: "🇧🇧", flagUrl: "https://flagcdn.com/w40/bb.png" },
    { name: "Belarus", flag: "🇧🇾", flagUrl: "https://flagcdn.com/w40/by.png" },
    { name: "Belgium", flag: "🇧🇪", flagUrl: "https://flagcdn.com/w40/be.png" },
    { name: "Belize", flag: "🇧🇿", flagUrl: "https://flagcdn.com/w40/bz.png" },
    { name: "Benin", flag: "🇧🇯", flagUrl: "https://flagcdn.com/w40/bj.png" },
    { name: "Bhutan", flag: "🇧🇹", flagUrl: "https://flagcdn.com/w40/bt.png" },
    { name: "Bolivia", flag: "🇧🇴", flagUrl: "https://flagcdn.com/w40/bo.png" },
    { name: "Bosnia and Herzegovina", flag: "🇧🇦", flagUrl: "https://flagcdn.com/w40/ba.png" },
    { name: "Botswana", flag: "🇧🇼", flagUrl: "https://flagcdn.com/w40/bw.png" },
    { name: "Brazil", flag: "🇧🇷", flagUrl: "https://flagcdn.com/w40/br.png" },
    { name: "Brunei", flag: "🇧🇳", flagUrl: "https://flagcdn.com/w40/bn.png" },
    { name: "Bulgaria", flag: "🇧🇬", flagUrl: "https://flagcdn.com/w40/bg.png" },
    { name: "Burkina Faso", flag: "🇧🇫", flagUrl: "https://flagcdn.com/w40/bf.png" },
    { name: "Burundi", flag: "🇧🇮", flagUrl: "https://flagcdn.com/w40/bi.png" },
    { name: "Cabo Verde", flag: "🇨🇻", flagUrl: "https://flagcdn.com/w40/cv.png" },
    { name: "Cambodia", flag: "🇰🇭", flagUrl: "https://flagcdn.com/w40/kh.png" },
    { name: "Cameroon", flag: "🇨🇲", flagUrl: "https://flagcdn.com/w40/cm.png" },
    { name: "Canada", flag: "🇨🇦", flagUrl: "https://flagcdn.com/w40/ca.png" },
    { name: "Central African Republic", flag: "🇨🇫", flagUrl: "https://flagcdn.com/w40/cf.png" },
    { name: "Chad", flag: "🇹🇩", flagUrl: "https://flagcdn.com/w40/td.png" },
    { name: "Chile", flag: "🇨🇱", flagUrl: "https://flagcdn.com/w40/cl.png" },
    { name: "China", flag: "🇨🇳", flagUrl: "https://flagcdn.com/w40/cn.png" },
    { name: "Colombia", flag: "🇨🇴", flagUrl: "https://flagcdn.com/w40/co.png" },
    { name: "Comoros", flag: "🇰🇲", flagUrl: "https://flagcdn.com/w40/km.png" },
    { name: "Congo (Congo-Brazzaville)", flag: "🇨🇬", flagUrl: "https://flagcdn.com/w40/cg.png" },
    { name: "Costa Rica", flag: "🇨🇷", flagUrl: "https://flagcdn.com/w40/cr.png" },
    { name: "Croatia", flag: "🇭🇷", flagUrl: "https://flagcdn.com/w40/hr.png" },
    { name: "Cuba", flag: "🇨🇺", flagUrl: "https://flagcdn.com/w40/cu.png" },
    { name: "Cyprus", flag: "🇨🇾", flagUrl: "https://flagcdn.com/w40/cy.png" },
    { name: "Czech Republic", flag: "🇨🇿", flagUrl: "https://flagcdn.com/w40/cz.png" },
    { name: "Democratic Republic of the Congo (Congo-Kinshasa)", flag: "🇨🇩", flagUrl: "https://flagcdn.com/w40/cd.png" },
    { name: "Denmark", flag: "🇩🇰", flagUrl: "https://flagcdn.com/w40/dk.png" },
    { name: "Djibouti", flag: "🇩🇯", flagUrl: "https://flagcdn.com/w40/dj.png" },
    { name: "Dominica", flag: "🇩🇲", flagUrl: "https://flagcdn.com/w40/dm.png" },
    { name: "Dominican Republic", flag: "🇩🇴", flagUrl: "https://flagcdn.com/w40/do.png" },
    { name: "Ecuador", flag: "🇪🇨", flagUrl: "https://flagcdn.com/w40/ec.png" },
    { name: "Egypt", flag: "🇪🇬", flagUrl: "https://flagcdn.com/w40/eg.png" },
    { name: "El Salvador", flag: "🇸🇻", flagUrl: "https://flagcdn.com/w40/sv.png" },
    { name: "Equatorial Guinea", flag: "🇬🇶", flagUrl: "https://flagcdn.com/w40/gq.png" },
    { name: "Eritrea", flag: "🇪🇷", flagUrl: "https://flagcdn.com/w40/er.png" },
    { name: "Estonia", flag: "🇪🇪", flagUrl: "https://flagcdn.com/w40/ee.png" },
    { name: "Eswatini (formerly Swaziland)", flag: "🇸🇿", flagUrl: "https://flagcdn.com/w40/sz.png" },
    { name: "Ethiopia", flag: "🇪🇹", flagUrl: "https://flagcdn.com/w40/et.png" },
    { name: "Fiji", flag: "🇫🇯", flagUrl: "https://flagcdn.com/w40/fj.png" },
    { name: "Finland", flag: "🇫🇮", flagUrl: "https://flagcdn.com/w40/fi.png" },
    { name: "France", flag: "🇫🇷", flagUrl: "https://flagcdn.com/w40/fr.png" },
    { name: "Gabon", flag: "🇬🇦", flagUrl: "https://flagcdn.com/w40/ga.png" },
    { name: "Gambia", flag: "🇬🇲", flagUrl: "https://flagcdn.com/w40/gm.png" },
    { name: "Georgia", flag: "🇬🇪", flagUrl: "https://flagcdn.com/w40/ge.png" },
    { name: "Germany", flag: "🇩🇪", flagUrl: "https://flagcdn.com/w40/de.png" },
    { name: "Ghana", flag: "🇬🇭", flagUrl: "https://flagcdn.com/w40/gh.png" },
    { name: "Greece", flag: "🇬🇷", flagUrl: "https://flagcdn.com/w40/gr.png" },
    { name: "Grenada", flag: "🇬🇩", flagUrl: "https://flagcdn.com/w40/gd.png" },
    { name: "Guatemala", flag: "🇬🇹", flagUrl: "https://flagcdn.com/w40/gt.png" },
    { name: "Guinea", flag: "🇬🇳", flagUrl: "https://flagcdn.com/w40/gn.png" },
    { name: "Guinea-Bissau", flag: "🇬🇼", flagUrl: "https://flagcdn.com/w40/gw.png" },
    { name: "Guyana", flag: "🇬🇾", flagUrl: "https://flagcdn.com/w40/gy.png" },
    { name: "Haiti", flag: "🇭🇹", flagUrl: "https://flagcdn.com/w40/ht.png" },
    { name: "Holy See (Vatican City State)", flag: "🇻🇦", flagUrl: "https://flagcdn.com/w40/va.png" },
    { name: "Honduras", flag: "🇭🇳", flagUrl: "https://flagcdn.com/w40/hn.png" },
    { name: "Hungary", flag: "🇭🇺", flagUrl: "https://flagcdn.com/w40/hu.png" },
    { name: "Iceland", flag: "🇮🇸", flagUrl: "https://flagcdn.com/w40/is.png" },
    { name: "India", flag: "🇮🇳", flagUrl: "https://flagcdn.com/w40/in.png" },
    { name: "Indonesia", flag: "🇮🇩", flagUrl: "https://flagcdn.com/w40/id.png" },
    { name: "Iran", flag: "🇮🇷", flagUrl: "https://flagcdn.com/w40/ir.png" },
    { name: "Iraq", flag: "🇮🇶", flagUrl: "https://flagcdn.com/w40/iq.png" },
    { name: "Ireland", flag: "🇮🇪", flagUrl: "https://flagcdn.com/w40/ie.png" },
    { name: "Israel", flag: "🇮🇱", flagUrl: "https://flagcdn.com/w40/il.png" },
    { name: "Italy", flag: "🇮🇹", flagUrl: "https://flagcdn.com/w40/it.png" },
    { name: "Jamaica", flag: "🇯🇲", flagUrl: "https://flagcdn.com/w40/jm.png" },
    { name: "Japan", flag: "🇯🇵", flagUrl: "https://flagcdn.com/w40/jp.png" },
    { name: "Jordan", flag: "🇯🇴", flagUrl: "https://flagcdn.com/w40/jo.png" },
    { name: "Kazakhstan", flag: "🇰🇿", flagUrl: "https://flagcdn.com/w40/kz.png" },
    { name: "Kenya", flag: "🇰🇪", flagUrl: "https://flagcdn.com/w40/ke.png" },
    { name: "Kiribati", flag: "🇰🇮", flagUrl: "https://flagcdn.com/w40/ki.png" },
    { name: "Kuwait", flag: "🇰🇼", flagUrl: "https://flagcdn.com/w40/kw.png" },
    { name: "Kyrgyzstan", flag: "🇰🇬", flagUrl: "https://flagcdn.com/w40/kg.png" },
    { name: "Laos", flag: "🇱🇦", flagUrl: "https://flagcdn.com/w40/la.png" },
    { name: "Latvia", flag: "🇱🇻", flagUrl: "https://flagcdn.com/w40/lv.png" },
    { name: "Lebanon", flag: "🇱🇧", flagUrl: "https://flagcdn.com/w40/lb.png" },
    { name: "Lesotho", flag: "🇱🇸", flagUrl: "https://flagcdn.com/w40/ls.png" },
    { name: "Liberia", flag: "🇱🇷", flagUrl: "https://flagcdn.com/w40/lr.png" },
    { name: "Libya", flag: "🇱🇾", flagUrl: "https://flagcdn.com/w40/ly.png" },
    { name: "Liechtenstein", flag: "🇱🇮", flagUrl: "https://flagcdn.com/w40/li.png" },
    { name: "Lithuania", flag: "🇱🇹", flagUrl: "https://flagcdn.com/w40/lt.png" },
    { name: "Luxembourg", flag: "🇱🇺", flagUrl: "https://flagcdn.com/w40/lu.png" },
    { name: "Madagascar", flag: "🇲🇬", flagUrl: "https://flagcdn.com/w40/mg.png" },
    { name: "Malawi", flag: "🇲🇼", flagUrl: "https://flagcdn.com/w40/mw.png" },
    { name: "Malaysia", flag: "🇲🇾", flagUrl: "https://flagcdn.com/w40/my.png" },
    { name: "Maldives", flag: "🇲🇻", flagUrl: "https://flagcdn.com/w40/mv.png" },
    { name: "Mali", flag: "🇲🇱", flagUrl: "https://flagcdn.com/w40/ml.png" },
    { name: "Malta", flag: "🇲🇹", flagUrl: "https://flagcdn.com/w40/mt.png" },
    { name: "Marshall Islands", flag: "🇲🇭", flagUrl: "https://flagcdn.com/w40/mh.png" },
    { name: "Mauritania", flag: "🇲🇷", flagUrl: "https://flagcdn.com/w40/mr.png" },
    { name: "Mauritius", flag: "🇲🇺", flagUrl: "https://flagcdn.com/w40/mu.png" },
    { name: "Mexico", flag: "🇲🇽", flagUrl: "https://flagcdn.com/w40/mx.png" },
    { name: "Micronesia", flag: "🇫🇲", flagUrl: "https://flagcdn.com/w40/fm.png" },
    { name: "Moldova", flag: "🇲🇩", flagUrl: "https://flagcdn.com/w40/md.png" },
    { name: "Monaco", flag: "🇲🇨", flagUrl: "https://flagcdn.com/w40/mc.png" },
    { name: "Mongolia", flag: "🇲🇳", flagUrl: "https://flagcdn.com/w40/mn.png" },
    { name: "Montenegro", flag: "🇲🇪", flagUrl: "https://flagcdn.com/w40/me.png" },
    { name: "Morocco", flag: "🇲🇦", flagUrl: "https://flagcdn.com/w40/ma.png" },
    { name: "Mozambique", flag: "🇲🇿", flagUrl: "https://flagcdn.com/w40/mz.png" },
    { name: "Myanmar", flag: "🇲🇲", flagUrl: "https://flagcdn.com/w40/mm.png" },
    { name: "Namibia", flag: "🇳🇦", flagUrl: "https://flagcdn.com/w40/na.png" },
    { name: "Nauru", flag: "🇳🇷", flagUrl: "https://flagcdn.com/w40/nr.png" },
    { name: "Nepal", flag: "🇳🇵", flagUrl: "https://flagcdn.com/w40/np.png" },
    { name: "Netherlands", flag: "🇳🇱", flagUrl: "https://flagcdn.com/w40/nl.png" },
    { name: "New Zealand", flag: "🇳🇿", flagUrl: "https://flagcdn.com/w40/nz.png" },
    { name: "Nicaragua", flag: "🇳🇮", flagUrl: "https://flagcdn.com/w40/ni.png" },
    { name: "Niger", flag: "🇳🇪", flagUrl: "https://flagcdn.com/w40/ne.png" },
    { name: "Nigeria", flag: "🇳🇬", flagUrl: "https://flagcdn.com/w40/ng.png" },
    { name: "North Korea", flag: "🇰🇵", flagUrl: "https://flagcdn.com/w40/kp.png" },
    { name: "North Macedonia", flag: "🇲🇰", flagUrl: "https://flagcdn.com/w40/mk.png" },
    { name: "Norway", flag: "🇳🇴", flagUrl: "https://flagcdn.com/w40/no.png" },
    { name: "Oman", flag: "🇴🇲", flagUrl: "https://flagcdn.com/w40/om.png" },
    { name: "Pakistan", flag: "🇵🇰", flagUrl: "https://flagcdn.com/w40/pk.png" },
    { name: "Palau", flag: "🇵🇼", flagUrl: "https://flagcdn.com/w40/pw.png" },
    { name: "Panama", flag: "🇵🇦", flagUrl: "https://flagcdn.com/w40/pa.png" },
    { name: "Papua New Guinea", flag: "🇵🇬", flagUrl: "https://flagcdn.com/w40/pg.png" },
    { name: "Paraguay", flag: "🇵🇾", flagUrl: "https://flagcdn.com/w40/py.png" },
    { name: "Peru", flag: "🇵🇪", flagUrl: "https://flagcdn.com/w40/pe.png" },
    { name: "Philippines", flag: "🇵🇭", flagUrl: "https://flagcdn.com/w40/ph.png" },
    { name: "Poland", flag: "🇵🇱", flagUrl: "https://flagcdn.com/w40/pl.png" },
    { name: "Portugal", flag: "🇵🇹", flagUrl: "https://flagcdn.com/w40/pt.png" },
    { name: "Qatar", flag: "🇶🇦", flagUrl: "https://flagcdn.com/w40/qa.png" },
    { name: "Romania", flag: "🇷🇴", flagUrl: "https://flagcdn.com/w40/ro.png" },
    { name: "Russia", flag: "🇷🇺", flagUrl: "https://flagcdn.com/w40/ru.png" },
    { name: "Rwanda", flag: "🇷🇼", flagUrl: "https://flagcdn.com/w40/rw.png" },
    { name: "Saint Kitts and Nevis", flag: "🇰🇳", flagUrl: "https://flagcdn.com/w40/kn.png" },
    { name: "Saint Lucia", flag: "🇱🇨", flagUrl: "https://flagcdn.com/w40/lc.png" },
    { name: "Saint Vincent and the Grenadines", flag: "🇻🇨", flagUrl: "https://flagcdn.com/w40/vc.png" },
    { name: "Samoa", flag: "🇼🇸", flagUrl: "https://flagcdn.com/w40/ws.png" },
    { name: "San Marino", flag: "🇸🇲", flagUrl: "https://flagcdn.com/w40/sm.png" },
    { name: "Sao Tome and Principe", flag: "🇸🇹", flagUrl: "https://flagcdn.com/w40/st.png" },
    { name: "Saudi Arabia", flag: "🇸🇦", flagUrl: "https://flagcdn.com/w40/sa.png" },
    { name: "Senegal", flag: "🇸🇳", flagUrl: "https://flagcdn.com/w40/sn.png" },
    { name: "Serbia", flag: "🇷🇸", flagUrl: "https://flagcdn.com/w40/rs.png" },
    { name: "Seychelles", flag: "🇸🇨", flagUrl: "https://flagcdn.com/w40/sc.png" },
    { name: "Sierra Leone", flag: "🇸🇱", flagUrl: "https://flagcdn.com/w40/sl.png" },
    { name: "Singapore", flag: "🇸🇬", flagUrl: "https://flagcdn.com/w40/sg.png" },
    { name: "Slovakia", flag: "🇸🇰", flagUrl: "https://flagcdn.com/w40/sk.png" },
    { name: "Slovenia", flag: "🇸🇮", flagUrl: "https://flagcdn.com/w40/si.png" },
    { name: "Solomon Islands", flag: "🇸🇧", flagUrl: "https://flagcdn.com/w40/sb.png" },
    { name: "Somalia", flag: "🇸🇴", flagUrl: "https://flagcdn.com/w40/so.png" },
    { name: "South Africa", flag: "🇿🇦", flagUrl: "https://flagcdn.com/w40/za.png" },
    { name: "South Korea", flag: "🇰🇷", flagUrl: "https://flagcdn.com/w40/kr.png" },
    { name: "South Sudan", flag: "🇸🇸", flagUrl: "https://flagcdn.com/w40/ss.png" },
    { name: "Spain", flag: "🇪🇸", flagUrl: "https://flagcdn.com/w40/es.png" },
    { name: "Sri Lanka", flag: "🇱🇰", flagUrl: "https://flagcdn.com/w40/lk.png" },
    { name: "Sudan", flag: "🇸🇩", flagUrl: "https://flagcdn.com/w40/sd.png" },
    { name: "Suriname", flag: "🇸🇷", flagUrl: "https://flagcdn.com/w40/sr.png" },
    { name: "Sweden", flag: "🇸🇪", flagUrl: "https://flagcdn.com/w40/se.png" },
    { name: "Switzerland", flag: "🇨🇭", flagUrl: "https://flagcdn.com/w40/ch.png" },
    { name: "Syria", flag: "🇸🇾", flagUrl: "https://flagcdn.com/w40/sy.png" },
    { name: "Tajikistan", flag: "🇹🇯", flagUrl: "https://flagcdn.com/w40/tj.png" },
    { name: "Tanzania", flag: "🇹🇿", flagUrl: "https://flagcdn.com/w40/tz.png" },
    { name: "Thailand", flag: "🇹🇭", flagUrl: "https://flagcdn.com/w40/th.png" },
    { name: "Timor-Leste", flag: "🇹🇱", flagUrl: "https://flagcdn.com/w40/tl.png" },
    { name: "Togo", flag: "🇹🇬", flagUrl: "https://flagcdn.com/w40/tg.png" },
    { name: "Tonga", flag: "🇹🇴", flagUrl: "https://flagcdn.com/w40/to.png" },
    { name: "Trinidad and Tobago", flag: "🇹🇹", flagUrl: "https://flagcdn.com/w40/tt.png" },
    { name: "Tunisia", flag: "🇹🇳", flagUrl: "https://flagcdn.com/w40/tn.png" },
    { name: "Turkey", flag: "🇹🇷", flagUrl: "https://flagcdn.com/w40/tr.png" },
    { name: "Turkmenistan", flag: "🇹🇲", flagUrl: "https://flagcdn.com/w40/tm.png" },
    { name: "Tuvalu", flag: "🇹🇻", flagUrl: "https://flagcdn.com/w40/tv.png" },
    { name: "Uganda", flag: "🇺🇬", flagUrl: "https://flagcdn.com/w40/ug.png" },
    { name: "Ukraine", flag: "🇺🇦", flagUrl: "https://flagcdn.com/w40/ua.png" },
    { name: "United Arab Emirates", flag: "🇦🇪", flagUrl: "https://flagcdn.com/w40/ae.png" },
    { name: "United Kingdom", flag: "🇬🇧", flagUrl: "https://flagcdn.com/w40/gb.png" },
    { name: "United States", flag: "🇺🇸", flagUrl: "https://flagcdn.com/w40/us.png" },
    { name: "Uruguay", flag: "🇺🇾", flagUrl: "https://flagcdn.com/w40/uy.png" },
    { name: "Uzbekistan", flag: "🇺🇿", flagUrl: "https://flagcdn.com/w40/uz.png" },
    { name: "Vanuatu", flag: "🇻🇺", flagUrl: "https://flagcdn.com/w40/vu.png" },
    { name: "Venezuela", flag: "🇻🇪", flagUrl: "https://flagcdn.com/w40/ve.png" },
    { name: "Vietnam", flag: "🇻🇳", flagUrl: "https://flagcdn.com/w40/vn.png" },
    { name: "Yemen", flag: "🇾🇪", flagUrl: "https://flagcdn.com/w40/ye.png" },
    { name: "Zambia", flag: "🇿🇲", flagUrl: "https://flagcdn.com/w40/zm.png" },
    { name: "Zimbabwe", flag: "🇿🇼", flagUrl: "https://flagcdn.com/w40/zw.png" }
];

function getVisaFlagUrl(countryName) {
    const country = visaCountries.find(c => c.name === countryName);
    return country ? country.flagUrl : null;
}

function getVisaFlagEmoji(countryName) {
    const country = visaCountries.find(c => c.name === countryName);
    return country ? country.flag : '🌍';
}

let visaCards = [];
let currentVisaIndex = 0;
let visaAutoSlideInterval = null;
let visaIsTransitioning = false;

function getVisaVisibleCount() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
}

function getVisaCardWidth() {
    const track = document.getElementById('visa-track');
    if (!track || !track.children.length) return 0;
    const card = track.children[0];
    const gap = 24;
    return card.offsetWidth + gap;
}

function renderVisaCards(data) {
    const track = document.getElementById('visa-track');
    if (!track) return;

    if (!data || data.length === 0) {
        track.innerHTML = `
            <div class="visa-empty-state" style="width:100%;">
                <i class="fas fa-globe"></i>
                <h3>No countries available yet</h3>
                <p>Please check back later for new visa opportunities.</p>
            </div>
        `;
        return;
    }

    let html = '';
    data.forEach(item => {
        const price = item.price ? `₦${Number(item.price).toLocaleString()}` : 'Price on request';
        const slug = item.country ? item.country.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : 'unknown';

        let imageHtml = '';
        if (item.image && item.image.trim() !== '') {
            imageHtml = `<img src="${item.image}" alt="${item.country || 'Country'} visa application" loading="lazy" decoding="async">`;
        } else {
            const flagUrl = getVisaFlagUrl(item.country);
            if (flagUrl) {
                imageHtml = `<img src="${flagUrl}" alt="${item.country} flag" style="width:100%;height:100%;object-fit:cover;" loading="lazy" decoding="async">`;
            } else {
                imageHtml = `<div style="display:flex; align-items:center; justify-content:center; height:100%; font-size:6rem;">${getVisaFlagEmoji(item.country)}</div>`;
            }
        }

        let flagHtml = '';
        const flagUrl = getVisaFlagUrl(item.country);
        if (flagUrl) {
            flagHtml = `<img src="${flagUrl}" alt="${item.country} flag" class="flag-image" loading="lazy" decoding="async" onerror="this.style.display='none';this.parentElement.innerHTML='<span class=\\'flag-fallback\\'>${getVisaFlagEmoji(item.country)}</span>'">`;
        } else {
            flagHtml = `<span class="flag-fallback">${getVisaFlagEmoji(item.country)}</span>`;
        }

        html += `
            <a href="/services/travel/visa/visa-country.html?country=${slug}" class="visa-card">
                <div class="card-image-wrapper">
                    ${imageHtml}
                </div>
                <div class="card-flag-wrapper">
                    ${flagHtml}
                </div>
                <div class="card-body">
                    <h3>${item.country || 'Unknown Country'}</h3>
                    <div class="visa-type">${item.visaType || 'Visa'}</div>
                    <p class="description">${item.description || 'Processing time: ' + (item.duration || 'N/A')}</p>
                    <div class="card-footer">
                        <span class="price">${price}</span>
                        <span class="apply-btn">Apply Now →</span>
                    </div>
                </div>
            </a>
        `;
    });

    track.innerHTML = html;
    visaCards = data;
    createVisaDots();
    goToVisaSlide(0);
    startVisaAutoSlide();
}

function createVisaDots() {
    const dotsContainer = document.getElementById('visa-slider-dots');
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    const visible = getVisaVisibleCount();
    const totalSlides = Math.max(1, visaCards.length - visible + 1);

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'visa-slider-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToVisaSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function goToVisaSlide(index) {
    if (visaIsTransitioning) return;
    const track = document.getElementById('visa-track');
    if (!track || !track.children.length) return;

    const visible = getVisaVisibleCount();
    const totalSlides = Math.max(1, visaCards.length - visible + 1);
    currentVisaIndex = Math.max(0, Math.min(index, totalSlides - 1));

    const offset = currentVisaIndex * getVisaCardWidth();
    track.style.transform = `translateX(-${offset}px)`;

    document.querySelectorAll('.visa-slider-dot').forEach((d, i) => {
        d.classList.toggle('active', i === currentVisaIndex);
    });
}

function nextVisaSlide() {
    const visible = getVisaVisibleCount();
    const totalSlides = Math.max(1, visaCards.length - visible + 1);
    const next = (currentVisaIndex + 1) % totalSlides;
    goToVisaSlide(next);
}

function prevVisaSlide() {
    const visible = getVisaVisibleCount();
    const totalSlides = Math.max(1, visaCards.length - visible + 1);
    const prev = (currentVisaIndex - 1 + totalSlides) % totalSlides;
    goToVisaSlide(prev);
}

function startVisaAutoSlide() {
    if (visaAutoSlideInterval) clearInterval(visaAutoSlideInterval);
    if (visaCards.length <= getVisaVisibleCount()) return;
    visaAutoSlideInterval = setInterval(nextVisaSlide, 5000);
}

function resetVisaAutoSlide() {
    clearInterval(visaAutoSlideInterval);
    startVisaAutoSlide();
}

// Visa slider button listeners
const visaPrevBtn = document.getElementById('visa-prev-btn');
const visaNextBtn = document.getElementById('visa-next-btn');

if (visaPrevBtn) {
    visaPrevBtn.addEventListener('click', () => {
        prevVisaSlide();
        resetVisaAutoSlide();
    });
}

if (visaNextBtn) {
    visaNextBtn.addEventListener('click', () => {
        nextVisaSlide();
        resetVisaAutoSlide();
    });
}

// Window resize handler for visa slider
let visaResizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(visaResizeTimeout);
    visaResizeTimeout = setTimeout(() => {
        createVisaDots();
        goToVisaSlide(0);
        resetVisaAutoSlide();
    }, 250);
});

// Load visa countries from Firestore
async function loadVisaCountries() {
    const track = document.getElementById('visa-track');
    if (!track) return;

    if (!db) {
        track.innerHTML = `
            <div class="visa-empty-state" style="width:100%;color:#dc2626;">
                <i class="fas fa-exclamation-circle"></i>
                <h3>Firebase not loaded</h3>
                <p>Please check your internet connection and try again.</p>
            </div>
        `;
        return;
    }

    try {
        track.innerHTML = `
            <div class="visa-loading-state" style="width:100%;">
                <i class="fas fa-spinner"></i>
                <p>Loading available countries...</p>
            </div>
        `;

        const snapshot = await db.collection('visa-countries')
            .where('status', '==', 'available')
            .get();

        if (snapshot.empty) {
            track.innerHTML = `
                <div class="visa-empty-state" style="width:100%;">
                    <i class="fas fa-globe"></i>
                    <h3>No countries available yet</h3>
                    <p>Please check back later for new visa opportunities.</p>
                </div>
            `;
            return;
        }

        const data = [];
        snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() });
        });

        renderVisaCards(data);

    } catch (error) {
        console.error("Error loading visa countries:", error);
        track.innerHTML = `
            <div class="visa-empty-state" style="width:100%;color:#dc2626;">
                <i class="fas fa-exclamation-circle"></i>
                <h3>Error loading data</h3>
                <p>${error.message}</p>
            </div>
        `;
    }
}

// Initialize visa slider when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(loadVisaCountries, 500);
});

// ==================================================
// SECTION 4: HOW IT WORKS - STEP CARDS ANIMATION
// ==================================================
const stepCardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
        } else {
            entry.target.classList.remove("animate-in");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".step-card").forEach(card => {
    stepCardObserver.observe(card);
});

// ==================================================
// SECTION 5: WHY CHOOSE - FEATURES STAGGER ANIMATION
// ==================================================
const whyFeatureObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const features = entry.target.querySelectorAll(".why-feature");
            features.forEach((f, i) => {
                setTimeout(() => {
                    f.classList.add("animate-in");
                }, i * 100);
            });
        } else {
            const features = entry.target.querySelectorAll(".why-feature");
            features.forEach((f) => {
                f.classList.remove("animate-in");
            });
        }
    });
}, { threshold: 0.2 });

const whyFeaturesGrid = document.querySelector(".why-features");
if (whyFeaturesGrid) whyFeatureObserver.observe(whyFeaturesGrid);

// ==================================================
// SECTION 6: TESTIMONIALS - SLIDER
// ==================================================
const testimonialTrack = document.getElementById("testimonials-track");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const testimonialPrevBtn = document.getElementById("prev-btn");
const testimonialNextBtn = document.getElementById("next-btn");
const testimonialDotsContainer = document.getElementById("slider-dots");

let currentTestimonial = 0;
let testimonialAutoSlideInterval;

function createTestimonialDots() {
    if (!testimonialDotsContainer) return;
    testimonialDotsContainer.innerHTML = "";
    testimonialCards.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.className = "slider-dot" + (i === 0 ? " active" : "");
        dot.addEventListener("click", () => goToTestimonialSlide(i));
        testimonialDotsContainer.appendChild(dot);
    });
}

function getTestimonialVisibleCount() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

function getTestimonialCardWidth() {
    if (!testimonialCards.length) return 0;
    const card = testimonialCards[0];
    const gap = 24;
    return card.offsetWidth + gap;
}

function goToTestimonialSlide(index) {
    const total = testimonialCards.length;
    const visible = getTestimonialVisibleCount();
    const maxIndex = total - visible;

    currentTestimonial = Math.max(0, Math.min(index, maxIndex));

    const offset = currentTestimonial * getTestimonialCardWidth();
    testimonialTrack.style.transform = `translateX(-${offset}px)`;

    document.querySelectorAll(".slider-dot").forEach((d, i) => {
        d.classList.toggle("active", i === currentTestimonial);
    });

    testimonialCards.forEach((card, i) => {
        card.classList.toggle("active-card", i === currentTestimonial);
    });
}

function nextTestimonialSlide() {
    const visible = getTestimonialVisibleCount();
    const max = testimonialCards.length - visible;
    goToTestimonialSlide(currentTestimonial >= max ? 0 : currentTestimonial + 1);
}

function prevTestimonialSlide() {
    const visible = getTestimonialVisibleCount();
    const max = testimonialCards.length - visible;
    goToTestimonialSlide(currentTestimonial <= 0 ? max : currentTestimonial - 1);
}

if (testimonialPrevBtn) {
    testimonialPrevBtn.addEventListener("click", () => { 
        prevTestimonialSlide(); 
        resetTestimonialAutoSlide(); 
    });
}

if (testimonialNextBtn) {
    testimonialNextBtn.addEventListener("click", () => { 
        nextTestimonialSlide(); 
        resetTestimonialAutoSlide(); 
    });
}

function startTestimonialAutoSlide() {
    testimonialAutoSlideInterval = setInterval(nextTestimonialSlide, 5000);
}

function resetTestimonialAutoSlide() {
    clearInterval(testimonialAutoSlideInterval);
    startTestimonialAutoSlide();
}

createTestimonialDots();
goToTestimonialSlide(0);
startTestimonialAutoSlide();

window.addEventListener("resize", () => {
    goToTestimonialSlide(0);
    createTestimonialDots();
});

// ==================================================
// SECTION 7: FAQ - ACCORDION
// ==================================================
document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains("open");

        document.querySelectorAll(".faq-item.open").forEach(openItem => {
            openItem.classList.remove("open");
        });

        if (!isOpen) {
            item.classList.add("open");
        }
    });
});

// ==================================================
// SECTION 8: STATS SECTION - COUNTER ANIMATION
// ==================================================
function animateStatCounter(el, target, duration = 2000) {
    el.textContent = "0";
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            el.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
}

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const numberEl = entry.target.querySelector(".stat-num");
        if (numberEl) {
            if (entry.isIntersecting) {
                const target = parseInt(numberEl.dataset.target);
                animateStatCounter(numberEl, target);
            } else {
                numberEl.textContent = "0";
            }
        }
    });
}, { threshold: 0.4 });

document.querySelectorAll(".stat-item").forEach(item => {
    statObserver.observe(item);
});

// ==================================================
// SECTION 8: STATS CARDS - FADE IN ANIMATION
// ==================================================
const statCardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
        } else {
            entry.target.classList.remove("animate-in");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".stat-item").forEach(item => {
    statCardObserver.observe(item);
});

console.log("All animations initialized");