import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getTopicById } from '../utils/api';
import {TopicListItem} from '../components/topicList/topicListItem';

const TopicInfoScreen = ({ route }) => {
  const { topicId } = route.params;
  const [topics, setTopics] = useState(null);

  useEffect(() => {
    const fetchTopic = async () => {
      const topicData = await getTopicById(topicId);
      setTopics(topicData);
    };
    fetchTopic();
  }, [topicId]);

  return (
    <View style={styles.container}>
      {topics ? (
        <TopicListItem topic={topic} />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default TopicInfoScreen;
