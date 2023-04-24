import { Inter } from 'next/font/google'
import TodoList from './components/todoListComponent'
import Json from './components/JsonForms'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='wrapper'>
      <h1 className='title'>TODO List</h1>
      <TodoList></TodoList>
    </div>
  )
}
