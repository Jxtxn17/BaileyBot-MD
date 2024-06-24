import Axios from "Axios";
import country-emoji from "country-emoji";

let handler = async function (m, { conn, text, usedPrefix }) {
  if (text.length != 6)
    throw `El Bin tiene que contener 6 carácteres obligatoriamente.`;
  const options = {
    method: "POST",
    url: "https://bin-ip-checker.p.rapidapi.com/",
    params: { bin: `${text}` },
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "44cbeee30emsha89b91b41a56cfcp15fb63jsn7601bd3a62fa",
      "X-RapidAPI-Host": "bin-ip-checker.p.rapidapi.com",
    },
    data: { bin: `${text}` },
  };

  try {
    const response = await axios.request(options);
    const { valid, number, scheme, type, level, currency, issuer, country } =
      response.data.BIN;
    const flags = await flag(`${country.alpha2}`);

    const tex = `> *BIN INFO 🪴*
- *_Valida:_* ${valid || "×"}
- *_Bin:_* ${number || "×"}
- *_Esquema:_* ${scheme || "×"}
- *_Tipo:_* ${type || "×"}
- *_Nivel:_* ${level || "×"}
- *_Currencia:_* ${currency || "×"}

> *ISSUER DETAILS*
- *_Compañia:_* ${issuer.name || "×"}
- *_Web:_* ${issuer.website || "×"}
- *_Phone:_* ${issuer.phone || "×"}

> *COUNTRY DETAILS*
- *_País:_* ${country.native || "×"}
- *_Bandera:_* ${flags || "×"}
- *_Capital:_* ${country.capital || "×"}
- *_Moneda:_* ${country.currency_symbol || "×"}
- *_Región:_* ${country.subregion || "×"}
- *_Lenguaje:_* ${country.language || "×"}`;

    conn.reply(m.chat, tex, m, {
      contextInfo: {
        //mentionedJid: await parseMention(content),
        forwardingScore: 1,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363271548497767@newsletter",
          serverMessageId: 100,
          newsletterName: "「🎋↬ BᴀɪʟᴇʏBᴏᴛ˚₊・୧",
        },
      },
    });
  } catch (error) {
    m.reply(
      "Error al obtener la información de la tarjeta. Inténtalo de nuevo más tarde."
    );
  }
};

handler.command = /^(bin|card)$/i;
module.exports = handler;