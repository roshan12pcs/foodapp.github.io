const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const request = require("request-promise").defaults({
    headers: {
        'app_version': '9.117.1',
        'browser': 'google G011A',
        'Connection': 'Keep-Alive',
        'Country': 'BR',
        'gps-latitude': '23.6345',
        'gps-longitude': '102.552802',
        'Host': 'wsloja.ifood.com.br',
        'medium': 'M',
        'os_name': 'Android 7.1.2 : N_MR1 : sdk=25',
        'os_version': '7.1.2',
        'platform': 'Android',
        'secret_key': '9ef4fb4f-7a1d-4e0d-a9b1-9b82873297d8',
        'User-Agent': 'okhttp/4.9.1',
        'x-home-variant': 'HOME_FOOD_DELIVERY',
        'X-Ifood-Cloud-Id': 'cc37579c-15e6-33d9-a709-eca5e931d419',
        'X-Ifood-Device-Id': 'cc37579c-15e6-33d9-a709-eca5e931d419',
        'X-Ifood-Request-Id': 'b8021acafaee44acb9ff7eddf342f741d419',
        'X-Ifood-Session-Id': 'edee5d1a-95dc-4320-882c-b97ad2e919c9'
      }
});

app.listen(4000, () =>{
    console.log("server running on port 4000")
});
app.get("/food", async (req, res, next)=>{
    const url = 
    "https://wsloja.ifood.com.br/ifood-ws-v3/restaurants/c8fe5b50-defc-49f0-b050-cde0acd4ca59/menu?hasBestSellers=true&latitude=-16.660085662243212&longitude=-49.29991163313389";
    const json = await request.get(url);
    res.setHeader("Content-Type", "application/json");
    res.send(json);
});