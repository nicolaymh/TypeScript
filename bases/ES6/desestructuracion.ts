(() => {
   type Avengers = {
      nick: string;
      ironman: string;
      vision: string;
      activo: boolean;
      poder: number;
   };

   const avengers: Avengers = {
      nick: "Samuel L. Jackson",
      ironman: "Robert Downey Jr",
      vision: "Paul Bettany",
      activo: true,
      poder: 1500.123123,
   };

   // const { poder, vision } = avengers;
   // console.log(poder.toFixed(2), vision.toUpperCase());

   const prinAvenger = ({ ironman, ...resto }: Avengers): void => {
      console.log(ironman, resto);
   };
   // prinAvenger(avengers);

   const avengersArr: [string, boolean, number] = ["Cap. America", true, 123];
   const [capitan, ironman, seriaUnNumero] = avengersArr;
   // console.log({ ironman, capitan, seriaUnNumero });
})();
