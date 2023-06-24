import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	gap: 8px;
	width: fit-content;
	flex-direction: column;
`;

export const Text = styled.span<{capitalize?: boolean}>`
	font-style: normal;
	font-size: 16px;
	line-height: 16px;
	color: rgba(0, 0, 0, 0.88);
	${({capitalize}) => capitalize && `text-transform: capitalize;`}
`;
