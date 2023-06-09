import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, ImageBackground } from "react-native"
import Icon from "react-native-vector-icons/Feather"
const DATA = [
  {
    dt_txt: '2023-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Clear',
      },
    ],
  },
  {
    dt_txt: '2023-02-18 15:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Clouds',
      },
    ],
  },
  {
    dt_txt: '2023-02-18 18:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Rain',
      },
    ],
  },
];

const Item = ({dt_txt, min, max, condition} : any) => {
    return (
      <View style={styles.item}>
        <Icon name='sun' size={50} color={'white'} />
        <Text style={styles.date }>{dt_txt}</Text>
        <Text style={styles.temp}>{min}</Text>
        <Text style={styles.temp}>{max}</Text>
      </View>
    );
}

function UpComingWeather() {
    const renderItem = ({item} : any) => (
        <Item condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
    )
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/Sky.jpg')}
        style={styles.image}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.dt_txt}
          ItemSeparatorComponent={() => (
            <View style={{backgroundColor: 'white', height: 2}} />
          )}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'red',
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'

    },
    temp:{
        color: "white",
        fontSize: 20,
    },
    date: {
        color: "white",
        fontSize: 15,
    },
    image: {
        flex: 1,
    }
})

export default UpComingWeather