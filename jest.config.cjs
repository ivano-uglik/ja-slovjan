module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "@/supabase/actions": "<rootDir>/supabase/actions", // Adjust this based on your project structure
    "@/supabase/supabase-server": "<rootDir>/supabase/supabase-server.js"
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
};
