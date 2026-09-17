import { StyleSheet, View, Text, TextInput } from "react-native";

export function InputTodo() {

  return (
    <View style={styles.inputSection}>
      <Text style={styles.inputSectionTitle}>Add a task</Text>
      <TextInput
        style={styles.textInput}
        placeholder="e.g. Water the plants"
        placeholderTextColor="#6c7086"
      />
      <Text style={styles.inputHint}>
        This is where you'll type a new task. We'll wire this up with state
        next week!
      </Text>
    </View>
  )
   
}

// Catppuccin Mocha palette
const colors = {
  mantle: "#181825",
  surface0: "#313244",
  surface1: "#45475a",
  overlay: "#6c7086",
};

const styles = StyleSheet.create({

  inputSection: {
    backgroundColor: colors.surface0,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
  },
  inputSectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: colors.mantle,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.surface1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
  },
  inputHint: {
    fontSize: 13,
    color: colors.overlay,
    marginTop: 8,
    fontStyle: "italic",
  },
 
});