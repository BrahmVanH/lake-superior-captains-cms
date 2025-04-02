import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'http://localhost:4000/graphql',
	documents: ['src/**/*.ts'], // More specific path patterns
	ignoreNoDocuments: true, // Prevents the error when no documents are found
	generates: {
		'./src/__generated__/types.ts': {
			plugins: ['typescript', 'typescript-operations'],
		},
	},
};

export default config;
