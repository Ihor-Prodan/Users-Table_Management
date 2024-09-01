import React from 'react';
import { useAppDispatch, useAppSelector } from '../Hooks/ReduxHooks';
import { setPage } from '../Redux/Slices/panginationSlice';
import { User } from '../Types/User';

interface PaginationProps {
  totalUsers: number;
  usersPerPage: number;
  usersToDisplay: User[];
}

export const Pagination: React.FC<PaginationProps> = ({
  totalUsers,
  usersPerPage,
  usersToDisplay,
}) => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.pagination.currentPage);

  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setPage(page));
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-2 py-1 mx-1 rounded ${
            i === currentPage
              ? 'bg-gray-50 text-gray-600'
              : 'bg-gray-800 text-white hover:bg-gray-50 hover:text-gray-600 active:bg-gray-300 transition-colors duration-400'
          }`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center py-4">
      {currentPage !== 1 && (
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg mr-2 hover:bg-gray-50 hover:text-gray-600 active:bg-gray-300 transition-colors duration-400"
        >
          Previous
        </button>
      )}

      {renderPageNumbers()}
      {usersToDisplay.length === 0 ||
        (currentPage !== totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg ml-2 hover:bg-gray-50 hover:text-gray-600 active:bg-gray-300 transition-colors duration-400"
          >
            Next
          </button>
        ))}
    </div>
  );
};

export default React.memo(Pagination);
