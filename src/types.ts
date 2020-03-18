export interface Entry {
	id: number;
	nadsat: string;
	english: string;
	origin: string;
}

export interface State {
	loading: boolean;
	results: Entry[];
	entries: Entry[];
	value?: string;
}

export enum ActionTypes {
	toggleLoading = 'TOGGLE_LOADING',
	setEntries = 'SET_ENTRIES',
	setResults = 'SET_RESULTS',
	setValue = 'SET_VALUE'
}

export type Action =
	| { type: ActionTypes.toggleLoading }
	| { type: ActionTypes.setEntries; payload: Entry[] }
	| { type: ActionTypes.setResults; payload: Entry[] }
	| { type: ActionTypes.setValue; payload?: string };
