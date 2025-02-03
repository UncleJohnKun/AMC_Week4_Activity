import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: '001',
    title: 'Make a Breakfast Meal',
  },
  {
    id: '002',
    title: 'Do a Bug Fixing',
  },
  {
    id: '003',
    title: 'Get a Morning Coffee',
  },
  {
    id: '004',
    title: 'Make a Contribution in Github',
  },
  {
    id: '005',
    title: 'Upload a Video on Youtube',
  },
  {
    id: '006',
    title: 'Got some 1hour Break',
  },
  {
    id: '007',
    title: 'Eat atleast a 1000kcal.',
  },
  {
    id: '008',
    title: 'Complete the Daily Task in PJSK',
  },
  {
    id: '009',
    title: 'Catch 50 Pokemon in Pokemon GO',
  },
  {
    id: '010',
    title: 'Complete Daily Challenges in Pokemon GO',
  },
  {
    id: '011',
    title: 'Catch 1 Shiny Pokemon in Pokemon GO',
  },
  {
    id: '012',
    title: 'Update the Client for the Progress',
  },
  {
    id: '013',
    title: 'Pull 10 Gatcha in PJSK',
  },
  {
    id: '014',
    title: 'Get Some Drink after Work',
  },
  {
    id: '015',
    title: 'Clean the house after Work',
  },
  {
    id: '016',
    title: 'Do a laundry',
  },
  {
    id: '017',
    title: 'Cooked a Midnight Meal',
  },
  {
    id: '018',
    title: 'Have a long shower',
  },
  {
    id: '019',
    title: 'Clean the Desk after using PC',
  },
  {
    id: '020',
    title: 'Have a Nice Haircut after Work',
  },
  {
    id: '021',
    title: 'Clean the Kitchen after cooking Midnight Meal',
  },
  {
    id: '022',
    title: 'Comb your Hair',
  },
  {
    id: '023',
    title: 'Check Emails for potential Client',
  },
  {
    id: '024',
    title: 'Update the Status on Messenger',
  },
  {
    id: '025',
    title: 'Have a 8 Hrs. Sleep',
  },
];


const COLORS = ['#DFFF00','#FFBF00','#FF7F50','#DE3163','#9FE2BF','#40E0D0','#18bb86','#e149de','#5f8f11','#823013','#d2bb88','#2c90d0','#cce004','#818fee','#9FE2BF','#558868','#ba5be6','#692ce8','#efbd9c','#c146a6','#DFFF00','#17e247','#a1c468','#1840eb','#ff0702']


const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item, index}) => {
    const backgroundColor = item.id === selectedId ? '#6495ED' : COLORS[index % COLORS.length];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

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