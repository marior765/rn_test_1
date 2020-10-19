import React, {useCallback, useEffect, useState} from 'react';
import {
	Text,
	Button,
	FlatList,
	StyleSheet,
	View,
	ActivityIndicator,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import * as rssParser from 'react-native-rss-parser';
import {Container} from '../components';
import {Page} from '../utils';

type Link = {
	url: string;
	rel: string;
};

export const Profile: Page<{}> = ({route}) => {
	const [data, setData] = useState<Link[]>([]);
	const [isLoading, setLoading] = useState(true);

	const {logo, description} = route?.params;

	useEffect(() => {
		fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
			.then((response) => response.text())
			.then(async (responseData) => {
				const rss = await rssParser.parse(responseData);
				setData(rss.links);
			})
			.finally(() => setLoading(false));
	}, []);

	const renderHeader = useCallback(
		() => (
			<View style={styles.headerContainer}>
				<Avatar source={{uri: logo}} size="xlarge" rounded />
				<Text>{description}</Text>
			</View>
		),
		[],
	);

	const renderItem = useCallback(
		({item}: {item: Link}) => <Text>{item.url}</Text>,
		[],
	);

	const keyExtractor = (item, index) => item.key;

	return (
		<Container>
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<FlatList
					ListHeaderComponent={renderHeader}
					data={data}
					renderItem={renderItem}
					keyExtractor={keyExtractor}
				/>
			)}
		</Container>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
});
