export function HightechVideo() {
  return (
    <div className="md:px-6 w-full relative overflow-hidden">
      <video
        className="md:rounded-3xl h-full w-full block object-cover object-center"
        loop
        muted
        playsInline
        autoPlay
      >
        <source
          src="https://framerusercontent.com/assets/3wHMzFjRI15DjAzmesrjiWKTkM.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
