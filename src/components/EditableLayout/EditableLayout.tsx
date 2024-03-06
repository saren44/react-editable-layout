import React, {useRef, useState} from "react";
import { StyledEditableLayout } from "./styles";
import { ResizeBar } from "../ResizeBar/ResizeBar";
import { LayoutColumn } from "../LayoutColumn/LayoutColumn";
import { useLayout, useLayoutDispatch } from "../LayoutContext/LayoutContext";
import { HorizontalResizeType } from "./types";




export const EditableLayout = () => {

	const layout = useLayout();
	const dispatch = useLayoutDispatch();

	const [resizingState, setResizingState] = useState<HorizontalResizeType>('NONE');

	const dragStart = useRef<any>(0);
	const container = useRef<HTMLDivElement>(null);



	const handleMouseMove = (e: React.MouseEvent) => {
		if (resizingState === 'LEFT') {
			const newVal =  (e.clientX - dragStart.current.left) / (dragStart.current.width) * 100;
			dispatch({
				type: 'RESIZE_LEFT_HORIZONTAL',
				data: {
					newVal: newVal,
				}
			})
			return;

		}
		if (resizingState === 'RIGHT') {
			const newVal =  100 - ((e.clientX - dragStart.current.left) / (dragStart.current.width) * 100);
			dispatch({
				type: 'RESIZE_RIGHT_HORIZONTAL',
				data: {
					newVal: newVal,
				}
			})
			return;
		}
	}

	const handleClearResize = () => {
		setResizingState('NONE')
	}

	console.log(layout)

	const handleStartResize = (newState: HorizontalResizeType, e: React.MouseEvent) => {
		if (container.current !== null) {
			const bcr = container.current.getBoundingClientRect()
			dragStart.current = {
				start: e.clientX,
				left: bcr.left,
				width: bcr.width,
			}
		}
		setResizingState(newState)
	}

	return (
		<StyledEditableLayout 
			$resizing={resizingState !== 'NONE'}
			$left={{width: layout.left.width}} 
			$center={{width: layout.center.width}} 
			$right={{width: layout.right.width}}
			onMouseMove={handleMouseMove}
			onMouseUp={handleClearResize}
			onMouseLeave={handleClearResize}
			ref={container}
		>
			<div className="column leftCol">
				<LayoutColumn actionType={'RESIZE_LEFT_VERTICAL'} data={layout.left}/>
			</div>
			<ResizeBar direction={'vertical'} dragSetter={(e) => handleStartResize('LEFT', e)}/>
			<div className="column centerCol">
				<LayoutColumn actionType={'RESIZE_CENTER_VERTICAL'} data={layout.center}/>
			</div>
			<ResizeBar direction={'vertical'} dragSetter={(e) => handleStartResize('RIGHT', e)}/>
			<div className="column rightCol">
				<LayoutColumn actionType={'RESIZE_RIGHT_VERTICAL'} data={layout.right}/>
			</div>
		</StyledEditableLayout>
	)
}
