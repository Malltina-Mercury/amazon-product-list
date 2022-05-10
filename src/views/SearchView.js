import React, {useCallback, useState} from 'react';
import useSearchApi from '../hooks/useSearchApi';
import {StyleSheet, Text} from 'react-native';
import SearchInput from '../components/SearchInput';

const SearchView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const {data, error, isLoaded} = useSearchApi(searchQuery, [submittedQuery]);

  const onChangeSearchQuery = useCallback(newSearchQuery => {
    setSearchQuery(newSearchQuery);
  }, []);

  const onSubmitSearchQuery = useCallback(() => {
    setSubmittedQuery(searchQuery);
  }, []);

  return (
    <>
      <SearchInput
        searchQuery={searchQuery}
        onChange={onChangeSearchQuery}
        onSubmit={onSubmitSearchQuery}
      />
      {isLoaded ? (
        <>
          <Text>{searchQuery}</Text>
          {data?.products?.map((item, i) => {
            return (
              <Text key={i}>
                {item.title}
                {'\n'}
                ------------
              </Text>
            );
          })}
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 1,
    fontSize: 20,
    marginTop: 15,
  },
});

export default SearchView;
