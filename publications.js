(function () {
    "use strict";

    // Add future papers as one object in this array. Optional fields can be left blank.
    const publications = [
        {
            year: 2026,
            title: "Direct observation of surface local chemical ordering in CoCrFeMnNi high-entropy alloys",
            authors: "Lauren Kim, Prince Sharma, Che-Wei Tsai, E-Wen Huang, Peter K. Liaw, Jien-Wei Yeh, Ganesh Balasubramanian, and TeYu Chien",
            journal: "Nature Communications",
            doi: "10.1038/s41467-026-71170-z",
            topic: "Alloy Design & Disorder",
            type: "Article",
            featured: true
        },
        {
            year: 2025,
            title: "Influence of Isoelectronic Mass Modulation on Phonon Decay and Transport in Layered Pnictogen-Carbon Systems",
            authors: "Prince Sharma, Prashant Singh, and Ganesh Balasubramanian",
            journal: "Acta Materialia",
            doi: "",
            topic: "Phonons & Thermal Transport",
            type: "Article",
            featured: true
        },
        {
            year: 2025,
            title: "Optimal interplay of charge localization, lattice dynamics and slip systems drives elastic softening in dilute tungsten alloys with rhenium additives",
            authors: "Prince Sharma, W. C. Tucker, and Ganesh Balasubramanian",
            journal: "International Journal of Refractory Metals and Hard Materials",
            doi: "10.1016/j.ijrmhm.2025.107086",
            topic: "Extreme-Environment Materials",
            type: "Article",
            featured: true
        },
        {
            year: 2025,
            title: "Lattice Dynamics and Thermal Properties of TiₓZr₁₋ₓNiSn Half-Heusler Alloys",
            authors: "Prince Sharma",
            journal: "Alloys",
            doi: "10.3390/alloys4010003",
            topic: "Phonons & Thermal Transport",
            type: "Article"
        },
        {
            year: 2024,
            title: "Piezoelectricity in Chalcogenide Perovskites",
            authors: "S. S. H. Abir, S. Sharma, Prince Sharma, S. Karla, G. Balasubramanian, J. Samuel, and N. Koratkar",
            journal: "Nature Communications",
            doi: "10.1038/s41467-024-50130-5",
            topic: "Functional & Manufacturing",
            type: "Article",
            featured: true
        },
        {
            year: 2024,
            title: "Accelerated intermetallic phase amorphization in a high-entropy alloy powder",
            authors: "Prince Sharma, P. M. Gandhi, K.-L. Chintersingh, M. Schoenitz, E. L. Dreizin, S.-C. Liou, and G. Balasubramanian",
            journal: "Journal of Magnesium and Alloys",
            doi: "10.1016/j.jma.2024.05.013",
            topic: "Alloy Design & Disorder",
            type: "Article"
        },
        {
            year: 2024,
            title: "Advances in Nickel-Containing High-Entropy Alloys: From Fundamentals to Additive Manufacturing",
            authors: "A. K. Gupta, A. Choudhari, A. Rane, A. Tiwari, Prince Sharma, A. Gupta, P. Sapale, R. T. A. Tirumala, R. Muthaiah, and A. Kumar",
            journal: "Materials",
            doi: "10.3390/ma17153826",
            topic: "Functional & Manufacturing",
            type: "Review"
        },
        {
            year: 2024,
            title: "Additively manufactured lightweight and hard high-entropy alloys by thermally-activated solvent extraction",
            authors: "Prince Sharma, C. Das, P. Sreeramagiri, and G. Balasubramanian",
            journal: "High Entropy Alloys & Materials",
            doi: "10.1007/s44210-024-00029-z",
            topic: "Functional & Manufacturing",
            type: "Article"
        },
        {
            year: 2024,
            title: "Engineering phonon transport through cation disorder in dimensionally constricted high-entropy MXene",
            authors: "Prince Sharma, P. Singh, and G. Balasubramanian",
            journal: "Carbon",
            doi: "10.1016/j.carbon.2024.119015",
            topic: "Phonons & Thermal Transport",
            type: "Article",
            featured: true
        },
        {
            year: 2024,
            title: "Unraveling the connection of electronic and phononic structure with mechanical properties of commercial AZ80 alloy",
            authors: "Prince Sharma, P. Singh, G. Balasubramanian, and D. D. Johnson",
            journal: "Materials Letters",
            doi: "10.1016/j.matlet.2024.136501",
            topic: "Phonons & Thermal Transport",
            type: "Article"
        },
        {
            year: 2024,
            title: "Distinguishing Elements at the Sub-Nanometer Scale on the Surface of a High Entropy Alloy",
            authors: "L. Kim, W. R. Scougale, Prince Sharma, N. Shirato, S. Wieghold, R. Volker, W. Chen, G. Balasubramanian, and T. Y. Chien",
            journal: "Advanced Materials",
            doi: "10.1002/adma.202402442",
            topic: "Alloy Design & Disorder",
            type: "Article",
            featured: true
        },
        {
            year: 2024,
            title: "Understanding the effect of refractory metal chemistry on the stacking fault energy and mechanical property of Cantor-based multi-principal element alloys",
            authors: "P. Singh, W. Trehern, B. Vela, Prince Sharma, T. Kirk, Z. Pei, R. Arroyave, M. C. Gao, and D. D. Johnson",
            journal: "International Journal of Plasticity",
            doi: "10.1016/j.ijplas.2024.104020",
            topic: "Extreme-Environment Materials",
            type: "Article"
        },
        {
            year: 2024,
            title: "Alloying Effects on the Transport Properties of Refractory High-Entropy Alloys",
            authors: "P. Singh, C. Acemi, A. Kuchibhotla, B. Vela, Prince Sharma, W. Zhang, P. Mason, G. Balasubramanian, I. Karaman, R. Arroyave, C. M. Hipwell, and D. D. Johnson",
            journal: "Acta Materialia",
            doi: "10.1016/j.actamat.2024.120032",
            topic: "Extreme-Environment Materials",
            type: "Article"
        },
        {
            year: 2024,
            title: "Solid State Reduction Driven Synthesis of Manganese Containing Multi-Principal Component Alloys",
            authors: "W. Jin, Prince Sharma, P. Singh, A. Kundu, G. Balasubramanian, and H. M. Chan",
            journal: "Metallurgical and Materials Transactions A",
            doi: "10.1007/s11661-024-07490-w",
            topic: "Functional & Manufacturing",
            type: "Article"
        },
        {
            year: 2024,
            title: "Multiscale modeling-driven synthesis of Cu₄₀Zn₂₄Ni₂₄Ag₈Hg₄ high-entropy alloy with antibacterial properties",
            authors: "Prince Sharma, S. Rohila, U. Hasan, P. H. Krishna, C. Ugwuegbu, A. Tiwari, and M. Joshi",
            journal: "Nano-Structures & Nano-Objects",
            doi: "10.1016/j.nanoso.2024.101391",
            topic: "Functional & Manufacturing",
            type: "Article"
        },
        {
            year: 2023,
            title: "Electronic and Lattice Distortions Induce Elastic Softening in Refractory Multicomponent Borides",
            authors: "Prince Sharma and G. Balasubramanian",
            journal: "Chemistry of Materials",
            doi: "10.1021/acs.chemmater.3c01086",
            topic: "Extreme-Environment Materials",
            type: "Article"
        },
        {
            year: 2023,
            title: "Rapid discovery of high hardness multi-principal-element alloys using a generative adversarial network model",
            authors: "A. Roy, A. Hussain, Prince Sharma, G. Balasubramanian, M. F. N. Taufique, R. Devanathan, P. Singh, and D. D. Johnson",
            journal: "Acta Materialia",
            doi: "10.1016/j.actamat.2023.119177",
            topic: "Data-Driven Discovery",
            type: "Article"
        },
        {
            year: 2023,
            title: "Mechanical Properties of Cross Rolled CoCrFeMnNi High Entropy Alloy",
            authors: "A. D. Nakhate, N. Kumar, Prince Sharma, and P. C. Yadav",
            journal: "Journal of Alloys and Compounds",
            doi: "10.1016/j.jallcom.2023.172307",
            topic: "Alloy Design & Disorder",
            type: "Article"
        },
        {
            year: 2023,
            title: "High Configurational Entropy Driven Increased Heat Capacity of Refractory Multicomponent Di-Silicides",
            authors: "Prince Sharma and G. Balasubramanian",
            journal: "Materialia",
            doi: "10.1016/j.mtla.2023.101861",
            topic: "Phonons & Thermal Transport",
            type: "Article"
        },
        {
            year: 2023,
            title: "Examining solid-state sintering of AlCoCrFeNi multi-principal element alloy by molecular simulations",
            authors: "P. Sreeramagiri, Prince Sharma, C. Das, and G. Balasubramanian",
            journal: "Computational Materials Science",
            doi: "10.1016/j.commatsci.2022.1118",
            topic: "Functional & Manufacturing",
            type: "Article"
        },
        {
            year: 2022,
            title: "Derivation of ‘n=2j-3’ statically determinant spatial truss formula by modified Chebychev-Grübler-Kutzbach criterion",
            authors: "Prince Sharma",
            journal: "Materials Today: Proceedings",
            doi: "10.1016/j.matpr.2021.09.146",
            topic: "Functional & Manufacturing",
            type: "Conference Paper"
        },
        {
            year: 2022,
            title: "A brief account of man, material and manufacturing: On the timeline",
            authors: "Prince Sharma",
            journal: "Materials Today: Proceedings",
            doi: "10.1016/j.matpr.2022.07.016",
            topic: "Functional & Manufacturing",
            type: "Perspective"
        },
        {
            year: 2021,
            title: "Review on Surface Treatment for Implant Infection via Gentamicin and Antibiotic Releasing Coatings",
            authors: "A. Tiwari, Prince Sharma, B. Vishwamitra, and G. Singh",
            journal: "Coatings",
            doi: "10.3390/coatings11081006",
            topic: "Functional & Manufacturing",
            type: "Review"
        },
        {
            year: 2021,
            title: "Magnesium Containing High Entropy Alloys",
            authors: "Prince Sharma, N. Naushin, S. Rohila, and A. Tiwari",
            journal: "IntechOpen",
            doi: "10.5772/intechopen.98557",
            topic: "Alloy Design & Disorder",
            type: "Book Chapter"
        }
    ];

    const searchInput = document.getElementById("publication-search");
    const topicSelect = document.getElementById("publication-topic");
    const yearSelect = document.getElementById("publication-year");
    const countTarget = document.getElementById("publication-count");
    const listTarget = document.getElementById("publication-list");

    if (!searchInput || !topicSelect || !yearSelect || !countTarget || !listTarget) return;

    const escapeHtml = (value) => String(value).replace(/[&<>"]/g, (character) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"
    }[character]));

    const topics = Array.from(new Set(publications.map((item) => item.topic))).sort();
    const years = Array.from(new Set(publications.map((item) => item.year))).sort((a, b) => b - a);

    topics.forEach((topic) => topicSelect.insertAdjacentHTML("beforeend", `<option value="${escapeHtml(topic)}">${escapeHtml(topic)}</option>`));
    years.forEach((year) => yearSelect.insertAdjacentHTML("beforeend", `<option value="${year}">${year}</option>`));

    const requestedTopic = new URLSearchParams(window.location.search).get("topic");
    if (requestedTopic && topics.includes(requestedTopic)) topicSelect.value = requestedTopic;

    function citation(item) {
        const doiText = item.doi ? ` https://doi.org/${item.doi}` : "";
        return `${item.authors}. “${item.title}.” ${item.journal} (${item.year}).${doiText}`;
    }

    function render() {
        const query = searchInput.value.trim().toLowerCase();
        const topic = topicSelect.value;
        const year = yearSelect.value;

        const filtered = publications.filter((item) => {
            const haystack = [item.title, item.authors, item.journal, item.doi, item.topic, item.type, item.year].join(" ").toLowerCase();
            return (!query || haystack.includes(query)) && (!topic || item.topic === topic) && (!year || String(item.year) === year);
        });

        countTarget.textContent = `${filtered.length} publication${filtered.length === 1 ? "" : "s"}`;

        if (!filtered.length) {
            listTarget.innerHTML = '<div class="notice">No publications match the selected filters.</div>';
            return;
        }

        listTarget.innerHTML = filtered.map((item, index) => {
            const doiLink = item.doi
                ? `<a class="button small" href="https://doi.org/${escapeHtml(item.doi)}" target="_blank" rel="noopener noreferrer">DOI</a>`
                : "";
            const scholarQuery = encodeURIComponent(`"${item.title}" ${item.authors.split(",")[0]}`);
            const citationText = escapeHtml(citation(item));
            return `
                <article class="publication-card${item.featured ? " featured" : ""}">
                    <div class="publication-topline">
                        <div>
                            <div class="tag-list"><span class="tag">${escapeHtml(item.topic)}</span><span class="tag">${escapeHtml(item.type)}</span>${item.featured ? '<span class="tag">Selected</span>' : ""}</div>
                            <h3>${escapeHtml(item.title)}</h3>
                        </div>
                        <span class="publication-year">${item.year}</span>
                    </div>
                    <p class="publication-authors">${escapeHtml(item.authors)}</p>
                    <p class="publication-journal"><em>${escapeHtml(item.journal)}</em>${item.doi ? ` · ${escapeHtml(item.doi)}` : ""}</p>
                    <div class="publication-actions">
                        ${doiLink}
                        <a class="button small secondary" href="https://scholar.google.com/scholar?q=${scholarQuery}" target="_blank" rel="noopener noreferrer">Scholar</a>
                        <button type="button" data-copy="${citationText}">Copy citation</button>
                        <button type="button" aria-expanded="false" aria-controls="publication-details-${index}" data-details="publication-details-${index}">Details</button>
                    </div>
                    <div class="publication-details" id="publication-details-${index}" hidden>
                        <strong>Full citation</strong>
                        <p>${citationText}</p>
                        <p><strong>Research area:</strong> ${escapeHtml(item.topic)} · <strong>Type:</strong> ${escapeHtml(item.type)}</p>
                    </div>
                </article>`;
        }).join("");
    }

    [searchInput, topicSelect, yearSelect].forEach((control) => control.addEventListener("input", render));

    listTarget.addEventListener("click", async function (event) {
        const copyButton = event.target.closest("[data-copy]");
        if (copyButton) {
            const value = copyButton.getAttribute("data-copy");
            try {
                await navigator.clipboard.writeText(value);
                copyButton.textContent = "Copied";
            } catch (error) {
                window.prompt("Copy this citation:", value);
            }
            window.setTimeout(() => { copyButton.textContent = "Copy citation"; }, 1800);
            return;
        }

        const detailsButton = event.target.closest("[data-details]");
        if (detailsButton) {
            const target = document.getElementById(detailsButton.getAttribute("data-details"));
            const willOpen = target.hidden;
            target.hidden = !willOpen;
            detailsButton.setAttribute("aria-expanded", String(willOpen));
            detailsButton.textContent = willOpen ? "Hide details" : "Details";
        }
    });

    render();
}());
