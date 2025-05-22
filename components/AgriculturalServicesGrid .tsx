import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Feather,
  Entypo,
} from '@expo/vector-icons';

const services = [
  { id: '1', label: 'Seeds & Plants', icon: <MaterialCommunityIcons name="sprout" size={25} color="green" /> },
  { id: '2', label: 'Weather Alert', icon: <Feather name="cloud-lightning" size={25} color="#555" /> },
  { id: '3', label: 'Kisan Credit', icon: <FontAwesome5 name="rupee-sign" size={25} color="#333" /> },
  { id: '4', label: 'Crop Insurance', icon: <FontAwesome5 name="hand-holding-heart" size={25} color="tomato" /> },
  { id: '5', label: 'Equipment', icon: <MaterialCommunityIcons name="tractor" size={25} color="#666" /> },
  { id: '6', label: 'Training', icon: <MaterialCommunityIcons name="school" size={25} color="#2e86de" /> },
  { id: '7', label: 'Community', icon: <Feather name="users" size={25} color="#555" /> },
  { id: '8', label: 'More', icon: <Entypo name="dots-three-horizontal" size={25} color="#aaa" /> },
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
      <View style={styles.headingContainer}>
      <Text style={styles.header}>Agricultural Services</Text>
      <TouchableOpacity>
        <Text style={styles.viewAllText}>View All</Text>
      </TouchableOpacity>
      </View>
      <FlatList
        data={services}
        numColumns={4}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ServiceCard item={item} />}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}

      />
    </View>
  );
};

export default AgriculturalServicesGrid;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop:8
  },
  headingContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    // alignItems:"center"
    
  },
  viewAllText:{
    fontSize:12,
    color:"#000",
    fontWeight:"600"
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
    textAlign:'left',
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
    // padding: 4,
    height:50,
    width:50,
    backgroundColor: '#eef2f3',
    borderRadius: 50,
    justifyContent:"center",
    alignItems:"center"
  },
  label: {
    fontSize: 10,
    marginTop: 4,
    textAlign: 'center',
    color: '#333',
  },
});
