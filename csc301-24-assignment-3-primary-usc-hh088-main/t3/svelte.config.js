import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

export default {
  kit: {
    adapter: adapter(),
    alias: {
      $components: '/src/components',
      $lib: '/src/lib',
      $routes: '/src/routes',
    },
    // 如果有额外的配置项，可以在这里添加
  },
  preprocess: preprocess()
};
