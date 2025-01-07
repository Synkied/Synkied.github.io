# ffmpeg/ffprobe

ffmpeg and ffprobe are important tools used in both audio and video analysis/editing.

## Video shot sequencing
Videos are often made of multiple shots. Shot cuts can easily be seen by a human, as it often is accompanied by either transition or simply a change of camera pose. But as videos are made for human, how could we identify these shots with a program? Using the amazing ffprobe!

ffprobe can help us retrieve a video's shots list and the results are quite satisfying considering the speed of the process.

How it works:
Simply put, it identifies shots by comparing each frame's light and chrominance. If there's a significant delta between two frames, then the current frame might be a new shot.
In practice it's not that simple.

Good:
- Very fast
- Good results

Drawbacks:
- False positives for same shot with significant light change
- False positives on transitions

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
