import axios from "axios";

const getCurrencies = async (req, res)=>{

  try {
    const response = (await axios.get("https://api.coinbase.com/v2/currencies")).data
    const min_value = req.query.min_value;
    if(min_value) return res.send(
      response.data.filter((cur)=>cur.min_size === min_value)
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send({message:"Something went wrong..."});
  }
};


const getCurrenciesBySymbol = async (req, res)=>{
  try {
      const response = (await axios.get("https://api.coinbase.com/v2/currencies")).data;
      const reqCurrency = response.data.find((currency)=> currency.id === req.params.symbol.toUpperCase())
      if(reqCurrency) return res.send(reqCurrency);
      res.status(404).send({message:"Currency could not be found."})
  } catch (error) {
       res.status(500).send({message:"Something went wrong..."});
  }
}

export {getCurrencies, getCurrenciesBySymbol};