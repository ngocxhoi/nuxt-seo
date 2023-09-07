import { defineStore } from "pinia";

export const useHead = defineStore("useHead", {
  state: () => {
    return {
      arr: [true, false, false, false, false, false],
    };
  },
  actions: {
    changeActive(n) {
      this.arr = new Array(6).fill(false);
      this.arr[n] = true;
    },
  },
});
