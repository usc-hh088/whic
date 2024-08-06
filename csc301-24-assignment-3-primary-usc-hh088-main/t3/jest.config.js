import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const config = {
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.js$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'svelte'],
  setupFilesAfterEnv: ['<rootDir>/node_modules/@testing-library/jest-dom/extend-expect']
};

export default config;
