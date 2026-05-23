# Video Clip Cutter

A simple Node.js script to cut multiple clips from a video using FFmpeg.

## Features

- Extract multiple clips from a single video
- Custom time ranges
- Automatic output folder creation
- Saves clips with readable filenames
- Works with any FFmpeg-supported video format

---

## Requirements

- Node.js
- FFmpeg installed on your system

---

## Installation

### 1. Clone the project

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install fluent-ffmpeg
```

### 3. Install FFmpeg

#### Linux / Termux

```bash
pkg install ffmpeg
```

#### Ubuntu / Debian

```bash
sudo apt install ffmpeg
```

#### Windows

Download FFmpeg from:
https://ffmpeg.org/download.html

Add FFmpeg to your system PATH.

---

## Usage

```bash
node index.js <inputVideo> <outputFolder> <timeSlots>
```

### Example

```bash
node index.js input.mp4 clips 2-5 7-10 15-20
```

This command will:

- Create a folder named `clips`
- Extract:
  - 2s → 5s
  - 7s → 10s
  - 15s → 20s

---

## Output Example

```text
clips/
├── input_2-5.mp4
├── input_7-10.mp4
└── input_15-20.mp4
```

---

## Project Structure

```text
project/
├── index.js
├── package.json
└── README.md
```

---

## How It Works

The script:

1. Reads command-line arguments
2. Converts time ranges into start/end times
3. Uses FFmpeg to cut clips
4. Saves each clip separately

---

## Example Code

```js
ffmpeg(inputVideo)
  .setStartTime(clip.start)
  .setDuration(clip.end - clip.start)
  .output(output)
  .run();
```

---

## Notes

- Time format uses seconds only
- Invalid ranges may cause errors
- Large videos may take longer to process
- Multiple clips are processed simultaneously

---

## Future Improvements

- Support HH:MM:SS format
- Sequential processing
- Progress bar
- Better error handling
- GUI version

---

## License

MIT License
