(() => {
   function call1(): void {
      // return undefined;
      return;
   }

   const call2 = (): void => {
      return;
   };

   const a = call1();
   console.log(a);

   const b = call2();
   console.log(b);
})();
