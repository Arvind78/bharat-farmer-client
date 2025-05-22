import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';

const dummyImageUrl = 'https://via.placeholder.com/40';

const initialSchemes = [
  {
    id: '1',
    title: 'Soil Health Card',
    description: 'Get detailed analysis of your soil quality and recommendations.',
    type: 'government',
    image: dummyImageUrl,
    primaryLabel: 'Apply Now',
    secondaryLabel: 'Learn More →',
  },
  {
    id: '2',
    title: 'E-NAM Portal',
    description: 'Online trading platform for agricultural commodities.',
    type: 'government',
    image: dummyImageUrl,
    primaryLabel: 'Register',
    secondaryLabel: 'Learn More →',
  },
  {
    id: '3',
    title: 'AgriConsult',
    description: 'Private expert consultation for modern farming.',
    type: 'private',
    image: dummyImageUrl,
    primaryLabel: 'Book Now',
    secondaryLabel: 'Learn More →',
  },
];

const Schemes = () => {
  const [schemes, setSchemes] = useState(initialSchemes);

  const renderCard = (item: any) => (
    <View key={item.id} style={styles.card}>
      <View style={styles.iconWrapper}>
        <Image source={{ uri: item.image }} style={styles.icon} />
      </View>
      <View style={styles.info}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>{item.primaryLabel}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.link}>{item.secondaryLabel}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.sectionTitle}>Available Schemes</Text>
      {schemes.map(renderCard)}
    </ScrollView>
  );
};

export default Schemes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 16,
    color: '#222',
  },
  card: {
    flexDirection: 'row',
    padding: 14,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  iconWrapper: {
    marginRight: 14,
    justifyContent: 'flex-start',
  },
  icon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#eee',
  },
  info: {
    flex: 1,
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 15,
    color: '#333',
  },
  description: {
    fontSize: 13,
    color: '#666',
    marginVertical: 4,
    lineHeight: 18,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  primaryButton: {
    backgroundColor: '#00B86B',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },
  link: {
    fontSize: 13,
    color: '#00B86B',
    fontWeight: '500',
  },
});
