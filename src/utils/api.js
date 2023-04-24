import axios from 'axios';

const API_URL = 'https://learningapp-api.onrender.com/api';

export const getSubjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/subject`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTopicsBySubjectId = async (subjectId) => {
  try {
    const response = await axios.get(`${API_URL}/subject/${subjectId}/topics`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTopicById = async (topicId) => {
  try {
    const response = await axios.get(`${API_URL}/subject/topics/${topicId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTopicVideo = async (topicId) => {
  try {
    const response = await axios.get(`${API_URL}/topics/${topicId}`);
    const topic = response.data;
    return topic.videoUrl;
  } catch (err) {
    console.error(err);
    return null;
  }
};
