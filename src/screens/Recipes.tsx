import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler'; // 또는 그냥 `react-native`에서 가져와도 됩니다.


const recipesData = [
    { id: '1', name: 'Spaghetti', ingredients: ['Pasta', 'Tomato Sauce'] },
    { id: '2', name: 'Fried Rice', ingredients: ['Rice', 'Vegetables'] },
    // 추가 레시피를 여기에 추가
];

const RecipeScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // 검색어에 따른 레시피 필터링
    const filteredRecipes = recipesData.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // FlatList가 데이터가 비어있지 않은지 체크
    if (!filteredRecipes.length) {
        return (
            <View style={styles.container}>
                <Text>No recipes found.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search for a recipe..."
                value={searchTerm}
                onChangeText={setSearchTerm}
            />
            <FlatList
                data={filteredRecipes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                    </View>
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
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default RecipeScreen;
