# Engineering Portfolio

A clean, typography-driven engineering portfolio built with React, TypeScript, and Tailwind CSS. Designed to be minimalistic, responsive, and easily deployable to GitHub Pages.

## Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS (via CDN for simplicity in this build, or standard config)
- **Routing:** React Router DOM
- **Icons:** Lucide React

## Project Structure

```
/
├── components/       # React components (Layout, Projects, Resume, etc.)
├── assets/           # Static images (logos, project photos)
├── constants.ts      # Content data (Bio, Experience, Projects)
├── types.ts          # TypeScript interfaces
├── App.tsx           # Main application router
├── index.tsx         # Entry point
└── index.html        # HTML template
```

## Getting Started

1.  **Clone the repository**
2.  **Install dependencies** (if using a local build environment like Vite/CRA):
    ```bash
    npm install
    ```
3.  **Run locally**:
    ```bash
    npm run dev
    ```

## Customization

### Content
Edit `constants.ts` to update your biography, experience, skills, projects, and contact information. The application is data-driven, so most changes happen here.

### Assets
Place your project images in the `assets/` folder. Ensure the filenames match those referenced in `components/Projects.tsx` (e.g., `assets/onemm_photo_1.png`).

### Styling
Tailwind configuration is currently embedded in `index.html` for quick prototyping. You can customize colors and fonts there.

## Deployment to GitHub Pages

1.  Update the `homepage` field in `package.json` (if applicable) or configure your build script.
2.  Push to a GitHub repository.
3.  Enable GitHub Pages in the repository settings, pointing to your build branch or folder.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
