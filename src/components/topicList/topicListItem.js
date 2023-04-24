import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VideoPlayer from '../videoPlayer/videoPlayer';

const TopicListItem = ({ topic }) => {
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
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  videoContainer: {
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default TopicListItem;
