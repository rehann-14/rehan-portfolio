import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    watch: {
      // Ignore binary/document files that Vite cannot watch (especially on OneDrive)
      ignored: [
        '**/*.pdf',
        '**/*.PDF',
        '**/*.docx',
        '**/*.xlsx',
        '**/*.pptx',
        '**/*.zip',
      ],
    },
  },
  // Also tell the build to treat PDFs as static assets
  assetsInclude: ['**/*.pdf', '**/*.PDF'],
})
