# ChapChap Landing Page

Welcome to the official **ChapChap** landing page project — the new era of quick commerce in Kano State.

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **UI Architecture**: Material UI (v6), Emotion
- **Language**: TypeScript
- **Hosting**: Firebase Hosting
- **Styling**: MUI Theme (Deep Blue & Gold)

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    # If using React 19 RC with MUI 6, you might need:
    npm install --legacy-peer-deps
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

- `src/app`: App Router pages (`/`, `/about`, `/coming-soon`).
- `src/components`: Reusable UI components.
  - `layout`: Header, Footer.
  - `home`: Hero, Benefits, ImageShowcase, etc.
  - `shared`: Generic components like NewsletterSignup.
- `src/theme`: MUI Theme configuration.

## Deployment to Firebase

This project is configured for Firebase Hosting using static export.

1.  **Build the Project**:
    ```bash
    npm run build
    ```
    This generates an `out` directory containing the static site.

2.  **Deploy**:
    Ensure you have the Firebase CLI installed and are logged in.
    ```bash
    firebase deploy
    ```

## Customization

- **Colors**: Edit `src/theme/theme.ts` to adjust the primary/secondary palette.
- **Images**: Add local images to `public/assets` and update references in components.

---

**ChapChap** — Something Huge is Coming to Kano.
