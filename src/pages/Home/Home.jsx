import style from "./style.module.scss";
import { useState } from "react";


function Home() {

  const [langv, setLangv] = useState('EN')
  const [flag, setFlag] = useState(false)

  return (
    <div className={style.page}>

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
          <div className={style.lenguage} onClick={() => langv === "EN" ? setLangv('RU') : setLangv('EN')}>
            <div className={style.imgLeng}></div>
            <p className={style.langv}>{langv}</p>
          </div>

          <div className={style.btn}><p>LOG IN</p></div>
          <div className={style.btn}><p>SIGN UP</p></div>

          <div className={style.hamburger_menu} onClick={() => setFlag(!flag)}>
            <div className={flag ? style.imgBurger2 : style.imgBurger}></div>
          </div>
        </div>
      </div>

      <div className={flag ? style.burger : style.burgerNon}>
        <div className={style.burgerInfo}>
          <div className={style.burgerParagraff}><p>About us</p></div>
          <div className={style.burgerParagraff}><p>Brands</p></div>
          <div className={style.burgerParagraff}><p>Commissions</p></div>
          <div className={style.burgerParagraff}><p>News</p></div>
          <div className={style.burgerParagraff}><p>Contact us</p></div>
          <div className={style.burgerParagraff}><p>Careers</p></div>
        </div>

        <div className={style.burgerButton}>
          <div className={style.burgerBtn}><p>LOG IN</p></div>
          <div className={style.burgerBtn}><p>SIGN UP</p></div>
        </div>
      </div>


      <div className={style.main}>

        <div className={style.title}>
          <h1>
            <span>HOUSE OF</span>
            <span>GAMBLING</span>
          </h1>

          <p>Raise your ROI with direct advertiser</p>

          <div className={style.btnTitle}>
            <p>BECOME A PARTNER</p>
          </div>
        </div>

        <div className={style.wrapperImgFly}>
          <div className={style.img1}></div>
          <div className={style.img2}></div>
          <div className={style.img3}></div>
        </div>

        <div className={style.blog}>
          <h1>BLOG</h1>

          <div className={style.blogBorder}>

            <div className={style.blogWrapper}>

              <div className={style.infoBlog}>
                <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                <p>10.02.2023</p>
              </div>

              <div className={style.infoBlog}>
                <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                <p>10.02.2023</p>
              </div>

              <div className={style.infoBlog}>
                <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                <p>10.02.2023</p>
              </div>

              <div className={style.infoBlog}>
                <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                <p>10.02.2023</p>
              </div>

              <div className={style.infoBlog}>
                <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                <p>10.02.2023</p>
              </div>

              <div className={style.infoBlog}>
                <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                <p>10.02.2023</p>
              </div>

            </div>
          </div>
        </div>
      </div>



      <div className={style.footer}>

        <div className={style.navFooter}>
          <p>Terms & Conditions</p>
          <p>Cookies</p>
          <p>Contacts</p>
          <p>Careers</p>
          <p>Brand Guide</p>
        </div>

        <div className={style.info}>
          <p >Our social media:</p>

          <div className={style.wrapperIcons}>
            <div className={style.fonIcon}>
              <div className={style.fonIconBlue}>
                <div className={style.twit}></div>
              </div>
              <div className={style.fonIconBlue}>
                <div className={style.face}></div>
              </div>
              <div className={style.fonIconBlue}>
                <div className={style.inst}></div>
              </div>
              <div className={style.fonIconBlue}>
                <div className={style.linked}></div>
              </div>
              <div className={style.fonIconBlue}>
                <div className={style.yout}></div>
              </div>
              <div className={style.fonIconBlue}>
                <div className={style.tiktok}></div>
              </div>
              <div className={style.fonIconBlue}>
                <div className={style.telegram}></div>
              </div>
              <div className={style.fonIconBlue}>
                <div className={style.vk}></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  );
}

export default Home;