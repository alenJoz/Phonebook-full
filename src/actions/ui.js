import { UI } from '../constants';

export const showLoader = () => ({
  type: UI.SHOW_LOADER,
});

export const hideLoader = () => ({
  type: UI.HIDE_LOADER,
});