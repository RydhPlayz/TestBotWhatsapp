exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `馃敯 -----[ *MENU ${BotName}🤖* ]----- 馃敯
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 馃憢锔�
Berikut adalah beberapa fitur yang ada pada bot ini!鉁�

鈿狅笍 *${tampilTanggal}*
鈿狅笍 *${tampilWaktu}*

鈾� Command / Perintah :
   
=> *1.MEMBUAT STICKER*
_${BotName} akan mengirimkan stickermu dengan caption #sticker!_
Perintah: !sticker
Contoh: kirim gambar dengan caption !sticker

=> *2.NULIS OTOMATIS*
_${BotName} akan mengirimkan tulisan di buku sesuai yang kamu kirim!_
Perintah: #nulis [kata]
Contoh: #nulis riyadh gamtenk

=> *3.FITUR PANTUN*
_${BotName} akan mengirimkan pantun secara random!_
Perintah: !pantun
Contoh: !pantun

=> *4.DOWNLOADER YOUTUBE*
_${BotName} akan mengirimkan video downloader dari yt sesuai perintah kamu!_
Perintah: !yt [link]
Contoh: !yt https://youtu.be/RydhPlayz

=> *5.FITUR QUOTES*
_${BotName} akan mengirimkan katabijak secara random!_
Perintah: !quotes
Contoh: !quotes

=> *6.PENYEGAR TIMELINE*
_${BotName} akan mengirimkan gambar cogan/cecan sesuai yang kamu kirim!_
Perintah: !ptl [cowok/cewek]
Contoh: !ptl cewek

=> *7.FITUR ANIME*
_${BotName} akan mengirimkan gambar anime secara random!_
Perintah: !randomanime
Contoh: !randomanime

=> *8.PENGUBAH SUARA GOOGLE*
_${BotName} akan mengirimkan suara vn dari google sesuai perintah yang kamu kirim!_
Perintah: !ttsid [kata]
Contoh: !ttsid Hahah
Note: Error

=> *9.FITUR QURAN*
_${BotName} akan mengirimkan ayat-ayat quran secara random!_
Perintah: !quran
Contoh: !quran

=> *10.INFORMASI BOT*
_${BotName} akan mengirimkan informasi tentang bot!_
Perintah: !info
Contoh: !info

=> *11.FITUR SAY*
_${BotName} akan mengirimkan kata kata sesuai yang kamu kirim!_
Perintah: !say [kata]
Contoh: !say Riyadh Ganteng

=> *12.YOUTUBE MP3 DOWNLOADER*
_${BotName} akan mengirimkan lagu sesuai perintah yang kamu kirim!_
Perintah: !ytmp3 [link]
Contoh: !ytmp3 https://youtu.be/rydh

=> *13.INSTAGRAM VIDEO/FOTO DOWNLOADER*
_${BotName} akan mengirimkan video/foto ig sesuai perintah yang kamu kirim!_
Perintah: !ig [link]
Contoh: !ig https://instagram.com/rydh

=> *14.FACEBOOK VIDEO/FOTO DOWNLOADER*
_${BotName} akan mengirimkan video/foto fb sesuai perintah yang kamu kirim!_
Perintah: !fb [link]
Contoh: !fb https://facebook.com/rydh

=> *15.TWITTER VIDEO/FOTO DOWNLOADER*
_${BotName} akan mengirimkan video/foto twitter sesuai perintah yang kamu kirim!_
Perintah: !twt [link]
Contoh: !twt https://twitter.com/rydh

=> *16.WIKIPEDIA*
_${BotName} akan mengirimkan hasil dari wikipedia sesuai perintah yang kamu kirim!_
Perintah: !wiki [query]
Contoh: !wiki badak

鈾伙笍 JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
鈾伙笍 MAU DONASI? SILAHKAN KETIK !donate

鉁� Follow akun instagram admin @iam.rydh

鈿狅笍 INFORMASI COVID-19 TERBARU!

鈿狅笍 POSITIF: *${corohelp.confirmed.value}*
鈿狅笍 SEMBUH: *${corohelp.recovered.value}*
鈿狅笍 MENINGGAL: *${corohelp.deaths.value}*
鈿狅笍 UPDATE: *${corohelp.lastUpdate}*

鈾伙笍 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
  
鈿狅笍 Gunakan dengan bijak 鈥硷笍
鈿狅笍 Bot ini berjalan ${kapanbotaktif} 鈥硷笍
  
馃敯 -----[ *POWERED BY RydhBot🤖* ]----- 馃敯`
}
