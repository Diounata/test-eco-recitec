import {
  submitContactFormSchema,
  type SubmitContactFormInput,
} from "@/features/homepage/validators/submit-contact-form-schema";
import { axiosClient } from "@/lib/axios/axios-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export function useSubmitContact() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const submitContactForm = useForm<SubmitContactFormInput>({
    resolver: zodResolver(submitContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<SubmitContactFormInput> = useCallback(
    async ({ name, email, message }) => {
      try {
        await axiosClient.post("/api/submit", {
          name,
          email,
          message,
        });

        toast.success("Formulário enviado com sucesso!");
        submitContactForm.reset();
        setIsDialogOpen(false);
      } catch (e: unknown) {
        toast.error("Ocorreu um erro ao enviar o formulário.");
      }
    },
    [submitContactForm]
  );

  return {
    submitContactForm,
    onSubmit,
    isDialogOpen,
    setIsDialogOpen,
  };
}
