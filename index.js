const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

// get arguments
const args = process.argv.slice(2);

// validation
if (args.length < 3) {
  console.log("Usage: node index.js <inputVideo> <outputFolder> <timeSlots>");
  console.log("Example: node index.js input.mp4 clips 2-5 7-8");
  process.exit(1);
}

const inputVideo = args[0];
const outputFolder = args[1];
const timeSlots = args.slice(2);

// create folder if not exists
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

// convert "2-5" → { start: 2, end: 5 }
const clips = timeSlots.map((slot) => {
  const [start, end] = slot.split('-').map(Number);
  return { start, end };
});

clips.forEach((clip, index) => {
  const videoName = path.basename(inputVideo, path.extname(inputVideo));

const output = path.join(
  outputFolder,
  `${videoName}_${clip.start}-${clip.end}.mp4`
);

  ffmpeg(inputVideo)
    .setStartTime(clip.start)
    .setDuration(clip.end - clip.start)
    .output(output)
    .on('end', () => {
      console.log(`✅ Clip ${index} created: ${output}`);
    })
    .on('error', (err) => {
      console.error(`❌ Error in clip ${index}:`, err.message);
    })
    .run();
});
