# Multimedia Elements in HTML

Multimedia elements allow us to embed audio and video files directly into web pages without needing external plugins.

## `<audio>` Tag

**Purpose:** Embeds an audio file in the webpage.

**Attributes:**

* `src`: Path or URL to the audio file. Examples: `song.mp3`, `https://example.com/music.mp3`.
* `controls`: Displays a built-in user interface (play, pause, volume).
* `autoplay`: Automatically starts playing once the audio file is ready (not recommended without `muted`).
* `loop`: Automatically restarts the audio when it ends.
* `preload`: Tells the browser whether to preload the audio file.

**Code Example:**

```html
<audio src="song.mp3" controls preload="auto"></audio>
```

**Output Behavior:** The browser shows a player bar with play/pause, volume, and seek options. Audio won't load until the user interacts unless `autoplay` or `preload="auto"` is used.

---

## `<video>` Tag

**Purpose:** Embeds a video file into the webpage.

**Attributes:**

* `src`: Path or URL to the video file (e.g., `movie.mp4`).
* `controls`: Adds play/pause, volume, fullscreen, and seek bar.
* `width` / `height`: Sets dimensions of the video frame.
* `poster`: Specifies an image to show before the video starts.
* `autoplay`: Starts playing automatically (requires `muted` in most browsers).
* `loop`: Repeats the video from the start.
* `muted`: Mutes the video by default (useful with `autoplay`).
* `preload`: Controls when and how much video to preload.

**Code Example:**

```html
<video src="movie.mp4" width="400" controls preload="metadata"></video>
```

**Output Behavior:** A native video player appears. Users can start, pause, change volume, and seek through the video.

---

## `preload` Attribute (Common to `<audio>` and `<video>`)

**Values and Behavior:**

* `none`: Browser should not load anything until the user hits play.
* `metadata`: Only metadata (duration, dimensions) is loaded.
* `auto`: Browser chooses whether or not to load the full file automatically.

---

## Summary

Multimedia tags like `<audio>` and `<video>` allow us to bring interactivity and engagement directly into the webpage by embedding sound and motion. They eliminate the need for plugins and are essential for modern web content.
