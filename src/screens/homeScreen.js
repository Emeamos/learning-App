import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SubjectListItem from '../components/subjectList/subjectListItem';
import TopicScreen from './topicScreen';

const HomeScreen = ({ navigation }) => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch('https://learningapp-api.onrender.com/api/subject');
        const data = await response.json();
        setSubjects(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSubjects();
  }, []);

  const handleSubjectPress = (subject) => {
    // navigate to the TopicList screen and pass in the selected subject as a parameter
    navigation.navigate('Topics', { subject });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Learning App</Text>
      <FlatList
        data={subjects}
        renderItem={({ item }) => (
          <SubjectListItem subject={item} onPress={handleSubjectPress} />
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import SubjectListItem from '../components/subjectList/subjectListItem';

// const HomeScreen = ({ navigation }) => {
//   const [subject, setSubjects] = useState([]);

//   useEffect(() => {
//     // fetch the list of subjects from your backend API
//     fetch('http://https://learningapp-api.onrender.com/api/subject')
//       .then((response) => response.json())
//       .then((data) => setSubjects(data))
//       .catch((error) => console.error(error));
//   }, []);

//   const handleSubjectPress = (subject) => {
//     // navigate to the TopicList screen and pass in the selected subject as a parameter
//     navigation.navigate('TopicList', { subject });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Learning App</Text>
//       <FlatList
//         data={subject}
//         renderItem={({ item }) => (
//           <SubjectListItem subject={item} onPress={handleSubjectPress} />
//         )}
//         keyExtractor={(item) => item._id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
// });

// export default HomeScreen;


// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//   const [started, setStarted] = useState(false);

//   const handleGetStarted = () => {
//     setStarted(true);
//     navigation.navigate('Subjects');
//   };

//   return (
//     <View>
//       {!started && (
//         <View>
//           <Text>Welcome to the Learning App</Text>
//           <Button title="Get Started" onPress={handleGetStarted} />
//         </View>
//       )}
//       {started && (
//         <View>
//           <Text>List of Subjects</Text>
//           {/* Render the list of subjects */}
//         </View>
//       )}
//     </View>
//   );
// };

// export default HomeScreen;

// import React, { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// import SubjectList from './SubjectList';

// const HomeScreen = () => {
//   const [showSubjects, setShowSubjects] = useState(false);

//   const handleGetStarted = () => {
//     setShowSubjects(true);
//   };

//   return (
//     <View style={styles.container}>
//       {!showSubjects && (
//         <View style={styles.getStartedContainer}>
//           <Text style={styles.getStartedText}>Welcome to the Learning App!</Text>
//           <TouchableOpacity onPress={handleGetStarted} style={styles.getStartedButton}>
//             <Text style={styles.getStartedButtonText}>Get Started</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//       {showSubjects && <SubjectList />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   getStartedText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   getStartedButton: {
//     backgroundColor: '#007AFF',
//     padding: 10,
//     borderRadius: 5,
//   },
//   getStartedButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default HomeScreen;

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { BackHandler } from 'react-native';
// import {SubjectList} from '../components/subjectList/subjectList';
// import { getSubjects } from '../utils/api';
// import { useNavigation } from '@react-navigation/native';

// const HomeScreen = () => {
//   const navigation = useNavigation();
//   const [showSubjects, setShowSubjects] = useState(false);
//   const [subjects, setSubjects] = useState([]);
  
  
//   const handleGetStarted = async () => {
//     try {
//       const subjects = await getSubjects();
//       setSubjects(subjects);
//       setShowSubjects(true);
//       navigation.navigate('Subjects', { subjects });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleBackButton = () => {
//     BackHandler.exitApp();
//     return true;
//   };

//   useEffect(() => {
//     BackHandler.addEventListener('hardwareBackPress', handleBackButton);
//     return () => {
//       BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
//     };
//   }, []);

//   const handleCloseApp = () => {
//     BackHandler.exitApp();
//   };

//   return (
//     <View style={styles.container}>
//       {!showSubjects && (
//         <View style={styles.getStartedContainer}>
//           <Text style={styles.getStartedText}>Welcome to the Learning App!</Text>
//           <TouchableOpacity onPress={handleGetStarted} style={styles.getStartedButton}>
//             <Text style={styles.getStartedButtonText}>Get Started</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleCloseApp} style={styles.closeButton}>
//             <Text style={styles.closeButtonText}>Close App</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//       {showSubjects && (
//         <SubjectList
//           subjects={subjects}
//           navigation={navigation}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   getStartedText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   getStartedButton: {
//     backgroundColor: '#007AFF',
//     padding: 10,
//     borderRadius: 5,
//   },
//   getStartedButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   closeButton: {
//     marginTop: 20,
//   },
//   closeButtonText: {
//     color: 'red',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default HomeScreen;
