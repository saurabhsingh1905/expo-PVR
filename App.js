import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation/StackNavigator";
import { PlaceContext } from "./PlaceContext";
import { ModalPortal } from "react-native-modals";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <>
      <Provider store= {store}>
    
        <PlaceContext>
          <Navigation />
          <ModalPortal />
        </PlaceContext>
      </Provider>
    </>
  );
}
