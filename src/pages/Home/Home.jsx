import style from "./style.module.scss";
import { useState } from "react";

function Home() {

  const [langv, setLangv] = useState('EN')

  const changeLangv = () => {
    langv === "EN" ? setLangv('RU') : setLangv('EN')
  }

  return (
    <div>
      <div className={style.header}>
        <div className={style.nav}>
          <p>About us</p>
          <p>Brands</p>
          <p>Commissions</p>
          <p>News</p>
          <p>Contact us</p>
          <p>Careers</p>
        </div>

        <div className={style.btnWrapper}>
          <div className={style.lenguage} onclick={changeLangv}>
            <div className={style.imgLeng}></div>
            <p>{langv}</p>
          </div>

          <div className={style.btn}><p>LOG IN</p></div>
          <div className={style.btn}><p>SIGN UP</p></div>
        </div>
      </div>
    </div >
  );
}

export default Home;