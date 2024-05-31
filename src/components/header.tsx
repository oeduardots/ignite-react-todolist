import { ChangeEvent, FormEvent, useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import todoLogo from '../assets/todo-logo.svg'
import styles from './header.module.css'

interface HeaderProps {
  onAddTask: (taskTitle: string) => void
}

export function Header({ onAddTask }: HeaderProps) {
  const [title, setTitle] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onAddTask(title)
    setTitle('')
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  return (
    <header className={styles.header}>
      <img
        src={todoLogo}
        alt="Logo, um foguete decolando ao lado de um texto 'todo' nas cores azul e roxo"
      />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}
