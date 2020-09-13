import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Rumpun Subsystem Sektor Agribisnis</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Umumnya padi sawah menyebar di wilayah tengah dan utara, dimana sudah tersedia irigasi, seperti di Kecamatan Rumpin'
              label='Pertanian'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Domba garut merupakan salah satu rumpun domba lokal Indonesia yang mempunyai sebaran asli geografis di Provinsi Jawa Barat'
              label='Peternakan'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Citra rasa kopi buhun yang tersembunyi apik'
              label='Perkebunan'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='The Little King of Pangandaran'
              label='Perikanan'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Teak of Pelabuhan Ratu '
              label='Kehutanan'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;