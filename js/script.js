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
            { name: "Afghanistan", flag: "🇦🇫", flagUrl: "https://flagcdn.com/af.svg" },
            { name: "Albania", flag: "🇦🇱", flagUrl: "https://flagcdn.com/al.svg" },
            { name: "Algeria", flag: "🇩🇿", flagUrl: "https://flagcdn.com/dz.svg" },
            { name: "Andorra", flag: "🇦🇩", flagUrl: "https://flagcdn.com/ad.svg" },
            { name: "Angola", flag: "🇦🇴", flagUrl: "https://flagcdn.com/ao.svg" },
            { name: "Antigua and Barbuda", flag: "🇦🇬", flagUrl: "https://flagcdn.com/ag.svg" },
            { name: "Argentina", flag: "🇦🇷", flagUrl: "https://flagcdn.com/ar.svg" },
            { name: "Armenia", flag: "🇦🇲", flagUrl: "https://flagcdn.com/am.svg" },
            { name: "Australia", flag: "🇦🇺", flagUrl: "https://flagcdn.com/au.svg" },
            { name: "Austria", flag: "🇦🇹", flagUrl: "https://flagcdn.com/at.svg" },
            { name: "Azerbaijan", flag: "🇦🇿", flagUrl: "https://flagcdn.com/az.svg" },
            { name: "Bahamas", flag: "🇧🇸", flagUrl: "https://flagcdn.com/bs.svg" },
            { name: "Bahrain", flag: "🇧🇭", flagUrl: "https://flagcdn.com/bh.svg" },
            { name: "Bangladesh", flag: "🇧🇩", flagUrl: "https://flagcdn.com/bd.svg" },
            { name: "Barbados", flag: "🇧🇧", flagUrl: "https://flagcdn.com/bb.svg" },
            { name: "Belarus", flag: "🇧🇾", flagUrl: "https://flagcdn.com/by.svg" },
            { name: "Belgium", flag: "🇧🇪", flagUrl: "https://flagcdn.com/be.svg" },
            { name: "Belize", flag: "🇧🇿", flagUrl: "https://flagcdn.com/bz.svg" },
            { name: "Benin", flag: "🇧🇯", flagUrl: "https://flagcdn.com/bj.svg" },
            { name: "Bhutan", flag: "🇧🇹", flagUrl: "https://flagcdn.com/bt.svg" },
            { name: "Bolivia", flag: "🇧🇴", flagUrl: "https://flagcdn.com/bo.svg" },
            { name: "Bosnia and Herzegovina", flag: "🇧🇦", flagUrl: "https://flagcdn.com/ba.svg" },
            { name: "Botswana", flag: "🇧🇼", flagUrl: "https://flagcdn.com/bw.svg" },
            { name: "Brazil", flag: "🇧🇷", flagUrl: "https://flagcdn.com/br.svg" },
            { name: "Brunei", flag: "🇧🇳", flagUrl: "https://flagcdn.com/bn.svg" },
            { name: "Bulgaria", flag: "🇧🇬", flagUrl: "https://flagcdn.com/bg.svg" },
            { name: "Burkina Faso", flag: "🇧🇫", flagUrl: "https://flagcdn.com/bf.svg" },
            { name: "Burundi", flag: "🇧🇮", flagUrl: "https://flagcdn.com/bi.svg" },
            { name: "Cabo Verde", flag: "🇨🇻", flagUrl: "https://flagcdn.com/cv.svg" },
            { name: "Cambodia", flag: "🇰🇭", flagUrl: "https://flagcdn.com/kh.svg" },
            { name: "Cameroon", flag: "🇨🇲", flagUrl: "https://flagcdn.com/cm.svg" },
            { name: "Canada", flag: "🇨🇦", flagUrl: "https://flagcdn.com/ca.svg" },
            { name: "Central African Republic", flag: "🇨🇫", flagUrl: "https://flagcdn.com/cf.svg" },
            { name: "Chad", flag: "🇹🇩", flagUrl: "https://flagcdn.com/td.svg" },
            { name: "Chile", flag: "🇨🇱", flagUrl: "https://flagcdn.com/cl.svg" },
            { name: "China", flag: "🇨🇳", flagUrl: "https://flagcdn.com/cn.svg" },
            { name: "Colombia", flag: "🇨🇴", flagUrl: "https://flagcdn.com/co.svg" },
            { name: "Comoros", flag: "🇰🇲", flagUrl: "https://flagcdn.com/km.svg" },
            { name: "Congo", flag: "🇨🇬", flagUrl: "https://flagcdn.com/cg.svg" },
            { name: "Costa Rica", flag: "🇨🇷", flagUrl: "https://flagcdn.com/cr.svg" },
            { name: "Côte d'Ivoire", flag: "🇨🇮", flagUrl: "https://flagcdn.com/ci.svg" },
            { name: "Croatia", flag: "🇭🇷", flagUrl: "https://flagcdn.com/hr.svg" },
            { name: "Cuba", flag: "🇨🇺", flagUrl: "https://flagcdn.com/cu.svg" },
            { name: "Cyprus", flag: "🇨🇾", flagUrl: "https://flagcdn.com/cy.svg" },
            { name: "Czech Republic", flag: "🇨🇿", flagUrl: "https://flagcdn.com/cz.svg" },
            { name: "Democratic Republic of the Congo", flag: "🇨🇩", flagUrl: "https://flagcdn.com/cd.svg" },
            { name: "Denmark", flag: "🇩🇰", flagUrl: "https://flagcdn.com/dk.svg" },
            { name: "Djibouti", flag: "🇩🇯", flagUrl: "https://flagcdn.com/dj.svg" },
            { name: "Dominica", flag: "🇩🇲", flagUrl: "https://flagcdn.com/dm.svg" },
            { name: "Dominican Republic", flag: "🇩🇴", flagUrl: "https://flagcdn.com/do.svg" },
            { name: "Ecuador", flag: "🇪🇨", flagUrl: "https://flagcdn.com/ec.svg" },
            { name: "Egypt", flag: "🇪🇬", flagUrl: "https://flagcdn.com/eg.svg" },
            { name: "El Salvador", flag: "🇸🇻", flagUrl: "https://flagcdn.com/sv.svg" },
            { name: "Equatorial Guinea", flag: "🇬🇶", flagUrl: "https://flagcdn.com/gq.svg" },
            { name: "Eritrea", flag: "🇪🇷", flagUrl: "https://flagcdn.com/er.svg" },
            { name: "Estonia", flag: "🇪🇪", flagUrl: "https://flagcdn.com/ee.svg" },
            { name: "Eswatini", flag: "🇸🇿", flagUrl: "https://flagcdn.com/sz.svg" },
            { name: "Ethiopia", flag: "🇪🇹", flagUrl: "https://flagcdn.com/et.svg" },
            { name: "Fiji", flag: "🇫🇯", flagUrl: "https://flagcdn.com/fj.svg" },
            { name: "Finland", flag: "🇫🇮", flagUrl: "https://flagcdn.com/fi.svg" },
            { name: "France", flag: "🇫🇷", flagUrl: "https://flagcdn.com/fr.svg" },
            { name: "Gabon", flag: "🇬🇦", flagUrl: "https://flagcdn.com/ga.svg" },
            { name: "Gambia", flag: "🇬🇲", flagUrl: "https://flagcdn.com/gm.svg" },
            { name: "Georgia", flag: "🇬🇪", flagUrl: "https://flagcdn.com/ge.svg" },
            { name: "Germany", flag: "🇩🇪", flagUrl: "https://flagcdn.com/de.svg" },
            { name: "Ghana", flag: "🇬🇭", flagUrl: "https://flagcdn.com/gh.svg" },
            { name: "Greece", flag: "🇬🇷", flagUrl: "https://flagcdn.com/gr.svg" },
            { name: "Grenada", flag: "🇬🇩", flagUrl: "https://flagcdn.com/gd.svg" },
            { name: "Guatemala", flag: "🇬🇹", flagUrl: "https://flagcdn.com/gt.svg" },
            { name: "Guinea", flag: "🇬🇳", flagUrl: "https://flagcdn.com/gn.svg" },
            { name: "Guinea-Bissau", flag: "🇬🇼", flagUrl: "https://flagcdn.com/gw.svg" },
            { name: "Guyana", flag: "🇬🇾", flagUrl: "https://flagcdn.com/gy.svg" },
            { name: "Haiti", flag: "🇭🇹", flagUrl: "https://flagcdn.com/ht.svg" },
            { name: "Honduras", flag: "🇭🇳", flagUrl: "https://flagcdn.com/hn.svg" },
            { name: "Hungary", flag: "🇭🇺", flagUrl: "https://flagcdn.com/hu.svg" },
            { name: "Iceland", flag: "🇮🇸", flagUrl: "https://flagcdn.com/is.svg" },
            { name: "India", flag: "🇮🇳", flagUrl: "https://flagcdn.com/in.svg" },
            { name: "Indonesia", flag: "🇮🇩", flagUrl: "https://flagcdn.com/id.svg" },
            { name: "Iran", flag: "🇮🇷", flagUrl: "https://flagcdn.com/ir.svg" },
            { name: "Iraq", flag: "🇮🇶", flagUrl: "https://flagcdn.com/iq.svg" },
            { name: "Ireland", flag: "🇮🇪", flagUrl: "https://flagcdn.com/ie.svg" },
            { name: "Israel", flag: "🇮🇱", flagUrl: "https://flagcdn.com/il.svg" },
            { name: "Italy", flag: "🇮🇹", flagUrl: "https://flagcdn.com/it.svg" },
            { name: "Jamaica", flag: "🇯🇲", flagUrl: "https://flagcdn.com/jm.svg" },
            { name: "Japan", flag: "🇯🇵", flagUrl: "https://flagcdn.com/jp.svg" },
            { name: "Jordan", flag: "🇯🇴", flagUrl: "https://flagcdn.com/jo.svg" },
            { name: "Kazakhstan", flag: "🇰🇿", flagUrl: "https://flagcdn.com/kz.svg" },
            { name: "Kenya", flag: "🇰🇪", flagUrl: "https://flagcdn.com/ke.svg" },
            { name: "Kiribati", flag: "🇰🇮", flagUrl: "https://flagcdn.com/ki.svg" },
            { name: "Kuwait", flag: "🇰🇼", flagUrl: "https://flagcdn.com/kw.svg" },
            { name: "Kyrgyzstan", flag: "🇰🇬", flagUrl: "https://flagcdn.com/kg.svg" },
            { name: "Laos", flag: "🇱🇦", flagUrl: "https://flagcdn.com/la.svg" },
            { name: "Latvia", flag: "🇱🇻", flagUrl: "https://flagcdn.com/lv.svg" },
            { name: "Lebanon", flag: "🇱🇧", flagUrl: "https://flagcdn.com/lb.svg" },
            { name: "Lesotho", flag: "🇱🇸", flagUrl: "https://flagcdn.com/ls.svg" },
            { name: "Liberia", flag: "🇱🇷", flagUrl: "https://flagcdn.com/lr.svg" },
            { name: "Libya", flag: "🇱🇾", flagUrl: "https://flagcdn.com/ly.svg" },
            { name: "Liechtenstein", flag: "🇱🇮", flagUrl: "https://flagcdn.com/li.svg" },
            { name: "Lithuania", flag: "🇱🇹", flagUrl: "https://flagcdn.com/lt.svg" },
            { name: "Luxembourg", flag: "🇱🇺", flagUrl: "https://flagcdn.com/lu.svg" },
            { name: "Madagascar", flag: "🇲🇬", flagUrl: "https://flagcdn.com/mg.svg" },
            { name: "Malawi", flag: "🇲🇼", flagUrl: "https://flagcdn.com/mw.svg" },
            { name: "Malaysia", flag: "🇲🇾", flagUrl: "https://flagcdn.com/my.svg" },
            { name: "Maldives", flag: "🇲🇻", flagUrl: "https://flagcdn.com/mv.svg" },
            { name: "Mali", flag: "🇲🇱", flagUrl: "https://flagcdn.com/ml.svg" },
            { name: "Malta", flag: "🇲🇹", flagUrl: "https://flagcdn.com/mt.svg" },
            { name: "Marshall Islands", flag: "🇲🇭", flagUrl: "https://flagcdn.com/mh.svg" },
            { name: "Mauritania", flag: "🇲🇷", flagUrl: "https://flagcdn.com/mr.svg" },
            { name: "Mauritius", flag: "🇲🇺", flagUrl: "https://flagcdn.com/mu.svg" },
            { name: "Mexico", flag: "🇲🇽", flagUrl: "https://flagcdn.com/mx.svg" },
            { name: "Micronesia", flag: "🇫🇲", flagUrl: "https://flagcdn.com/fm.svg" },
            { name: "Moldova", flag: "🇲🇩", flagUrl: "https://flagcdn.com/md.svg" },
            { name: "Monaco", flag: "🇲🇨", flagUrl: "https://flagcdn.com/mc.svg" },
            { name: "Mongolia", flag: "🇲🇳", flagUrl: "https://flagcdn.com/mn.svg" },
            { name: "Montenegro", flag: "🇲🇪", flagUrl: "https://flagcdn.com/me.svg" },
            { name: "Morocco", flag: "🇲🇦", flagUrl: "https://flagcdn.com/ma.svg" },
            { name: "Mozambique", flag: "🇲🇿", flagUrl: "https://flagcdn.com/mz.svg" },
            { name: "Myanmar", flag: "🇲🇲", flagUrl: "https://flagcdn.com/mm.svg" },
            { name: "Namibia", flag: "🇳🇦", flagUrl: "https://flagcdn.com/na.svg" },
            { name: "Nauru", flag: "🇳🇷", flagUrl: "https://flagcdn.com/nr.svg" },
            { name: "Nepal", flag: "🇳🇵", flagUrl: "https://flagcdn.com/np.svg" },
            { name: "Netherlands", flag: "🇳🇱", flagUrl: "https://flagcdn.com/nl.svg" },
            { name: "New Zealand", flag: "🇳🇿", flagUrl: "https://flagcdn.com/nz.svg" },
            { name: "Nicaragua", flag: "🇳🇮", flagUrl: "https://flagcdn.com/ni.svg" },
            { name: "Niger", flag: "🇳🇪", flagUrl: "https://flagcdn.com/ne.svg" },
            { name: "Nigeria", flag: "🇳🇬", flagUrl: "https://flagcdn.com/ng.svg" },
            { name: "North Korea", flag: "🇰🇵", flagUrl: "https://flagcdn.com/kp.svg" },
            { name: "North Macedonia", flag: "🇲🇰", flagUrl: "https://flagcdn.com/mk.svg" },
            { name: "Norway", flag: "🇳🇴", flagUrl: "https://flagcdn.com/no.svg" },
            { name: "Oman", flag: "🇴🇲", flagUrl: "https://flagcdn.com/om.svg" },
            { name: "Pakistan", flag: "🇵🇰", flagUrl: "https://flagcdn.com/pk.svg" },
            { name: "Palau", flag: "🇵🇼", flagUrl: "https://flagcdn.com/pw.svg" },
            { name: "Panama", flag: "🇵🇦", flagUrl: "https://flagcdn.com/pa.svg" },
            { name: "Papua New Guinea", flag: "🇵🇬", flagUrl: "https://flagcdn.com/pg.svg" },
            { name: "Paraguay", flag: "🇵🇾", flagUrl: "https://flagcdn.com/py.svg" },
            { name: "Peru", flag: "🇵🇪", flagUrl: "https://flagcdn.com/pe.svg" },
            { name: "Philippines", flag: "🇵🇭", flagUrl: "https://flagcdn.com/ph.svg" },
            { name: "Poland", flag: "🇵🇱", flagUrl: "https://flagcdn.com/pl.svg" },
            { name: "Portugal", flag: "🇵🇹", flagUrl: "https://flagcdn.com/pt.svg" },
            { name: "Qatar", flag: "🇶🇦", flagUrl: "https://flagcdn.com/qa.svg" },
            { name: "Romania", flag: "🇷🇴", flagUrl: "https://flagcdn.com/ro.svg" },
            { name: "Russia", flag: "🇷🇺", flagUrl: "https://flagcdn.com/ru.svg" },
            { name: "Rwanda", flag: "🇷🇼", flagUrl: "https://flagcdn.com/rw.svg" },
            { name: "Saint Kitts and Nevis", flag: "🇰🇳", flagUrl: "https://flagcdn.com/kn.svg" },
            { name: "Saint Lucia", flag: "🇱🇨", flagUrl: "https://flagcdn.com/lc.svg" },
            { name: "Saint Vincent and the Grenadines", flag: "🇻🇨", flagUrl: "https://flagcdn.com/vc.svg" },
            { name: "Samoa", flag: "🇼🇸", flagUrl: "https://flagcdn.com/ws.svg" },
            { name: "San Marino", flag: "🇸🇲", flagUrl: "https://flagcdn.com/sm.svg" },
            { name: "São Tomé and Príncipe", flag: "🇸🇹", flagUrl: "https://flagcdn.com/st.svg" },
            { name: "Saudi Arabia", flag: "🇸🇦", flagUrl: "https://flagcdn.com/sa.svg" },
            { name: "Senegal", flag: "🇸🇳", flagUrl: "https://flagcdn.com/sn.svg" },
            { name: "Serbia", flag: "🇷🇸", flagUrl: "https://flagcdn.com/rs.svg" },
            { name: "Seychelles", flag: "🇸🇨", flagUrl: "https://flagcdn.com/sc.svg" },
            { name: "Sierra Leone", flag: "🇸🇱", flagUrl: "https://flagcdn.com/sl.svg" },
            { name: "Singapore", flag: "🇸🇬", flagUrl: "https://flagcdn.com/sg.svg" },
            { name: "Slovakia", flag: "🇸🇰", flagUrl: "https://flagcdn.com/sk.svg" },
            { name: "Slovenia", flag: "🇸🇮", flagUrl: "https://flagcdn.com/si.svg" },
            { name: "Solomon Islands", flag: "🇸🇧", flagUrl: "https://flagcdn.com/sb.svg" },
            { name: "Somalia", flag: "🇸🇴", flagUrl: "https://flagcdn.com/so.svg" },
            { name: "South Africa", flag: "🇿🇦", flagUrl: "https://flagcdn.com/za.svg" },
            { name: "South Korea", flag: "🇰🇷", flagUrl: "https://flagcdn.com/kr.svg" },
            { name: "South Sudan", flag: "🇸🇸", flagUrl: "https://flagcdn.com/ss.svg" },
            { name: "Spain", flag: "🇪🇸", flagUrl: "https://flagcdn.com/es.svg" },
            { name: "Sri Lanka", flag: "🇱🇰", flagUrl: "https://flagcdn.com/lk.svg" },
            { name: "Sudan", flag: "🇸🇩", flagUrl: "https://flagcdn.com/sd.svg" },
            { name: "Suriname", flag: "🇸🇷", flagUrl: "https://flagcdn.com/sr.svg" },
            { name: "Sweden", flag: "🇸🇪", flagUrl: "https://flagcdn.com/se.svg" },
            { name: "Switzerland", flag: "🇨🇭", flagUrl: "https://flagcdn.com/ch.svg" },
            { name: "Syria", flag: "🇸🇾", flagUrl: "https://flagcdn.com/sy.svg" },
            { name: "Tajikistan", flag: "🇹🇯", flagUrl: "https://flagcdn.com/tj.svg" },
            { name: "Tanzania", flag: "🇹🇿", flagUrl: "https://flagcdn.com/tz.svg" },
            { name: "Thailand", flag: "🇹🇭", flagUrl: "https://flagcdn.com/th.svg" },
            { name: "Timor-Leste", flag: "🇹🇱", flagUrl: "https://flagcdn.com/tl.svg" },
            { name: "Togo", flag: "🇹🇬", flagUrl: "https://flagcdn.com/tg.svg" },
            { name: "Tonga", flag: "🇹🇴", flagUrl: "https://flagcdn.com/to.svg" },
            { name: "Trinidad and Tobago", flag: "🇹🇹", flagUrl: "https://flagcdn.com/tt.svg" },
            { name: "Tunisia", flag: "🇹🇳", flagUrl: "https://flagcdn.com/tn.svg" },
            { name: "Turkey", flag: "🇹🇷", flagUrl: "https://flagcdn.com/tr.svg" },
            { name: "Turkmenistan", flag: "🇹🇲", flagUrl: "https://flagcdn.com/tm.svg" },
            { name: "Tuvalu", flag: "🇹🇻", flagUrl: "https://flagcdn.com/tv.svg" },
            { name: "Uganda", flag: "🇺🇬", flagUrl: "https://flagcdn.com/ug.svg" },
            { name: "Ukraine", flag: "🇺🇦", flagUrl: "https://flagcdn.com/ua.svg" },
            { name: "United Arab Emirates", flag: "🇦🇪", flagUrl: "https://flagcdn.com/ae.svg" },
            { name: "United Kingdom", flag: "🇬🇧", flagUrl: "https://flagcdn.com/gb.svg" },
            { name: "United States", flag: "🇺🇸", flagUrl: "https://flagcdn.com/us.svg" },
            { name: "Uruguay", flag: "🇺🇾", flagUrl: "https://flagcdn.com/uy.svg" },
            { name: "Uzbekistan", flag: "🇺🇿", flagUrl: "https://flagcdn.com/uz.svg" },
            { name: "Vanuatu", flag: "🇻🇺", flagUrl: "https://flagcdn.com/vu.svg" },
            { name: "Venezuela", flag: "🇻🇪", flagUrl: "https://flagcdn.com/ve.svg" },
            { name: "Vietnam", flag: "🇻🇳", flagUrl: "https://flagcdn.com/vn.svg" },
            { name: "Yemen", flag: "🇾🇪", flagUrl: "https://flagcdn.com/ye.svg" },
            { name: "Zambia", flag: "🇿🇲", flagUrl: "https://flagcdn.com/zm.svg" },
            { name: "Zimbabwe", flag: "🇿🇼", flagUrl: "https://flagcdn.com/zw.svg" },
            { name: "Holy See", flag: "🇻🇦", flagUrl: "https://flagcdn.com/va.svg" },
            { name: "State of Palestine", flag: "🇵🇸", flagUrl: "https://flagcdn.com/ps.svg" }
        ];

// ==========================================
// SMART FLAG LOOKUP FUNCTIONS (UPDATED)
// ==========================================
function getVisaFlagUrl(countryName) {
    if (!countryName) return null;
    
    // 1. Check for exact match
    let country = visaCountries.find(c => c.name === countryName);
    if (country) return country.flagUrl;
    
    // 2. Check if the country name contains the base name (e.g., "Spain (seasonal)" contains "Spain")
    country = visaCountries.find(c => countryName.toLowerCase().includes(c.name.toLowerCase()));
    if (country) return country.flagUrl;
    
    // 3. Check if the base name is contained within the country name (e.g., "Côte d'Ivoire" is inside "Côte d'Ivoire (eVisa)")
    country = visaCountries.find(c => c.name.toLowerCase().includes(countryName.toLowerCase()));
    if (country) return country.flagUrl;
    
    // 4. Fallback to null if no match found
    return null;
}

function getVisaFlagEmoji(countryName) {
    if (!countryName) return '🌍';
    
    // 1. Check for exact match
    let country = visaCountries.find(c => c.name === countryName);
    if (country) return country.flag;
    
    // 2. Check if the country name contains the base name
    country = visaCountries.find(c => countryName.toLowerCase().includes(c.name.toLowerCase()));
    if (country) return country.flag;
    
    // 3. Check if the base name is contained within the country name
    country = visaCountries.find(c => c.name.toLowerCase().includes(countryName.toLowerCase()));
    if (country) return country.flag;
    
    // 4. Fallback to globe emoji
    return '🌍';
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

// UPDATED: createVisaDots() now limits to exactly 4 dots
function createVisaDots() {
    const dotsContainer = document.getElementById('visa-slider-dots');
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    const visible = getVisaVisibleCount();
    const totalSlides = Math.min(4, Math.max(1, visaCards.length - visible + 1));

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
    const totalSlides = Math.min(4, Math.max(1, visaCards.length - visible + 1));
    currentVisaIndex = Math.max(0, Math.min(index, totalSlides - 1));

    const offset = currentVisaIndex * getVisaCardWidth();
    track.style.transform = `translateX(-${offset}px)`;

    document.querySelectorAll('.visa-slider-dot').forEach((d, i) => {
        d.classList.toggle('active', i === currentVisaIndex);
    });
}

function nextVisaSlide() {
    const visible = getVisaVisibleCount();
    const totalSlides = Math.min(4, Math.max(1, visaCards.length - visible + 1));
    const next = (currentVisaIndex + 1) % totalSlides;
    goToVisaSlide(next);
}

function prevVisaSlide() {
    const visible = getVisaVisibleCount();
    const totalSlides = Math.min(4, Math.max(1, visaCards.length - visible + 1));
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