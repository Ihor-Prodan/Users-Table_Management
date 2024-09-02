import React from 'react';
import SearchFilters from './SearchFilters';
import { useAppDispatch, useAppSelector } from '../Hooks/ReduxHooks';
import { setPage, setUsersToShow } from '../Redux/Slices/panginationSlice';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { usersToShow } = useAppSelector((state) => state.pangination);

  const showPeopleOptions = ['10', '15', '30', 'All'];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    if (value === 'All') {
      dispatch(setUsersToShow(Number.MAX_SAFE_INTEGER));
    } else {
      dispatch(setUsersToShow(Number(value)));
    }

    dispatch(setPage(1));
  };

  return (
    <div className="w-full h-16 bg-[#1D1E42] flex items-center gap-6 justify-between px-5">
      <div className="flex flex-row items-center justify-start pb-2 gap-4">
        <p className="text-white font-bold text-2xs">Show</p>
        <select
          className="bg-[#141432] text-white rounded-md px-2 py-1"
          onChange={handleSelectChange}
          value={
            usersToShow === Number.MAX_SAFE_INTEGER
              ? 'All'
              : usersToShow.toString()
          }
        >
          {showPeopleOptions.map((users) => (
            <option key={users} className="bg-[#141432]" value={users}>
              {users}
            </option>
          ))}
        </select>
        <p className="text-white font-bold text-2xs">users</p>
      </div>
      <div className="flex flex-row items-center justify-end gap-4 pt-2">
        <SearchFilters />
      </div>
    </div>
  );
};

export default Header;
