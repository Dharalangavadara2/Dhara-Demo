import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontName } from "../res/styles/FontName";
import Colors from "../res/styles/Colors";
import { Image, Text, View } from "react-native";
import Home from "./Home";

// Create bottom tab navigator
const Tab = createBottomTabNavigator();

// Create native stack navigator
const Stack = createNativeStackNavigator();

// Home Stack Navigator component
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};

// Custom Footer Component (Static Bottom Text)
const CustomFooter = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>hii</Text>
        </View>
    );
};

// Tab Main Navigator
const TabMain = () => {
    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator
            initialRouteName="HomeTab"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: "#6194FA",
                tabBarInactiveTintColor: Colors.lrightGray,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: FontName.regular,
                    marginBottom: 10,
                },
                tabBarStyle: {
                    height: 66,
                    backgroundColor: Colors.Defaultwhite,
                    display: "flex",
                },
                tabBar: () => <CustomFooter />, // Using custom footer in the tabBar
            })}
        >
            {/* Home Tab */}
            <Tab.Screen
                name="HomeTab"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            style={{ width: 34, height: 34 }} 
                            resizeMode="cover"
                            source={require("../res/images/Icon_button.png")}
                        />
                    ),
                    title: "Search",
                }}
            />

            {/* Account Tab */}
            <Tab.Screen
                name="Account"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            style={{ width: 24, height: 24 }} // Adjust icon size
                            resizeMode="cover"
                            tintColor={'black'}
                            source={require("../res/images/Calendar_Days.png")}
                        />
                    ),
                    title: "Events",
                }}
            />

            {/* Settings Tab */}
            <Tab.Screen
                name="Settings"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            style={{ width: 34, height: 34 }} // Adjust icon size
                            resizeMode="cover"
                            source={require("../res/images/Icon_button_new.png")}
                        />
                    ),
                    title: "Favourites",
                }}
            />
            <Tab.Screen
                name="profile"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            style={{ width: 34, height: 34 }} // Adjust icon size
                            resizeMode="cover"
                            source={require("../res/images/profile.png")}
                        />
                    ),
                    title: "profile",
                }}
            />
        </Tab.Navigator>
    );
};

// Styling for the footer
const styles = {
    footer: {
        width: "100%",
        height: 50, // Adjust height as needed
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.Defaultwhite,
        position: "absolute",
        bottom: 0,
        left: 0,
    },
    footerText: {
        fontSize: 16,
        color: Colors.black, // Set the color as you like
    },
};

export default TabMain;
