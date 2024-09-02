import React from 'react';
import { setFilters } from '../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';

export const SearchFilters: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.user.filters);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      if (/^\d*$/.test(value)) {
        dispatch(setFilters({ ...filters, [name]: value }));
      }
    } else {
      dispatch(setFilters({ ...filters, [name]: value }));
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {['name', 'username', 'email', 'phone'].map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          value={filters[field as keyof typeof filters]}
          onChange={handleChange}
          placeholder={`Search by ${field}`}
          className="border p-2 rounded-md bg-[#141432] text-white"
        />
      ))}
    </div>
  );
};

export default SearchFilters;
