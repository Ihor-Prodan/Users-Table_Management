import { useMemo } from 'react';
import { User } from '../Types/User';
import { Filters } from '../Types/Filters';

const useFilteredUsers = (users: User[], filters: Filters): User[] => {
  const filteredUsers = useMemo(() => {
    if (!Array.isArray(users) || !filters) {
      return [];
    }

    return users.filter((user) =>
      Object.keys(filters).every((key) =>
        user[key as keyof User]
          .toString()
          .toLowerCase()
          .includes(filters[key as keyof typeof filters].toLowerCase())
      )
    );
  }, [users, filters]);

  return filteredUsers;
};

export default useFilteredUsers;
