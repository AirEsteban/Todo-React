import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import TodoList from './components/todoListComponent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='wrapper'>
      <h1 className='title'>TODO List</h1>
      <TodoList></TodoList>
    </div>
  )
}
