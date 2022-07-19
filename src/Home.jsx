import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './home.css';
import db from './database.js';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { v4 as uuid } from 'uuid';
import QRCode from "react-qr-code";

const WA_SVG = <svg width="32" height="32" viewBox="0 0 32 32" className="whatsapp-ico">
				<path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fillRule="evenodd"></path>
				</svg>

const Loading_SVG = <svg version="1.1" id="L7" width="16" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							  viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
							 <path fill="currentColor" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
							  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
							      <animateTransform 
							         attributeName="transform" 
							         attributeType="XML" 
							         type="rotate"
							         dur="1s" 
							         from="0 50 50"
							         to="360 50 50" 
							         repeatCount="indefinite" />
							  </path>
							</svg> 

const share_SVG = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
  								<path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
							</svg>

export default function Home() {

		const MySwal = withReactContent(Swal);
		const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
		const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jumat", 'Sabtu']
		const d = new Date();
		const this_month = months[d.getMonth()];
		const today = days[d.getDay()];


		// var timeout;
		// const loadingWA = () => {
		// 	setPushname('menautkan WA')
		// 	timeout = setTimeout( () => {
		// 		setPushname(pushname+'.');
		// 		if(pushname === 'menautkan WA....') {setPushname('menautkan WA')}
		// 	}, 1000)
		// }

		
		const [id, setId] = useState('');
		const [pushname, setPushname] = useState('log in');
		const [logInState, setLogInState] = useState('');
		const [showQR, setShowQR] = useState(false);
		const [qrCode, setQrCode] = useState();

		useEffect(() => {
		  const id = localStorage.getItem('wid');
		  // const ls_logInState = localStorage.getItem('loginState');
		  if (id) {
			  setId(id);
			  // if(!ls_logInState) {
			  logInWA(id);
			  // }
		  }
		}, []);

		const logInWA = (id) => {
			setPushname('menautkan WA');
			// loadingWA();
			axios({
					url: "http://localhost:5000/masukWA" ,
					method : 'post',
					data : {WA_ID : id}
			})
			.then(res => {
				if(res.data.result.type === 'pn') {
					setPushname(res.data.result.pushname); 
					setLogInState(true);
				} else if (res.data.result.type === 'qr') {
					setQrCode(res.data.result.qr);
					setShowQR(true);
					axios({
							url: "http://localhost:5000/afterScanQR" ,
							method : 'post',
					}).then(ress => {
						setPushname(ress.data.result.pushname);
						setShowQR(false);
						setLogInState(true);
					})
				}
			})
			.catch(err => console.log(err))
		};

		const logOutWA = id => {
			axios({
					url: "http://localhost:5000/keluarWA" ,
					method : 'post',
					data : {WA_ID : id}
			})
			.then(result => {setPushname('log in'); setPenerima(''); setLogInState(false)})
			.catch(err => console.log(err))
		};


		const logInClick = () => {
			let newId = uuid();
			setId(newId);
			localStorage.setItem('wid', newId);
			logInWA(newId);
		}

		const logOutClick = () => {
			// let newId = uuid();
			localStorage.removeItem('wid');
			logOutWA(id);
			setId('');
			setPushname('log in'); 
			setPenerima('');
			setLogInState(false);
			setShowQR(false);
		}

		const postMessage = (data) => {
			if(logInState) {
				setStatusPengiriman(true);
				axios({
						url: "http://localhost:5000/kirimpesan" ,
						method : 'post',
						data : data
				})
				.then(result => {MySwal.fire(result.data.message); setStatusPengiriman(false);})
				.catch(err => console.log(err))
			}
		}


		const getNamaPenerimaPesanDariServer = (data) => {
			if(logInState) {
				axios({
						url: "http://localhost:5000/namapenerima" ,
						method : 'post',
						data : data
				})
				.then(result => { setPenerima(result.data.receivers) } )
				.catch(err => console.log(err))
			}
		}


		const createMessage = () => {
			if(kelas.split(' ')[0].toString() > 9 || kelas.split(' ')[0].length > 2) {
				let msg = `Selamat pagi, Ayah/Bunda 🙏🏻😊\n\nTerkait dengan Kegiatan Belajar Mengajar (KBM) yang ada di Brain Academy by Ruangguru Pontianak, kami ingin menginformasikan bahwa KBM akan dilakukan secara offline (mengikuti aturan dari pemerintah). \nBerikut jadwal belajar Kelas *${kelas}*\n\n*sesi 1*\nHari, Tanggal: ${today} , ${d.getDate()} ${this_month} ${d.getFullYear()}\nPukul : ${jamS1} WIB\nMata Pelajaran : ${mapelS1}\nTempat: Cabang Brain Academy Pontianak ${ruangKelasS1}
				\n*sesi 2*\nPukul : ${jamS2} WIB\nMata Pelajaran : ${mapelS2}\nTempat: Cabang Brain Academy Pontianak ${ruangKelasS2}\n\nSekaligus kami informasikan kepada siswa yang ingin melakukan Klinik PR dapat menghubungi Admin maksimal H-1 untuk Booking Slot agar dapat kami jadwalkan sesuai mata pelajaran yang diinginkan.\nSekian info yang dapat kami sampaikan. Atas perhatian Ayah/ Bunda kami ucapkan terima kasih. 😊`
				return msg;
			} else {
				let msg = `Selamat pagi, Ayah/Bunda 🙏🏻😊\n\nTerkait dengan Kegiatan Belajar Mengajar (KBM) yang ada di Brain Academy by Ruangguru Pontianak, kami ingin menginformasikan bahwa KBM akan dilakukan secara offline (mengikuti aturan dari pemerintah). \nBerikut jadwal belajar Kelas *${kelas}*\n\n*sesi 1*\nHari, Tanggal: ${today} , ${d.getDate()} ${this_month} ${d.getFullYear()}\nPukul : ${jamS1} WIB\nMata Pelajaran : ${mapelS1}\nTempat: Cabang Brain Academy Pontianak ${ruangKelasS1}
				\nSekaligus kami informasikan kepada siswa yang ingin melakukan Klinik PR dapat menghubungi Admin maksimal H-1 untuk Booking Slot agar dapat kami jadwalkan sesuai mata pelajaran yang diinginkan.\nSekian info yang dapat kami sampaikan. Atas perhatian Ayah/ Bunda kami ucapkan terima kasih. 😊`
				return msg;
			}
		}

		const [kelas, setKelas] = useState('4 SD');
		const [jamS1, setJamS1] = useState('14.00-15.30');
		const [ruangKelasS1, setRuangKelasS1] = useState('lt.1 Merkurius');
		const [mapelS1, setMapelS1] = useState('Matematika');
		const [jamS2, setJamS2] = useState('14.00-15.30');
		const [ruangKelasS2, setRuangKelasS2] = useState('lt.1 Merkurius');
		const [mapelS2, setMapelS2] = useState('Matematika');
		const [penerima, setPenerima] = useState('');
		const [statusPengiriman, setStatusPengiriman] = useState(false);

		const changeKelas = (e) => {setKelas(e.target.value); getNamaPenerimaPesanDariServer({className:e.target.value})}
		const changeJamS1 = (e) => {setJamS1(e.target.value)}
		const changeRuangKelasS1 = (e) => {setRuangKelasS1(e.target.value)}
		const changeMapelS1 = (e) => {setMapelS1(e.target.value)}
		const changeJamS2 = (e) => {setJamS2(e.target.value)}
		const changeRuangKelasS2 = (e) => {setRuangKelasS2(e.target.value)}
		const changeMapelS2 = (e) => {setMapelS2(e.target.value)}



		return (
		  	<div className='home'>	

		  		{
		  			showQR 
		  			? <div className='qr-code'>
		  				<div>scan QR code untuk masuk WA</div>
		  				<QRCode bgColor='#eee' value={qrCode} />
		  			  </div> 
		  			: null
		  		}

	  			<div className="dropdown">
				  <div>{WA_SVG}</div>
				  {
				  	pushname === 'log in' 
				  	? <button onClick={() => logInClick()} >Log In</button> 
				  	: <span>{pushname}</span>
				  }
				  {
				  	pushname === 'menautkan WA' 
				  	? <span>{Loading_SVG}</span>
				  	: null
				  }
				  <div className="dropdown-content">
				    {/*<button onClick={() => logInClick()}>Log In</button>*/}
				    {pushname === 'log in' ? null : <button onClick={() => logOutClick()}>Log Out</button>}
				    {/*{pushname === 'menautkan WA' ? null : <button onClick={() => logOutClick()}>Berhenti</button>}*/}
				  </div>
				</div>

		  		<div>
		  			<h1>Aplikasi share jadwal Brain Academy</h1>
		  		</div>	

		  		<div className='form-kelas'>
		  			<label htmlFor="kelas">Hari ini ada jadwal kelas :</label>
					<select id="kelas" name="kelas" onClick={changeKelas}>
					    {db.kelas.map((kelas,id) => { return <option key={id} value={kelas}>{kelas}</option> })}
					</select>
		  		</div>

			 	<div className='form2sesi'>
			 		<div>
			 			<p className='title-sesi'>Sesi 1</p>
			 			<label className='label' htmlFor="jamS1">Pukul :</label>
				 		<select name="jamS1" id="jamS1" onClick={changeJamS1}>
				 			{db.jamBelajar.map((jamBelajar,id) => {return <option key={id} value={jamBelajar}>{jamBelajar}</option> })}
				 		</select><br/>
				 		<label className='label' htmlFor="mapelS1">Mapel :</label>
				 		<select name="mapelS1" id="mapelS1" onClick={changeMapelS1}>
				 			{db.mapel[`${ kelas.split(' ')[1] ? kelas.split(' ')[1] : kelas }`].map((mapel,id) => {return <option key={id} value={mapel}>{mapel}</option> })}
				 		</select><br/>
				 		<label className='label' htmlFor="kelasS1">Kelas :</label>
				 		<select name="kelasS1" id="kelasS1" onClick={changeRuangKelasS1}>
				 			{db.ruangKelas.map((ruangKelas,id) => {return <option key={id} value={ruangKelas}>{ruangKelas}</option> })}
				 		</select><br/>
			 		</div>
			 		<div className={kelas.split(' ')[0].toString() > 9 || kelas.split(' ')[0].length > 2 ? 'show' : 'hidden'}>
			 			<p className='title-sesi'>Sesi 2</p>
			 			<label className='label' htmlFor="jamS2">Pukul :</label>
				 		<select name="jamS2" id="jamS2" onClick={changeJamS2}>
				 			{db.jamBelajar.map((jamBelajar,id) => {return <option key={id} value={jamBelajar}>{jamBelajar}</option> })}
				 		</select><br/>
				 		<label className='label' htmlFor="mapelS2">Mapel :</label>
				 		<select name="mapelS2" id="mapelS2" onClick={changeMapelS2}>
				 			{db.mapel[`${ kelas.split(' ')[1] ? kelas.split(' ')[1] : kelas}`].map((mapel,id) => {return <option key={id} value={mapel}>{mapel}</option> })}
				 		</select><br/>
				 		<label className='label' htmlFor="kelasS2">Kelas :</label>
				 		<select name="kelasS2" id="kelasS2" onClick={changeRuangKelasS2}>
				 			{db.ruangKelas.map((ruangKelas,id) => {return <option key={id} value={ruangKelas}>{ruangKelas}</option> })}
				 		</select><br/>
			 		</div>
			 	</div>
				 		
				 <pre>
				 	{/*<p>Jadwal</p>*/}
				 	<div className='msg'>{createMessage()}</div>
				 </pre>

				 <div className='receivers-msg'>
				 	Penerima jadwal : {penerima}
				 </div>

				<div>
		  			<button className='share-btn' onClick={() => postMessage({className:kelas, message:createMessage()})}> 
		  				<span>share jadwal</span>
		  				{
		  					statusPengiriman 
		  					? Loading_SVG 
		  					: share_SVG
		  				}
		  			
					

		  			</button>
				</div>

		  	</div>
		  );
	}

// export default Home;