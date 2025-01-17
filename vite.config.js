import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    build: {
        lib: {
            entry: "./src/Slider.jsx",
            name: "react-slider-gv",
            fileName: (format) => `slider.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
    plugins: [react()],
});
