require('dotenv').config();
const axios = require('axios');

const coinId = process.env.COIN_ID;

if (!coinId) {
  console.error('COIN_ID must be set in the .env file');
  process.exit(1);
}

const url = `https://swap-api.pump.fun/v1/coins/${coinId}/ath?currency=USD`;

async function fetchAthMarketCap() {
  try {
    const response = await axios.get(url);
    
    if (response.status === 200) {
      const data = response.data;
      console.log(`ATH Market Cap: ${data.athMarketCap}`);
    } else {
      console.error(`Failed to fetch data: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchAthMarketCap();
