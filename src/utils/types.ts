import {FC} from 'react';

export interface INavigation {
	popToTop: () => {};
	pop: () => {};
	navigate: (route: string, params?: any) => {};
	goBack: () => {};
	canGoBack: () => {};
	openDrawer: () => {};
	dispatch: (param: any) => {};
	setOptions: (param: any) => {};
}

export interface IRoute {
	params: any;
}

export type Component<P> = FC<Readonly<P>>;

export interface IScreenProps {
	navigation: INavigation;
	route?: IRoute;
}

export type Page<P> = FC<Readonly<P & IScreenProps>>;
