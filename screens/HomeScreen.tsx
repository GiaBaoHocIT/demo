import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const fakeUsers = [
  { id: '1', name: 'Huỳnh Văn Gia Bảo', email: '2124802010646@student.tdmu.edu.vn' },
  { id: '2', name: 'Nguyễn Hồ Thảo Vy', email: 'nguyenhothaovy9a5@gmail.com' },
  { id: '3', name: 'Lê Võ Vương', email: 'vuongle@gmail.com' },
];

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <FlatList
      data={fakeUsers}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Detail', { user: item })}
        >
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.email}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
