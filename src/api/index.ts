const axios = require('axios')
const md5 = require('md5')

const appid = "20200921000570513";
const secretKey = "52Do1hIBPO6edqZvNytL";

interface Parames {
  q: string;
}

export const translate = (Parames: Parames) => {
  const salt = Math.random();
  return axios.get("https://fanyi-api.baidu.com/api/trans/vip/translate", {
    params: {
      q: Parames.q,
      from: "zh",
      to: "en",
      appid,
      salt,
      sign: md5(appid + Parames.q + salt + secretKey)
    }
  })
}

