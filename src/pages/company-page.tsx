import React, {useCallback} from 'react';
import {Text, Button} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Container} from '../components';
import {Page} from '../utils';

interface CompanyPageProps {
	logo: string;
	description: string;
	name: string;
}

export const CompanyPage: Page<CompanyPageProps> = ({
	logo,
	description,
	navigation,
	name,
}) => {
	const navigateToProfile = useCallback(
		() => navigation.navigate('Profile', {logo, description, name}),
		[],
	);
	return (
		<Container>
			<Button title="Go to the Company" onPress={navigateToProfile} />
			<Avatar source={{uri: logo}} size="xlarge" rounded />
			<Text>{description}</Text>
		</Container>
	);
};
