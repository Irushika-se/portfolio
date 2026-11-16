# Portfolio Website – Udeshi Irushika Shamodani

Simple portfolio built with plain HTML, CSS and JavaScript (no frameworks, no installs).

## Folder structure

```
portfolio/
├── index.html        ← all the content (edit text here)
├── css/style.css     ← colours and layout (colours are at the top, in :root)
├── js/script.js      ← mobile menu, active link, scroll animation
├── assets/           ← put your photo and project screenshots here
└── README.md
```

## 1. Run it in VS Code (step by step)

1. Install **VS Code** if you don't have it.
2. Open VS Code → **File → Open Folder** → choose the `portfolio` folder.
3. Install the **Live Server** extension (Extensions icon → search "Live Server" → Install).
4. Right-click `index.html` → **Open with Live Server**.
5. The site opens in your browser. When you save a file, the page refreshes by itself.

(No Live Server? Just double-click `index.html` and it will open in your browser too.)

## 2. Add your photo and screenshots

- Photo: save it as `assets/profile.jpg`, then follow the comment in `index.html` inside the Home section.
- Screenshots: save as `assets/sebd.png`, `assets/globetrek.png`, `assets/nwsdb.png`, `assets/printxpress.png`, `assets/greenbasket.png`, `assets/tourmate.png`. Each project card has a comment showing the exact line to paste.
- WordPress Projects section: five cards (Petal & Stem, Green Leaf Café, Glow Beauty Salon, IronCore Fitness, Prime Estates). Screenshots are in `assets/` (`wp-*.jpg`).
- Project links: the academic project cards have no GitHub button yet, because the individual repositories are not public. When a repository is public, search for `TODO` in `index.html` and add the button using the example in the comment. A general "View my GitHub profile" link sits under the academic projects.

## 3. Publish free with GitHub Pages

1. Log in to GitHub → click **New repository**.
2. Name it `irushika-se.github.io` (this gives the short address `https://irushika-se.github.io`), set it to **Public**, click **Create repository**.
   (Any other name also works, but the address will be `https://irushika-se.github.io/<repo-name>/`.)
3. Click **uploading an existing file**, drag in **everything inside** the `portfolio` folder (`index.html`, `css`, `js`, `assets`), then **Commit changes**.
   - `index.html` must be at the top level of the repository, not inside another folder.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch **main**, Folder **/ (root)**, then **Save**.
6. Wait 1–2 minutes and refresh. Your site link appears at the top of the Pages screen.
7. Put that link on your CV and LinkedIn.

To update later: open the file on GitHub → pencil icon → edit → Commit changes.

## 4. Before-publishing checklist

- [ ] Add your profile photo (`assets/profile.jpg`) and update the HTML as per the comment
- [ ] Check your email address: the CV says `irsuhika@gmail.com` – make sure it is not a typo for `irushika`. If it is, fix it in 2 places in the Contact section
- [ ] Replace each project's GitHub link with the real repository (search `TODO`)
- [ ] Add a screenshot for each of the 6 projects (or leave placeholders)
- [ ] Remove any password, database config or private data from repositories before making them public
- [ ] When your final results arrive, update the "final results pending" text in Home/About/Education
- [ ] Check your LinkedIn and GitHub links open correctly
- [ ] If you add a live demo link for a project, add a new `<a>` button inside that card's `project-links` div
- [ ] Test on your phone after publishing
- [ ] Phone number is not shown on the site on purpose (privacy). Add it in the Contact section only if you want it public
