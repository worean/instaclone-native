import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TabIcon({focused, iconName, color, size }) {
    return (
        <Ionicons
            name={focused ? iconName : `${iconName}-outline`}
            color={color}
            size={size? size : 25} />
    )
}