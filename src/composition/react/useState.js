// import { shallowRef } from 'vue';
// import { getValue } from '../../src/lib';

// export default (initialState) => {
//   const state = shallowRef(
//     typeof initialState === 'function'
//       ? initialState()
//       : initialState
//   );
//   const setter = (newValue) =>
//     typeof newValue === 'function'
//       ? (state.value = newValue(getValue(state)))
//       : (state.value = newValue);
//   return [state, setter];
// };

import { useRef } from "react";
import { getValue } from '../../src/lib';

const useStateCustom = (initialState) => {
  const state = useRef(
    typeof initialState === 'function'
      ? initialState()
      : initialState
  );
  const setter = (newValue) =>
    typeof newValue === 'function'
      ? (state.value = newValue(getValue(state)))
      : (state.value = newValue);
  return [state, setter];
}

export default useStateCustom;