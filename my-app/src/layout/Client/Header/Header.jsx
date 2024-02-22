import React, { useContext } from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import MainContext from '../../../context/Context'

const Header = () => {
    const {homeCounter}=useContext(MainContext)
    return (
        <div>
            <div className="header__div1">
                <ul className="header__div1__ul1">
                    <a className="header__div1__ul1__li" href="https://tap.az/?utm_source=turboaz&utm_medium=desktop-nav&utm_campaign=only-logo#_gl=1*160qvmm*_ga*MTMzMzQyOTk2OC4xNjk2MDU2MjQz*_ga_68B6PJZXYD*MTY5NjA1OTg0MC4yLjEuMTY5NjA2MTYwOC41OC4wLjA.">
                        <li> Tap.az</li>
                    </a>
                    <a className="header__div1__ul1__li" href="https://bina.az/?utm_source=tapaz&utm_medium=desktop-nav&utm_campaign=only-logo#_gl=1*8h8nd9*_ga*MTMzMzQyOTk2OC4xNjk2MDU2MjQz*_ga_68B6PJZXYD*MTY5NjA1OTg0MC4yLjEuMTY5NjA2MTg1Ni42MC4wLjA.">
                        <li>Bina.az</li>
                    </a>
                    <a className="header__div1__ul1__li" href="https://boss.az/?utm_source=turboaz&utm_medium=desktop-nav&utm_campaign=only-logo#_gl=1*1s97jbf*_ga*MTMzMzQyOTk2OC4xNjk2MDU2MjQz*_ga_68B6PJZXYD*MTY5NjA1OTg0MC4yLjEuMTY5NjA2MTYwOC41OC4wLjA.">
                        <li>Boss.az</li>
                    </a>
                </ul>
                <p className="header__div1__p">Dəstək: </p> <a className="header__div1__a" href=""> (012) 505-77-55</a>

                <ul className="header__div1__ul2">
                    <a className="header__div1__ul2__li">
                        <Link style={{ textDecoration: "none", color: "gray" }} to="/"> <span>Home</span></Link>
                    </a>
                    <a className="header__div1__ul2__li" href="https://turbo.az/help/popular_questions">
                        <Link style={{ textDecoration: "none", color: "gray" }} to="Yardim"> <span>Yardım</span></Link>
                    </a>
                    <a className="header__div1__ul2__li" href="https://ru.turbo.az/#_gl=1*s87sfq*_ga*MTMzMzQyOTk2OC4xNjk2MDU2MjQz*_ga_68B6PJZXYD*MTY5NjA3MzQyMS4zLjEuMTY5NjA3MzQ2Ni4xNS4wLjA.">
                        <li>Ru</li>
                    </a>
                    <a className="header__div1__ul2__li">
                        <Link style={{ textDecoration: "none", color: "gray" }} to="/Basket"> <span>Basket</span></Link>
                    </a>
                    <p style={{ color:'red',position:'absolute',right:'22.2%'}}>{homeCounter}</p>
                    <p className="header__div1__ul2__p">
                        <a className="header__div1__ul2__li" href="https://turbo.az/bookmarks">
                            <Link style={{ textDecoration: "none", color: "gray" }} to="Wishlist"><i style={{ paddingLeft: "7px" }} className="fa-regular fa-heart"></i> <span>Seçilmişlər</span></Link>
                        </a>
                    </p>
                    <a className="header__div1__ul2__li" href="">
                        <Link style={{ textDecoration: "none", color: "gray" }} to="Login"><p>Login</p></Link>
                    </a>
                    <a className="header__div1__ul2__li" href="">
                        <Link style={{ textDecoration: "none", color: "gray" }} to="Register"><p>Register</p></Link>
                    </a>
                </ul>
            </div>
            <div class="header__div2">
                <ul class="header__div2__ul1">
                    <a class="header__div2__ul1__li1" href="https://turbo.az/">
                        <li>Turbo.az</li>
                    </a>
                    <p class="header__div2__ul1__p">
                        <a class="header__div2__ul1__li" href="https://turbo.az/autos">
                            <li>Bütün Elanlar</li>
                        </a>
                        <a class="header__div2__ul1__li" href="https://turbo.az/avtosalonlar">
                            <li>Avtosalonlar</li>
                        </a>
                        <a class="header__div2__ul1__li" target="_blank" href="https://tap.az/elanlar/neqliyyat/ehtiyyat-hisseleri-ve-aksesuarlar?utm_source=turboaz&utm_medium=link&utm_content=accessories&utm_campaign=desktop#_gl=1*1s0hacg*_ga*MTMzMzQyOTk2OC4xNjk2MDU2MjQz*_ga_68B6PJZXYD*MTY5NjA3NTQ4NS40LjEuMTY5NjA3NjUyNy4xOC4wLjA.">
                            <li>Ehtiyyat-hisseleri-ve-Aksesuarlar</li>
                        </a>
                    </p>

                </ul>
                <button class="header__div2__button">
                    <Link class="header__div2__button__a" to="/Add"><i class="fa-solid fa-circle-plus"></i> Yeni elan</Link>
                </button>
            </div>
        </div>
    )
}

export default Header