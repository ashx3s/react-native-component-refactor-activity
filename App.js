import {
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopHeader } from "./components/TopHeader";
import { AddTask } from "./components/AddTask";
import { InputTodo } from "./components/inputTodo";
import { TodoTasks } from "./components/TodoTasks";


// -----------------------------------------------------------------------
// Check It! — homepage + todo app screen
//
// This whole screen is written as ONE big component.
// Your job in this activity is to break it apart into clearly defined,
// reusable components.
// Nothing here should change Visually or Functionally
// -----------------------------------------------------------------------

const todoItems = [
  {
    id: "1",
    title: "Finish React Native homework",
    description: "Refactor the Check It! homepage into components.",
  },
  {
    id: "2",
    title: "Grocery run",
    description: "Milk, eggs, coffee, oat milk.",
  },
  {
    id: "3",
    title: "Review pull request",
    description: "Check the staging branch before Monday standup.",
  },
  {
    id: "4",
    title: "Walk the dog",
    description: "Evening loop around the block before it gets dark.",
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TopHeader />
        <AddTask />
        <InputTodo />
        <TodoTasks todoItems={todoItems} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Thank you for using Check It!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Catppuccin Mocha palette
const colors = {
  base: "#1e1e2e",
  overlay: "#6c7086",
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.base,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  
  footer: {
    alignItems: "center",
    paddingVertical: 24,
  },
  footerText: {
    fontSize: 14,
    color: colors.overlay,
  },
});
