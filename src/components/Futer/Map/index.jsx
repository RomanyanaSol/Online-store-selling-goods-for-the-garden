import React from 'react';
import s from './style.module.css'

export default function Map() {
  return (
    <div className={s.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.442789766697!2d13.37279466595281!3d52.50732534492054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sTel-Ran.de%20GmbH!5e0!3m2!1sru!2sde!4v1679852960945!5m2!1sru!2sde" width="1345" height="525" >
        </iframe>
    </div>
  )
}
