import { StyledResizeBar } from "./styles"
import { IResizeBarProps } from "./types"


export const ResizeBar = ({
	direction,
	dragSetter
}: IResizeBarProps) => {

	return (
	<StyledResizeBar 
		$direction={direction}
		onMouseDown={dragSetter}

	/>)
}