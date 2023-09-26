(() => {
   //  class Avenger {
   //     private name: string = "";
   //     private team: string = "";
   //     public realName?: string = "hola";
   //     static avAge: number = 35;

   //     constructor(name: string, team: string, realName?: string) {
   //        this.name = name;
   //        this.team = team;
   //        this.realName = realName;
   //     }
   //  }

   //Forma Corta de establecer.
   class Avenger {
      static avgAge: number = 35;
      static getAvgAge() {
         return this.name;
      }

      constructor(private name: string, private team: string, public realName?: string) {}

      public bio() {
         return `${this.name} (${this.team})`;
      }
   }

   const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");
   //  console.log(antman.bio());
   //  console.log(Avenger.getAvgAge());
})();
