import styles from "./page.module.css";
import './globals.css'
import Hero from "@/components/hero/Hero";
import Main from "@/components/main/Main";

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products', {cache: 'force-cache'}) 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


const Home = async () => {
  let data = await getData()
  return (
    <div className="container">
      <main className={styles.main}>
          <Hero />
          <Main data={data} />
      </main>
    </div>
    
  );
}
export default Home