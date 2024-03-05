import React from 'react'
import { useModal } from '../ModalProvider/ModalProvider'
import style from './Modal.style.module.scss'

const Modal: React.FC = () => {
	const { modalComponent, closeModal } = useModal()

	if (!modalComponent) {
		return null
	}

	return (
		<div className={style.modal} onClick={closeModal}>
			<div onClick={e => e.stopPropagation()}>{modalComponent}</div>
		</div>
	)
}

export default Modal
