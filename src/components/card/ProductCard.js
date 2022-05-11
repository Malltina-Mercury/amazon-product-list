import React, { useState } from "react";
import {View,Text,TextInput,StyleSheet,Image} from "react-native";

const ProductCard = ({item}) => {
    const {id,title, price:{main, deal}} = item;

  return (
    <View key={item.id}>
          <View
            style={styles.cardContainer}
          >
              <View style={styles.details}>
              {/* <ProductRating />       */}
                <Text numberOfLines={2} style={styles.title}>{title} </Text>
                {deal && <Text style={styles.PriaceDeal}>Deal: ${deal}</Text>}
                <Text style={styles.priceMain}>${main}</Text>
              </View>
              <View style={styles.thumbnail1}>
                <Image 
                    style={styles.thumbnail}
                    source={{
                        uri:item.image,
                    }}
                />
              </View>
          </View> 
    </View>
  );
};


const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:10,
    borderWidth: 1,
    borderColor: "#f3f3f3",
    borderRadius:10,
    marginBottom: 20

  },
  details: {
    flexBasis: '70%',
  },
  title:{
    lineHeight:22,
    marginTop: 10,
    marginBottom: 10,
  },
  priceMain:{
    fontSize:14
  },
  PriaceDeal:{
    fontSize:8,
    color: 'red',
  },
  thumbnail1: {
    flexBasis: '25%',
  },
  thumbnail: {
    width:70,
    height:70,
  },
});

export default ProductCard;