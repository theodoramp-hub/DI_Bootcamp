class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time
  }
  watch() {
    console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`)
  }
}

const newVideo = new Video("JavaScript Basics", "John", 120);
newVideo.watch();

const secVideo = new Video ("JavaScript Advance", "George", 80)
secVideo.watch();

const videosData = [
  { title: "JavaScript Basics", uploader: "John", time: 120 },
  { title: "JavaScript Advanced", uploader: "George", time: 80 },
  { title: "Objects", uploader: "Mary", time: 150 },
  { title: "Arrays", uploader: "Anna", time: 200 },
  { title: "Classes", uploader: "Elie", time: 180 }
];

const videos = [];
for (const video of videosData) {
  const newVideo = new Video(video.title, video.uploader, video.time);
  videos.push(newVideo);
}

for (const video of videos) {
  video.watch();
}
