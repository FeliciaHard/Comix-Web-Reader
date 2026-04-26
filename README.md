# Comix Web Reader

Modern web-based comic book reader for CBR, CBZ, and CBT files with library management and reading progress tracking.

DEMO Link: https://feliciahard.github.io/Comix-Web-Reader/

## Features

- **Modern UI** 
- **Library Mode** - Select your comics folder once, access anytime with persistent folder access
- **Reading Progress** - Automatically saves your last read page and scrolls to it when you reopen
- **Thumbnail Previews** - Auto-generated cover thumbnails for quick comic recognition
- **Recently Read** - Quick access to your last 5 comics with progress indicators
- **Quick Read Mode** - Upload and read individual files without library setup
- **Client-Side Only** - All processing happens in your browser, no server uploads required
- **Offline Support** - Works completely offline after initial load

## Usage

### Library Mode (Recommended)
1. Click "Select Comics Folder"
2. Choose your comics folder and grant permission
3. Browse your library with thumbnails and progress tracking
4. Click any comic to read
5. Your progress is automatically saved

### Quick Read Mode
1. Click "Quick Read"
2. Upload a single CBR/CBZ/CBT file
3. Read immediately (progress won't be saved)

## Getting Started (Development)

### File Structure
```
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css     # All styles and theming
│   └── js/
│       ├── script.js      # Main application logic
│       └── uncompress/
│           └── uncompress.js  # Archive extraction
```

### Development Notes
- Reading progress is stored in `localStorage` (key: `comic_reader_userpref`)
- Folder handles are stored in `IndexedDB` (database: `ComicReaderDB`)
- Thumbnails are base64-encoded JPEG stored in localStorage
- Uses vanilla JavaScript (no jQuery required)

## Requirements

- Modern browser with File System Access API support (Chrome, Edge, Opera)
- **HTTPS required** for Library Mode (folder access)
- For Quick Read Mode, HTTP is sufficient

## Browser Compatibility

### Library Mode (File System Access API)
**✅ Fully Supported:**
- Chrome/Chromium (desktop)
- Microsoft Edge (desktop)
- Opera (desktop)

**❌ Not Supported:**
- Safari (macOS & iOS) - Apple has not implemented this API due to privacy/security concerns
- Firefox - Partially supported behind flags, not production-ready
- All iOS browsers (Chrome, Firefox, Edge on iOS) - Use Safari's engine, inherit same limitations

**📝 Note:** Safari and unsupported browsers will automatically fall back to Quick Read mode only. Users can still read comics by uploading individual files, but library features and progress tracking won't be available.

## Supported Formats

- `.cbr` - Comic Book RAR
- `.cbz` - Comic Book ZIP
- `.cbt` - Comic Book TAR

## Technical Details

- Pure client-side processing (no server required)
- Reading progress stored in localStorage
- Folder handles stored in IndexedDB
- Thumbnails generated using Canvas API
- lightGallery for image viewing with zoom and fullscreen

## License

This project is licensed under the MIT License - see the LICENSE file for details.
