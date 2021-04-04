import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'


export default function Login({navigation}) {
    return (
        <View>
            <Text>Login</Text>
            <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
                <Text> Create Account </Text>
            </TouchableOpacity>
        </View>
    );
}