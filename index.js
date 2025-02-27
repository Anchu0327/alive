const axios = require('axios');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

setInterval(async ()=>{
    // const resp = await axios.get('https://project-stories.onrender.com/keep-alive');
    // console.log(`Got keep-alive for stories! - `,(resp.data))
    const resp2 = await axios.get('https://vanaj-backend-dev.onrender.com/');
    console.log(`Got keep-alive for vanaj! - `,(resp2.data))
}, 14*1000*60)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})