import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    // API call
    setTodoList([
      {
        name:"Jesús Medina",
        description:"Do the dishes tonight",
        date: new Date()
      },
      {
        name:"React Developer",
        description:"Be the best React developer",
        date: new Date()
      },
      {
        name:"Jon Mish",
        description:"Talking to the moon",
        date: new Date()
      }

    ])
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Real time Todo App</title>
        <meta name="description" content="Real time Todo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {

        }
      </main>
    </div>
  )
}
