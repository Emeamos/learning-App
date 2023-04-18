import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TopicList = ({ topics, onPress }) => {
  return (
    <View style={styles.container}>
      {topics.map(topic => (
        <TouchableOpacity
          style={styles.itemContainer}
          key={topic._id}
          onPress={() => onPress(topic)}
        >
          <Text style={styles.title}>{topic.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TopicList;
