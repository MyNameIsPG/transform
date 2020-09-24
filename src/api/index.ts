const axios = require('axios')
const md5 = require('md5')

import { isChn } from "../util"

const appid = "20200921000570513";
const secretKey = "52Do1hIBPO6edqZvNytL";

interface Parames {
  q: string;
}

export const translate = (Parames: Parames) => {
  let from = "";
  let to = "";
  if (isChn(Parames.q)) {
    from = "zh"
    to = "en"
  } else {
    from = "en"
    to = "zh"
  }
  const salt = Math.random();
  return axios.get("https://fanyi-api.baidu.com/api/trans/vip/translate", {
    params: {
      q: Parames.q,
      from,
      to,
      appid,
      salt,
      sign: md5(appid + Parames.q + salt + secretKey)
    }
  })
}

