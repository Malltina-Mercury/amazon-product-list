import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import { Rating } from 'react-native-elements';


function ProductRating({rating}) {
    return (
        <SafeAreaView style={styles.container}>
            <Rating
            imageSize={10}
            // type='heart'
            readonly
            startingValue={rating.stars}
            style={ styles.rating }
            />
            <Text style={styles.caption}>{rating.people}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rating:{
        textAlign:'left',
    },
    container:{
        flexDirection: "row",
        alignItems: 'center',
    },
    caption: {
        fontSize:8,
        marginHorizontal:10,
    }
})

export default ProductRating;