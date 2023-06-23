import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
} from "react-native";
import Button from "../../components/Button/Button";
import colors from "../../constants/constants";

const SplashScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../../assets/splash.png")}
      style={styles.container}
    >
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Image
          source={require("../../../assets/logo.png")}
          style={{ width: 120, height: 120 }}
        />
        <Text style={{ color: colors.white, fontSize: 24, fontWeight: "300" }}>
          100k+ premium recipe
        </Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text style={{ color: colors.white, fontSize: 50, fontWeight: "bold" }}>
          Get
        </Text>
        <Text style={{ color: colors.white, fontSize: 50, fontWeight: "bold" }}>
          Cooking
        </Text>
        <Text
          style={{
            color: colors.white,
            fontSize: 22,
            fontWeight: 300,
            marginTop: 10,
          }}
        >
          Simple way to find Tasty Recipe
        </Text>
      </View>
      <Button onPress={() => navigation.navigate("Home")}>Start Cooking</Button>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default SplashScreen;
