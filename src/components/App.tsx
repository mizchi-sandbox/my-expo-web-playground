import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { AboutScreen } from "./screens/AboutScreen";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
  initialRouteName: "Home"
});

export default createAppContainer(AppNavigator);
