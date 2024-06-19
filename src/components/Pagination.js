import React from 'react';

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalVideos,
  videosPerPage,
}) => {
  const totalPages = Math.ceil(totalVideos / videosPerPage);

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            className={`px-4 py-1 rounded-full ${
              currentPage === index + 1
                ? 'bg-blue-600 text-white'
                : 'bg-blue-100 text-blue-600'
            }`}
            onClick={() => setCurrentPage(index + 1)}
            style={{ cursor: 'pointer' }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pagination;
