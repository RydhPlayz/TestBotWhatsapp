exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `馃敯 -----[ *MENU DONASI ${BotName}🤖* ]----- 馃敯
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 馃憢锔�
Mau donasi? 鉁�

鈿狅笍 *${tampilTanggal}*
鈿狅笍 *${tampilWaktu}*

鈾� Silahkan donasi dibawah ini :
   
鈿� *#PULSA*: 083870429600

鉁� Follow akun instagram admin @iam.rydh

鈿狅笍 INFORMASI COVID-19 TERBARU!

鈿狅笍 POSITIF: *${corohelp.confirmed.value}*
鈿狅笍 SEMBUH: *${corohelp.recovered.value}*
鈿狅笍 MENINGGAL: *${corohelp.deaths.value}*
鈿狅笍 UPDATE: *${corohelp.lastUpdate}*

鈾伙笍 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
  
鈿狅笍 Gunakan dengan bijak 鈥硷笍
鈿狅笍 Bot ini berjalan ${kapanbotaktif} 鈥硷笍

  
馃敯 -----[ *POWERED BY *${BotName}* ]----- 馃敯`
}
