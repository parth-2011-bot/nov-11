# Website 11 — The Clockwork Chronicles

A standalone, three-screen birthday countdown website for Bromine, styled like a magical antique clockmaker's workshop.

## Files
- `index.html` — page structure and editable visible text
- `style.css` — colors, layout, gears, clock and animations
- `script.js` — navigation, live countdown, secrets and birthday mode
- `assets/images/shinchan.png` — optional Shin-chan sticker image
- `assets/audio/` — reserved for optional audio files

## Run it
1. Extract the ZIP.
2. Keep `index.html`, `style.css` and `script.js` together.
3. Double-click `index.html` to open it in a modern browser.
4. Add your Shin-chan image at `assets/images/shinchan.png`.

The site works without the image; the sticker area simply remains text-only.

## Personalize it
Open `script.js` and edit the `CONFIG` object near the top:
- `recipient`
- `everydaySecretTitle`
- `everydaySecret`
- `birthdaySecretTitle`
- `birthdaySecret`

You can also edit the greeting and letter directly in `index.html`.

## Countdown and birthday mode
The countdown targets **November 20, 2026 at 12:00 AM India Standard Time (IST, UTC+05:30)**.
The birthday overlay appears only during November 20 in IST and stops after November 20 ends.

For a different year, update the date strings in `script.js`:
- `2026-11-20T00:00:00+05:30`
- `2026-11-21T00:00:00+05:30`

## Notes
- No JavaScript libraries are required.
- Google Fonts are loaded online; fallback fonts are included.
- The website is designed for desktop and mobile screens.
- The Shin-chan image should be an image you have permission to use.
