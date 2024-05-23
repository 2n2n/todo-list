import { View, Text, Button } from 'react-native';
import { router, Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
const Home = () => {
    return (
        <SafeAreaView>
            <Link href={"/"}>Home</Link>
            {/* <Button title="Home" onPress={() => router.push('/')}/> */}
            <Button title="About" onPress={() => router.push('(about)')}/>
            {/* <Link href={"/(about)"}>About</Link> */}
             <View>
                <Text>Hello World!</Text>
            </View>
        </SafeAreaView>
       
    )
}

export default Home;