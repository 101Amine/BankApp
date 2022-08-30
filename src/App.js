import './App.css';
import styles from './styles'
import { Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA} from './components'
import { Navbar, Footer, Button, FeedbackCard } from './UI';




function App() {
  return (
    <div className="App">


        <div className={ `bg-black ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar/>
            </div>
        </div>


        <div className={` bg-black ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero/>
          </div>
        </div>


        <div className={` bg-black ${styles.flexStart} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats/>
            <Business/>
            <Billing/>
            <CardDeal/>
            <Testimonials/>
            <Clients/>
            <CTA/>
            <Footer/>

          </div>
          
          
        </div>
    </div>
  );
}

export default App;
