import { ReactNode } from "react";

export interface IConfig {
	maxHeight: number;
	minHeight: number;
	maxWidth: number;
	minWidth: number;
}


export interface ILayout {
	config: IConfig;
	left: ILayoutColumn;
	center: ILayoutColumn;
	right: ILayoutColumn;
}


export interface ILayoutColumn {
	width: number;
	top: LayoutComponent;
	bottom: LayoutComponent;
}

interface LayoutComponent {
	height: number;
	children?: ReactNode[];
}

export interface IAction {
	type: ActionType;
	data: ResizeData;
}

export interface ResizeData {
	newVal: number;
}

export type ActionType = 'RESIZE_LEFT_HORIZONTAL' | 'RESIZE_RIGHT_HORIZONTAL' | 'RESIZE_LEFT_VERTICAL' | 'RESIZE_CENTER_VERTICAL' | 'RESIZE_RIGHT_VERTICAL'

export type dispatchFnType = (layout: ILayout, action: ActionType) => ILayout;