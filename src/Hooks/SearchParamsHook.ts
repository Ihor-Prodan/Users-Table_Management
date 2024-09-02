import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../Hooks/ReduxHooks';
import { setPage } from '../Redux/Slices/panginationSlice';

export const useSearchParams = (currentPage: number) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page');

    if (page) {
      dispatch(setPage(Number(page)));
    }
  }, [location.search, dispatch]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('page', currentPage.toString());
    navigate(`?${queryParams.toString()}`);
  }, [currentPage, navigate, location.search]);
};

export default useSearchParams;
