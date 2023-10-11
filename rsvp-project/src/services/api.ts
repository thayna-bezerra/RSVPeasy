const baseURL = 'http://aws.connect.psdb.cloud/'

export const api = {
  post: async (url: string, data: any) => {
    try {
      const response = await fetch(baseURL + url, {
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
