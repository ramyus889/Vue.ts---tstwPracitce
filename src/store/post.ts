import { defineStore } from 'pinia';

interface Post {
  id: number;
  title: string;
}

export const usePostStore = defineStore('post', {
  state: () => ({ posts: [] as Post[] }),
  getters: {},
  actions: {
    async fetchPosts() {
      const res = await fetch('https://5630f0f4e7281268.mokky.dev/items');
      const data = await res.json();
      this.posts = data;
    }
  }
});
