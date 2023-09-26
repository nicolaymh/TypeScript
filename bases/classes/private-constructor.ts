(() => {
   class Apocalipsis {
      static instance: Apocalipsis;

      private constructor(public name: string) {}

      static CallApocalipsis(): Apocalipsis {
         if (!Apocalipsis.instance) {
            Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis... el unico");
         }

         return Apocalipsis.instance;
      }

      changeName(newName: string): void {
         this.name = newName;
      }
   }

   const apocalipsis1 = Apocalipsis.CallApocalipsis();
   const apocalipsis2 = Apocalipsis.CallApocalipsis();
   const apocalipsis3 = Apocalipsis.CallApocalipsis();
   apocalipsis1.changeName("Xavier");

   console.log(apocalipsis1, apocalipsis2, apocalipsis3);

   //  const apocalipsis1 = new Apocalipsis("Soy Apocalipsis1... el unico");
   //  const apocalipsis2 = new Apocalipsis("Soy Apocalipsis2... el unico");
   //  const apocalipsis3 = new Apocalipsis("Soy Apocalipsis3... el unico");
   //  console.log(apocalipsis1);
})();
