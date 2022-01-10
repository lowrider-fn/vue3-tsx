import { ref } from 'vue';

export const useToggle = (val = false) => {
  const isShow = ref(val);

  const setIsShow = (val: boolean) => {
    isShow.value = val;
  };

  const handleClose = () => {
    isShow.value = false;
  };

  const handleOpen = () => {
    isShow.value = true;
  };

  const toggleShowing = () => {
    isShow.value = !isShow.value;
  };

  return {
    isShow,
    toggleShowing,
    handleClose,
    handleOpen,
    setIsShow,
  };
};
