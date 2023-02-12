# Todo list for the Music-player project

#### basic functionality

- [x] organise folders
- [x] lift the state
- [x] figure out how 'import' songs, etc. _heavy lifting_
- [x] print songs in sidebar
- [x] do it (audio handling)
- [x] player works
- [x] current time works
- [x] progress bar works

#### fixes and other stuff to add/change

- progress bar works... KINDA o(≧ 口 ≦)o
  - [x] switch to pure input:range (MUCH BETTER!!! way less bugs, sacrifices on styling but can be fixed later)
  - [ ] find a input:range style that is browser independent and that does not create headaches
- [x] deploy thanks to Vercel
- [ ] about in sidebar?
- [ ] keyboard controls (ArrowLeft, ArrowRight)
- [x] fix skewmorphism (weird looking buttons)
- [x] from PlayPause svg in button, to 'play' if not playing and 'pause' if is playing
- [x] remove 'open/close sidebar', use a svg || htmlelements instead
  - [ ] animate it?
- [x] outline does not follow border-radius in iOS browsers... o((>ω< ))o
  - [x] change it to box shadow ring using Tailwind
- [x] progress bar is tiny on mobile, make it W I D E R
- [ ] viewport 4 units seems not to work in iOS 16... rly??
- [x] when song has currTime > 4s and priorSong() is called, return to the start of the song
- [x] avoid duplicated musicList.json

- [x] despaghettify
