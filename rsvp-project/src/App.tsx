import { useState } from 'react'
import CountdownComponent from './CountdownComponent'
import logo from './assets/logo.png'
import { api } from './services/api.ts'
import InputMask from 'react-input-mask'

export default function App() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [canSendNotification, setCanSendNotification] = useState(false)

  function handleSignUp() {
    if (!name || !phone || !email) {
      return alert('Preencha todos os campos!')
    }
    api.post('/', { name, phone, email, canSendNotification })
  }

  return (
    <div className="flex w-full h-screen justify-center items-center font-Outfit text-white bg-gradient-to-r from-blue-400 to-pink-500">
      <section className="flex flex-col justify-center rounded-lg bg-gray-100 shadow-xl p-9 relative section-border">
        <div className="flex justify-center">
          <div className="w-40 absolute top-6 -mt-20">
            <img className=" " src={logo} alt="Um toque pela vida" />
          </div>
        </div>
        <div className="flex flex-col max-w-2xl mb-6">
          <div className="mb-4">
            <label className="text-gray-800 text-base font-medium mb-1">
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              name="nome"
              className="w-full px-3 py-2 rounded-md bg-blue-50 text-gray-800 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Digite seu nome completo"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-800 text-base font-medium mb-1">
              Número de Telefone
            </label>
            <InputMask
              mask="(99) 99999-9999"
              type="tel"
              id="phone"
              name="telefone"
              className="w-full px-3 py-2 rounded-md bg-blue-50 text-gray-800 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Digite seu número de telefone"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-800 text-base font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 rounded-md bg-blue-50 text-gray-800 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Digite seu endereço de email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center text-gray-800">
              <input
                type="checkbox"
                className="mr-2 form-checkbox text-blue-500"
                name="lembrete"
                onChange={(e) => setCanSendNotification(e.target.checked)}
              />
              Receber lembrete do evento
            </label>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              defaultChecked={true}
              className="w-full flex items-center justify-center py-2 px-4 rounded-md bg-gradient-to-r from-blue-400 to-pink-500  text-white text-base font-medium hover:opacity-80 focus:outline-none focus:ring focus:ring-blue-300"
              onClick={() => {
                console.log('clicou aqui')
                handleSignUp()
              }}
            >
              Confirmar Presença
            </button>
          </div>
        </div>

        <CountdownComponent />
      </section>
    </div>
  )
}
