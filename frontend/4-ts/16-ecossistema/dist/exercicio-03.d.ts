import { z } from "zod";
export declare const esquemaUsuario: z.ZodObject<{
    id: z.ZodNumber;
    nome: z.ZodString;
    email: z.ZodString;
    idade: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type Usuario = z.infer<typeof esquemaUsuario>;
export declare function validarUsuario(dados: unknown): Usuario | null;
