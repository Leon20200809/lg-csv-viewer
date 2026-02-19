import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
    base: "/lg-csv-viewer/",
    plugins: [react(), tailwindcss()],
});
//# sourceMappingURL=vite.config.js.map