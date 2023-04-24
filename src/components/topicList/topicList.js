import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const TopicList = ({ topics }) => {
  const navigation = useNavigation();

  const handlePress = (topicId) => {
    navigation.navigate('Topic Info', { topicId});
  };

  return (
    <View style={styles.container}>
      {topics && topics.map(topic => (
        <TouchableOpacity
          style={styles.itemContainer}
          key={topic._id}
          onPress={() => handlePress(topic)}
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
