import { ActionType } from "../LayoutContext/types";
import { ILayoutColumn } from "../LayoutContext/types";

export interface ILayoutColumnProps {
	actionType: ActionType;
	data: ILayoutColumn;
}

export interface IStyledLayoutColumnProps {
	$top: LayoutComponent;
	$bottom: LayoutComponent;
	$resizing: boolean;
}

interface LayoutComponent {
	height: number;
}