import { useContext, useReducer, createContext, ReactNode} from 'react';
import { IAction, IConfig, ILayout, ResizeData } from './types';
import { SampleComponent } from '../SampleComponent/SampleComponent';


export const defaultConfig: IConfig = {
	maxHeight: 80,
	minHeight: 20,
	minWidth: 10,
	maxWidth: 40,
}

const resolveResizeHorizontalValue = (config: IConfig, target: number) => {
	let nw = target;
	if (nw < config.minWidth) {
		nw = config.minWidth;
	}
	else if (nw > config.maxWidth) {
		nw = config.maxWidth;
	}

	return nw;
}

const resolveResizeVerticalValue = (config: IConfig, target: number) => {
	let nh = target;
	if (nh < config.minHeight) {
		nh = config.minHeight;
	}
	else if (nh > config.maxHeight) {
		nh = config.maxHeight;
	}

	return nh;
}

const layoutReducer = (layout: ILayout, action: IAction) => {
	switch(action.type) {
		case 'RESIZE_LEFT_HORIZONTAL': {
			action.data = action.data as ResizeData;
			const newVal = resolveResizeHorizontalValue(layout.config, action.data.newVal)
			return {
				...layout,
				left: {
					...layout.left,
					width: newVal, 
				},
				center: {
					...layout.center,
					width: 100 - newVal - layout.right.width
				}
			}
			}
			case 'RESIZE_RIGHT_HORIZONTAL': {
				action.data = action.data as ResizeData;
				const newVal = resolveResizeHorizontalValue(layout.config, action.data.newVal)
				return {
					...layout,
					right: {
						...layout.right,
						width: newVal, 
					},
					center: {
						...layout.center,
						width: 100 - newVal - layout.left.width
					}
				}
			}
			case 'RESIZE_LEFT_VERTICAL': {
				action.data = action.data as ResizeData;
				const newVal = resolveResizeVerticalValue(layout.config, action.data.newVal)
				return {
					...layout,
					left: {
						...layout.left,
						top: {
							...layout.left.top,
							height: newVal
						},
						bottom: {
							...layout.left.bottom,
							height: 100 - newVal
						}
					}
				}
			}
			case 'RESIZE_CENTER_VERTICAL': {
				action.data = action.data as ResizeData;
				const newVal = resolveResizeVerticalValue(layout.config, action.data.newVal)
				return {
					...layout,
					center: {
						...layout.center,
						top: {
							...layout.center.top,
							height: newVal
						},
						bottom: {
							...layout.center.bottom,
							height: 100 - newVal
						}
					}
				}
			}
			case 'RESIZE_RIGHT_VERTICAL': {
				action.data = action.data as ResizeData;
				const newVal = resolveResizeVerticalValue(layout.config, action.data.newVal)
				return {
					...layout,
					right: {
						...layout.right,
						top: {
							...layout.right.top,
							height: newVal
						},
						bottom: {
							...layout.right.bottom,
							height: 100 - newVal
						}
					}
				}
			}
			default: {
				return layout
			}
		}
	}



const initialLayout: ILayout = {
	config: defaultConfig,
	left: {
		width: 20,
		top: {
			height: 40,
			children: [<SampleComponent txt='top left' />, <SampleComponent txt='top l 2' />]

		},
		bottom: {
			height: 60,
		}
	},
	center: {
		width: 65,
		top: {
			height: 70,
		},
		bottom: {
			height: 30,
		}
	},
	right: {
		width: 15,
		top: {
			height: 50,
		},
		bottom: {
			height: 50,
		}
	}
}


const LayoutContext = createContext<ILayout>(initialLayout);
const LayoutDispatchContext = createContext<any>(layoutReducer);



export const useLayout = () => {
	return useContext(LayoutContext);
}

export const useLayoutDispatch = () => {
	return useContext(LayoutDispatchContext)
}


export const LayoutProvider = ({children}: {children: ReactNode}) => {
	const [layout, dispatch] = useReducer(
		layoutReducer,
		initialLayout
	)


	return(
		<LayoutContext.Provider value={layout}>
			<LayoutDispatchContext.Provider value={dispatch}>
				{ children }
			</LayoutDispatchContext.Provider>
		</LayoutContext.Provider>
	)
}
