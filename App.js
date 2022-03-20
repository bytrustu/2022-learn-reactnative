import React, { useEffect, useState } from 'react'
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import DateHead from './components/DateHead'
import { formatYmd } from './utils/util'
import AddTodo from './components/AddTodo'
import Empty from './components/Empty'
import TodoList from './components/TodoList'
import todoStorage from './storages/todosStorage'

const App = () => {

  const [todos, setTodos] = useState([
    { id: 1, text: '작업환경 설정', done: true },
    { id: 2, text: '리액트 네이티브 기초 공부', done: true },
    { id: 3, text: '투두리스트 만들어보기', done: false },
  ])

  const onInsert = (text) => {
    const nextId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1
    const todo = {
      id: nextId,
      text,
      done: false,
    }
    setTodos([...todos, todo])
  }

  const onToggle = (id) => {
    const nextTodos = todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo)
    setTodos(nextTodos)
  }

  const onRemove = (id) => {
    const nextTodos = todos.filter(todo => todo.id !== id)
    setTodos(nextTodos)
  }

  useEffect(() => {
    todoStorage
      .get()
      .then(setTodos)
      .catch(console.error)
  }, [])

  useEffect(() => {
    todoStorage.set(todos).catch(console.error)
  }, [todos])


  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: 'padding' })}
          style={styles.avoid}
        >
          <DateHead date={formatYmd(new Date())} />
          {
            todos.length === 0 ? (
              <Empty />
            ) : (
              <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
            )
          }
          <AddTodo  onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  )

}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  avoid: {
    flex: 1,
  },
})


export default App
