import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
const MenuItem = ({navigation, name, caption, imgUrl, page}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(page)}>
      <Text style={styles.catText}>{name}</Text>

      <Image
        style={styles.mainImage}
        source={{
          uri: imgUrl,
        }}
      />
      <Text style={styles.capt}>{caption}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 230,
    width: '45%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    paddingLeft: '4%',
    textAlign: 'left',
    marginBottom: 20,
  },
  catText: {
    color: '#C5C4C4',
    fontSize: 17,
    fontWeight: '900',
    marginTop: 8,
    marginBottom: 4,
  },
  mainImage: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    height: 137,
    borderWidth: 1,
    borderColor: '#000',
  },
  capt: {
    color: '#E0E0E0',
    fontSize: 12,
    marginTop: 6,
  },
});
export default MenuItem;
