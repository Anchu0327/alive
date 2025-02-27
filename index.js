const axios = require('axios');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{console.log('hey!', new Date())})

setInterval(async ()=>{
    const resp = await axios.get('https://alive-6bh2.onrender.com');
    console.log(`Got keep-alive! - `,(resp.data))
    const resp2 = await axios.get('https://vanaj-backend-dev.onrender.com/');
    console.log(`Got keep-alive for vanaj! - `,(resp2.data))
}, 14*1000*60)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
