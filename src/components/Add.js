import React, { useState } from 'react'
import { Wrapper } from './../elements/Wrapper'
import { useDispatch } from 'react-redux'

export default function Add() {

    const dispatch = useDispatch()
    const [todo, setTodo] = useState('')

    const date = () => {
        let today = new Date(),
            dd = today.getDate(),
            mm = today.getMonth()+1, 
            yyyy = today.getFullYear()
    
        if(dd<10) {
            dd='0'+dd;
        }
        if(mm<10) {
            mm='0'+mm;
        }

        return mm+'-'+dd+'-'+yyyy;
    }

    // Handlers
    const submitHandle = (e) => {
        e.preventDefault()
        if(todo.trim() === '') return;

        dispatch({
            type: 'ADD',
            payload: {
                text: todo,
                dueDate: date(),
                completed: false,
                deleted: false
            }
        })

        setTodo('')        
    }

    return (
        <Wrapper vertical>
            <form onSubmit={submitHandle}>
                <input 
                    placeholder="Enter task"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button>Add Task</button>
            </form>
        </Wrapper>
    )
}