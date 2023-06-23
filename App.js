import "react-native-gesture-handler";
import SplashScreen from "./src/screen/splashScreen/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screen/home/Home";
import Search from "./src/screen/search/Search";
const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: "#fff" },
          headerTitleAlign: "center",
        }}
      >
        <stack.Screen
          name="splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Home"
          component={Home}
          options={{ headerShadowVisible: false, headerLeft: () => null }}
        />
        <stack.Screen name="Search" component={Search} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
