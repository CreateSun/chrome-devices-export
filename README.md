# Chrome Emulated Device

> This is a tool to import and export chrome device list.

## How does it work?

### Import

1. Read the profile file(chrome profile path)
2. Read the config file (device list file path)
3. Write the device list to the profile file

### Export

1. Read the profile file(chrome profile path)
2. Write the device list to the file `chrome-device-list-new.json`

## How to use?

1. Install dependencies

```bash
npm install
```

2. Run the script

```bash
# import
node import.js --profile "/Users/xx/Library/Application Support/Google/Chrome/Default/Preferences" --config "/Users/xx/Desktop/chrome-device-list.json"

# export
node export.js --profile "/Users/xx/Library/Application Support/Google/Chrome/Default/Preferences"
```

## How to get the chrome profile path?

1. Open chrome
2. Get the profile path from the url

```bash
chrome://version/
```
