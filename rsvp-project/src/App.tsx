export default function App() {
  return (
    <body className="flex w-full h-screen justify-center items-center font-Outfit text-white bg-gradient-to-r from-blue-400 to-pink-500">
      <section className="flex flex-col justify-center rounded-lg bg-gray-800 shadow-xl p-16 relative section-border">
        <div className="flex flex-col max-w-2xl">
          <form>
            <div className="mb-4">
              <label className="text-white text-base font-medium mb-1">
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="w-full px-3 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-indigo-300"
                placeholder="Digite seu nome completo"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-white text-base font-medium mb-1">
                Número de Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                className="w-full px-3 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-indigo-300"
                placeholder="Digite seu número de telefone"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-white text-base font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-indigo-300"
                placeholder="Digite seu endereço de email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center text-white">
                <input
                  type="checkbox"
                  className="mr-2 form-checkbox text-indigo-500"
                  name="lembrete"
                />
                Receber lembrete do evento
              </label>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center py-2 px-4 rounded-md bg-gradient-to-r from-pink-500 to-blue-400 text-white text-base font-medium hover:opacity-80 focus:outline-none focus:ring focus:ring-indigo-300"
              >
                Confirmar Presença
              </button>
            </div>
          </form>
        </div>
      </section>
    </body>
  )
}