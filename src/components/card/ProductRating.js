import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
// import StarRating from 'react-native-star-rating';
// import { Icon } from '@iconify/react';


export default function ProductRating() {
    // const [rating,setRating] = useState(4.7)
    return (
        <View>
            {/* <StarRating
                disabled={false}
                maxStars={5}
                rating={this.state.starCount}
                selectedStar={() => setRating(4.7)}
            /> */}
            {/* <Icon icon="mdi-light:home" /> */}


            {/* <View className="stars">
                <Image
                    // style={styles.tinyLogo}
                    source={require('./img/star.svg')}
                />
                <View className="cover" style="width: 10%;"></View>
            </View>

            <View className="stars">
                <Image
                    // style={styles.tinyLogo}
                    source={require('./img/star.svg')}
                />

                <View className="cover" style="width: 50%;"></View>
            </View> */}

            <View className="stars">
                {/* <Image
                    // style={styles.tinyLogo}
                    source={require('./img/star.svg')}
                />  */}

                {/* <View className="cover" style="width: 72%;"></View> */}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({})
