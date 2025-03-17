import React from 'react';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const generatePageNumbers = () => {
        const pages = [];
        const adjacent = 2; // Number of pages to show around current page
        if (totalPages <= 7) {
            // Show all pages if total pages is less than or equal to 7
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            // Start with first page
            pages.push(1);

            // Add ellipsis if current page is far from start
            if (currentPage > adjacent + 2) pages.push('...');

            // Determine range of pages around current page
            const start = Math.max(2, currentPage - adjacent);
            const end = Math.min(totalPages - 1, currentPage + adjacent);
            for (let i = start; i <= end; i++) pages.push(i);

            // Add ellipsis if current page is far from end
            if (currentPage < totalPages - adjacent - 1) pages.push('...');

            // Add last page
            pages.push(totalPages);
        }
        return pages;
    };

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) onPageChange(page);
    };

    const pages = generatePageNumbers();

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination" style={{ 
                flexWrap: 'nowrap', 
                overflowX: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
            }}>
                {/* First Page Button */}
                <li className={`page-item first-button ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => handlePageChange(1)}
                        aria-label="First"
                    >
                        &laquo;
                    </button>
                </li>

                {/* Previous Button */}
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage - 1)}
                        aria-label="Previous"
                    >
                        &lsaquo;
                    </button>
                </li>

                {/* Page Numbers */}
                {pages.map((page, index) => (
                    page === '...' ? (
                        <li key={`ellipsis-${index}`} className="page-item disabled">
                            <span className="page-link">…</span>
                        </li>
                    ) : (
                        <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                            <button
                                className="page-link"
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>
                        </li>
                    )
                ))}

                {/* Next Button */}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage + 1)}
                        aria-label="Next"
                    >
                        &rsaquo;
                    </button>
                </li>

                {/* Last Page Button */}
                <li className={`page-item last-button ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => handlePageChange(totalPages)}
                        aria-label="Last"
                    >
                        &raquo;
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;