import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const DepartmentBlock = props => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: props.img,
        }}
        style={styles.img}
      />
      <Text style={styles.title} numberOfLines={1}>
        {props.name}{' '}
      </Text>
      <Text style={styles.total}>Total: {props.total}</Text>
    </View>
  );
};

export default DepartmentBlock;

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 80,
    backgroundColor: '#fff',
    margin: 10,
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 30,
    width: 30,
  },
  title: {
    // width: 70,
    fontWeight: '300',
    color: '#000',
  },
});
