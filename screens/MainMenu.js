import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MenuItem from './MenuItem';
const MainMenu = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            marginTop: 20,
            textAlign: 'left',
            width: '100%',
            paddingLeft: 30,
          }}>
          <Text
            style={{
              color: '#C5C4C4',
              fontSize: 34,
              fontWeight: '700',
              marginBottom: 20,
            }}>
            Menu
          </Text>
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
          <View style={styles.category}>
            <MenuItem
              navigation={navigation}
              page="Cake"
              name="Cake"
              caption="Choose ingredients you like to make your perfect cake"
              imgUrl="https://i.pinimg.com/564x/5f/c9/a8/5fc9a81038583f32705e76feb591e3ae.jpg"
            />

            <MenuItem
              navigation={navigation}
              page="MousseCake"
              name="Mousse Cake"
              caption="Choose ingredients you like to make your perfect mousse cake"
              imgUrl="https://i.pinimg.com/564x/81/37/26/813726fc7150c2ed8a1b1814a074f81e.jpg"
            />
          </View>
          <View style={styles.category}>
            <MenuItem
              navigation={navigation}
              page="CupCake"
              name="Cupcake"
              caption="Choose ingredients you like to make your perfect cupcake"
              imgUrl="https://i.pinimg.com/564x/8b/b6/61/8bb6619ff7fe3a76fe2aa5144f9b7a22.jpg"
            />

            <MenuItem
              navigation={navigation}
              page="Pie"
              name="Pie"
              caption="Choose ingredients you like to make your perfect pie"
              imgUrl="https://i.pinimg.com/564x/bb/5b/7d/bb5b7d46dff6cfc2248326fd623f798b.jpg"
            />
          </View>
          <View style={styles.category}>
            <MenuItem
              navigation={navigation}
              page="Pastry"
              name="Pastry"
              caption="Choose your ideal pastry"
              imgUrl="https://i.pinimg.com/564x/ca/3f/77/ca3f77b8c29fea563484490a8ca497aa.jpg"
            />

            <MenuItem
              navigation={navigation}
              page="Tart"
              name="Tart"
              caption="Choose ingredients you like to make your perfect tart"
              imgUrl="https://i.pinimg.com/564x/56/fb/e0/56fbe050fed8e7436a57a51208f9518f.jpg"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default MainMenu;
