import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SubjectListItem from './subjectListItem';
import { useNavigation } from '@react-navigation/native';
import { getSubjects } from '../../utils/api';

const SubjectList = () => {
  const navigation = useNavigation();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const subjects = await getSubjects();
      setSubjects(subjects);
    };

    fetchSubjects();
  }, []);

  const handlePress = (subjectId) => {
    navigation.navigate('Topics', { subjectId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={subjects}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
          <SubjectListItem subject={item.name} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SubjectList;
