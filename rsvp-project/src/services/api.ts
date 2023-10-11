const baseURL = 'http://127.0.0.1:3000/salveDataInServer'

export const api = {
  post: async (url: string, data: unknown) => {
    try {
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        alert('Usuário cadastrado no evento com sucesso!')
      } else {
        throw new Error('Erro na solicitação')
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert('Não foi possível cadastrar: ' + error.message)
      } else {
        alert('Não foi possível cadastrar!')
      }
    }
  },
}
