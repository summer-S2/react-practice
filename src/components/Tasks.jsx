import React, { useRef, useState } from 'react';

export default function Tasks({ addTask }) {
  const [task, setTask] = useState('');
  const inputEl = useRef(null);
  // console.log(task);

  function handleSubmit(e) {
    e.preventDefault();

    addTask(task);
    inputEl.current.focus();
    setTask('');
  }

  return (
    <div className='px-6 h-16 rounded-b-3xl bg-[#EEEEEE]  dark:bg-black'>
      <form 
        className='pt-3'
        onSubmit={handleSubmit}
      >
        <input 
          className='w-5/6 py-2 px-4 rounded-3xl dark:bg-slate-600'
          type="text" 
          placeholder='할 일을 추가하세요.'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          ref={inputEl}
        />
        <button
          className='w-1/6 p-2 dark:text-white font-bold'
          disabled={!task}
        >추가</button>
      </form>
    </div>
  );
}

