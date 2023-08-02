import React from "react";
import { SafeAreaView, View, ScrollView , Text, Pressable, Button } from "react-native";

/* Components */
import { SetIcon } from "./icon";

/* Libs */
import { TimeSet } from "../../libs/types-interfaces-classes";

export const TimeSetCard = (set: TimeSet) => {
    const index: number = set.id+1;

    return (
        <View className="flex-row items-center mt-3">
            <SetIcon index={index}/>
            <Text className="text-white font-bold ml-5">{set.time}</Text>
        </View>
    );
};