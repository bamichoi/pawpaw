import {HTMLInputTypeAttribute} from 'react';

interface InputProps {
	id: string;
	type?: HTMLInputTypeAttribute;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({id, type, name, value, onChange}: InputProps) => {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={id}>{name}</label>
			<input id={id} type={type} value={value} onChange={onChange} />
		</div>
	);
};

export default Input;
