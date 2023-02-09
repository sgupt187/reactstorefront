import { useMemo } from 'react';
import config from '../sunrise.config';
import useCart from './useCart';

function useAccessRules() {
  const { cart } = useCart();
  const showStoreSelector = useMemo(() => {
    /**
     * To get channels the scope view_products is needed
     * This is a security risk because all clients can see unpublished products
     * If you want to select stores then you have to use a proxy or BFF or
     * run the risk of clients hacking access to unpublished products
     **/
    return (
      cart.value === null &&
      (config.ct.auth.scope.includes('view_products') ||
        config.ct.auth.scope.includes('manage_project'))
    );
  }, [cart]);

  const showLocationSelector = useMemo(
    () => cart.value === null, [cart]
  );

  const showReturnItemButton = useMemo(() => {
    /**
     * To return an item you need to update the order, there is no update my order scope
     * so to return an item you need access to all orders, including orders that are not
     * yours. So to return an item you need to implement it with proxy or BFF that
     * checks ownership of the order
     */
    return (
      config.ct.auth.scope.includes('manage_orders') ||
      config.ct.auth.scope.includes('manage_project')
    );
  }, [config]);

  const showResetPassword = useMemo(() => {
    /**
     * To request a reset password token you need manage_customers this is done
     * through a proxy or BFF that will email that token, sunrise is connecting
     * directly to commercetools so if you want this to work you need the client
     * to have manage_customers scope. Do not do this in production, this is only
     * for demo purposes
     */
    return (
      config.ct.auth.scope.includes('manage_customers') ||
      config.ct.auth.scope.includes('manage_project')
    );
  }, [config]);

  return {
    showStoreSelector,
    showLocationSelector,
    showReturnItemButton,
    showResetPassword,
  };
}

export default useAccessRules;
