// import { onMounted, watch } from 'vue';

// const useEffect = (fn, deps) => {
//   const newDeps = deps.filter(
//     (dep) => typeof dep !== 'function'
//   );
//   onMounted(fn);
//   watch(newDeps, fn);
// };
// export default useEffect;

import React, { useEffect } from "react";

const useEffectCustom = (fn, deps) => {
  const newDeps = deps.filter(dep => typeof dep !== 'function');
  useEffect(() => {
    fn;
  }, [newDeps, fn])
}

export default useEffectCustom
