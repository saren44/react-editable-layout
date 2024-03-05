import './App.css'
import { EditableLayout } from './components/EditableLayout/EditableLayout'
import { StyleSheetManager } from 'styled-components'

function App() {

  return (
    <>
		<StyleSheetManager shouldForwardProp={() => true}>

			<div style={{width: '90vw', height: '90vh', backgroundColor: 'whitesmoke', marginLeft: '5vw', marginTop: '5vh'}}>
				<EditableLayout />
			</div>
			
		</StyleSheetManager>
    </>
  )
}

export default App
