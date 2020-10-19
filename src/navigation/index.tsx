import React, {useMemo} from 'react';
import {SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {CompanyPage, Profile} from '../pages';

const companies: {data: CompanyData[]} = require('./companies.json');

const Tab = createMaterialTopTabNavigator();

interface CompanyData {
	name: string;
	logo: string;
	description: string;
}

const TabsStack = () => {
	const mappedTabs = useMemo(
		() =>
			companies.data.map((i) => (
				<Tab.Screen name={i.name} key={i.name}>
					{(p) => (
						<CompanyPage
							{...p}
							logo={i.logo}
							description={i.description}
							name={i.name}
						/>
					)}
				</Tab.Screen>
			)),
		[],
	);

	return (
		<SafeAreaView style={{flex: 1}}>
			<Tab.Navigator>{mappedTabs}</Tab.Navigator>
		</SafeAreaView>
	);
};

const Stack = createStackNavigator();

export default () => (
	<Stack.Navigator>
		<Stack.Screen name="Home" component={TabsStack} />
		<Stack.Screen
			name="Profile"
			component={Profile}
			options={({route}) => ({title: route.params.name})}
		/>
	</Stack.Navigator>
);
