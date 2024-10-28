import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // GestureHandlerRootView 추가
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/screens/Main';

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}> {/* RootView로 감싸기 */}
            <NavigationContainer>
                <MainScreen />
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};

export default App;
