import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import auth from '@react-native-firebase/auth';
export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const {register} = useContext(AuthContext);
  const [isDisable, setIsDisable] = useState(true);
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
  }

  useEffect(() => {
    if (email && password && passwordCheck) {
      setIsDisable(false);
    }
  }, [email, password, passwordCheck]);
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View
          style={{
            width: '100%',
            textAlign: 'left',
          }}>
          <Text style={styles.label}>E-mail</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={userEmail => setEmail(userEmail)}
          value={email}
          placeholder="cakeuser@gmail.com"
          keyboardType="default"
          textAlign="center"
        />
        <View
          style={{
            width: '100%',
            textAlign: 'left',
          }}>
          <Text style={styles.label}>Password</Text>
        </View>
        <TextInput
          style={styles.input}
          value={passwordCheck}
          onChangeText={userPassword => setPasswordCheck(userPassword)}
          secureTextEntry={true}
          placeholder="Enter your password"
          keyboardType="default"
          textAlign="center"
        />
        <Text style={{color: '#C5C4C4', fontSize: 13, marginTop: 5}}>
          Your password must be 8-16 characters and contain at least one number
          dagit
        </Text>
        <View
          style={{
            width: '100%',
            textAlign: 'left',
          }}>
          <Text style={styles.label}>Confirm Password</Text>
        </View>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={userPassword => setPassword(userPassword)}
          secureTextEntry={true}
          placeholder="Enter your password again"
          keyboardType="default"
          textAlign="center"
        />

        <TouchableOpacity
          disabled={isDisable}
          style={{marginTop: 40}}
          onPress={() => {
            if (
              validateEmail(email) &&
              password.length >= 8 &&
              password === passwordCheck
            ) {
              register(email, password);
            } else alert('Failed to register');
          }}>
          <View style={styles.logbtn}>
            <Text
              style={{
                color: '#fff',
                fontSize: 17,
                fontWeight: '700',
                padding: 17,
              }}>
              Sign up
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  mainView: {
    alignItems: 'center',
    height: '90%',
    width: '80%',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    height: 46,
    width: 310,
    fontSize: 16,
  },
  label: {
    color: '#C5C4C4',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 9,
    fontWeight: '700',
    textAlign: 'left',
  },
  logbtn: {
    backgroundColor: '#000',
    width: 310,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLast: {
    borderRadius: 10,
    borderWidth: 1,
    height: 46,
    width: 310,
    fontSize: 16,
  },
});
