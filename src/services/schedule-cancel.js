import { apiConfig } from "./api-config.js"

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: 'DELETE',
    })

    alert("Realizado!")
    
  } catch (error) {
    console.log(error)
    alert("Não foi possível realizar o cancelamento. Tente novamente mais tarde.")
  }
}