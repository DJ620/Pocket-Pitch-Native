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
    maxWidth: 250,
    maxHeight: 250,
    // borderWidth: 0.5,
    // borderColor: "red",
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
  circleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '-74deg'}],
    marginTop: 148
  },
  circleItem: {
    position: 'absolute',
  },
  noteStyles: {
    // transform: [{ rotate: '45deg'}]
  }
});

const Home = () => {
    const renderCircleItems = () => {
        const numberOfItems = 13.2;
    
        return allNotes.map((note, index) => {
          const angle = (2 * Math.PI * index) / numberOfItems;
          const x = 120 * Math.cos(angle); // Adjust the radius as needed
          const y = 120 * Math.sin(angle); // Adjust the radius as needed
    
          return (
            <View
              key={index}
              style={[
                styles.circleItem,
                {
                  transform: [
                    { translateX: x },
                    { translateY: y },
                    { rotate: `${'74deg'}`}
                  ],
                },
              ]}
            >
              <Note note={note} style={styles.noteStyles}/>
            </View>
          );
        });
      };

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
        {/* <View style={styles.notesContainer}>
          {allNotes.map((note) => (
            <Note note={note} key={note.id} />
          ))}
        </View> */}
        <View style={styles.circleContainer}>
            {renderCircleItems()}
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footer}>&copy; 2015 John Walbolt</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
