import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getTopicById } from '../utils/api';

const TopicInfoScreen = ({ route }) => {
  const { topicId } = route.params;
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    const fetchTopic = async () => {
      const topicData = await getTopicById(topicId);
      setTopic(topicData);
    };
    fetchTopic();
  }, [topicId]);

  return (
    <View style={styles.container}>
      {topic ? (
        <>
          <Text style={styles.title}>{topic.title}</Text>
          <Text style={styles.description}>{topic.description}</Text>
          <Text style={styles.videoUrl}>{topic.videoUrl}</Text>
          {/* Render any other topic information */}
        </>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  videoUrl: {
    fontSize: 14,
    color: '#999',
  },
});

export default TopicInfoScreen;
