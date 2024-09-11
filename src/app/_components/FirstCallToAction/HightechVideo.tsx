export function HightechVideo() {
  return (
    <div className="md:px-20 w-full relative overflow-hidden">
      <video
        className="md:rounded-3xl h-full w-full max-h-96 block object-cover object-center"
        loop
        muted
        playsInline
        autoPlay
        width={990}
        height={385}
      >
        <source
          src="https://framerusercontent.com/assets/3wHMzFjRI15DjAzmesrjiWKTkM.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
