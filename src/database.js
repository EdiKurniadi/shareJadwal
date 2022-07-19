const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jumat", 'Sabtu'];
const d = new Date();
const today = days[d.getDay()];

let kelompok = [
					{NAMA:'4 SD A', HARI_BELAJAR:['Selasa', 'Kamis', "Jumat"]},
					{NAMA:'4 SD B', HARI_BELAJAR:['Selasa', 'Kamis', "Sabtu"]},
					{NAMA:'5 SD A', HARI_BELAJAR:['Senin', 'Rabu', "Jumat"]},
					{NAMA:'5 SD B', HARI_BELAJAR:['Selasa', 'Kamis', "Sabtu"]},
					{NAMA:'6 SD A', HARI_BELAJAR:['Selasa', 'Kamis', "Sabtu"]},
					{NAMA:'6 SD B', HARI_BELAJAR:['Senin', 'Rabu', "Jumat"]},
					{NAMA:'6 SD C', HARI_BELAJAR:['Senin', 'Rabu', "Jumat"]},
					{NAMA:'7 SMP A', HARI_BELAJAR:['Senin', 'Rabu', "Jumat"]},
					{NAMA:'7 SMP B', HARI_BELAJAR:['Selasa', 'Kamis', "Jumat"]},
					{NAMA:'8 SMP A', HARI_BELAJAR:['Selasa', 'Kamis', "Jumat"]},
					{NAMA:'8 SMP B', HARI_BELAJAR:['Senin', 'Rabu', "Jumat"]},
					{NAMA:'9 SMP A', HARI_BELAJAR:['Selasa', 'Kamis', "Sabtu"]},
					{NAMA:'9 SMP B', HARI_BELAJAR:['Senin', 'Rabu', "Kamis"]},
					{NAMA:'10 IPA A', HARI_BELAJAR:['Senin', 'Rabu']},
					{NAMA:'10 IPA B', HARI_BELAJAR:['Selasa', 'Kamis']},
					{NAMA:'11 IPA A', HARI_BELAJAR:['Selasa', 'Kamis']},
					{NAMA:'11 IPA B', HARI_BELAJAR:['Senin', 'Rabu']},
					{NAMA:'11 IPS A', HARI_BELAJAR:['Selasa', 'Kamis']},
					{NAMA:'12 IPA A', HARI_BELAJAR:['Senin', 'Selasa', 'Rabu', 'Kamis', "Jumat", 'Sabtu']},
					{NAMA:'12 IPA B', HARI_BELAJAR:['Senin', 'Selasa', 'Rabu', 'Kamis', "Jumat", 'Sabtu']},
					{NAMA:'12 IPS A', HARI_BELAJAR:['Senin', 'Selasa', 'Rabu', 'Kamis', "Jumat", 'Sabtu']},
					{NAMA:'KEDINASAN', HARI_BELAJAR:['Senin', 'Selasa', 'Rabu', 'Kamis', "Jumat", 'Sabtu']},
					{NAMA:'MEDICAL', HARI_BELAJAR:['Senin', 'Selasa', 'Rabu', 'Kamis', "Jumat", 'Sabtu']},
					{NAMA:'ALUMNI IPA', HARI_BELAJAR:['Senin', 'Selasa', 'Rabu', 'Kamis', "Jumat", 'Sabtu']},
					{NAMA:'ALUMNI IPS', HARI_BELAJAR:['Senin', 'Selasa', 'Rabu', 'Kamis', "Jumat", 'Sabtu']},
				]

let kelompokHariIni = kelompok.filter(kel => {return today === 'Minggu' ? true : kel.HARI_BELAJAR.includes(today)});

exports.kelas = kelompokHariIni.map(kel => kel.NAMA);

exports.ruangKelas = [
					'lt.1 Merkurius',
					'lt.2 Venus',
					'lt.2 Mars',
					'lt.3 Jupiter',
					'lt.3 Saturnus',
					'lt.4 Uranus',
					'lt.4 Neptunus',
					]

exports.jamBelajar = [
					'14.00-15.30',
					'15.45-17.15',
					'17.30-19.15',
					'19.30-21.00'
					]


exports.mapel = { //berdasarkan kata ke-2 pada nama kelas
	SD : 	[
				'Matematika',
				'IPA',
				'Bahasa Indonesia',
				'Bahasa Inggris',
				'IPS',
				'PKN',
			 ],

	SMP : 	[
				'Matematika',
				'IPA',
				'Bahasa Indonesia',
				'Bahasa Inggris',
				'IPS',
			 ],

	IPA : [
				'Matematika',
				'Fisika',
				'Kimia',
				'Biologi',
				'Bahasa Indonesia',
				'Bahasa Inggris',
			],

	IPS : [
				'Matematika',
				'Sosiologi',
				'Geografi',
				'Ekonomi',
				'Sejarah',
				'Bahasa Indonesia',
				'Bahasa Inggris',
			],

	MEDICAL : [
				'Matematika',
				'Fisika',
				'Kimia',
				'Biologi',
				'Bahasa Indonesia',
				'Bahasa Inggris',
			],

	KEDINASAN : [
				'TIU',
				'TWK',
				'TKP'
			]
}


// exports.daftarSiswa = { //berdasarkan kata2 pada daftar kelas
// 	k4_SD :  [
// 				{nama:'Cika', nama_WA:'Cika kelas 4'},
// 				{nama:'Heru', nama_WA:'Heru kelas 4'},
// 				{nama:'Sinta', nama_WA:'Sinta kelas 4'},
// 			  ],

// 	k5_SD : [
// 				{nama:'Jim', nama_WA:'Jim kelas 5'},
// 			],

// 	k6_SD : [
// 				{nama:'Rio Bendio', nama_WA:'Rio kelas 6'},
// 			],

// 	k7_SMP : [
// 				{nama:'Dika', nama_WA:'Dika kelas 7'},
// 			 ],

// 	k8_SMP : [
// 				{nama:'Tim', nama_WA:'Tim kelas 8'},
// 		   	 ],

// 	k9_SMP : [
// 				{nama:'Heni', nama_WA:'Heni kelas 9'},
// 			 ],

// 	k10_IPA : [
// 				{nama:'Adi', nama_WA:'Adi kelas 10'},
// 				{nama:'Budi', nama_WA:'Budi kelas 10'},
// 			  ],

// 	k10_IPS : [
// 				{nama:'Tika', nama_WA:'Tika kelas 10'},
// 				{nama:'Surya', nama_WA:'Surya kelas 10'},
// 			  ],

// 	k11_IPA : [
// 				{nama:'Candra', nama_WA:'Candra kelas 11'},
// 				{nama:'Deni', nama_WA:'Deni kelas 11'},
// 			  ],

// 	k11_IPS : [
// 				{nama:'Mike', nama_WA:'Mike kelas 11'},
// 				{nama:'Dion', nama_WA:'Dion kelas 11'},
// 			  ],

// 	k12_IPA : [
// 				{nama:'Soleh', nama_WA:'Soleh kelas 12'},
// 			  ],

// 	k12_IPS : [
// 				{nama:'Soleha', nama_WA:'Soleha kelas 12'},
// 			  ]		

// }




// exports.mapel = [
// 				'Matematika',
// 				'Fisika',
// 				'Kimia',
// 				'Biologi',
// 				'IPA',
// 				'Bahasa Indonesia',
// 				'Bahasa Inggris',
// 				'Sosiologi',
// 				'Sejarah',
// 				'Ekonomi',
// 				'Geografi',
// 				'IPS',
// 			   	]






// exports.mapelSD_SMP = [
// 				'Matematika',
// 				'IPA',
// 				'Bahasa Indonesia',
// 				'Bahasa Inggris',
// 				'IPS',
// 			   	]

// exports.mapelSMA_IPA = [
// 				'Matematika',
// 				'Fisika',
// 				'Kimia',
// 				'Biologi',
// 				'Bahasa Indonesia',
// 				'Bahasa Inggris',
// 				]

// exports.mapelSMA_IPS = [
// 				'Matematika',
// 				'Sosiologi',
// 				'Geografi',
// 				'Ekonomi',
// 				'Sejarah',
// 				'Bahasa Indonesia',
// 				'Bahasa Inggris',
// 				]




// exports.kelas = [
// 				{nama:'4 SD', jumlah_sesi:1, hari_KBM: ['Senin, Selasa , Rabu']},
// 				{nama:'5 SD', jumlah_sesi:1, hari_KBM: ['Senin, Selasa , Rabu']},
// 				{nama:'6 SD', jumlah_sesi:1, hari_KBM: ['Senin, Selasa , Rabu']},
// 				{nama:'7 SMP', jumlah_sesi:1, hari_KBM: ['Senin, Selasa , Rabu']},
// 				{nama:'8 SMP', jumlah_sesi:1, hari_KBM: ['Senin, Selasa , Rabu']},
// 				{nama:'9 SMP', jumlah_sesi:1, hari_KBM: ['Senin, Selasa , Rabu']},
// 				{nama:'10 SMA IPA', jumlah_sesi:2, hari_KBM: ['Kamis, Jumat , Sabtu']},
// 				{nama:'10 SMA IPS', jumlah_sesi:2, hari_KBM: ['Kamis, Jumat , Sabtu']},
// 				{nama:'11 SMA IPA', jumlah_sesi:2, hari_KBM: ['Kamis, Jumat , Sabtu']},
// 				{nama:'11 SMA IPS', jumlah_sesi:2, hari_KBM: ['Kamis, Jumat , Sabtu']},
// 				{nama:'12 SMA IPA', jumlah_sesi:2, hari_KBM: ['Kamis, Jumat , Sabtu']},
// 				{nama:'12 SMA IPS', jumlah_sesi:2, hari_KBM: ['Kamis, Jumat , Sabtu']},
// 				]


//exports.kelas = [
					// '4 SD',
					// '5 SD',
					// '6 SD',
					// '7 SMP',
					// '8 SMP',
					// '9 SMP',
					// '10 IPA',
					// '10 IPS',
					// '11 IPA',
					// '11 IPS',
					// '12 IPA',
					// '12 IPS',
					// ]


// exports.hariBelajar = {
// 	'Senin' : ['5 SD A', '6 SD B', '6 SD C', '7 SMP A', '8 SMP B', '9 SMP B', '10 IPA A', '11 IPA B', '12 IPA A', '12 IPA B', '12 IPS A'],
// 	'Selasa' : ['4 SD A', '4 SD B', '5 SD B','6 SD A', '7 SMP B', '8 SMP A', '9 SMP A', '10 IPA A', '11 IPA B', '12 IPA A', '12 IPA B', '12 IPS A']
// }