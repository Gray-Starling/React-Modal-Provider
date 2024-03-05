import { useModal } from '../modal/ModalProvider/ModalProvider'
import style from './Ok.module.scss'

export const Ok = () => {
	const { closeModal } = useModal()

	const handleYesClick = () => {
		console.log('Yes')
		closeModal()
	}
	const handleNoClick = () => {
		console.log('No')
		closeModal()
	}

	return (
		<div className={style.modal__container}>
			<h3>Is this ok?</h3>
			<div className={style.modal__options}>
				<div
					className={[style.modal__btn, style.modal__green].join(' ')}
					onClick={handleYesClick}>
					Yes
				</div>
				<div
					className={[style.modal__btn, style.modal__red].join(' ')}
					onClick={handleNoClick}>
					No
				</div>
			</div>
		</div>
	)
}
