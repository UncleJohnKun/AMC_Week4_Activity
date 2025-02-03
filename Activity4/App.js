import React, { useState } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Checkbox } from 'react-native-paper';

const initialData = [
  { id: '001', title: 'Make a Breakfast Meal', done: false },
  { id: '002', title: 'Do a Bug Fixing', done: false },
  { id: '003', title: 'Get a Morning Coffee', done: false },
  { id: '004', title: 'Make a Contribution in Github', done: false },
  { id: '005', title: 'Upload a Video on Youtube', done: false },
  { id: '006', title: 'Got some 1hour Break', done: false },
  { id: '007', title: 'Eat at least 1000 kcal.', done: false },
  { id: '008', title: 'Complete the Daily Task in PJSK', done: false },
  { id: '009', title: 'Catch 50 Pokemon in Pokemon GO', done: false },
  { id: '010', title: 'Complete Daily Challenges in Pokemon GO', done: false },
  { id: '011', title: 'Catch 1 Shiny Pokemon in Pokemon GO', done: false },
  { id: '012', title: 'Update the Client for the Progress', done: false },
  { id: '013', title: 'Pull 10 Gacha in PJSK', done: false },
  { id: '014', title: 'Get Some Drink after Work', done: false },
  { id: '015', title: 'Clean the house after Work', done: false },
  { id: '016', title: 'Do laundry', done: false },
  { id: '017', title: 'Cook a Midnight Meal', done: false },
  { id: '018', title: 'Have a long shower', done: false },
  { id: '019', title: 'Clean the Desk after using PC', done: false },
  { id: '020', title: 'Have a Nice Haircut after Work', done: false },
  { id: '021', title: 'Clean the Kitchen after cooking Midnight Meal', done: false },
  { id: '022', title: 'Comb your Hair', done: false },
  { id: '023', title: 'Check Emails for potential Client', done: false },
  { id: '024', title: 'Update the Status on Messenger', done: false },
  { id: '025', title: 'Have 8 Hrs. Sleep', done: false },
];

const COLORS = ['#DFFF00', '#FFBF00', '#FF7F50', '#DE3163', '#9FE2BF', '#40E0D0', '#18bb86', '#e149de', '#5f8f11', '#823013', '#d2bb88', '#2c90d0', '#cce004', '#818fee', '#9FE2BF', '#558868', '#ba5be6', '#692ce8', '#efbd9c', '#c146a6', '#DFFF00', '#17e247', '#a1c468', '#1840eb', '#ff0702'];

const Item = ({ item, onToggle, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onToggle} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    <Checkbox
      status={item.done ? 'checked' : 'unchecked'}
      onPress={onToggle}
      color={item.done ? "white" : "#6495ED"} 
      uncheckedColor="#6495ED" 
    />
  </TouchableOpacity>
);

const App = () => {
  const [data, setData] = useState(initialData);

  const toggleDone = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const finishedCount = data.reduce((count, task) => (task.done ? count + 1 : count), 0);
  const notFinishedCount = data.length - finishedCount;

  const renderItem = ({ item, index }) => {
    const backgroundColor = item.done ? '#6495ED' : COLORS[index % COLORS.length];
    const textColor = item.done ? 'white' : 'black';

    return (
      <Item
        item={item}
        onToggle={() => toggleDone(item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Title */}
        <View style={styles.header}>
          <Text style={styles.headerText}>📌 Todo List</Text>
        </View>

        {/* Summary Section */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>✅ Finished: {finishedCount}</Text>
          <Text style={styles.summaryText}>❌ Not Finished: {notFinishedCount}</Text>
        </View>

        {/* Task List */}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={data}
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
  header: {
    backgroundColor: '#6495ED',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    flex: 1,
  },
});

export default App;
