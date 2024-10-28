import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import commonStyles from '../styles/styles'; // 이 부분이 오류인 경우 확인 필요

const AddScreen = () => {
    const [foodName, setFoodName] = useState('');
    const [foodCategory, setFoodCategory] = useState('');
    const [expirationDate, setExpirationDate] = useState('');

    const handleAddFood = () => {
        // 식품 추가 로직 구현
        console.log(`Food Name: ${foodName}, Category: ${foodCategory}, Expiration Date: ${expirationDate}`);
        // 예: navigation.navigate('Ingredients')를 통해 Ingredients 화면으로 돌아가기
    };

    return (
        <View style={commonStyles.container}>
            <Text style={commonStyles.title}>Add New Food</Text>
            <TextInput
                style={commonStyles.input}
                placeholder="Food Name"
                value={foodName}
                onChangeText={setFoodName}
            />
            <TextInput
                style={commonStyles.input}
                placeholder="Food Category"
                value={foodCategory}
                onChangeText={setFoodCategory}
            />
            <TextInput
                style={commonStyles.input}
                placeholder="Expiration Date"
                value={expirationDate}
                onChangeText={setExpirationDate}
            />
            <Button title="Add Food" onPress={handleAddFood} />
        </View>
    );
};

export default AddScreen;
