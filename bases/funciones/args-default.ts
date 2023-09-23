(() => {
   const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
      const fullName = upper
         ? `${firstName} ${lastName || "------"}`.toUpperCase()
         : `${firstName} ${lastName || "------"}`;

      return fullName;
   };

   const myName = fullName("Nicolay", "Moreno", true);

   console.log({ myName });
})();
