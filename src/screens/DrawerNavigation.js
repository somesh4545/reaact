import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

const DrawerNavigation = () => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView>
        <View>
          <Text>ssap</Text>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
