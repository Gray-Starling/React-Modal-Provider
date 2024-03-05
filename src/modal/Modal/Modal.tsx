import React from 'react'
import { useModal } from '../ModalProvider/ModalProvider'
import style from './Modal.style.module.scss'

const Modal: React.FC = () => {
	const { modalComponent, closeModal } = useModal()

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
	}

	if (!modalComponent) {
		return null
	}

	return (
		<div className={style.modal} onClick={closeModal}>
			<div onClick={e => handleClick(e)}>{modalComponent}</div>
		</div>
	)
}

export default Modal
