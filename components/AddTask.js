import {
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  Alert,
  Pressable
} from "react-native";

export function AddTask() {

  return(
    <View style={styles.descriptionSection}>
      <Text style={styles.descriptionTitle}>Why Check It?</Text>
      <Text style={styles.descriptionText}>
        Check It! keeps every task, big or small, in one calm, clutter-free
        list. No ads, no noise — just you and the things you need to get
        done today.
      </Text>

      <View style={styles.ctaRow}>
        <View style={styles.ctaButton}>
        <Pressable
          style={styles.pressable1}
          onPress={() => Alert.alert("Try Now pressed")}
        >
          <Text>Try Now</Text>
        </Pressable>
        </View>
        <View style={styles.ctaButton}>
        <Pressable
          style={styles.pressable2}
          onPress={() => Alert.alert("Try Now pressed")}
        >
          <Text>Create Account</Text>
        </Pressable>
        </View>
      </View>
    </View>
  
  )
}

// Catppuccin Mocha palette
const colors = {
  base: "#1e1e2e",
  text: "#cdd6f4",
  subtext: "#a6adc8",
  surface0: "#313244",
};

const styles = StyleSheet.create({
  
  descriptionSection: {
    padding: 20,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.subtext,
    marginBottom: 16,
  },

  ctaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ctaButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  
   inputSection: {
    backgroundColor: colors.surface0,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
  },
  pressable1:{
    backgroundColor: '#89b4fa',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  pressable2:{
    backgroundColor: '#cba6f7',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  }

});