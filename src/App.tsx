import useCreateModal from './modal/useCreateModal/useCreateModal'

function App() {
	const okModal = useCreateModal('ok')
	const errorModal = useCreateModal('error')
  
	return (
		<>
			<h3>React Modal Provider</h3>
			<button onClick={okModal}>Click for Ok Modal</button>
			<button onClick={errorModal}>Click for Error Modal</button>
		</>
	)
}

export default App
