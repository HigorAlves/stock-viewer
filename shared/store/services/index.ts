import axios from 'axios'

const TOKEN = 'pk_19da9c018bec48ec8c97c063e4bfc7fd'
const QUOTE_URL = `/quote?token=${TOKEN}`
const BATCH_URL = `/batch?types=quote,news,chart&range=1m&last=10&token=${TOKEN}`
const COMPANY_URL = `/company?token=${TOKEN}`

const api = axios.create({
  baseURL: `https://cloud.iexapis.com/stable/stock`
})

export async function getStock(stock: string) {
  const { data } = await api.get(stock + QUOTE_URL)
  return data
}

export async function getBatch(stock: string) {
  const { data } = await api.get(stock + BATCH_URL)
  return data
}

export async function getCompany(stock: string) {
  const { data } = await api.get(stock + COMPANY_URL)
  return data
}
