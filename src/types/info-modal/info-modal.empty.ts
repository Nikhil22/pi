import { InfoModal } from './info-modal.type';

export function getDefaultInfoConfigObj (): InfoModal {
  return {
    title: '',
    message: '',
    theme: '',
    onClose: () => {}
  }
}
