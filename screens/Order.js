import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const Order = ({navigation}) => {
  const [toggleStyle, setToggleStyle] = useState({
    selfMethodStyle: {backgroundColor: '#000'},
    selfMethodTextStyle: {color: '#fff'},
    deliveryMethodStyle: {backgroundColor: '#fff'},
    deliveryMethodTextStyle: {color: '#C5C4C4'},
    showSelf: true,
    showDelivery: false,
  });

  //   const [activeToggleText, setActiveToggleText] = useState({
  //     color: "#000",
  //   });
  const handleSelfMethod = () => {
    setToggleStyle({
      selfMethodStyle: {backgroundColor: '#000'},
      selfMethodTextStyle: {color: '#fff'},
      deliveryMethodStyle: {backgroundColor: '#fff'},
      deliveryMethodTextStyle: {color: '#C5C4C4'},
      showSelf: true,
      showDelivery: false,
    });
  };
  const handleDeliveryMethod = () => {
    setToggleStyle({
      selfMethodStyle: {backgroundColor: '#fff'},
      selfMethodTextStyle: {color: '#C5C4C4'},
      deliveryMethodStyle: {backgroundColor: '#000'},
      deliveryMethodTextStyle: {color: '#fff'},
      showSelf: false,
      showDelivery: true,
    });
  };
  return (
    <View style={{height: '100%', backgroundColor: '#FFF', width: '100%'}}>
      <View
        style={{
          textAlign: 'left',
          marginTop: 15,
          marginLeft: 10,
          flexDirection: 'row',

          alignItems: 'center',
        }}>
        <Text style={{fontSize: 40, color: '#BDBDBD', fontWeight: '700'}}>
          Order details
        </Text>
      </View>
      <View style={styles.container}>
        <View
          style={{
            width: '100%',
            textAlign: 'left',
          }}>
          <Text style={styles.label}>Full Name</Text>
        </View>
        <TextInput
          style={styles.input}
          //   onChangeText={onChangeNumber}
          //   value={number}
          placeholder="John Brown"
          keyboardType="default"
          textAlign="center"
        />
      </View>
      <View style={styles.container}>
        <View
          style={{
            width: '100%',
            textAlign: 'left',
          }}>
          <Text style={styles.label}>Phone number</Text>
        </View>
        <TextInput
          style={styles.input}
          //   onChangeText={onChangeNumber}
          //   value={number}
          placeholder="+38( ___)___-__-__ "
          keyboardType="numeric"
          textAlign="center"
        />
      </View>
      <View
        style={{
          width: '100%',
          textAlign: 'left',
        }}>
        <Text style={styles.label}>The method of obtaining the goods</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',

          width: '100%',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={[
            styles.toggle,
            {
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
            },
            toggleStyle.selfMethodStyle,
          ]}
          onPress={handleSelfMethod}>
          <Text style={[{fontSize: 18}, toggleStyle.selfMethodTextStyle]}>
            self-pickup
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggle,
            {borderTopRightRadius: 15, borderBottomRightRadius: 15},
            toggleStyle.deliveryMethodStyle,
          ]}
          onPress={handleDeliveryMethod}>
          <Text style={[{fontSize: 18}, toggleStyle.deliveryMethodTextStyle]}>
            Delivery
          </Text>
        </TouchableOpacity>
      </View>

      <OurAddress active={toggleStyle.showSelf} />
      <YourAddress active={toggleStyle.showDelivery} />
      <View style={styles.container}>
        <View
          style={{
            width: '100%',
            textAlign: 'left',
          }}>
          <Text style={styles.label}>Date</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
          }}>
          <TextInput
            style={[styles.inputDate, {width: '17%'}]}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="Day"
            keyboardType="numeric"
            textAlign="center"
          />
          <TextInput
            style={[styles.inputDate, {width: '17%'}]}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="Month"
            keyboardType="numeric"
            textAlign="center"
          />
          <TextInput
            style={[styles.inputDate, {width: '17%'}]}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="Year"
            keyboardType="numeric"
            textAlign="center"
          />
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.logbtn}
          onPress={() => navigation.navigate('CompleteOrder')}>
          <Text style={{color: '#fff', fontSize: 20}}>Make An Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const OurAddress = ({active}) => {
  if (!active) return null;
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          textAlign: 'left',
        }}>
        <Text style={styles.label}>Our Address</Text>
      </View>
      <View
        style={[
          styles.input,
          {justifyContent: 'center', alignItems: 'center'},
        ]}>
        <Text style={{fontSize: 16, color: '#C5C4C4'}}>Golosko 7/19</Text>
      </View>
    </View>
  );
};

const YourAddress = ({active}) => {
  if (!active) return null;
  return (
    <View style={[styles.container]}>
      <View
        style={{
          width: '100%',
          textAlign: 'left',
        }}>
        <Text style={styles.label}>Your Address</Text>
      </View>
      <TextInput
        style={styles.input}
        //   onChangeText={onChangeNumber}
        //   value={number}
        placeholder="Golosko 7/19"
        keyboardType="numeric"
        textAlign="center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    borderRadius: 15,
    borderWidth: 1,
    height: 50,
    width: 310,
    fontSize: 16,
  },
  inputDate: {
    borderRadius: 15,
    borderWidth: 1,
    height: 50,
    marginLeft: '7%',
    fontSize: 16,
  },
  label: {
    color: '#C5C4C4',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 9,
    fontWeight: '700',
    textAlign: 'left',
    marginLeft: '9%',
  },
  toggle: {
    width: 155,
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logbtn: {
    backgroundColor: '#000',
    width: 310,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 83,
    padding: 10,
  },
});

export default Order;
