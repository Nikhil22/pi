import { NavModal } from './nav-modal.type';

export function getDefaultNavConfigObj (): NavModal {
  return {
    onAbout: () => {},
    onClose: () => {}
  }
}
