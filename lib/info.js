exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `| -----[ *MENU ${BotName}�0�6* ]----- |
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋︄1�7
Selamat datang di info pada bot ini!

Tanggal : *${tampilTanggal}*
Jam : *${tampilWaktu}*

♄1�7 INFO BOT! :
   
⚄1�7 *BOT : VBeta

♄1�7 UPDATE BOT! :

=> FIXED BUG SALAH KIRIM

✄1�7 Follow akun instagram Admin @iam.rydh

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️
⚠️ Jika Ingin Memberi Donasi Silahkan WA : 083870429600

  
| -----[ *POWERED BY *${BotName}* ]----- |`
}
