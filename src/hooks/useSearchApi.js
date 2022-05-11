import {useGetRequest} from './useGetRequest';

const useSearchApi = (searchQuery, deps) => {
  if (!searchQuery) {
    searchQuery = 'ANYTHING';
  }
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
