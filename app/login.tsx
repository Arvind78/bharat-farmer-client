import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  FlatList,
} from 'react-native';
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Feather,
  Entypo,
} from '@expo/vector-icons';

const services = [
  { id: '1', label: 'Seeds & Plants', icon: <MaterialCommunityIcons name="sprout" size={28} color="white" /> },
  { id: '2', label: 'Weather Alert', icon: <Feather name="cloud-lightning" size={26} color="white" /> },
  { id: '3', label: 'Kisan Credit', icon: <FontAwesome5 name="rupee-sign" size={24} color="white" /> },
  { id: '4', label: 'Crop Insurance', icon: <FontAwesome5 name="hand-holding-heart" size={24} color="white" /> },
  { id: '5', label: 'Equipment', icon: <MaterialCommunityIcons name="tractor" size={28} color="white" /> },
  { id: '6', label: 'Training', icon: <MaterialCommunityIcons name="school" size={28} color="white" /> },
  { id: '7', label: 'Community', icon: <Feather name="users" size={26} color="white" /> },
  { id: '8', label: 'More', icon: <Entypo name="dots-three-horizontal" size={24} color="white" /> },
];

const ServiceCard = ({ item }: any) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => console.log(`${item.label} clicked`)}
    >
      <Animated.View style={[styles.item, { transform: [{ scale }] }]}>
        <View style={styles.iconContainer}>{item.icon}</View>
        <Text style={styles.label}>{item.label}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const AgriculturalServicesGrid = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Agricultural Services</Text>
      <FlatList
        data={services}
        numColumns={4}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ServiceCard item={item} />}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AgriculturalServicesGrid;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 14,
    color: '#2c3e50',
    textAlign: 'center',
  },
  grid: {
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    marginVertical: 6,
    padding: 5,
  },
  iconContainer: {
    padding: 4,
    height: 50,
    width: 50,
    backgroundColor: '#00B86B', // Primary green theme
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 10,
    marginTop: 2,
    textAlign: 'center',
    color: 'white', // White text to match theme
  },
});
