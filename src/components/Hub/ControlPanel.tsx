import * as React from 'react';

interface Props {
	btnOptions: BtnOptions;
	updaterFn: (string) => void;
}

type BtnOptions = {
	buttons: Button[];
};

type Button = {
	text: string;
	value: string;
};
const ControlPanel: React.FC<Props> = ({ btnOptions, updaterFn }) => {
	return (
		<div className='flex flex-col w-[25%]'>
			{btnOptions.buttons.map((btn) => (
				<button className='font-medium text-lg  ' key={btn.value} onClick={(e) => updaterFn(btn.value)}>
					{btn.text.toUpperCase()}
				</button>
			))}
		</div>
	);
};
