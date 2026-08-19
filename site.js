(function () {
    "use strict";

    const pages = [
        ["home", "Home", "index.html"],
        ["research", "Research", "research.html"],
        ["team", "Team", "team.html"],
        ["publications", "Publications", "projects.html"],
        ["data", "Data", "data.html"],
        ["teaching", "Teaching", "teaching.html"],
        ["news", "News", "news.html"]
    ];

    const activePage = document.body.dataset.page || "";
    const headerTarget = document.querySelector("[data-site-header]");
    const footerTarget = document.querySelector("[data-site-footer]");

    if (headerTarget) {
        const links = pages.map(([key, label, href]) => {
            const current = key === activePage ? ' aria-current="page"' : "";
            return `<a href="${href}"${current}>${label}</a>`;
        }).join("");

        headerTarget.innerHTML = `
            <a class="skip-link" href="#main-content">Skip to main content</a>
            <header class="site-header">
                <div class="header-inner">
                    <a class="site-name" href="index.html" aria-label="Alloy Theory Laboratory home">
                        <span class="brand-primary">Alloy Theory</span>
                        <span class="brand-secondary">Laboratory</span>
                    </a>
                    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-navigation">Menu</button>
                    <nav class="site-nav" id="site-navigation" aria-label="Primary navigation">${links}</nav>
                </div>
            </header>`;

        const toggle = headerTarget.querySelector(".nav-toggle");
        const nav = headerTarget.querySelector(".site-nav");
        toggle.addEventListener("click", function () {
            const isOpen = nav.classList.toggle("open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });

        nav.addEventListener("click", function (event) {
            if (event.target.closest("a")) {
                nav.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    if (footerTarget) {
        footerTarget.innerHTML = `
            <footer class="site-footer" id="site-footer">
                <div class="footer-inner">
                    <div class="footer-brand">
                        <a href="https://www.uwyo.edu/" target="_blank" rel="noopener noreferrer" aria-label="University of Wyoming website">
                            <img class="uw-signature" src="assets/uw/UWyo-logo.png" alt="University of Wyoming">
                        </a>
                    </div>
                    <div class="footer-identity">
                        <strong>Alloy Theory Laboratory</strong>
                        <p>Prince Sharma · Assistant Professor</p>
                        <p>Department of Mechanical Engineering · School of Energy Resources</p>
                        <a class="footer-email" href="mailto:psharma3@uwyo.edu">psharma3@uwyo.edu</a>
                        <nav class="footer-links" aria-label="Profile and resource links">
                            <a href="data.html">Code &amp; Data</a>
                            <a href="https://www.uwyo.edu/mechanical/faculty-staff/faculty/prince-sharma/index.html" target="_blank" rel="noopener noreferrer">UW Profile</a>
                            <a href="https://scholar.google.com/citations?hl=en&amp;user=YZE2WrEAAAAJ&amp;view_op=list_works&amp;sortby=pubdate" target="_blank" rel="noopener noreferrer">Google Scholar</a>
                            <a href="https://orcid.org/0000-0002-1833-8785" target="_blank" rel="noopener noreferrer">ORCID</a>
                            <a href="https://github.com/pshatom/" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://www.linkedin.com/in/pshatom/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </nav>
                    </div>
                </div>
                <div class="footer-bottom">&copy; ${new Date().getFullYear()} Alloy Theory Laboratory · University of Wyoming</div>
            </footer>`;
    }

    document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
        const rel = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
        rel.add("noopener");
        rel.add("noreferrer");
        link.setAttribute("rel", Array.from(rel).join(" "));
    });

    // When this package is previewed without the existing repository assets,
    // fall back to the currently published copies. Deployed local assets remain
    // the first choice and require no path changes.
    document.querySelectorAll("img[src]").forEach(function (image) {
        const usePublishedFallback = function () {
            const source = image.getAttribute("src") || "";
            if (!source || source.startsWith("http") || image.dataset.fallbackTried) return;
            image.dataset.fallbackTried = "true";
            image.src = `https://pshatom.github.io/${source.replace(/^\.\//, "")}`;
        };

        if (image.complete && image.naturalWidth === 0) {
            usePublishedFallback();
        } else {
            image.addEventListener("error", usePublishedFallback, { once: true });
        }
    });
}());
