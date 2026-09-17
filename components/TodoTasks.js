import {View, Text, TextInput, Pressable, StyleSheet, Button} from 'react-native';

export function TodoTasks({todoItems}){
  return (
      <View style={styles.todoSection}>
        <Text style={styles.todoSectionTitle}>Your tasks</Text>

        {/*
          TODO: this list is small right now, so a ScrollView + .map()
          is fine. Once the list can grow (real todos, loaded from
          state/storage), convert this to a FlatList for better
          performance with large lists.
        */}
        {todoItems.map((item) => (
          <View key={item.id} style={styles.todoCard}>
            <Text style={styles.todoTitle}>{item.title}</Text>
            <Text style={styles.todoDescription}>{item.description}</Text>
            <View style={styles.todoButtonRow}>
              <View style={styles.todoButton}>
                <Pressable
                  onPress={() => Alert.alert("Complete:", item.id)}
                  style={styles.pressable1}
                > <Text>Complete Task</Text></Pressable>
              </View>
              <View style={styles.todoButton}>
                <Pressable
                  onPress={() => Alert.alert("Delete:", item.id)}
                  style={styles.pressable2}
                > <Text>Delete Task</Text></Pressable>
              </View>
            </View>
          </View>
        ))}
      </View>
  )
}

// Catppuccin Mocha palette
const colors = {
  base: "#1e1e2e",
  mantle: "#181825",
  surface0: "#313244",
  surface1: "#45475a",
  text: "#cdd6f4",
  subtext: "#a6adc8",
  overlay: "#6c7086",
  lavender: "#b4befe",
  blue: "#89b4fa",
  mauve: "#cba6f7",
  green: "#a6e3a1",
  red: "#f38ba8",
  peach: "#fab387",
  yellow: "#f9e2af",
};

const styles = StyleSheet.create({
 
  todoSection: {
    padding: 20,
  },
  todoSectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 12,
  },
  todoCard: {
    backgroundColor: colors.surface0,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  todoTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.text,
  },
  todoDescription: {
    fontSize: 14,
    color: colors.subtext,
    marginTop: 4,
    marginBottom: 12,
  },
  todoButtonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todoButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  footer: {
    alignItems: "center",
    paddingVertical: 24,
  },
  footerText: {
    fontSize: 14,
    color: colors.overlay,
  },
   pressable1:{
    backgroundColor: '#a6e3a1',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  pressable2:{
    backgroundColor: '#f38ba8',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  }
});