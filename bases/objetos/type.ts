(() => {
   type Hero = {
      name: string;
      age?: number;
      powers: number[];
      getName?: () => String;
   };

   let flash: Hero = {
      name: "Barry Alen",
      age: 24,
      powers: [1, 2],
   };

   let superman: Hero = {
      name: "Clark Ken",
      age: 60,
      powers: [1],
      getName() {
         return this.name;
      },
   };
})();
