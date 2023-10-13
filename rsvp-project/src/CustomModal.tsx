import React from 'react'

interface CustomModalProps {
  isOpen: boolean
  onClose: () => void
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        ></span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-top sm:max-w-lg sm:w-full">
          <div className="bg-pink-500">
            <div className="px-4 py-4 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-white">
                Sua presença foi confirmada com sucesso!
              </h3>
            </div>
          </div>

          <div className="bg-white px-4 py-5 sm:p-6">
            <p className="text-gray-700">
              Deseja entrar no grupo do WhatsApp para receber novidades sobre o
              evento?
            </p>
            <div className="mt-4 text-center">
              <button
                onClick={onClose}
                className="mr-3 px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  window.open(
                    'https://chat.whatsapp.com/BdSaGlw7NTrJCCVeP9RI33',
                    '_blank',
                  )
                }}
                className="px-4 py-2 font-semibold text-white bg-pink-500 rounded hover:bg-pink-600 focus:outline-none focus:ring focus:ring-pink-200"
              >
                Entrar no grupo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomModal
