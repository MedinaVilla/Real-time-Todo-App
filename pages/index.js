import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Modal from '../components/Modal';
import Form from '../components/AddTodoForm';
import styles from '../styles/Home.module.css';
import { SocketOn, SocketEmit } from '../SocketIO';

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  useEffect(() => {
    SocketEmit("initial_list");
    SocketOn("get_data", (data) => { setTodoList(data) })

  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Real time Todo App</title>
        <meta name="description" content="Real time Todo App" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Barlow&family=Montserrat:wght@500&family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            {
              todoList.length > 0 && todoList.map((todoItem,index) => {
                return <li key={index} className={styles.itemList}>
                  <h3> {todoItem.name}</h3>
                  <p>{todoItem.description}</p>
                  <small>{todoItem.date.toString()}</small>
                </li>
              })
            }
          </ul>
          <div align="right">
            <Image className={styles.icon} src="/addIcon.png" onClick={() => { setShowAddItemModal(true) }} width={60} height={60} />
          </div>
        </div>
        {showAddItemModal && <Modal  component={<div className={styles.modal}>
          <h3>Agregar una tarea</h3>
          <Form />
        </div>}
          onClose={() => { setShowAddItemModal(false) }} />}
      </main>
    </div>
  )
}
