import { useState, useEffect } from 'react';

const useModal = () => {
  const [portalElement, setPortalElement] = useState<Element | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const selector = 'portal';

  useEffect(() => {
    setPortalElement(document.getElementById(selector));
  }, [selector]);

  const handleMenuModal = () => {
    setShowMenu((prev) => !prev);
  };

  return { portalElement, showMenu, handleMenuModal };
};

export default useModal;
