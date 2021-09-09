import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';

const PdfBlock = props => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: props.img,
        }}
        style={styles.img}
      />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {props.name}
        </Text>
        <Text style={styles.subject} numberOfLines={1}>
          {props.subject}
        </Text>
      </View>
    </View>
  );
};

export default PdfBlock;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 120,
    marginRight: 20,
    // backgroundColor: '#000',
    borderRadius: 10,
    elevation: 2,
  },
  img: {
    width: 120,
    height: 140,
  },
  info: {
    paddingHorizontal: 15,
  },
  name: {
    fontSize: 20,
  },
  subject: {},
});
