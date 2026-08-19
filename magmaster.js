document.addEventListener('DOMContentLoaded', function () {
    // Elements from your HTML
    const searchInput = document.getElementById('formula-search');
    const pageSizeSelect = document.getElementById('page-size');
    const statsEl = document.getElementById('dataset-stats');
    const tableContainer = document.getElementById('table-container');
    const paginationDiv = document.getElementById('dataset-pagination');
    const prevBtn = document.getElementById('previous-page');
    const nextBtn = document.getElementById('next-page');
    const pageIndicator = document.getElementById('page-indicator');

    // State
    let allData = [];
    let filteredData = [];
    let currentPage = 1;
    let pageSize = parseInt(pageSizeSelect.value, 10) || 50;

    // Escape HTML to prevent XSS / broken markup
    function escapeHtml(value) {
        const div = document.createElement('div');
        div.textContent = value;
        return div.innerHTML;
    }

    // Render the current page of data
    function renderTable() {
        const start = (currentPage - 1) * pageSize;
        const end = Math.min(start + pageSize, filteredData.length);
        const pageRows = filteredData.slice(start, end);

        let html = '<div style="overflow-x:auto;"><table class="dataset-table">';
        // Header
        html += '<thead><tr>';
        if (allData.length > 0) {
            Object.keys(allData[0]).forEach(key => {
                html += `<th>${escapeHtml(key)}</th>`;
            });
        }
        html += '</tr></thead><tbody>';

        // Rows
        pageRows.forEach(row => {
            html += '<tr>';
            Object.values(row).forEach(value => {
                html += `<td>${escapeHtml(value)}</td>`;
            });
            html += '</tr>';
        });

        html += '</tbody></table></div>';
        tableContainer.innerHTML = html;

        // Update stats
        const total = filteredData.length;
        const showingStart = total === 0 ? 0 : start + 1;
        const showingEnd = end;
        statsEl.textContent = `Showing ${showingStart}–${showingEnd} of ${total} entries`;
    }

    // Update pagination controls
    function updatePagination() {
        const totalPages = Math.ceil(filteredData.length / pageSize) || 1;
        currentPage = Math.min(currentPage, totalPages);
        currentPage = Math.max(1, currentPage);

        pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
        prevBtn.disabled = currentPage <= 1;
        nextBtn.disabled = currentPage >= totalPages;

        paginationDiv.hidden = totalPages <= 1;
    }

    // Apply search filter
    function applySearch() {
        const query = searchInput.value.trim().toLowerCase();

        if (query === '') {
            filteredData = allData.slice();
        } else {
            filteredData = allData.filter(row => {
                return Object.values(row).some(value =>
                    String(value).toLowerCase().includes(query)
                );
            });
        }

        currentPage = 1;
        updatePagination();
        renderTable();
    }

    // Load CSV using PapaParse
    Papa.parse('data/MagMaster.csv', {
        download: true,
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: function (results) {
            if (results.errors && results.errors.length > 0) {
                tableContainer.innerHTML = `<div class="error-message">Error loading CSV: ${escapeHtml(results.errors[0].message)}</div>`;
                statsEl.textContent = 'Failed to load dataset.';
                return;
            }

            allData = results.data;
            filteredData = allData.slice();

            // Initial render
            updatePagination();
            renderTable();
        },
        error: function (error) {
            tableContainer.innerHTML = `<div class="error-message">Error loading CSV file. Please make sure you're running this from a web server (not file://) and the file exists at data/MagMaster.csv</div>`;
            statsEl.textContent = 'Failed to load dataset.';
        }
    });

    // Event listeners
    searchInput.addEventListener('input', applySearch);

    pageSizeSelect.addEventListener('change', function () {
        pageSize = parseInt(this.value, 10) || 50;
        currentPage = 1;
        updatePagination();
        renderTable();
    });

    prevBtn.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
            renderTable();
        }
    });

    nextBtn.addEventListener('click', function () {
        const totalPages = Math.ceil(filteredData.length / pageSize) || 1;
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
            renderTable();
        }
    });
});