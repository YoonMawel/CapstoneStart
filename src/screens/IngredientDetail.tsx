import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types'; // 경로에 맞게 수정
import commonStyles from '../styles/styles'; // 경로는 각 파일의 위치에 맞게 수정


type IngredientDetailProps = NativeStackScreenProps<RootStackParamList, 'IngredientDetail'>;

const IngredientDetail = ({ route }: IngredientDetailProps) => {
    const { foodName, foodCategory, expirationDate } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{foodName}</Text>
            <Text>Category: {foodCategory}</Text>
            <Text>Expiration Date: {expirationDate}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default IngredientDetail;
