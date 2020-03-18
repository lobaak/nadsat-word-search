import React from 'react';
import { Input as I } from 'semantic-ui-react';

interface Props {
	loading?: boolean;
	placeholder?: string;
	name: string;
	id: string;
}

const Input: React.FC<Props> = ({ ...rest }) => {
	return <I {...rest} />;
};

export default Input;
