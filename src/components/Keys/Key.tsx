import React, { FunctionComponent } from 'react';

interface IKeyProps {
	keyVal: string;
	handleClick: (keyVal: string) => void;
}

const Key: FunctionComponent<IKeyProps> = ({
	keyVal,
	handleClick
}) => {

	return (
		<button id={keyVal} onClick={() => handleClick(keyVal)}>{keyVal}</button>
	);
}

export default Key;