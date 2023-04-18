import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SubjectListItem = ({ subject, onPress }) => {
  return (
    
    <TouchableOpacity style={styles.container} onPress={() => onPress(subject)}>
      <Text style={styles.title}>{subject.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SubjectListItem;
