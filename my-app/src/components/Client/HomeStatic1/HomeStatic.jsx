import React, { useContext } from 'react'
import MainContext from '../../../context/Context'
import "./HomeStatic1.scss"

const HomeStatic = () => {
  const { HAndlerFilterBYtpye, handleFilterByMarka, handleFilterByMarket, handleFilterByFuel, handleFilterBySpeedBox, handleFilterByPayment, handleFilterByTransmitter, handleFilterBySituation } = useContext(MainContext)
  return (
    <div className='homeStatic'>
      <div className='homeStatic__type'>
        <select style={{ width: '300px' }} class="form-select" name="" id="" onChange={(e) => {
          HAndlerFilterBYtpye(e)
        }}>
          <option value="df">Model</option>
          <option value="sedan">Sedan</option>
          <option value="Minivan">Minivan</option>
          <option value="Dartqı">Dartqı</option>
          <option value="Offroader / SUV">Offroader / SUV</option>
        </select>
      </div>
      <div className='homeStatic__marka'>
        <select style={{ width: '300px' }} class="form-select" name="" id="" onChange={(e) => {
          handleFilterByMarka(e)
        }}>
          <option value="df">Marka</option>
          <option value="Mercedes">Mercedes</option>
          <option value="BMW">BMW</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Volvo">Volvo</option>
          <option value="Jeep">Jeep</option>
        </select>
      </div>
      <div className='homeStatic__market'>
        <select style={{ width: '300px' }} class="form-select" name="" id="" onChange={(e) => {
          handleFilterByMarket(e)
        }}>
          <option value="df">Hansı Bazar üçün yığılıb</option>
          <option value="Avropa">Avropa</option>
          <option value="Amerika">Amerika</option>
          <option value="Rəsmi Diler">Rəsmi Diler</option>
        </select>
      </div>
      <div className='homeStatic__fuel'>
        <select style={{ width: '300px' }} class="form-select" name="" id="" onChange={(e) => {
          handleFilterByFuel(e)
        }}>
          <option value="df">Yanacaq</option>
          <option value="Dizel">Dizel</option>
          <option value="Benzin">Benzin</option>
        </select>
      </div>
      <div className='homeStatic__speedBox'>
        <select style={{ width: '300px' }} class="form-select" name="" id="" onChange={(e) => {
          handleFilterBySpeedBox(e)
        }}>
          <option value="df">Sürətlər Qutusu</option>
          <option value="Avtomat">Avtomat</option>
          <option value="Mexanika">Mexanika</option>
        </select>
      </div>
      <div className='homeStatic__payment'>
        <select style={{ width: '300px' }} class="form-select" name="" id="" onChange={(e) => {
          handleFilterByPayment(e)
        }}>
          <option value="df">Ödəniş</option>
          <option value="Kredit">Kredit</option>
          <option value="Barter">Barter</option>
        </select>
      </div>
      <div className='homeStatic__transmitter'>
        <select style={{ width: '300px' }} class="form-select" name="" id="" onChange={(e) => {
          handleFilterByTransmitter(e)
        }}>
          <option value="df">Ötürücü</option>
          <option value="Ön">Ön</option>
          <option value="Arxa">Arxa</option>
          <option value="Tam">Tam</option>
        </select>
      </div>
      <div className='homeStatic__situation'>
        <select style={{ width: '300px' }} class="form-select" name="" id="" onChange={(e) => {
          handleFilterBySituation(e)
        }}>
          <option value="df">Vəzyəti</option>
          <option value="Yeni">Yeni</option>
          <option value="Surulmus">Sürülmüş</option>
        </select>
      </div>
      <div class="section-title section-title--grey snipcss-rNYQo">
        <div class="tz-container tz-d-flex tz-align-center tz-justify-between">
          <p class="section-title_name">
            Premium elanlar
          </p>
          <div class="lotriver-text-banner" id="js-lotriver-text-banner">
            <div id="style-kfYbZ" class="style-kfYbZ">
              <iframe id="ar_container_2" width="1" height="1" marginwidth="0" marginheight="0" scrolling="no" frameborder="0">
              </iframe>
            </div>
            <div id="ad_ph_2" class="style-fpRMS">
              <div id="style-P2EOb" class="style-P2EOb">
                <iframe id="ar_cr_2210860" width="100%" height="100%" marginwidth="0" marginheight="0" scrolling="no" vspace="0" hspace="0" frameborder="0" src="https://mlb2.adriver.ru/images/0009040/0009040776/0/kapital_desc.html?html_params=target%3D_blank%26rhost%3Dad.adriver.ru%26bid%3D9040776%26sid%3D220552%26width%3D394%26height%3D30%26rnd%3D458170603%26pz%3D0%26ad%3D720250%26bt%3D43%26bn%3D8%26ar_sliceid%3D2759043%26ntype%3D0%26nid%3D0%26ar_geoid%3D378%26xpid%3DD0exGKUlstp_hAwL1AUXU91J7wkjrxgmBhawYwHbXrvdpLzg7s6RHTI3mpAU_Yp9UUcTA23wcELEzlyOWQ6CatZiC-HpfCETGbJrdYg%26url%3Dhttps%253A//ad.adriver.ru/cgi-bin/click.cgi%253Fsid%253D220552%2526ad%253D720250%2526bid%253D9040776%2526bt%253D43%2526bn%253D8%2526pz%253D0%2526nid%253D0%2526ref%253Dhttps%253A%25252f%25252fturbo.az%25252f%2526erid%253D%2526custom%253D%2526xpid%253DD0exGKUlstp_hAwL1AUXU91J7wkjrxgmBhawYwHbXrvdpLzg7s6RHTI3mpAU_Yp9UUcTA23wcELEzlyOWQ6CatZiC-HpfCETGbJrdYg%2526rleurl%253D%26CompPath%3Dhttps%253A//mlb2.adriver.ru/images/0009040/0009040776/0/%26ar_pass%3D">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeStatic