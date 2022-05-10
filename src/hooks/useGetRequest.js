import {useEffect, useState} from 'react';
import request from '../helpers/api';

export const useGetRequest = (url, params?, deps = []) => {
  const [data, setData] = useState();
  const [error, setError] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoaded(false);
      try {
        const {data: response} = await request.get(url, {
          params: params,
        });
        setData(response);
        setIsLoaded(true);
      } catch (e) {
        // setError(e.message)
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return {data, error, isLoaded};
};
