(() => {
   const fullName = (firstName: string, lastName: string): string => {
      return `${firstName} ${lastName}`;
   };

   const myName = fullName("Nicolay", "Moreno");

   console.log(myName);
})();
