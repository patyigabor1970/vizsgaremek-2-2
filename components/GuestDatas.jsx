import React from 'react'
import GuestData from './GuestData';

function GuestDatas() {
  
    const guest ={
        
        id:'1',
        nev: 'Kovács Péter',
        kep: './src/images/arakkep.jpg',
        cim:'5600 Békéscsaba Kazinczy utca 8.',
        email:'kovacspeter@gmail.com',
        mobil:'+36701234567',
        orak: [
            {
                id: 1,
                idopont: '2023-05-10 hétfő, 8:00',
                oktatonev: 'Kolozsi Márk',
                nev: 'spinning',
                cim:'5. terem',
                kep: './src/images/arakkep.jpg'
                
              },
            {
                id: 2,
                idopont: '2023-05-10 hétfő, 10:00',
                oktatonev: 'Nagy Éva',
                nev: 'aerobik',
                cim:'2. terem', 
                kep: './src/images/arakkep.jpg'
                
              },

            {
                id: 3,
                idopont: '2023-05-11 kedd, 15:00',
                oktatonev: 'Kiss Katalin',
                nev: 'crossfit',
                cim:'3. terem', 
                kep: './src/images/arakkep.jpg'
                
              }, 
        ],

      };
  
  
    return (
    <div>
        <GuestData
     nev={guest.nev}
     kep={guest.kep}
     cim={guest.cim}
     email={guest.email}
     mobil={guest.mobil}
     orak={guest.orak}
   />
    </div>
  )
}

export default GuestDatas;