import React, {useRef, useState} from "react";
import { StyledEditableLayout } from "./styles";
import { ResizeBar } from "../ResizeBar/ResizeBar";




export const EditableLayout = () => {

	//TODO replace states with reducer
	//TODO add not hardcoded width and height boundaries

	const [leftWidth, setLeftWidth] = useState<number>(20)
	const [rightWidth, setRightWidth] = useState<number>(20)
	const [isResizingLeft, setIsResizingLeft] = useState<boolean>(false);
	const [isResizingRight, setIsResizingRight] = useState<boolean>(false);

	const dragStart = useRef<any>(0);
	const container = useRef<HTMLDivElement>(null);



	const handleMouseMove = (e: React.MouseEvent) => {
		if (isResizingLeft) {
			const newVal =  (e.clientX - dragStart.current.left) / (dragStart.current.width) * 100;
			setLeftWidth(newVal)
		}
		if (isResizingRight) {
			const newVal =  100 - ((e.clientX - dragStart.current.left) / (dragStart.current.width) * 100);
			setRightWidth(newVal)
		}
	}

	const handleClearResize = () => {
		if (isResizingLeft) {
			setIsResizingLeft(false)
		}
		if (isResizingRight) {
			setIsResizingRight(false)
		}
	}

	const handleStartResize = (side: boolean, e: React.MouseEvent) => {
		if (container.current !== null) {
			const bcr = container.current.getBoundingClientRect()
			dragStart.current = {
				start: e.clientX,
				left: bcr.left,
				width: bcr.width,
			}
		}
		if (side) {
			setIsResizingLeft(true);
		}
		else {
			setIsResizingRight(true);
		}
	}

	return (
		<StyledEditableLayout 
			$resizing={isResizingLeft || isResizingRight}
			$left={{width: leftWidth > 10 ? leftWidth : 10}} 
			$center={{width: 100 - (leftWidth > 10 ? leftWidth : 10) - (rightWidth > 10 ? rightWidth : 10)}} 
			$right={{width: rightWidth > 10 ? rightWidth : 10}}
			onMouseMove={handleMouseMove}
			onMouseUp={handleClearResize}
			onMouseLeave={handleClearResize}
			ref={container}
		>
			<div className="column leftCol"/>
			<ResizeBar direction={'vertical'} dragSetter={(e) => handleStartResize(true, e)}/>
			<div className="column centerCol" />
			<ResizeBar direction={'vertical'} dragSetter={(e) => handleStartResize(false, e)}/>
			<div className="column rightCol" />
		</StyledEditableLayout>
	)
}
