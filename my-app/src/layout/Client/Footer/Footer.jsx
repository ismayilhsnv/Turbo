import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div class="footer__qaydalar">
        <a class="footer__qaydalar1" href="https://turbo.az/pages/rules" target="_blank">
          <p>Qaydalar</p>
        </a>
        <a class="footer__qaydalar2" href="https://turbo.az/pages/law" target="_blank">
          <p>Qanun</p>
        </a>
        <a class="footer__qaydalar3" href="https://turbo.az/pages/terms-and-conditions" target="_blank">
          <p>Istifadeci razilasmasi</p>
        </a>
        <a class="footer__qaydalar4" href="https://turbo.az/pages/privacy" target="_blank">
          <p>Mexfilik Siyaseti</p>
        </a>
      </div>
      <div class="footer__sonluq">
        <p class="footer__sonluq__p1">Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş <br />
          elanların məzmununa görə məsuliyyət daşımır.
        </p>
        <p class="footer__sonluq__p2">
          2006-2023 Digital Classifieds MMC. VÖEN: 1405631661
        </p>
        <a class="footer__sonluq__a" href="#">
          <p>Mobil versiya</p>
        </a>
      </div>
    </div>
  )
}

export default Footer