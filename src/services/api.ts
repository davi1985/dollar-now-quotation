import axios from 'axios';

// https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL
export const api = axios.create({
  baseURL: ' https://economia.awesomeapi.com.br/last/',
});
