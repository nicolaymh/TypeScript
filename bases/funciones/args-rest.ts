(() => {
   const fullName = (firstName: string, ...restArgs: string[]): string => {
      return `${firstName} ${restArgs.join(" ")}`;
   };

   const myName = fullName("Nicolay", "Moreno", "Herrera");

   console.log({ myName });
})();
