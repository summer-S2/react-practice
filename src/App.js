import './App.css';
import { useState } from 'react';
import Tasks from './components/Tasks';
import { RiDeleteBin6Fill } from 'react-icons/ri' ;   
import FilterButtons from './components/FilterButtons';
import Switcher from './components/Switcher';

const initialData = [
  {id: Math.random(), task: '아침먹기', completed: true},
  {id: Math.random(), task: '점심먹기', completed: false},
  {id: Math.random(), task: '저녁먹기', completed: false},
]

const filterMap = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed,
}
const filterName = Object.keys(filterMap);

export default function App() {
  const [tasks, setTasks] = useState(initialData);
  const [filter, setFilter] = useState('All');
  // const [isDark, setIsDark] = useState(false);

  function addTask(task) {
    const newTask = {id: Math.random(), task, completed: false};

    setTasks((prev) => (
      [...prev, newTask]
    ))
    console.log(tasks);
  }

  function deleteTask(id) {
    // 클릭된 버튼의 id랑 일치하지 않는 task만 리턴
    const newTask = tasks.filter(task => task.id !== id);
    setTasks(newTask);
  }

  function handleChange(id) {
    const newTask = tasks.map(task => {
      if(task.id === id) {
        return {...task, completed: !task.completed};
      }
      return task;
    })
    setTasks(newTask);
  }

  const filterbuttons = filterName.map(name => (
    <FilterButtons
      key={name}
      name={name}
      isPressed={filter === name}
      setFilter={setFilter}
    />
  ))

  // console.log(tasks.filter(filterMap[filter]));
  const tasksList = tasks.filter(filterMap[filter]).map(task => (
    <li key={task.id} className='relative flex items-center p-2'>
      <input className='hidden mr-2 cursor-pointer peer' id={task.id} type='checkbox' checked={task.completed} onChange={() => handleChange(task.id)} />
      {task.completed ? 
        <div className='relative w-4 h-4 bg-white mr-3 border'><div className='absolute left-1 w-2 h-3 border-gray-500 rotate-45 border-r-2 border-b-2'></div></div> : 
        <div className='w-4 h-4 bg-white mr-3 border'></div>
      }
      <label className='cursor-pointer peer-checked:line-through' htmlFor={task.id}>{task.task}</label>
      <button className='absolute right-0 top-1/3' onClick={() => deleteTask(task.id)} ><RiDeleteBin6Fill /></button>
    </li>
  ));
  // console.log(tasks)

  return (
    <>
      <div className='w-[400px] m-auto mt-10 rounded-3xl bg-white shadow-2xl shadow-gray-900 dark:bg-slate-600'>
        <Switcher />
        <div className='h-16 bg-[#EEEEEE] dark:bg-black flex justify-end px-2 rounded-t-3xl'>
          {filterbuttons}
        </div>
        <ul className='p-6 dark:text-white'>
          {tasksList}
        </ul>
        <Tasks 
          tasks={tasks}
          addTask={addTask}
        />
      </div>
    </>
  );
};

