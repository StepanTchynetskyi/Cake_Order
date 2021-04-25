import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
const Cake = ({navigation}) => {
  const [items, setItems] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainLabel}>Choose cake base</Text>
        <Image
          style={styles.mainImage}
          source={{
            uri:
              'https://i.pinimg.com/564x/d6/a4/6f/d6a46fe5be8194039da8251c20758aba.jpg',
          }}
        />
        <Text style={{color: '#BDBDBD', fontSize: 28, marginTop: 5}}>
          Chocolate
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 8,
          }}>
          <Image
            style={[styles.smallImg, {marginRight: 5}]}
            source={{
              uri:
                'https://i.pinimg.com/564x/bf/53/6a/bf536a3f8aeb4c0286e8d1d54af951d9.jpg',
            }}
          />
          <Image
            style={[styles.smallImg, {marginLeft: 5}]}
            source={{
              uri:
                'https://i.pinimg.com/564x/44/46/1d/44461d42fb443922665bb078b87ab428.jpg',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 9,
          }}>
          <TouchableOpacity
            disabled={true}
            style={[
              styles.logbtn,
              {marginRight: 15, backgroundColor: '#dddddd'},
            ]}>
            <Text style={styles.textBtn}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.logbtn, {marginLeft: 15}]}
            onPress={() => {
              const users = firestore()
                .collection('CupCake')
                .where('page', '==', 'base')
                .get()
                .then(querySnapshot => {
                  querySnapshot.forEach(doc => {
                    // doc.data() is never undefined for query doc snapshots
                    setItems(oldItems => [...oldItems, doc.data()]);

                    console.log(doc.id, ' => ', doc.data());
                  });
                });
              console.log(items[0].URL);

              navigation.navigate('ResultPage');
            }}>
            <Text style={styles.textBtn}>Next</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 23,
            justifyContent: 'space-around',
            width: '80%',
          }}>
          <View style={[styles.circle, {backgroundColor: '#000'}]}>
            <Text style={{color: '#fff', fontSize: 20}}>1</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{fontSize: 20}}>2</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{fontSize: 20}}>3</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{fontSize: 20}}>4</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    alignItems: 'center',

    height: '95%',
    width: '100%',
  },
  mainLabel: {
    marginTop: '7%',
    marginBottom: '3%',
    fontSize: 28,
    fontWeight: '700',
    color: '#E0E0E0',
  },
  mainImage: {
    height: '40%',
    width: '80%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  smallImg: {
    height: 74,
    width: 74,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#000',
  },
  logbtn: {
    backgroundColor: '#000',
    width: 130,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 17,
    padding: 10,
  },
  textBtn: {
    color: '#fff',
    fontSize: 20,
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cake;
