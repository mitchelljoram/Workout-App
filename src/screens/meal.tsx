import React, { useState } from "react";
import { SafeAreaView, View, ScrollView , Text, Pressable, Button } from "react-native";

import { useNavigation } from '@react-navigation/native';

export const MealScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className="bg-[#141414] flex-1 items-center justify-center">
            <View className="items-center py-4">
                <Text className="text-white">Meal Screen</Text>
            </View>
        </SafeAreaView>
    );
};