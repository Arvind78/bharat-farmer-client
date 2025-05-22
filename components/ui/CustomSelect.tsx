import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type SelectProps = {
  label?: string;
  data: any[];
  selected: string;
  setSelectedValue: (value: string) => void;
  placeholderText: string;
  editable: boolean;
};

const CustomSelect: React.FC<SelectProps> = ({
  label,
  data,
  selected,
  setSelectedValue,
  placeholderText,
  editable,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TouchableOpacity
        style={[styles.dropdownButton, !editable && styles.disabledButton]}
        onPress={() => editable && setIsOpen(!isOpen)}
        disabled={!editable}
      >
        <Text style={[styles.dropdownText, !editable && styles.disabledText]}>
          {selected ? selected : placeholderText}
        </Text>
        <Ionicons
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={16}
          color={editable ? 'gray' : '#ccc'}
        />
      </TouchableOpacity>

      {isOpen && editable && data?.length > 0 && (
        <View style={styles.dropdown}>
          <ScrollView
            nestedScrollEnabled={true}
            persistentScrollbar={Platform.OS === 'android'}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {data.map((item,index) => (
              <TouchableOpacity
                key={index}
                style={styles.option}
                onPress={() =>
                  handleSelect(label === 'State' ? item.stateName : item.name)
                }
              >
                <Text style={styles.optionText}>
                  {label === 'State' ? item.stateName : item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default CustomSelect;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    color: '#444',
    marginBottom: 4,
    marginLeft: 1,
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  disabledButton: {
    backgroundColor: 'transparent',
    borderColor: '#ddd',
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
  },
  disabledText: {
    color: '#999',
  },
  dropdown: {
    borderWidth: 0.2,
    borderColor: '#ccc',
    borderRadius: 8,
    marginTop: 5,
    maxHeight: 180,
    backgroundColor: '#fff',
  },
  option: {
    padding: 12,
    borderBottomWidth: 0.3,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 13,
  },
});
