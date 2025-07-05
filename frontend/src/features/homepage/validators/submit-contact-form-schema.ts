import z from "zod";

export const submitContactFormSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório e deve ter pelo menos 2 caracteres.").trim(),
  email: z.string().email("Email inválido.").trim(),
  message: z.string().min(10, "Mensagem é obrigatória e deve ter pelo menos 10 caracteres.").trim(),
});

export type SubmitContactFormInput = z.infer<typeof submitContactFormSchema>;
