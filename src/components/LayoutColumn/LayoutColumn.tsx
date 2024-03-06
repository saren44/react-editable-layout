import { useState, useRef } from "react"
import { ResizeBar } from "../ResizeBar/ResizeBar"
import { StyledLayoutColumn } from "./styles"


export const LayoutColumn = () => {

	const [topHeight, setTopHeight] = useState<number>(40)
	const [isResizing, setIsResizing] = useState<boolean>(false);

	const dragStart = useRef<any>(0);
	const container = useRef<HTMLDivElement>(null);



	const handleMouseMove = (e: React.MouseEvent) => {
		if (isResizing) {
			const newVal =  (e.clientY - dragStart.current.top) / (dragStart.current.height) * 100;
			setTopHeight(newVal)
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
			$top={{height: topHeight}} 
			$bottom={{height: 100 - topHeight}}
			onMouseMove={handleMouseMove}
			onMouseUp={handleClearResize}
			onMouseLeave={handleClearResize}
			ref={container}
		>
			<div className="container top" />
			<ResizeBar direction="horizontal" dragSetter={(e) => handleStartResize(e)}/>
			<div className="container bottom" />
		</StyledLayoutColumn>
	)
}