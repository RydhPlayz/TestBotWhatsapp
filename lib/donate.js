exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU DONASI ${BotName}�0�6* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋︄1�7
Mau donasi? ✄1�7

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♄1�7 Silahkan donasi dibawah ini :
   
⚄1�7 *#PULSA*: 083870429600

✄1�7 Follow akun instagram admin @iam.rydh

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

  
🔰 -----[ *POWERED BY *${BotName}* ]----- 🔰`
}
