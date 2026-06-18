# Resume Folder

Place your resume PDF file here OR in the `public/` folder.

**Recommended approach (for direct download):**
1. Place `resume.pdf` in the `/public` folder (root of project)
2. It will be accessible at `/resume.pdf`
3. The Resume component already links to `/resume.pdf`

**Alternative approach:**
1. Place your PDF here in `src/assets/resume/`
2. Import it in `Resume.jsx`:
   ```js
   import resumePDF from '../assets/resume/resume.pdf';
   ```
3. Use `resumePDF` as the `href` for the download/view buttons

**Quick setup:**
- Copy your PDF to: `public/resume.pdf`
- That's it! Download and preview will work automatically.
