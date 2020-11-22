exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `| -----[ *MENU ${BotName}🤖* ]----- |
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 馃憢锔�
Selamat datang di info pada bot ini!

Tanggal : *${tampilTanggal}*
Jam : *${tampilWaktu}*

鈾� INFO BOT! :
   
鈿� *BOT : VBeta

鈾� UPDATE BOT! :

=> FIXED BUG SALAH KIRIM

鉁� Follow akun instagram Admin @iam.rydh

鈿狅笍 INFORMASI COVID-19 TERBARU!

鈿狅笍 POSITIF: *${corohelp.confirmed.value}*
鈿狅笍 SEMBUH: *${corohelp.recovered.value}*
鈿狅笍 MENINGGAL: *${corohelp.deaths.value}*
鈿狅笍 UPDATE: *${corohelp.lastUpdate}*

鈾伙笍 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
  
鈿狅笍 Gunakan dengan bijak 鈥硷笍
鈿狅笍 Bot ini berjalan ${kapanbotaktif} 鈥硷笍
鈿狅笍 Jika Ingin Memberi Donasi Silahkan WA : 083870429600

  
| -----[ *POWERED BY *${BotName}* ]----- |`
}
