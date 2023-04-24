import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import axios from 'axios';

const VideoPlayer = ({ topicId }) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await axios.get(`https://learningapp-api.onrender.com/api/subject/${subjectId}/topics/${topicId}`);
        setVideoUrl(response.data.videoUrl);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideoUrl();
  }, [topicId]);

  const onEnd = () => {
    setPaused(true);
    // handle video ended event
  };

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoUrl }}
        style={styles.video}
        resizeMode="contain"
        paused={paused}
        onEnd={onEnd}
      />
      {!paused && (
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Tap to Pause</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  video: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayText: {
    color: 'white',
    fontSize: 20,
  },
});

export default VideoPlayer;
