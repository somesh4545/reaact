import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';

import HomeTopBar from '../components/HomeTopBar';
import PdfBlock from '../components/PdfBlock';
import DepartmentBlock from '../components/DepartmentBlock';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const DATA = [
  {
    id: 1,
    name: 'Physics',
    subject: 'Phy',
    img: 'https://i.pinimg.com/originals/37/15/03/371503d0862977600b1ef93fb61e5a70.png',
  },
  {
    id: 2,
    name: 'Physics 2',
    subject: 'Phy 2',
    img: 'https://i.pinimg.com/originals/37/15/03/371503d0862977600b1ef93fb61e5a70.png',
  },
  {
    id: 3,
    name: 'Physics 2',
    subject: 'Phy 2',
    img: 'https://i.pinimg.com/originals/37/15/03/371503d0862977600b1ef93fb61e5a70.png',
  },
  {
    id: 4,
    name: 'Physics 2',
    subject: 'Phy 2',
    img: 'https://i.pinimg.com/originals/37/15/03/371503d0862977600b1ef93fb61e5a70.png',
  },
  {
    id: 5,
    name: 'Physics 2',
    subject: 'Phy 2',
    img: 'https://i.pinimg.com/originals/37/15/03/371503d0862977600b1ef93fb61e5a70.png',
  },
  {
    id: 6,
    name: 'Physics 2',
    subject: 'Phy 2',
    img: 'https://i.pinimg.com/originals/37/15/03/371503d0862977600b1ef93fb61e5a70.png',
  },
  {
    id: 7,
    name: 'Physics 2',
    subject: 'Phy 2',
    img: 'https://i.pinimg.com/originals/37/15/03/371503d0862977600b1ef93fb61e5a70.png',
  },
];

const Department = [
  {
    id: 1,
    name: 'Computer',
    img: 'https://cdn4.vectorstock.com/i/1000x1000/74/08/desktop-computer-icon-computer-screen-symbol-vector-19667408.jpg',
    total: 20,
  },
  {
    id: 2,
    name: 'IT',
    img: 'https://icon-library.com/images/devices-icon/devices-icon-15.jpg',
    total: 20,
  },
  {
    id: 3,
    name: 'Mechanical',
    img: 'https://cdn5.vectorstock.com/i/1000x1000/27/14/mechanical-engineer-black-glyph-icon-vector-32172714.jpg',
    total: 20,
  },
  {
    id: 4,
    name: 'Civil',
    img: 'https://www.pngall.com/wp-content/uploads/5/Engineer-PNG.png',
    total: 20,
  },
  {
    id: 5,
    name: 'Electrical',
    img: 'https://media.istockphoto.com/vectors/electric-plug-icon-with-cord-vector-vector-id1147134778?b=1&k=20&m=1147134778&s=612x612&w=0&h=ngGMI9hlmJxCmPqYq3HO11etArIXEqwJmygsjrUH2pA=',
    total: 20,
  },
  {
    id: 6,
    name: 'ENTC',
    img: 'https://png.pngtree.com/png-vector/20190227/ourlarge/pngtree-vector-satellite-dish-icon-png-image_707377.jpg',
    total: 20,
  },
  {
    id: 7,
    name: 'Metallurgy',
    img: 'https://www.shareicon.net/data/512x512/2016/01/21/706590_hot_512x512.png',
    total: 20,
  },
  {
    id: 8,
    name: 'DDGM',
    img: 'https://cdn3.vectorstock.com/i/1000x1000/57/47/dressmaker-model-icon-vector-7325747.jpg',
    total: 20,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTextAlign: 'left',
      headerTitle: () => <HomeTopBar />,
      headerLeft: false,
    });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>PDF's 4 you</Text>
        <View style={styles.card1}>
          <FlatList
            data={DATA}
            horizontal={true}
            renderItem={({item}) => {
              return (
                <PdfBlock
                  name={item.name}
                  subject={item.subject}
                  img={item.img}
                />
              );
            }}
            keyExtractor={item => item.id}
          />
        </View>
        <Text style={styles.departmentTitle}>Departments</Text>
        <View style={styles.card2}>
          {Department.map((item, index) => {
            return (
              <DepartmentBlock
                key={index}
                img={item.img}
                name={item.name}
                total={item.total}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    // fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10,
  },
  card1: {
    height: 240,
    backgroundColor: '#fff',
    // flexWrap: 'wrap',
    elevation: 10,
    borderRadius: 10,
    width: width - 30,
    padding: 20,
  },
  departmentTitle: {
    marginTop: 35,
    fontSize: 22,
  },
  card2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
