
import React from "react";
import {View, Text, StyleSheet} from "react-native"
import Icon from "react-native-vector-icons/Feather"
const ListItem = ({dt_txt, min, max, condition}: any) => {
	
	const {item, date, temp} = styles;

  return (
    <View style={item}>
      <Icon name="sun" size={50} color={'white'} />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
		borderColor: 'white',
    backgroundColor: 'black',
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
});


export default ListItem