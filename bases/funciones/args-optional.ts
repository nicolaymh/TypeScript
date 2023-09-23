(() => {
   const fullName = (firstName: string, lastName?: string): string => {
      return `${firstName} ${lastName || "------"}`;
   };

   const myName = fullName("Nicolay");

   console.log(myName);
})();
