import { View, Text } from "react-native";
import Checkbox from 'expo-checkbox';


const CheckBoxItem = ({ task, onCheck }) => {
    return (
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <Checkbox value={task.status ==='completed'} onValueChange={onCheck} />
            <Text style={{ marginLeft: 10, textDecorationLine: task.status === 'completed' ? 'line-through': 'none' }}>{task.value}</Text>
        </View>
    )
}

export default CheckBoxItem;