import { ReactNode, useState } from "react"
import { StyledComponentSelector } from "./styles"
import { IComponentSelectorProps } from "./types"




export const ComponentSelector = ({
	components
} : IComponentSelectorProps) => {
	const [activeIndex, setActiveIndex] = useState<number>(0)

	const GenerateSelectBarData = () => {
		let res: Array<ReactNode> = [];
		let id = 0;
		if (components === undefined) {
			return [<div className="emptyBar"> no components selected </div>];
		}
		components.forEach(_ => {
			const cp = id;
			res.push(<div className={`selectItem ${id === activeIndex ? 'active' : 'inactive'}`} onClick={() => setActiveIndex(cp)} key={cp}> {`win ${id}`} </div>)
			id += 1;
		})

		return res;
	}

	return (
		<StyledComponentSelector >
			<div className='selectBar'>
				{GenerateSelectBarData()}
			</div>
			<div className="componentContainer">
				{components && components[activeIndex]}
			</div>
		</StyledComponentSelector>
	)
}