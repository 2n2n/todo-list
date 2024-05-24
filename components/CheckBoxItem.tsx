import { View, Text } from "react-native";
import Checkbox from 'expo-checkbox';
import { useState, useEffect } from "react";


const CheckBoxItem = ({ task, onCheck, onUnCheck }) => {
    const [isChecked, setIsChecked] = useState<boolean>(task.status === 'completed');

    useEffect(() => {
        if(isChecked === true) {
            onCheck();
        }
    }, [isChecked])

    return (
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <Checkbox value={isChecked} onValueChange={setIsChecked} />
            <Text style={{ marginLeft: 10, textDecorationLine: isChecked? 'line-through': 'none' }}>{task.value}</Text>
        </View>
    )
}

export default CheckBoxItem;