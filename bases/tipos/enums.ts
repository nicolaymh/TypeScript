(() => {
   enum AudioLevel {
      min,
      mmedium,
      max,
   }

   let currentAudio: AudioLevel = AudioLevel.max;

   console.log(currentAudio);
   console.log(AudioLevel);
})();
