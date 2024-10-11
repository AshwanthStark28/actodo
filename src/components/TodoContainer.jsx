import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"
function TodoContainer(){

    const[activityArr,setactivityArr] = useState([
        {
            id:1,
            activity:"Wake up at 5"
        },
        {
            id:2,
            activity:"Brush your teeth"
        },
        {
            id:3,
            activity:"Drink coffee"
        }
    ])

    return(
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr}/> 
                <TodoList activityArr={activityArr} setactivityArr={setactivityArr}/>
            </div>
        </div>
    )
}

export default TodoContainer