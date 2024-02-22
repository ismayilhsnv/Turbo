import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from "axios"
import "./Detail.scss"



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Detail = () => {
  const { _id } = useParams()
  const [detail, setDetail] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:9090/turbo/${_id}`).then(res => {
      setDetail(res.data)
    })
  }, [])

  return (
    <div className='detail'>
      <div className='detail__header'>
        <a href=""><p>{detail.marka}</p></a>
        <a href=""><p>{detail.categories}</p></a>
      </div>
      <div className='detail__content'>
        <div className='detail__content__header'>
          <h3>{detail.marka},</h3>
          <h3>{detail.categories},</h3>
          <h3>{detail.capacity}L,</h3>
          <h3>{detail.year}il,</h3>
          <h3>{detail.yürüş}km,</h3>
        </div>
        <div className='detail__content__swiper'>
          <img src={detail.image} alt="" />
        </div>
        <div className='detail__content__about'>
          <section class="product-section product-section--wide snipcss-FBEN6">
            <div class="product-properties tz-d-flex tz-justify-between tz-gap-10">
              <div class="product-properties__column">
                <div class="product-properties__i">
                  <label class="product-properties__i-name" for="ad_region">
                    Şəhər
                  </label>
                  <span class="product-properties__i-value">
                    {detail.city}
                  </span>
                </div>
                <div class="product-properties__i">
                  <label class="product-properties__i-name" for="ad_make_id">
                    Marka
                  </label>
                  <span class="product-properties__i-value">
                    <a target="_blank" href="/autos?q%5Bmake%5D%5B%5D=24">
                      {detail.marka}
                    </a>
                  </span>
                </div>
                <div class="product-properties__i">
                  <label class="product-properties__i-name" for="ad_model">
                    Model
                  </label>
                  <span class="product-properties__i-value">
                    <a target="_blank" href="/autos?q%5Bmake%5D%5B%5D=24&amp;q%5Bmodel%5D%5B%5D=286">
                      {detail.categories}
                    </a>
                  </span>
                </div>
                <div class="product-properties__i">
                  <label class="product-properties__i-name" for="ad_reg_year">
                    Buraxılış ili
                  </label>
                  <span class="product-properties__i-value">
                    <a target="_blank" href="/autos?q%5Bmake%5D%5B%5D=24&amp;q%5Bmodel%5D%5B%5D=286&amp;q%5Byear_from%5D=2018&amp;q%5Byear_to%5D=2018">
                      {detail.year}
                    </a>
                  </span>
                </div>
                <div class="product-properties__i">
                  <label class="product-properties__i-name" for="ad_category">
                    Ban növü
                  </label>
                  <span class="product-properties__i-value">
                    {detail.type}
                  </span>
                </div>
                <div class="product-properties__i">
                  <label class="product-properties__i-name" for="ad_color">
                    Rəng
                  </label>
                  <span class="product-properties__i-value">
                    {detail.color}
                  </span>
                </div>
                <div class="product-properties__i">
                  <label class="product-properties__i-name" for="ad_engine_volume">
                    Mühərrik
                  </label>
                  <span class="product-properties__i-value">
                    {detail.capacity},{detail.fuel}
                  </span>
                </div>
                <div class="product-properties__i">
                  <label class="product-properties__i-name" for="ad_mileage">
                    Yürüş
                  </label>
                  <span class="product-properties__i-value">
                    {detail.yürüş}
                  </span>
                </div>
              </div>
              <div class="product-properties__column">
                <div class="product-properties__i">
                  <label class="product-properties__i-name" for="ad_transmission">
                    Sürətlər qutusu
                  </label>
                  <span class="product-properties__i-value">
                    {detail.speedBox}
                  </span>
                </div>
                <div class="product-properties__i">
                  <label class="product-properties__i-name" for="ad_gear">
                    Ötürücü
                  </label>
                  <span class="product-properties__i-value">
                    {detail.transmitter}
                  </span>
                </div>
                <div class="product-properties__i">
                  <label class="product-properties__i-name" for="ad_seats_count">
                    Yerlərin sayı
                  </label>
                  <span class="product-properties__i-value">
                    <span class="translation_missing" title="translation missing: az.seats_counts.5">
                      {detail.places}
                    </span>
                  </span>
                </div>
                <div class="product-properties__i">
                  <label class="product-properties__i-name" for="ad_prior_owners_count">
                    Sahiblər
                  </label>
                  <span class="product-properties__i-value">
                    <span class="translation_missing" title="translation missing: az.prior_owners_counts.1">
                      {detail.master}
                    </span>
                  </span>
                </div>
                <div class="product-properties__i">
                  <label class="product-properties__i-name" for="ad_Vəziyyəti">
                    Vəziyyəti
                  </label>
                  <span class="product-properties__i-value">
                    {detail.strike},{detail.uncolor}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
        <p>
          <h5>Description</h5>
          {detail.desc}
        </p>
      </div>
      <div>
        <section class="product-section product-section--wide snipcss-5hfwW">
          <ul class="product-extras tz-d-flex tz-align-center tz-gap-10 tz-wrap-wrap snipcss0-0-0-1 ul">
            <ul>
              <li class="product-extras__i snipcss0-1-1-2">
                Yüngül lehimli disklər
              </li>
              <li class="product-extras__i snipcss0-1-1-3">
                ABS
              </li>
              <li class="product-extras__i snipcss0-1-1-4">
                Lyuk
              </li>
              <li class="product-extras__i snipcss0-1-1-5">
                Yağış sensoru
              </li>
              <li class="product-extras__i snipcss0-1-1-6">
                Mərkəzi qapanma
              </li>
            </ul>
            <ul>
              <li class="product-extras__i snipcss0-1-1-7">
                Park radarı
              </li>
              <li class="product-extras__i snipcss0-1-1-8">
                Kondisioner
              </li>
              <li class="product-extras__i snipcss0-1-1-9">
                Oturacaqların isidilməsi
              </li>
              <li class="product-extras__i snipcss0-1-1-10">
                Dəri salon
              </li>
              <li class="product-extras__i snipcss0-1-1-11">
                Ksenon lampalar
              </li>
            </ul>

            <ul>
              <li class="product-extras__i snipcss0-1-1-12">
                Arxa görüntü kamerası
              </li>
            </ul>
          </ul>
        </section>

      </div>
    </div>
  )
}

export default Detail