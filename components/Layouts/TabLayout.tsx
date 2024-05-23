import { router } from "expo-router";
import { PropsWithChildren } from "react";
import { Button } from "react-native";

const TabLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            {children}
            <Button title="Back" onPress={() => router.back()}/>
        </>
    )
}

export default TabLayout;