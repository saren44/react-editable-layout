import styled from "styled-components"
import { IStyledResizeBarProps } from "./types"

export const StyledResizeBar = styled.div<IStyledResizeBarProps>`
	width: ${p => p.$direction === 'horizontal' ? 100 : 1}%;
	height: ${p => p.$direction === 'horizontal' ? 1 : 100}%;
	background-color: red;

	&:hover {
		cursor: ${p => p.$direction === 'horizontal' ? 'ns-resize' : 'ew-resize'}
	}
`