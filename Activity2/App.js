import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: '',
    title: 'Make a Breakfast Meal',
  },
  {
    id: '',
    title: 'Do a Bug Fixing',
  },
  {
    id: '',
    title: 'Get a Morning Coffee',
  },
  {
    id: '',
    title: 'Make a Contribution in Github',
  },
  {
    id: '',
    title: 'Upload a Video on Youtube',
  },
  {
    id: '',
    title: 'Got some 1hour Break',
  },
  {
    id: '',
    title: 'Eat atleast a 1000kcal.',
  },
  {
    id: '',
    title: 'Complete the Daily Task in PJSK',
  },
  {
    id: '',
    title: 'Catch 50 Pokemon in Pokemon GO',
  },
  {
    id: '',
    title: 'Complete Daily Challenges in Pokemon GO',
  },
  {
    id: '',
    title: 'Catch 1 Shiny Pokemon in Pokemon GO',
  },
  {
    id: '',
    title: 'Update the Client for the Progress',
  },
  {
    id: '',
    title: 'Pull 10 Gatcha in PJSK',
  },
  {
    id: '',
    title: 'Get Some Drink after Work',
  },
  {
    id: '',
    title: 'Clean the house after Work',
  },
  {
    id: '',
    title: 'Do a laundry',
  },
  {
    id: '',
    title: 'Cooked a Midnight Meal',
  },
  {
    id: '',
    title: 'Have a long shower',
  },
  {
    id: '',
    title: 'Clean the Desk after using PC',
  },
  {
    id: '',
    title: 'Have a Nice Haircut after Work',
  },
  {
    id: '',
    title: 'Clean the Kitchen after cooking Midnight Meal',
  },
  {
    id: '',
    title: 'Comb your Hair',
  },
  {
    id: '',
    title: 'Check Emails for potential Client',
  },
  {
    id: '',
    title: 'Update the Status on Messenger',
  },
  {
    id: '',
    title: 'Have a 8 Hrs. Sleep',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
      <TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
  </View>
);
const onPress = () => setCount(prevCount => prevCount + 1);
const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>

        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />

    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f36d50',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
});

export default App;