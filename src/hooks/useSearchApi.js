import {useGetRequest} from './useGetRequest';

const useSearchApi = (searchQuery, deps) => {
  const {data, error, isLoaded} = useGetRequest(
    '/search/v2',
    {
      q: searchQuery,
    },
    deps,
  );

  return {data, error, isLoaded};
};

export default useSearchApi;
