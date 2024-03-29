import {useRef} from 'react'

function UseRefExample1() {
    const inputRef = useRef()
    const paraRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(inputRef.current.value)
        inputRef.current.value = "Heyy"
        inputRef.current.style.backgroundColor = 'purple'
    }

  return (
    <div>
        <form onSubmit={onSubmit}> 
            <label htmlFor='name'>Name</label> 
            <input type="text" ref={inputRef} className='form-control mb-2' />
            <button type='submit' className='btn btn-primary'>Submit</button>
            <p ref={paraRef} onClick={() => inputRef.current.focus()} className='mt-3'> Hellow </p>
        </form>
    </div>
  )
}

export default UseRefExample1