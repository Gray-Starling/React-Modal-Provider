import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Modal from './modal/Modal/Modal.tsx'
import { ModalProvider } from './modal/ModalProvider/ModalProvider.tsx'
import { Ok } from './components/Ok.tsx'
import { Error } from './components/Error.tsx'

/**
 * name: Название модального окна, по нему будет вызываться модальное окно
 * component: Сам компонент. То, что будет отображаться
 */
const modalComponents = [
	{
		name: 'error',
		component: <Error />,
	},
	{
		name: 'ok',
		component: <Ok />,
	},
]

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ModalProvider components={modalComponents}>
			<App />
			<Modal /> {/* Компонент модалки */}
		</ModalProvider>
	</React.StrictMode>
)
