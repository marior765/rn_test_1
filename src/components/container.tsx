import React, {ReactNode} from 'react';
import {ViewProps, View, StyleSheet} from 'react-native';
import {normalize} from 'react-native-elements';
import {Component} from '../utils';

interface ContainerProps extends ViewProps {
	children: ReactNode | ReactNode[];
	loading?: boolean;
	withKeyboard?: boolean;
}

export const Container: Component<ContainerProps> = ({
	children,
	style,
	loading,
	withKeyboard = true,
}) => <View style={[styles.container, style]}>{children}</View>;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		padding: normalize(15),
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
});
