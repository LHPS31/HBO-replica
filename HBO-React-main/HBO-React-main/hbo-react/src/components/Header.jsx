import styles from '../css/header.module.css';
import hbo from '/Senai-frontend/HBO-React/hbo-react/src/images/hbo.png';
import dc from '/Senai-frontend/HBO-React/hbo-react/src/images/dc.png';
import wb from '/Senai-frontend/HBO-React/hbo-react/src/images/wb.png';
import cn from '/Senai-frontend/HBO-React/hbo-react/src/images/cartoon-network_neutral.png';
import maxO from '/Senai-frontend/HBO-React/hbo-react/src/images/max_originals.png';
// import Nav from './Nav'
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerChannels}>
          <img className={styles.headerChannel} src={hbo} alt="HBO logo" />
          <img className={styles.headerChannel} src={dc} alt="DC logo" />
          <img className={styles.headerChannel} src={wb} alt="WarnerBros logo" />
          <img className={styles.headerChannel} src={cn} alt="CartoonNetwoork logo" />
          <img className={styles.headerChannel} src={maxO} alt="MaxOriginals logo" />
        </div>
        <h1 className={styles.headerTitle}>
          <span className={styles.headerTitleLight}>Curta as melhores histórias</span>
          Para todo mundo
        </h1>
        <div className={styles.divider}></div>
        <div className={styles.offer}>
          <p>Assinaturas a partir de</p>
          <p className={styles.offerPrice}>$14,15<span className={styles.offerPriceSmall}>/mês*</span></p>
        </div>
        <a href="signIn.jsx" className={styles.button}>
          Assine agora...
        </a>
        <p className={styles.textSmall}>*Aplicável ao plano anual com pagamento antecipado</p>
      </div>
    </header>
  )
}
