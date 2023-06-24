import React from 'react';

import * as S from './styles';

type Props = {
	chave: string;
	value?: string | number | JSX.Element;
	style?: React.CSSProperties;
	twoDots?: boolean;
	textStyle?: React.CSSProperties;
	keyStyle?: React.CSSProperties;
	capitalize?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Tupla = ({
	chave,
	value,
	capitalize = false,
	style,
	keyStyle,
	textStyle,
	twoDots = false,
	...props
}: Props) => {
	return (
		<S.Container style={{...style}}>
			<S.Text
				className="tupla-label"
				style={{
					color: '#3C7DA5',
					...keyStyle,
				}}
			>
				{chave !== '' ? chave + `${twoDots ? ':' : ''}` : chave}
			</S.Text>

			<S.Text className="tupla-value" style={{fontSize: '14px', fontWeight: 400, ...textStyle}}>
				{value || '--'}
			</S.Text>
		</S.Container>
	);
};

export default Tupla;
