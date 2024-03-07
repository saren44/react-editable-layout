import styled from "styled-components";
import { IStyledLayoutColumnProps } from "./types";





export const StyledLayoutColumn = styled.div<IStyledLayoutColumnProps>`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	cursor: ${p => p.$resizing ? 'ns-resize' : 'default'};


	.container {
		background-color: lightgray;
	}

	.top {
		height: calc(${p => p.$top.height}% - 0.5px);
	}

	.bottom {
		height: calc(${p => p.$bottom.height}% - 0.5px);
	}

`