import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../assets/colors';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const loginBg = '../assets/loginBg.png';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const loginFun = () => {
    if (username != '' && password != '') {
      console.log(username + ' ' + password);
      navigation.replace('HomeScreen');
    } else {
      ToastAndroid.show('All fields are required', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.backCircle} />
        <View style={styles.backBtn}>
          <FontAwesome5 size={22} color={'#fff'} name="arrow-left" />
          <Text style={{color: '#fff', fontSize: 18, marginLeft: 10}}>
            Back
          </Text>
        </View>
        <View style={styles.titleBar}>
          <Text style={styles.title}>Log In</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        {/* <Image
          source={{
            uri: 'https://res.cloudinary.com/dkdunme0b/image/upload/v1631178140/loginBg_wrfucx.png',
          }}
          style={styles.bgImg}
        /> */}
        <View style={styles.form}>
          <ScrollView>
            <View style={styles.inputContainer}>
              <Text style={styles.inputheader}>Username</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => setUsername(text)}
                value={username}
                placeholder="Type here.."
                placeholderTextColor={'#ddd'}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputheader}>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="Type here.."
                placeholderTextColor={'#ddd'}
              />
            </View>
          </ScrollView>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={loginFun} style={styles.btn}>
              <Text style={styles.btnText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  upperContainer: {
    padding: 20,
  },
  backCircle: {
    position: 'absolute',
    left: -100,
    width: 300,
    height: 300,
    top: -150,
    borderRadius: 150,
    backgroundColor: '#2d54ee',
  },
  backBtn: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  titleBar: {},
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 1,
    marginTop: 70,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  bgImg: {
    // height: '100%',
    height: Height - 100,
    position: 'absolute',
    width: Width,
    top: 0,
  },

  form: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#07193f',
    // marginTop: 180,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputheader: {
    color: '#fff',
    fontSize: 20,
  },
  input: {
    color: '#fff',
    backgroundColor: '#535f79',
    borderRadius: 10,
    paddingHorizontal: 10,
    padding: 5,
    marginTop: 10,
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  btn: {
    backgroundColor: '#2d54ee',
    borderRadius: 20,
    height: 40,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
