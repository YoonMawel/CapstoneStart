import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types'; // 경로에 맞게 수정
import commonStyles from '../styles/styles'; // 경로는 각 파일의 위치에 맞게 수정

type IngredientsScreenProps = NativeStackScreenProps<RootStackParamList, 'Ingredients'>;

const ingredientsData = [
    { id: '1', name: 'Eggs', category: 'Dairy' },
    { id: '2', name: 'Chicken', category: 'Meat' },
    // 추가 식재료를 여기에 추가
];

const IngredientsScreen = ({ navigation }: IngredientsScreenProps) => {
    const handleNavigateToDetail = (item: { name: string; category: string; }) => {
        navigation.navigate('IngredientDetail', {
            foodName: item.name,
            foodCategory: item.category,
            expirationDate: 'N/A', // 유통기한은 예시로 'N/A'를 사용
        });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={ingredientsData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleNavigateToDetail(item)}>
                        <View style={styles.item}>
                            {/* Text 컴포넌트를 감싸는 구조를 유지합니다. */}
                            <Text style={styles.itemText}>{item.name} - {item.category}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        // 스타일을 필요에 따라 조정합니다.
        fontSize: 16,
    },
});

export default IngredientsScreen;
