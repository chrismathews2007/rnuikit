import React from 'react';

import appTheme, { ITheme } from '../constants/theme';
export const ThemeContext = React.createContext({
	theme: appTheme,
});

export const ThemeProvider = ({ children, theme = appTheme }) => {
	return (
		<ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
	);
};

export default function useTheme() {
	const { theme } = React.useContext(ThemeContext);
	return theme;
}
