import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DocumentsScreen from './screens/DocumentsScreen';
import DocumentScreen from './screens/DocumentScreen';
import { store } from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            {/* <Navigation /> */}
            <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                    backgroundColor: '#1F3E47', // Цвет навигационной шапки
                    },
                    headerTintColor: 'aliceblue', // Цвет текста в навигационной шапке
                    headerTitleStyle: {
                    fontWeight: 'bold',
                    },
                }}
                >
                    <Stack.Screen name='Документы' component={DocumentsScreen} />
                    <Stack.Screen name='Подробности' component={DocumentScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}