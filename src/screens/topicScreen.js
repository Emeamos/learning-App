import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { getTopicsBySubjectId } from '../utils/api';

const TopicScreen = ({ route, navigation }) => {
  const [topics, setTopics] = useState([]);
  const { subjectId } = route.params;

  useEffect(() => {
    getTopicsBySubjectId(subjectId)
      .then(res => {
        setTopics(res);
      })
      .catch(err => console.log(err));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Topic Info', { topicId: item._id })}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={topics}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default TopicScreen;
