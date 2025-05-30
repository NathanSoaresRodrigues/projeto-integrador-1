import { ValidationArguments } from 'class-validator';

export const validationMessages = {
  isEmail: (args: ValidationArguments) => `O campo ${args.property} deve ser um email válido`,

  isString: (args: ValidationArguments) => `O campo ${args.property} deve ser um texto`,

  Length: (args: ValidationArguments) =>
    `O campo ${args.property} deve ter entre ${args.constraints[0]} e ${args.constraints[1]} caracteres`,

  isNumber: (args: ValidationArguments) => `O campo ${args.property} deve ser um número`,

  Min: (args: ValidationArguments) =>
    `O campo ${args.property} deve ser maior ou igual a ${args.constraints[0]}`,

  Max: (args: ValidationArguments) =>
    `O campo ${args.property} deve ser menor ou igual a ${args.constraints[0]}`,

  isDefined: (args: ValidationArguments) =>
    `O campo ${args.property} é obrigatório e deve está presente no payload de request.`,
  isEnum: (args: ValidationArguments) => `O campo ${args.property} deve ser um valor válido do enum`,
};
