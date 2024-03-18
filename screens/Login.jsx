import React from 'react';
import { Box, Text, Button, Input } from '../components/UI';
import useTheme from '../hooks/useTheme';

export default function Login() {
	const { colors, sizes } = useTheme();
	return (
		<Box marginTop={sizes.xxl} paddingHorizontal={sizes.padding}>
			<Text h3 align='center' color={colors.primary}>
				Login
			</Text>
			<Text align='center'>
				Login
			</Text>

			<Input
				keyboardType='email-address'
				placeholder='Email'
				placeholderTextColor='black'
				borderColor='black'
				marginVertical={sizes.base}
			/>
			<Input
				secureTextEntry
				placeholder='Password'
				placeholderTextColor='black'
				borderColor='black'
				marginVertical={sizes.base}
			/>
			<Button
				marginTop={20}
				color={colors.primary}
				justify='center'
				align='center'
				radius={8}
				padding={8}>
				<Text color={colors.white}>Login</Text>
			</Button>
		</Box>
	);
}
