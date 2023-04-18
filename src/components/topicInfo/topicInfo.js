import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VideoPlayer from './VideoPlayer';

const TopicInfo = ({ topic }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{topic.title}</Text>
      <View style={styles.videoContainer}>
        <VideoPlayer video={topic.video} />
      </View>
      <Text style={styles.description}>{topic.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  videoContainer: {
    marginBottom: 20,
  },
  description: {
    fontSize: 20,
  },
});

export default TopicInfo;
