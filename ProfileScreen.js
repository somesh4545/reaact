import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import WavyHeader from '../components/WavyHeader';

const {width, height} = Dimensions.get('window');

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <WavyHeader
        customStyles={styles.svgCurve}
        customHeight={height * 0.3}
        customTop={130}
        customBgColor="#2d54ee"
        customWavePattern="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
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
      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={styles.optionBlock}
          onPress={() => navigation.navigate('EditProfile', {id: 2})}>
          <FontAwesome5 name="circle" size={18} color={'#000'} />
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionBlock}>
          <FontAwesome5 name="comment-dots" size={18} color={'#000'} />
          <Text style={styles.optionText}>Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionBlock}>
          <FontAwesome5 name="users" size={18} color={'#000'} />
          <Text style={styles.optionText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionBlock}>
          <FontAwesome5 name="unlock" size={18} color={'#000'} />
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

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
  optionContainer: {
    marginTop: 10,
  },
  optionBlock: {
    marginVertical: 10,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 10,
    color: '#000',
  },
});
