import React, {UseState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
const ResultItem = ({navigation, chosenItems}) => {
  return (
    <View style={{flex: 1}}>
      {chosenItems.map(item => {
        return (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: '100%',
              alignItems: 'center',
              marginTop: 20,
              marginLeft: 17,
            }}>
            <Image
              style={styles.smallImg}
              source={{
                uri: item.URL,
              }}
            />
            <Text style={{fontSize: 20, color: '#BDBDBD'}}>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor: '#C5C4C4',
    borderWidth: 1,
    justifyContent: 'center',
    marginLeft: 20,
  },
  smallImg: {
    height: 55,
    width: 55,
    borderWidth: 1,
    borderRadius: 27.5,
    borderColor: '#000',
    marginRight: 20,
  },
  logbtn: {
    backgroundColor: '#000',
    width: 310,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    padding: 10,
  },
});
export default ResultItem;
