'use client'
// import Image from 'next/image'
import styles from './page.module.css'
// import { useAuth } from './contexts/AuthContext'
export default function Home() {
  // const {currentUser} = useAuth();
  const testClick = () => {
    console.log('Clickity Click');
    // console.log(`Current User is: ${currentUser.email}`);
  }
  return (
    <main className={styles.main}>
      <h2>VM13</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo rem hic ea, quis temporibus ipsam repellendus mollitia iusto sequi placeat tempore assumenda corrupti maxime recusandae optio qui molestiae dolor!</p>
      <button onClick={testClick}>SHOW CONTEXT</button>
    </main>
  )
}
