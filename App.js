import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { registerRootComponent } from 'expo'

// importacao das telas
import telaPrincipal from './src/telaPrincipal'
import Perfil from './src/Perfil'
import Cadastro from './src/Cadastro'
import LoginScreen from './src/LoginScreen'


const { Navigator, Screen } = createNativeStackNavigator()
// const { Navigator, Screen } = createBottomTabNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: true }} initialRouteName='LoginScreen'>
				<Screen name='telaPrincipal' component={telaPrincipal} options={{ title: 'telaPrincipal' }} />
				<Screen name='LoginScreen' component={LoginScreen} options={{ title: 'LoginScreen' }} />
				<Screen name='Perfil' component={Perfil} options={{ title: 'Perfil'}} />
				<Screen name='Cadastro' component={Cadastro} options={{title: 'Cadastro'}} />
			</Navigator>
		</NavigationContainer>
	)
}

// registra o router
registerRootComponent(App)

export default App
