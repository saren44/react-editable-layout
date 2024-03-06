import { useState, useRef } from "react"
import { ResizeBar } from "../ResizeBar/ResizeBar"
import { StyledLayoutColumn } from "./styles"
import { useLayoutDispatch } from "../LayoutContext/LayoutContext"
import { ILayoutColumnProps } from "./types"
import { ComponentSelector } from "../ComponentSelector/ComponentSelector"


export const LayoutColumn = ({
	actionType,
	data
}: ILayoutColumnProps) => {

	const dispatch = useLayoutDispatch();
	const [isResizing, setIsResizing] = useState<boolean>(false);

	const dragStart = useRef<any>(0);
	const container = useRef<HTMLDivElement>(null);



	const handleMouseMove = (e: React.MouseEvent) => {
		if (isResizing) {
			const newVal =  (e.clientY - dragStart.current.top) / (dragStart.current.height) * 100;
			dispatch({
				type: actionType,
				data: {
					newVal
				}
			})
		}
		}

	const handleClearResize = () => {
		if (isResizing) {
			setIsResizing(false)
		}
	}

	const handleStartResize = (e: React.MouseEvent) => {
		if (container.current !== null) {
			const bcr = container.current.getBoundingClientRect()
			dragStart.current = {
				start: e.clientX,
				top: bcr.top,
				height: bcr.height,
			}
		}
		setIsResizing(true)
	}

	return (
		<StyledLayoutColumn 
			$top={{height: data.top.height}} 
			$bottom={{height: data.bottom.height}}
			onMouseMove={handleMouseMove}
			onMouseUp={handleClearResize}
			onMouseLeave={handleClearResize}
			ref={container}
		>
			<div className="container top">
				<ComponentSelector components={data.top.children}/>
			</div>
			<ResizeBar direction="horizontal" dragSetter={(e) => handleStartResize(e)}/>
			<div className="container bottom">
			<ComponentSelector components={data.bottom.children} />
			</div>
		</StyledLayoutColumn>
	)
}