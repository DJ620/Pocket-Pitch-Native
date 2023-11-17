import {
  View,
  SafeAreaView,
  Image,
  Dimensions,
  StyleSheet,
  Text,
} from "react-native";
import { Stack } from "expo-router";
import Header from "../assets/Images/Miscellaneous/Header.png";
import allNotes from "../assets/AllNotes";
import Note from "../components/note";

const HeaderPic = () => {
  return <Image source={Header} resizeMode="contain" />;
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 80,
    alignItems: "center",
  },
  notesContainer: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").width * 0.8,
    borderWidth: 5,
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
  footerContainer: {
    position: 'absolute',
    bottom: 32,
    width: '100%'
  },
  footer: {
    textAlign: 'center',
    color: "#595959",
    fontSize: 12
  },
});

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.header}>
        <HeaderPic />
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.notesContainer}>
          {allNotes.map((note) => (
            <Note note={note} key={note.id} />
          ))}
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footer}>&copy; 2015 John Walbolt</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
