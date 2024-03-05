export interface ICustomizableLayoutProps {
	
}

export interface IStyledCustomizableLayoutProps {
	$left: LayoutColumn;
	$center: LayoutColumn;
	$right: LayoutColumn;
	$resizing: boolean;
}

interface LayoutColumn {
	width: number;
}