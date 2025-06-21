import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { registerRootComponent } from 'expo'

// importacao das telas
import telaPrincipal from './src/telaPrincipal'
import Perfil from './src/Perfil'
import Cadastro from './src/Cadastro'
import LoginScreen from './src/LoginScreen'
import TelaComidas from './src/telaComidas'
import TelaBebidas from './src/Bebidas'
import Compras from './src/Compras'
import SAC from './src/Sac'
import HistoricoPedidos from './src/telaHistóricoPedidos'
import HistoricoGastos from './src/telaHistóricoGastos'


const { Navigator, Screen } = createNativeStackNavigator()
// const { Navigator, Screen } = createBottomTabNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: true }} initialRouteName='LoginScreen'>
				<Screen name='telaPrincipal' component={telaPrincipal} options={{ title: 'Tela Principal' }} />
				<Screen name='LoginScreen' component={LoginScreen} options={{ title: 'Login' }} />
				<Screen name='Perfil' component={Perfil} options={{ title: 'Perfil'}} />
				<Screen name='Cadastro' component={Cadastro} options={{title: 'Cadastro'}} />
				<Screen name='telaComidas' component={TelaComidas} options={{ title: 'Comidas' }} />
				<Screen name='Bebidas' component={TelaBebidas} options={{ title: 'Bebidas' }} />
				<Screen name='Compras' component={Compras} options={{ title: 'Confirmar Compra' }} />
				<Screen name='Sac' component={SAC} options={{ title: 'SAC' }} />
				<Screen name='telaHistóricoPedidos' component={HistoricoPedidos} options={{ title: 'Histórico de Pedidos' }} />
				<Screen name='telaHistóricoGastos' component={HistoricoGastos} options={{ title: 'Histórico de Gastos' }} />
			</Navigator>
		</NavigationContainer>
	)
}

// registra o router
registerRootComponent(App)

export default App
