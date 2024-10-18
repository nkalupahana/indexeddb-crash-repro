# IndexedDB Crash Reproduction

## Installation

```bash
npm install
npm install -g @ionic/cli
ionic cap sync
ionic cap open ios # will open XCode
```

You may need to adjust the bundle identifier, as well as the background task identifier in `AppDelegate.swift` and `Info.plist`.
