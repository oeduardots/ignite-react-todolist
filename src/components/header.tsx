import { AiOutlinePlusCircle } from 'react-icons/ai'

import todoLogo from '../assets/todo-logo.svg'
import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={todoLogo}
        alt="Logo, um foguete decolando ao lado de um texto 'todo' nas cores azul e roxo"
      />

      <form className={styles.newTaskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}
