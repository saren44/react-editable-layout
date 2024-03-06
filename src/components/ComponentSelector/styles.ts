import styled from "styled-components";



export const StyledComponentSelector = styled.div`
	width: 100%;
	height: 100%;

	.selectBar {
		height: 20px;
		width: 100%;
		background-color: gray;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.selectItem {
		width: 40px;
		margin-right: 5px;
	}

	.active {
		background-color: whitesmoke;
	}

	.inactive {
		background-color: gray;
		cursor: pointer;
	}

	.componentContainer {
		width: 100%;
		height: calc(100% - 10px);
	}

`
