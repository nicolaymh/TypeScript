(() => {
   // La diferencia de tipos y interfaces es que las interfaces las puedo extender creando mas y puede pertenecer una a otra...

   interface Client {
      name: string;
      age?: number;
      address: Address;
      getFullAddress(id: string): string; // en los tipos fucionaba normal como una funcion, aqui funciona asi...
   }

   interface Address {
      id: number;
      zip: string;
      city: string;
   }

   const client: Client = {
      name: "Nicolay",
      age: 36,
      address: {
         id: 125,
         zip: "KYD SUD",
         city: "Bogota",
      },
      getFullAddress(id: string) {
         return this.address.city;
      },
   };

   // console.log(client);
})();
