import { View, Text, TouchableWithoutFeedback, Dimensions } from 'react-native' 
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from 'expo-router'
import { ViewStyle } from 'react-native';

var {width, height} = Dimensions.get('window');

export default function TrendingMovies({data}) {
    const navigation = useNavigation();
    const handleClick = ()=>{
        navigation.navigate('Movie', item);
    }
    return (
        <View className="mb-8">
            <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
            <Carousel
                data={data}
                renderItem={({item})=> <MovieCard item={item} handleClick={handleClick} />}
                firstItem={1}
                inactiveSlideOpacity={0.60}
                sliderWidth={600} 
                itemWidth={width*0.62}
                slideStyle={{display: 'flex', alignItems: 'center'}}
            />
        </View>
    )
}

const MovieCard = ({item, handleClick})=>{
    return (
        <TouchableWithoutFeedback onPress={handleClick}>
            <image
                source={require('../assets/images/MoviePoster1.png')}
                style={{
                    width: width*0.6,
                    height: height*0.4
                    }}
                className="rounded-3xl"
            />
        </TouchableWithoutFeedback>
    )
}
