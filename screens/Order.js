import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Order = ({route, navigation}) => {
  const {typeName, price, count, items} = route.params;
  const [customerName, setCustomerName] = useState();
  const [customerPhone, setCustomerPhone] = useState();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [address, setAddress] = useState('Golosko 7/19');
  const [disabled, setDisabled] = useState(true);
  const [toggleStyle, setToggleStyle] = useState({
    selfMethodStyle: {backgroundColor: '#000'},
    selfMethodTextStyle: {color: '#fff'},
    deliveryMethodStyle: {backgroundColor: '#fff'},
    deliveryMethodTextStyle: {color: '#C5C4C4'},
    showSelf: true,
    showDelivery: false,
  });
  useEffect(() => {
    if (day && month && address && customerName && customerPhone) {
      setDisabled(false);
      styles.disableButton = {};
    }
  }, [day, month, address, customerPhone, customerName]);
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
    setAddress('Golosko 7/19');
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
          onChangeText={value => setCustomerName(value)}
          value={customerName}
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
          onChangeText={value => setCustomerPhone(value)}
          value={customerPhone}
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
      <YourAddress
        active={toggleStyle.showDelivery}
        setAddress={setAddress}
        address={address}
      />
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
            onChangeText={value => setDay(value)}
            value={day}
            placeholder="Day"
            keyboardType="numeric"
            textAlign="center"
          />
          <TextInput
            style={[styles.inputDate, {width: '17%'}]}
            onChangeText={value => setMonth(value)}
            value={month}
            placeholder="Month"
            keyboardType="numeric"
            textAlign="center"
          />
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          disabled={disabled}
          style={styles.logbtn}
          onPress={() => {
            if (toggleStyle.showDelivery) {
              let deliveryAddress = address;
            }
            firestore()
              .collection('Order')
              .add({
                customerName: customerName,
                customerPhone: customerPhone,
                delivery: toggleStyle.showDelivery,
                address: address,
                date: day + '/' + month,
                price: price,
                items: items,
                productType: typeName,
                count: count,
              })
              .then(() => {
                console.log('Order Completed!');
              });
            navigation.navigate('CompleteOrder');
          }}>
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

const YourAddress = ({active, address, setAddress}) => {
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
        onChangeText={value => setAddress(value)}
        //           value={address}
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
    marginLeft: '11%',
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
    backgroundColor: '#c5c5c5',
    width: 310,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 83,
    padding: 10,
  },
});

export default Order;
