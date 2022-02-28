import { useState } from 'react'
import List from './components/List'

export default function App() {
  return (
    <div>
      <h1>App</h1>
      <List initialItems={['public', 'list', 'template']} />
    </div>
  )
}
