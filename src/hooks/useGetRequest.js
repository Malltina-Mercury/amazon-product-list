import {useEffect, useState} from 'react';
import request from '../helpers/api';
import waitForMilliseconds from '../helpers/waitForMilliseconds';

export const useGetRequest = (url, params?, deps = []) => {
  const [data, setData] = useState();
  const [error, setError] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoaded(false);
      try {
        let response;
        do {
          response = await request.get(url, {
            params: params,
          });
          await waitForMilliseconds(response?.data?.after || 1000);
        } while (response.status !== 200);
        setData(response?.data);
        setIsLoaded(true);
      } catch (e) {
        setError(e);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return {data, error, isLoaded};
};
