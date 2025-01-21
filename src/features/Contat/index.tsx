import { Section } from "@/components/Content/Section";
import Title from "@/components/Content/Title";

export default function Contat() {
  return (
    <Section id="contat" className="py-16">
      <Title>Contato</Title>

      <div className="max-w-lg mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Entre em contato
        </h2>
        <form
          action={"https://formsubmit.co/felipe.macedo0829@gmail.com"}
          method="POST"
        >
          <div className="mb-4">
            <label className="block text-gray-800 mb-1">Seu nome</label>
            <input
              className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 transition duration-300"
              placeholder="Insira seu nome"
              name="nome"
              type="text"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 mb-1">Seu e-mail</label>
            <input
              className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 transition duration-300"
              placeholder="exemplo@email.com"
              name="email"
              id="email"
              type="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 mb-1">Sua mensagem</label>
            <textarea
              className="w-full min-h-32 max-h-64 overflow-y-scroll px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 transition duration-300"
              placeholder="Explique melhor sobre seu problema."
              rows={5}
              name="mensagem"
              id="message"
              required
            ></textarea>
          </div>
          <button
            className="w-full bg-slate-800 text-zinc-50 py-2 px-4 rounded-lg transition duration-300"
            type="submit"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </Section>
  );
}
