import { useState } from './useState';

export const useToggle = (val = false) => {
  const [isShow, setIsShow] = useState(val);

  const handleClose = () => setIsShow(false);

  const handleOpen = () => setIsShow(true);

  const toggleShowing = () => setIsShow(!isShow.value);

  return {
    isShow,
    toggleShowing,
    handleClose,
    handleOpen,
    setIsShow
  };
};
