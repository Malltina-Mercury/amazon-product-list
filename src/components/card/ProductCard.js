import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ProductRating from './ProductRating';

const ProductCard = ({item}) => {
  console.log();
  const {
    id,
    title,
    review,
    image,
    price: {main, deal},
  } = item?.item;

  return (
    <View key={item.id}>
      <View style={styles.cardContainer}>
        <View style={styles.details}>
          <ProductRating rating={review} />
          <Text numberOfLines={2} style={styles.title}>
            {title}{' '}
          </Text>
          {deal && <Text style={styles.PriaceDeal}>Deal: ${deal}</Text>}
          <Text style={styles.priceMain}>${main}</Text>
        </View>
        <View style={styles.image}>
          <Image
            style={styles.thumbnail}
            source={{
              uri: image,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#f3f3f3',
    borderRadius: 10,
    marginBottom: 20,
  },
  details: {
    flexBasis: '70%',
  },
  title: {
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 10,
  },
  priceMain: {
    fontSize: 14,
  },
  PriaceDeal: {
    fontSize: 8,
    color: 'red',
  },
  image: {
    flexBasis: '25%',
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
});

export default ProductCard;
