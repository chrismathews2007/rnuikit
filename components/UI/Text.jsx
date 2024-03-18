import { Text as RNText, StyleSheet, TextStyle, StyleProp } from 'react-native';
import React from 'react';
import useTheme from '../../hooks/useTheme';
const Text = ({
	children,
	h1,
	h2,
	h3,
	h4,
	p,
	size,
	weight,
	color,
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
	const { colors, sizes, lines, letters } = useTheme();
	const textStyle = StyleSheet.flatten([
		{
			color: colors.text,
			fontSize: sizes.text,
			lineHeight: lines.text,
			letterSpacing: letters.text,
		},
		h1 !== undefined && {
			fontSize: sizes.h1,
			lineHeight: lines.h1,
			letterSpacing: letters.h1,
			fontWeight: '800',
		},
		h2 !== undefined && {
			fontSize: sizes.h2,
			lineHeight: lines.h2,
			letterSpacing: letters.h2,
			fontWeight: '700',
		},
		h3 !== undefined && {
			fontSize: sizes.h3,
			lineHeight: lines.h3,
			letterSpacing: letters.h3,
			fontWeight: '600',
		},
		h4 !== undefined && {
			fontSize: sizes.h4,
			lineHeight: lines.h4,
			letterSpacing: letters.h4,
			fontWeight: '500',
		},
		p !== undefined && {
			fontSize: sizes.p,
			lineHeight: lines.p,
			letterSpacing: letters.p,
		},
		size !== undefined && { fontSize: size },
		weight !== undefined && { fontWeight: weight },
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
		<RNText style={textStyle} {...props}>
			{children}
		</RNText>
	);
};

export default Text;
