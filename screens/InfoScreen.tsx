import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin ứng dụng</Text>
      <Text>Dữ liệu thông tin</Text>
    </View>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
