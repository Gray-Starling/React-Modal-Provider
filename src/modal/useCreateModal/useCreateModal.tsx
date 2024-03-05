import { useModal } from '../ModalProvider/ModalProvider';

const useCreateModal = (componentName: string) => {
  const { openModal, components } = useModal();

  const handleClick = () => {
    const selectedComponent = components.find(
      (component) => component.name === componentName
    );

    
    if (selectedComponent) {
      openModal(selectedComponent.component);
    }
  };

  return handleClick;
};

export default useCreateModal;