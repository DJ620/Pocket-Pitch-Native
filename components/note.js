import { useState, useRef, useEffect } from "react";
import { TouchableOpacity, Image } from "react-native";
import { Audio } from "expo-av";

const Note = ({ note }) => {
  const [active, setActive] = useState(false);
  const sound = useRef(new Audio.Sound());

  useEffect(() => {
    handleSound();
  }, []);

  const handleSound = async () => {
    try {
      Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      const result = await sound.current.loadAsync(note.src);
      await sound.current.setIsLoopingAsync(true);
      if (result.isLoaded === false) {
        console.log("Error in loading audio");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const PlayAudio = () => {
    setActive(true);
    try {
      sound.current.replayAsync();
    } catch (error) {}
  };

  const PauseAudio = () => {
    setActive(false);
    try {
      sound.current.pauseAsync();
    } catch (error) {}
  };

  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      activeOpacity={1}
      onPressIn={PlayAudio}
      onPressOut={PauseAudio}
      key={note.id}
    >
      <Image
        source={active ? note.activeImg : note.defaultImg}
        resizeMode="contain"
        style={
          {
            //   position: "absolute",
            //   bottom: Dimensions.get("window").width * 0.7,
          }
        }
      />
    </TouchableOpacity>
  );
};

export default Note;