import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../Hooks/ReduxHooks';
import Header from './Header';
import Pagination from './Pangination';
import { setPage } from '../Redux/Slices/panginationSlice';
import useFilteredUsers from '../Hooks/FilteredUsers';
import { motion, AnimatePresence } from 'framer-motion';

export const UserTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, filters } = useAppSelector((state) => state.user);
  const { usersToShow, currentPage } = useAppSelector(
    (state) => state.pagination
  );

  const filteredUsers = useFilteredUsers(users, filters);

  const indexOfLastUser = currentPage * usersToShow;
  const indexOfFirstUser = indexOfLastUser - usersToShow;
  const usersToDisplay = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  useEffect(() => {
    dispatch(setPage(1));
  }, [filters, dispatch]);

  return (
    <section className="bg-[#1D1E42] p-4 rounded-lg shadow-lg">
      <Header />
      <div className="overflow-x-auto bg-[#1D1E42] pi-4 rounded-lg shadow-lg">
        <div className="bg-[#1D1E42] border border-gray-200 rounded-lg relative">
          <div className="border-b bg-[#26264F] sticky top-0 z-10">
            <div className="grid grid-cols-4 gap-6 py-3 px-4 text-gray-700 font-semibold text-sm">
              {['Name', 'Username', 'Email', 'Phone'].map((header) => (
                <div key={header} className="text-center text-white text-base">
                  {header}
                </div>
              ))}
            </div>
          </div>
          <AnimatePresence>
            {usersToDisplay.length > 0 ? (
              <motion.div
                className="overflow-y-auto"
                style={{ maxHeight: `${usersToShow * 44}px` }}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={usersToDisplay.length}
              >
                {usersToDisplay.map((user) => (
                  <motion.div
                    layout
                    key={user.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-4 gap-6 py-3 px-4 text-gray-100 hover:bg-gray-50 hover:text-gray-600 transition-colors duration-300"
                  >
                    <div className="text-sm font-medium">{user.name}</div>
                    <div className="text-sm">{user.username}</div>
                    <div className="text-sm">{user.email}</div>
                    <div className="text-sm">{user.phone}</div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="py-4 text-center text-white">
                No users found for the selected filters.
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Pagination
        totalUsers={filteredUsers.length}
        usersPerPage={usersToShow}
        usersToDisplay={usersToDisplay}
      />
    </section>
  );
};

export default React.memo(UserTable);
