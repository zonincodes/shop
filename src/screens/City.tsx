import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, View} from 'react-native'
import IconText from '../components/icons';



const City = () => {

  const {cityName, cityText, container, populationText, populationWrapper, image, riseSetText, countryName, riseSetWrapper, rowLayout} = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/cty.jpg')}
        style={image}>
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>Uk</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            name="user"
            color="red"
            text="8000"
            style={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            name="sunrise"
            color="white"
            text="09:12:59am"
            style={riseSetText}
          />
          <IconText
            name="sunset"
            color="white"
            text="06:43:23pm"
            style={riseSetText}
          />

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },

  countryName: {
    fontSize: 30,
  },

  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },

  populationText: {
    fontSize: 25, 
    marginLeft: 7.5,
    color: 'red',
    fontWeight: 'bold'
  },

  riseSetWrapper: {
    
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },

  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  }

});
export default City