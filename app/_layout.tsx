import P from "@/components/P";
import Profile from "@/components/Profile";
import { Stack } from "expo-router/stack";
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { Link, Slot } from "expo-router";

const styles = StyleSheet.create({
    navButton: {
        padding: 10,
        fontSize: 20,
        backgroundColor: "blue",
        margin: 5,
        color: 'white'
    }
});

const Layout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="(about)" options={{ headerShown: false }} />
            </Stack>
        </>
    )
}

export default Layout;