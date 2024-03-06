import styled from "styled-components"
import { IStyledResizeBarProps } from "./types"

export const StyledResizeBar = styled.div<IStyledResizeBarProps>`
	width: ${p => p.$direction === 'horizontal' ? '100%' : '10px'};
	height: ${p => p.$direction === 'horizontal' ? '10px' : '100%'};
	background-color: red;

	&:hover {
		cursor: ${p => p.$direction === 'horizontal' ? 'ns-resize' : 'ew-resize'}
	}
`