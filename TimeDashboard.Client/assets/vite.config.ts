import { defineConfig } from "vite";

export default defineConfig({
    build: {
        minify: true,
        lib: {
            entry: "src/index.ts", // your web component source file
            formats: ["es"],
            fileName: 'assets'
        },
        outDir: "../wwwroot/App_Plugins/timedashboard", 
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            external: [/^@umbraco/],
            output: {
                manualChunks: undefined,
                inlineDynamicImports: true,
                chunkFileNames: `[name]-[hash].js`,
            }
        },
    },
    mode: 'production'
});