import React from "react";
import {View,Text,StyleSheet,Image} from "react-native";
import ProductRating from "./ProductRating";

const ProductCard = ({item}) => {
    const {id,title, price:{main, deal},review} = item;

  return (
    <View style = {styles.container} key = {item.id}>
        <View style={styles.productCard}>
            <View style={{ flexBasis: '75%' }}>
              <ProductRating rating = {review}/>      
              <Text numberOfLines={2} allowFontScaling={true} style = {styles.title}>{title} </Text>
              {deal && <Text style={styles.textCaption}>
                <Text style = {{marginHorizontal:10}}>تخفیف</Text>
                <Text style = {{color: '#ab0d0d'}}>${deal}</Text>   
              </Text>}
              {main && <Text style={styles.textBold}>${main}</Text>}
            </View>
            <View style = {{ flexBasis: '25%' }}>
              <Image 
                  style  = {styles.thumbnail}
                  source = {{
                      uri:item.image,
                  }}
              />
            </View>
        </View> 
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    // paddingHorizontal:10,
  },
  productCard: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:10,
    borderWidth: 1,
    borderColor: "#e3e3e3",
    borderRadius:10,
    marginBottom: 20
  },
  title:{
    lineHeight:22,
    marginTop: 10,
    marginBottom: 10,
  },
  textBold:{
    fontSize:16,
    fontWeight:'700'
  },
  textCaption:{
    fontSize:10,
    textAlign:'left',
  },
  thumbnail: {
    width:70,
    height:70,
  },
});

export default ProductCard;