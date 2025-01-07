# ffprobe

ffmpeg and ffprobe are important tools used in both audio and video analysis/editing.

## Video shot sequencing

```bash
ffprobe -show_frames -of json -f lavfi "movie=/path/to/file.ext,select=gt(scene,{threshold})"
```

Where `{threshold}` is a floating number between 0.0 and 1.0.

Example:

```bash
ffprobe -show_frames -of json -f lavfi "movie=/path/to/file.ext,select=gt(scene,0.3)"
```

Will only show the shots with a lavfi scene_score over 30%.

For more info on lavfi (or libavfilter), follow [this link](https://www.linux-magazine.com/Issues/2018/207/Tutorials-FFmpeg-Devices#:~:text=FFmpeg's%20lavfi%20\(short%20for%20libavfilter,streams%20out%20of%20thin%20air.).
