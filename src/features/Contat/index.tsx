"use client";

import { Section } from "@/components/Content/Section";
import Title from "@/components/Content/Title";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useFormspree } from "@formspree/react";
import { InputField } from "@/components/Fields/Input";
import { TextareaField } from "@/components/Fields/TextArea";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import { Circle, LoaderCircle, LoaderIcon } from "lucide-react";

const contactSchema = z.object({
  nome: z.string().nonempty("Insira seu nome."),
  email: z.string().email("Insira um e-mail válido."),
  número: z.string()
    .nonempty("Insira seu número.")
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Número inválido. Use o formato (xx) xxxxx-xxxx."),
  mensagem: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres."),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contato() {
  const [state, handleSubmitForm] = useFormspree("mldgrdke");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    handleSubmitForm(formData);
  };

  return (
    <Section id="contato" className="py-16">
      <Title>Contato</Title>

      <div className="max-w-lg mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Entre em contato
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Nome */}
          <InputField
            label="Seu Nome"
            name="nome"
            placeholder="Insira seu nome"
            register={register}
            error={errors.nome?.message}
          />

          {/* Número */}
          <InputField
            label="Seu WhatsApp"
            name="número"
            placeholder="(11) 99999-9999"
            register={register}
            error={errors.número?.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const formatted = formatPhoneNumber(e.target.value);
              setValue("número", formatted);
            }}
          />

          {/* Email */}
          <InputField
            label="Seu E-mail"
            name="email"
            type="email"
            placeholder="exemplo@email.com"
            register={register}
            error={errors.email?.message}
          />

          {/* Mensagem */}
          <TextareaField
            label="Sua Mensagem"
            name="mensagem"
            placeholder="Explique melhor sobre seu problema."
            register={register}
            error={errors.mensagem?.message}
          />

          {/* Botão de envio */}
          <button
            className="w-full bg-slate-800 text-zinc-50 py-3 rounded-lg transition duration-200 disabled:opacity-50"
            type="submit"
            disabled={isSubmitting || state.submitting}
          >
            {isSubmitting || state.submitting ? (
              <>
                Enviando...
                <LoaderCircle className="inline-block ml-2 animate-spin" />
              </>
            ) : "Enviar"}
          </button>
        </form>
      </div>
    </Section>
  );
}