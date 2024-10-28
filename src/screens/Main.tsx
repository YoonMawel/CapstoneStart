import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import IngredientsScreen from './Ingredients'; // 경로에 맞게 수정
import RecipeScreen from './Recipes'; // 경로에 맞게 수정
import AddScreen from './Add'; // 경로에 맞게 수정
import IngredientDetail from './IngredientDetail'; // 경로에 맞게 수정
import { RootStackParamList } from '../types'; // 경로에 맞게 수정

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

const IngredientsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Ingredients" component={IngredientsScreen} />
            <Stack.Screen name="IngredientDetail" component={IngredientDetail} />
        </Stack.Navigator>
    );
};

const MainScreen = () => {
    return (
        <Tab.Navigator>
            {/* 각 Tab에 StackNavigator를 연결해야 합니다. */}
            <Tab.Screen name="식재료" component={IngredientsStack} />
            <Tab.Screen name="레시피" component={RecipeScreen} />
            <Tab.Screen name="직접 추가" component={AddScreen} />
        </Tab.Navigator>
    );
};

export default MainScreen;
