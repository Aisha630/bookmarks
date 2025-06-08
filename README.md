# BookSwitch

A browser extension that provides fast keyboard shortcuts to open bookmarks from your Bookmarks Bar. Built with WXT framework and Svelte.

## 🚀 Features

- **Quick Access**: Use `Alt+1` through `Alt+9` to instantly open your first 9 bookmarks
- **New Tab Opening**: All bookmarks open in new tabs for seamless browsing
- **Cross-Browser Support**: Works on both Chrome and Firefox
- **Welcome Guide**: Helpful onboarding experience for new users
- **Minimal UI**: Clean, simple popup interface with animated logo

## 📋 Installation

### For Development

1. Clone the repository:

    ```bash
    git clone <your-repo-url>
    cd bookmarks
    ```

2. Install dependencies:

    ```bash
    bun install
    # or npm install
    ```

3. Start development server:

    ```bash
    bun run dev
    # or npm run dev
    # WXT will load the extension and open a browser window itself
    ```

4. Optional: Manually load the extension in your browser:

    - **Chrome**: Go to `chrome://extensions/`, enable Developer mode, click "Load unpacked" and select the `.output/chrome-mv3` folder
    - **Firefox**: Go to `about:debugging`, click "This Firefox", click "Load Temporary Add-on" and select any file in the `.output/firefox-mv2` folder

### For Production

1. Build the extension:

    ```bash
    bun run build
    # or npm run build
    ```

2. Create distribution packages:

    ```bash
    bun run zip
    # or npm run zip
    ```

## 🎯 How to Use

1. **Install the extension** and you'll see a welcome page with setup instructions
2. **Use keyboard shortcuts** to open bookmarks:

    - `Alt+1` → Opens the 1st bookmark from your Bookmarks Bar
    - `Alt+2` → Opens the 2nd bookmark from your Bookmarks Bar
    - ...up to `Alt+9` → Opens the 9th bookmark

3. **Set additional shortcuts** (optional):

    - Go to `chrome://extensions/shortcuts` (or `about:addons` → Extensions → Manage Extension Shortcuts in Firefox)
    - Assign keys for `open-bookmark-5` through `open-bookmark-9` if needed

## 🛠️ Development

### Tech Stack

- **Framework**: [WXT](https://wxt.dev/) - Modern web extension framework
- **Frontend**: [Svelte 5](https://svelte.dev/) - Reactive UI framework
- **Runtime**: [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager
- **Language**: TypeScript for type safety
- **Linting**: ESLint + Prettier for code quality

### Available Scripts

```bash
bun run dev          # Start development server for Chrome
bun run dev:firefox  # Start development server for Firefox
bun run build        # Build for production
bun run build:firefox # Build for Firefox specifically
bun run zip          # Create distribution zip files
bun run check        # Run Svelte type checking
bun run format       # Format code with Prettier
bun run lint         # Check code style and run ESLint
```

### Project Structure

```
src/
├── entrypoints/
│   ├── background.ts     # Background script for bookmark handling
│   └── popup/           # Extension popup
│       ├── App.svelte   # Main popup component
│       ├── index.html   # Popup HTML
│       └── main.ts      # Popup entry point
├── assets/
│   └── bookmark.svg     # Extension logo
public/
├── welcome.html         # Welcome page for new users
└── welcome.css         # Welcome page styles
```

## 🔧 Browser Permissions

The extension requires these permissions:

- `bookmarks`: To read and access your bookmarks
- `tabs`: To open bookmarks in new tabs
- `commands`: To register keyboard shortcuts

## 🎨 Customization

### Changing Shortcuts

You can modify keyboard shortcuts in your browser:

- **Chrome**: `chrome://extensions/shortcuts`
- **Firefox**: `about:addons` → Extensions → Manage Extension Shortcuts
