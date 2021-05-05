import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { logoutUser } from '../apollo';

export default function MyProfile() {
    return (
        <View style={{ backgroundColor: "black", flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{color:"white"}}>My Profile Screen</Text>

            <TouchableOpacity onPress={() => logoutUser()}>
                <Text style={{color:"white"}}>LogOut</Text>
            </TouchableOpacity>
        </View>
    )
}