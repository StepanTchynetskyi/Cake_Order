import React, {UseState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const ChoosePastry = ({navigation}) => {
  const arrowBack = '<';
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainLabel}>Choose pastry</Text>
        <Image
          style={styles.mainImage}
          source={{
            uri:
              'https://i.pinimg.com/564x/14/2e/95/142e95cbcc390f943d95e3b297d8d666.jpg',
          }}
        />
        <Text style={{color: '#BDBDBD', fontSize: 28, marginTop: 5}}>
          Jam croustades
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
                'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Palmeras_de_hojaldre_1.jpg/330px-Palmeras_de_hojaldre_1.jpg',
            }}
          />
          <Image
            style={[styles.smallImg, {marginLeft: 5}]}
            source={{
              uri:
                'https://hips.hearstapps.com/del.h-cdn.co/assets/15/30/3200x2133/gallery-1437685586-delish-cherry-pastry-pies.jpg?resize=980:*',
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
            onPress={() => navigation.navigate('ResultPage')}>
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

export default ChoosePastry;
