import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config()

export default async function handler(req, res) {
  const city = req.query.city || 'Recife';  // Você pode passar a cidade como parâmetro
  const apiKey = process.env.API_KEY;  // Use variável de ambiente

  try {
    const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=2`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter dados do clima', error: error.message });
  }
}
