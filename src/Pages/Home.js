import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const [issues, setIssues] = useState({})
  const [typing, setTyping] = useState('WCAG2AA')
  const navigate = useNavigate()
   
  const [isLoading, setLoading] = useState(false)
  const [isError,setError]=useState(false)
  const onOptionChange = (e) => {
    setTyping(pre => { return e.target.value })
  }
	
  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = e.target.urlAddress.value
    setError(false)
    setLoading(true)
        
    const response = await fetch(`http://localhost:5000/api/v1/test/?url=${url}&standerd=${typing}`)
    if (response.status !== 200) {
      setLoading(false)
      setError(true)
    }
    else {
      const falseData = await response.json()
     // console.log(falseData)
      setIssues(falseData)
      setLoading(false)
      setError(false)
      navigate('/result', { state: falseData })
    }
    
  }
  
	
  
    
  return (
    <div style={{ minHeight: '100vh' }} className="flex justify-center items-center">
      
      <div className='card w-[500px] bg-[#fefbe9] shadow-xl rounded-sm'>
        <div className='card-body'>
          <h3 className='text-xl mb-5'>Accessibility Tester</h3>
          <form onSubmit={e=>{handleSubmit(e)}}> 
          <div className='form-control'>
            <input className="outline-none rounded-sm input input-bordered input-info w-full max-w-xs" name='urlAddress' type='url' placeholder={"Enter a website address "} required ></input>
          </div>
          <h4 className='mt-3'>Please choose a standerd</h4>
          <div className='form-control'>
            <label className='label cursor-pointer justify-start' >
            <input type={"radio"} value='WCAG2A' id='WCAG2A' name='typing' checked={typing === 'WCAG2A'} onChange={e=>{onOptionChange(e)} } className="radio radio-accent"/>
            <span className='ml-3' htmlFor='WCAG2A'>WCAG2A</span>
            </label>
          </div>
          <div className='form-control'>
            <label className='label cursor-pointer justify-start'>
              <input type={"radio"} value='WCAG2AA' id='WCAG2AA' name='typing' checked={typing==='WCAG2AA' } onChange={e=>{onOptionChange(e)} } className="radio radio-accent"/>
              <span className='ml-3' htmlFor='WCAG2AA'>WCAG2AA</span>
            </label>
          </div>
          <div className='form-control'>
            <label className='label cursor-pointer justify-start'>
              <input type={"radio"} value='WCAG2AAA' id='WCAG2AAA' name='typing' checked={typing === 'WCAG2AAA'} onChange={e=>{onOptionChange(e)} } className="radio radio-accent"/>
              <span className='ml-3' htmlFor='WCAG2AAA'> WCAG2AAA</span>
            </label>
          </div>
          <div className='form-control'>
            <label className='label cursor-pointer justify-end'>
              <button type='submit' className='btn btn-success rounded-sm' >Search</button>
            </label>
          </div>
          </form>
          <div className='text-center'>

            {isLoading && <progress className='progress w-[250px] sm:w-[450px]'></progress>}
            {isError&& <p className='text-error'>There is a problem.Try again..</p>}
          </div>
          
        </div>

      </div>
          
    </div>
  )
}

export default Home
