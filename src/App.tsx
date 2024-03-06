import './App.css'
import { EditableLayout } from './components/EditableLayout/EditableLayout'
import { LayoutProvider } from './components/LayoutContext/LayoutContext'

function App() {

  return (
    <>
		<LayoutProvider>

			<div style={{width: '90vw', height: '90vh', backgroundColor: 'whitesmoke', marginLeft: '5vw', marginTop: '5vh'}}>
				<EditableLayout />
			</div>
			
		</LayoutProvider>
    </>
  )
}

export default App
