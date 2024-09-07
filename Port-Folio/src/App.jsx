import styles from './App.module.css'
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';


function App() {
 

  return (
    <div className={styles.App}>
   <NavBar />
   <Hero />
    </div>
  )
}

export default App;
