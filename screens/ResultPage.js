import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import ResultItem from './ResultItem';

const ResultPage = ({route, navigation}) => {
  const {chosenItems, lastItem, type} = route.params;
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState(chosenItems);
  const [multiple, setMultiple] = useState(1);
  useEffect(() => {
    setItems(oldItems => [...oldItems, lastItem]);
  }, []);
  useEffect(() => {
    items.forEach(item => {
      setPrice(price + item.price);
    });
  }, [items]);

  return (
    <View style={styles.container}>
      {console.log(route.params)}
      <View
        style={{
          textAlign: 'left',
          marginTop: 15,
          marginLeft: 10,
          flexDirection: 'row',

          alignItems: 'center',
        }}>
        <Text style={{fontSize: 40, color: '#BDBDBD', fontWeight: '700'}}>
          Your order
        </Text>
      </View>
      <View
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
            uri: type.URL,
          }}
        />
        <Text style={{fontSize: 20, color: '#BDBDBD'}}>{type.name}</Text>
      </View>
      <View style={{flex: 0.8}}>
        <ResultItem navigation={navigation} chosenItems={items} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 25,

          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 32,
            marginLeft: 17,

            color: '#BDBDBD',
            textDecorationLine: 'underline',
          }}>
          Priceaa: {price}
        </Text>
        <TouchableOpacity
          onPress={() => {
            if (multiple > 1) {
              setPrice((price / multiple) * (multiple - 1));
              setMultiple(multiple - 1);
            }
          }}>
          <View
            style={[
              styles.circle,
              {
                marginLeft: 40,
                backgroundColor: '#000',
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <Text style={{fontSize: 28, color: '#fff', marginBottom: 4}}>
              -
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={{fontSize: 20, marginLeft: 20, color: '#BDBDBD'}}>
          {multiple}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setPrice((price / multiple) * (multiple + 1));
            setMultiple(multiple + 1);
          }}>
          <View
            style={[
              styles.circle,
              {
                backgroundColor: '#000',
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <Text
              style={{
                fontSize: 28,
                color: '#fff',
                marginBottom: 3,
                alignItems: 'center',
              }}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.logbtn}
          onPress={() => navigation.navigate('Order')}>
          <Text style={{color: '#fff', fontSize: 20}}>Confirm</Text>
        </TouchableOpacity>
      </View>
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

export default ResultPage;
