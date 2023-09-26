// Funcion generica comun y corriente.
export const printObject = (argument: any) => {
   console.log(argument);
};

// Genericos en typescript, la T puede ser cualquier letra.
export function genericFunction<T>(argument: T): T {
   return argument;
}

export const genericFunctionArrow = <T>(argument: T): T => argument;
