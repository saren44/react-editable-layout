import styled from 'styled-components'
import { IStyledCustomizableLayoutProps } from './types'


//TODO rework to use .attrs

export const StyledEditableLayout = styled.div<IStyledCustomizableLayoutProps>`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	cursor: ${p => p.$resizing ? 'ew-resize' : 'default'};

	.column {
		height: 100%;
	}

	.leftCol {
		width: ${p => p.$left.width - 0.5}%;
	}

	.centerCol {
		width: ${p => p.$center.width - 1}%;
	}

	.rightCol {
		width: ${p => p.$right.width - 0.5}%;
	}


`