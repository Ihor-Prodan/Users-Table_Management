import React from 'react';
import { User } from '../types/user';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { setPage } from '../redux/slices/panginationSlice';

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
  const currentPage = useAppSelector((state) => state.pangination.currentPage);
  const allUsers = useAppSelector((state) => state.pangination.usersToShow);

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
    <>
      {usersToDisplay.length > 0 && allUsers !== Number.MAX_SAFE_INTEGER && (
        <div className="flex justify-center py-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg mr-2 transition-colors duration-400 ${
              currentPage === 1
                ? 'bg-gray-800 text-white opacity-50 cursor-not-allowed'
                : 'bg-gray-800 text-white hover:bg-gray-50 hover:text-gray-600 active:bg-gray-300'
            }`}
          >
            Previous
          </button>

          {renderPageNumbers()}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg ml-2 transition-colors duration-400 ${
              currentPage === totalPages
                ? 'bg-gray-800 text-white opacity-50 cursor-not-allowed'
                : 'bg-gray-800 text-white hover:bg-gray-50 hover:text-gray-600 active:bg-gray-300'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default React.memo(Pagination);
