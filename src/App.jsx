import { useState } from 'react'
import './index.scss';
import {Modal} from "./components/Modal.jsx";

function App() {
	const [open, setOpen] = useState(false)

	return (
		<>
			<div className="App">
				<button className="open-modal-btn" onClick={() => setOpen(true)}>✨ Открыть окно</button>
				<Modal open={open} setOpen={setOpen}>
					<h3>Content</h3>
				</Modal>
			</div>
		</>
	)
}

export default App
