import axios from 'axios'

import { StockInterface } from '~/interfaces/stock'

const TOKEN = 'pk_19da9c018bec48ec8c97c063e4bfc7fd'
const FINAL_URL = `/quote?token=${TOKEN}`
const api = axios.create({
  baseURL: `https://cloud.iexapis.com/stable/stock`
})

export async function getStock(stock: string): Promise<StockInterface> {
  const { data } = await api.get(stock + FINAL_URL)
  return data
}
