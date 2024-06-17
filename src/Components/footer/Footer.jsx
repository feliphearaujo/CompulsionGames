import styles from './Footer.module.css'
import { Newsletter } from './components/Newsletter'
import { SocialMedia } from './components/Socialmedia.icon'
import { InfoContact } from './components/InfoContact'

function Contact() {
  return (
    <div className={styles.footer}>
        <InfoContact/>
        <Newsletter/>
        <SocialMedia/>
    </div>
  )
}
  
export default Contact