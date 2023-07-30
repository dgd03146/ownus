import { useState, useEffect } from 'react';

const useModal = () => {
  const [portalElement, setPortalElement] = useState<Element | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setPortalElement(document.getElementById('portal'));
  }, [showMenu]);

  const handleMenuModal = () => {
    setShowMenu((prev) => !prev);
  };

  return { portalElement, showMenu, handleMenuModal };
};

export default useModal;
