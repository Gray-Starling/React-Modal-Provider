import React, { createContext, ReactNode, useContext, useState } from 'react';

type componentsTypes = {
  name: string;
  component: ReactNode;
};

type ModalProviderProps = {
  children: ReactNode;
  components: componentsTypes[];
};

type ModalContextType = {
  openModal: (component: ReactNode) => void;
  closeModal: () => void;
  modalComponent?: ReactNode;
  components: componentsTypes[];
};

const ModalContext = createContext<ModalContextType | null>(null);

const ModalProvider: React.FC<ModalProviderProps> = ({ children, components }) => {
  const [modalComponent, setModalComponent] = useState<ReactNode | null>(null);

  const openModal = (component: ReactNode) => {
    setModalComponent(component);
  };

  const closeModal = () => {
    setModalComponent(null);
  };


  
  const contextValue = { openModal, closeModal, modalComponent, components };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal должен использоваться внутри ModalProvider');
  }

  return context;
};

export { ModalProvider, useModal };