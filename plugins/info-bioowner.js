let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Moon
*✉️ Nama RL* : Rull
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : ?
*🎨 Umur* : ?
*🧮 Kelas* : ?
*🧩 Hobby* : ?
*💬 Sifat* : .
*🗺️ Tinggal* : Isekai
*❤️ Suka* : ?
*💔 Benci* : ?

*───────[ SOSIAL MEDIA ]───────*
        G A K     A D A
`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
