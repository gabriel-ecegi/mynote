import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { WebView } from "react-native-webview";

function DashboardScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Dashboard!</Text>
    </View>
  );
}

function TasksScreen() {
  return (
    <WebView
      source={{ uri: "https://gabriel-ecegi.github.io/ukolovnik/" }}
      style={{ flex: 1 }}
    />
  );
}

function ClientsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Clients!</Text>
    </View>
  );
}

function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Chat!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const ICONS = {
  Dashboard: {
    lib: MaterialCommunityIcons,
    name: "view-dashboard-outline",
  },
  Úkoly: {
    lib: MaterialCommunityIcons,
    name: "format-list-checkbox",
  },
  Klienti: {
    lib: FontAwesome5,
    name: "user-friends",
  },
  Chat: {
    lib: FontAwesome,
    name: "comments",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const { lib: IconComponent, name } =
              ICONS[route.name as keyof typeof ICONS];
            const iconName = focused ? `${name}` : `${name}`;

            // Return the appropriate icon
            return <IconComponent name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Úkoly" component={TasksScreen} />
        <Tab.Screen name="Klienti" component={ClientsScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        {/* Add more <Tab.Screen> for other tabs */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
