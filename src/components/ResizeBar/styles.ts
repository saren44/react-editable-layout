import styled from "styled-components"
import { IStyledResizeBarProps } from "./types"

export const StyledResizeBar = styled.div<IStyledResizeBarProps>`
	width: ${p => p.$direction === 'horizontal' ? '100%' : '10px'};
	height: ${p => p.$direction === 'horizontal' ? '10px' : '100%'};
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: lightgray;
	overflow: visible;

	&:hover {
		cursor: ${p => p.$direction === 'horizontal' ? 'ns-resize' : 'ew-resize'}
	}

	.barDisplay {
		width: ${p => p.$direction === 'horizontal' ? '100%' : '1px'};
		height: ${p => p.$direction === 'horizontal' ? '1px' : '100%'};
		background-color: black;
	}
`