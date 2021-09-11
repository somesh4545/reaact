import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import WavyHeader from '../components/WavyHeader';

const {width, height} = Dimensions.get('window');

const EditProfileScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('Sasp');
  const [lastName, setLastName] = useState('S');
  const [email, setEmail] = useState('sasp@gmail.com');
  const [gender, setGender] = useState();
  useEffect(() => {
    navigation.setOptions({
      title: 'Edit Profile',
    });
  }, []);
  return (
    <View style={styles.container}>
      <WavyHeader
        customStyles={styles.svgCurve}
        customHeight={height * 0.3}
        customTop={130}
        customBgColor="#2d54ee"
        customWavePattern="M0,160L40,149.3C80,139,160,117,240,138.7C320,160,400,224,480,224C560,224,640,160,720,122.7C800,85,880,75,960,101.3C1040,128,1120,192,1200,202.7C1280,213,1360,171,1400,149.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      />
      <View style={styles.topContainer}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2t3lOfdwwdkKWBUy4Bjc9hzwjClvAcBhCQw&usqp=CAU',
          }}
          style={styles.profileImg}
        />
        <Text style={styles.userName}>SASP SSASSO</Text>
      </View>
      <View style={styles.formContainer}>
        <ScrollView>
          <View style={styles.inputContainer}>
            <Text style={styles.inoutHeader}>First Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setFirstName(text)}
              value={firstName}
              placeholder="type here..."
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inoutHeader}>Last Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setLastName(text)}
              value={lastName}
              placeholder="type here..."
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inoutHeader}>Email Id</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setEmail(text)}
              value={email}
              placeholder="type here..."
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inoutHeader}>Gender</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setGender(text)}
              value={gender}
              placeholder="type here..."
            />
          </View>
          <TouchableOpacity style={styles.saveBtnContainer}>
            <View style={styles.saveBtn}>
              <Text style={styles.saveBtnText}>Save</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  topContainer: {
    // backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.35,
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 10,
    color: '#fff',
  },
  formContainer: {
    marginTop: 10,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#ddd',
    marginVertical: 15,
  },
  inoutHeader: {
    marginRight: 10,
    color: '#000',
    opacity: 0.6,
  },
  input: {
    flexGrow: 1,
    // alignSelf: 'stretch',
    borderBottomWidth: 1,
    fontWeight: 'bold',
    color: '#000',
    padding: 0,
  },
  saveBtnContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBtn: {
    width: 100,
    height: 40,
    backgroundColor: '#2d54ee',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBtnText: {
    color: '#fff',
  },
});
