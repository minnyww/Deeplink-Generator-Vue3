import { ref } from 'vue';

export default function useBoolean() {
   const value = ref(false);
   const on = () => (value.value = true);
   const off = () => (value.value = false);
   const toggle = () => (value.value = !value.value);

   return {
      value,
      on,
      off,
      toggle,
   };
}
