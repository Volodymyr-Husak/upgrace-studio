import css from './Footer.module.css';

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className="footer-container">
          <div className={css.footer_container__tablet}>
            <div className="footer-container-address">
              <a href="./index.html" className="logo logo--center">
                Web<span className="logo--white">Studio</span>
              </a>
              <ul className="list footer-list-address">
                <li className="item">
                  <address className="footer-address">
                    г. Киев, пр-т Леси Украинки, 26
                  </address>
                </li>
                <li className="item">
                  <a
                    className="link link-contact-footer"
                    href="mailto:info@devstudio.com"
                  >
                    info@devstudio.com
                  </a>
                </li>
                <li className="item">
                  <a
                    className="link link-contact-footer"
                    href="tel:+380961111111"
                  >
                    +38 096 111 11 11
                  </a>
                </li>
              </ul>
            </div>
            <div className="social-networks-footer">
              <h2 className="footer-title">присоединяйтесь</h2>
              <ul className="list list-footer-icons">
                <li className="item item-footer-icons">
                  <a className="link-footer-icons" href="">
                    <svg width="20" height="20">
                      <use href="./images/icon/sprite.svg#instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="item item-footer-icons">
                  <a className="link-footer-icons" href="">
                    <svg width="20" height="20">
                      <use href="./images/icon/sprite.svg#twitter"></use>
                    </svg>
                  </a>
                </li>
                <li className="item item-footer-icons">
                  <a className="link-footer-icons" href="">
                    <svg width="20" height="20">
                      <use href="./images/icon/sprite.svg#facebook"></use>
                    </svg>
                  </a>
                </li>
                <li className="item item-footer-icons">
                  <a className="link-footer-icons" href="">
                    <svg width="20" height="20">
                      <use href="./images/icon/sprite.svg#linkedin"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <form class="footer-form" name="form-subscription">
                    <label class="label-footer" for="footer-form-email">Подпишитесь на рассылку</label>
                    <div class="input-btn-form-footer">
                        <input class="input-footer" type="email" id="footer-form-email" placeholder="E-mail"
                            name="user-subscription">
                        <button class="footer-btn-form" type="submit">
                            Подписаться
                            <svg class="footer-btn-icon-form" width="24" height="24">
                                <use href="./images/icon/sprite-form.svg#iconsend"></use>
                            </svg>
                        </button>
                    </div>
                </form> */}
        </div>
      </div>
    </footer>
  );
}
export default Footer;
