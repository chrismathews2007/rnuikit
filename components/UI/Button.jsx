import {
	TouchableOpacity,
	StyleSheet,
	TouchableOpacityProps,
	ViewStyle,
	StyleProp,
} from 'react-native';
import React from 'react';
import useTheme from '../../hooks/useTheme';

const Button = ({
	children,
	flex,
	row,
	color,
	align,
	justify,
	radius,
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
			height: sizes.buttonHeight,
			borderRadius: sizes.buttonRadius,
			borderWidth: sizes.buttonBorder,
		},
		flex !== undefined && { flex },
		row !== undefined && { flexDirection: 'row' },
		color !== undefined && { backgroundColor: color },
		align !== undefined && { alignItems: align },
		justify !== undefined && { justifyContent: justify },
		radius !== undefined && { borderRadius: radius },
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
		<TouchableOpacity style={blockStyle} {...props}>
			{children}
		</TouchableOpacity>
	);
};

export default Button;
