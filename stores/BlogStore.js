import { defineStore } from "pinia";

export const blogStore = defineStore("blogStore", {
  state: () => {
    return {
      numOfEl: 10,
      numPage: 1,
    };
  },

  getters: {
    blogItems() {
      let arr = [];
      for (let i = 0; i < this.numOfEl; ++i) {
        let img = Math.floor(i / 4) + 1;
        let isShow = true;
        if (img == this.numPage) isShow = true;
        else isShow = false;
        img = `img/blog/single_blog_${img}.png.webp`;
        arr.push({ isShow, i, img });
      }
      return arr;
    },
    maxPage: (state) => Math.floor((state.numOfEl - 1) / 4) + 1,
  },

  actions: {
    nextPage() {
      this.numPage = this.numPage++ > this.maxPage - 1 ? 3 : this.numPage++;
    },
    prevPage() {
      this.numPage = this.numPage-- < 2 ? 1 : this.numPage--;
    },
    changePage(n) {
      this.numPage = n;
    },
  },
});
