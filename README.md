## Modal window with provider

####1. Для начала необходимо обернуть всё приложение в провайдер

```javascript
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ModalProvider components={modalComponents}>
			<App />
		</ModalProvider>
	</React.StrictMode>
)
```

#### 2. Создаем масcив объектов наших модальных окон. Всего того, что мы хотим отобразить в модалке

```javascript
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
```
**name** - имя компонента по которому мы будем его вызывать
**component** - сам компонет

#### 3. В любом месте, на верхнем уровне распологаем компонент Modal

```javascript
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ModalProvider components={modalComponents}>
			<App />
			<Modal /> {/* Компонент модалки */}
		</ModalProvider>
	</React.StrictMode>
)
```

#### 4. В нужном месте вызываем модалку хуком

```javascript
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
```

#### Это всё! Модалка вызвалась и отобразилась :-)

------------


**closeModal** - функция закрытия модальных окон.

```javascript
const { closeModal } = useModal()

const handleClick = () => {
		console.log('close modal')
		closeModal()
	}
```

------------
Зависимости:
- React
- SCSS
- TypeScript