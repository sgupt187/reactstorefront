import useLocale from './useLocale';
import useCart from './ct/useCart';
import addVisibilityChangeListener from './lib';
import { cache } from '../apollo';

addVisibilityChangeListener((status) => {
  if (status) {
    cache.evict({ id: 'activeCart' });
    cache.gc();
  }
});

//Vue/app specific code
export default () => {
  const { locale } = useLocale();
  return useCart({
    locale,
  });
};
