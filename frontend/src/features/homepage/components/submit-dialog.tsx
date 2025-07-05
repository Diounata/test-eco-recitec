import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/form/input";
import { SubmitButton } from "@/components/ui/form/submit-button";
import { Textarea } from "@/components/ui/form/textarea";
import { useSubmitContact } from "@/features/homepage/hooks/forms/use-submit-contact-form";

export function SubmitDialog() {
  const { submitContactForm, onSubmit, isDialogOpen, setIsDialogOpen } = useSubmitContact();

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <section className="w-full max-w-3xl mb-16 text-center mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary">
          Sua Contribuição é Importante!
        </h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 text-neutral-800">
          Envie suas perguntas, sugestões ou interesse através do nosso formulário de contato.
        </p>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="bg-secondary text-white font-bold py-3 px-6 sm:px-8 rounded-lg transition duration-300 hover:scale-105 w-full sm:w-auto"
          >
            Abrir Formulário de Contato
          </Button>
        </DialogTrigger>
      </section>

      <DialogContent className="w-full max-w-[95vw] sm:max-w-[600px] bg-white p-4 sm:p-6 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-primary text-lg sm:text-xl">Fale Conosco</DialogTitle>
          <DialogDescription className="text-neutral-500 text-sm sm:text-base">
            Preencha os campos abaixo para nos enviar uma mensagem.
          </DialogDescription>
        </DialogHeader>

        <Form {...submitContactForm}>
          <form
            onSubmit={submitContactForm.handleSubmit(onSubmit)}
            className="space-y-3 py-2 sm:py-4"
          >
            <Input name="name" label="Nome" />
            <Input name="email" label="E-mail" />
            <Textarea
              name="message"
              label="Mensagem"
              inputProps={{ placeholder: "Deixe sua mensagem ou comentário aqui..." }}
            />
            <SubmitButton
              onSubmitChildren="Enviando..."
              type="submit"
              size="lg"
              className="w-full bg-accent uppercase text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition duration-300"
            >
              Enviar mensagem
            </SubmitButton>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
