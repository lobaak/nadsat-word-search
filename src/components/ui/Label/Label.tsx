import React from 'react';

interface Props {
	children: React.ReactNode;
	htmlFor: string;
}

const Label: React.FC<Props> = ({ ...rest }) => {
	return <label {...rest} />;
};

export default Label;
