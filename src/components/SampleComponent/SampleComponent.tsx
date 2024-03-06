import styled from "styled-components";


const StyledSample = styled.div`
	width: 100%;
	height: 100%;

	background-color: whitesmoke;
`




export const SampleComponent = ({txt} : {txt: string}) => {
	return (
		<StyledSample>
			{txt}
		</StyledSample>
	)
}