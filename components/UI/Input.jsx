import {
	TextInput,
	TextInputProps,
	StyleSheet,
	TextStyle,
	StyleProp,
} from 'react-native';
import React from 'react';
import useTheme from '../../hooks/useTheme';

const Input = ({
	children,
	size,
	weight,
	color,
	borderColor,
	borderWidth,
	radius,
	bg,
	align,
	margin,
	marginHorizontal,
	marginVertical,
	marginTop,
	marginBottom,
	marginLeft,
	marginRight,
	padding,
	paddingHorizontal,
	paddingVerticle,
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
	style,
	...props
}) => {
	const { sizes } = useTheme();
	const blockStyle = StyleSheet.flatten([
		{
			height: sizes.inputHeight,
			borderRadius: sizes.inputRadius,
			borderWidth: sizes.inputBorder,
			paddingHorizontal: sizes.base,
		},
		size !== undefined && { fontSize: size },
		weight !== undefined && { fontWeight: weight },
		color !== undefined && { color: color },
		borderColor !== undefined && { borderColor },
		borderWidth !== undefined && { borderWidth },
		radius !== undefined && { borderRadius: radius },
		color !== undefined && { color: color },
		bg !== undefined && { backgroundColor: bg },
		align !== undefined && { textAlign: align },
		margin !== undefined && { margin },
		marginHorizontal !== undefined && { marginHorizontal },
		marginVertical !== undefined && { marginVertical },
		marginTop !== undefined && { marginTop },
		marginBottom !== undefined && { marginBottom },
		marginLeft !== undefined && { marginLeft },
		marginRight !== undefined && { marginRight },
		padding !== undefined && { padding },
		paddingHorizontal !== undefined && { paddingHorizontal },
		paddingVerticle !== undefined && { paddingVerticle },
		paddingTop !== undefined && { paddingTop },
		paddingBottom !== undefined && { paddingBottom },
		paddingLeft !== undefined && { paddingLeft },
		paddingRight !== undefined && { paddingRight },
		style,
	]);
	return (
		<TextInput style={blockStyle} {...props}>
			{children}
		</TextInput>
	);
};

export default Input;
