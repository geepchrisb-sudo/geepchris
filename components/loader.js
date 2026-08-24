document.addEventListener("DOMContentLoaded", async function() {
    // 1. LOAD HEADER
    const headerEl = document.getElementById("header");
    if (headerEl) {
        try {
            const res = await fetch("/components/header.html");
            headerEl.innerHTML = await res.text();
            
            // Inject Header CSS
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "/components/header.css";
            document.head.appendChild(link);

            // Execute Header JS
            const script = document.createElement("script");
            script.src = "/components/header.js";
            document.body.appendChild(script);
        } catch (e) { console.error("Header load failed:", e); }
    }

    // 2. LOAD FOOTER
    const footerEl = document.getElementById("footer");
    if (footerEl) {
        try {
            const res = await fetch("/components/footer.html");
            footerEl.innerHTML = await res.text();
            
            // Inject Footer CSS
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "/components/footer.css";
            document.head.appendChild(link);

            // Execute Footer JS
            const script = document.createElement("script");
            script.src = "/components/footer.js";
            document.body.appendChild(script);
        } catch (e) { console.error("Footer load failed:", e); }
    }
});