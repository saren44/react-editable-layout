
export type DirectionType = 'horizontal' | 'vertical'

export interface IStyledResizeBarProps{
	$direction: DirectionType;
}

export interface IResizeBarProps {
	direction: DirectionType;
	dragSetter: (e: React.MouseEvent) => void;
}