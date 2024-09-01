import React, { useEffect } from 'react';
import UserTable from './Components/UserTable';
import { useAppDispatch } from './Hooks/ReduxHooks';
import { fetchUsers } from './Redux/Slices/userSlice';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management Table</h1>
      <UserTable />
    </div>
  );
};

export default App;
