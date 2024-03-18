import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import { Login } from './screens';

const App = () => {
	return (
		<ThemeProvider>
			<Login />
		</ThemeProvider>
	);
};

export default App;
