import React from 'react'

import { SafeAreaView, Text, StyleSheet, ImageBackground, View} from 'react-native'
import Icon from "react-native-vector-icons/Feather"



const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/cty.jpg')}
        style={styles.image}>
        <Text style={[styles.cityName, styles.cityText]}>London</Text>
        <Text style={[styles.countryName, styles.cityText]}>Uk</Text>
        <View style={styles.populationWrapper}>
          <Icon name="user" size={50} color={'red'} />
          <Text style={styles.populationText}>8000</Text>
        </View>
        <View style={styles.riseSetWrapper}>
          <Icon name="sunrise" size={50}/>
          <Text style={styles.riseSetText}>09:12:59am</Text>
          <Icon name="sunset" size={50} />
          <Text style={styles.riseSetText}>06:43:23pm</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }

});
export default City