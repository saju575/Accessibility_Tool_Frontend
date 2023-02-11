import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../Components/Card'
const Result = () => {
   
	const { state: issues } = useLocation()

  	const [selected,setSelected]=useState('error')
    
  	const onSelectedChange = (e) => {
    
    	setSelected(pre=>{return e.target.id})
  	}
	return (
			<div className='bg-[#E6E5E8]'>
			<div className='container mx-auto pt-12 '>
				<h3 className='text-center text-xl mb-2'>Name: {issues?.name}</h3>
				<h3 className='text-center text-xl mb-5'>Website Url: {issues?.address}</h3>
          <div className='tabs flex justify-center'>
				<span id='error' className={`tab tab-bordered text-[#ff3333] text-2xl uppercase ${selected === 'error' && "tab-active"}`} onClick={(e)=>onSelectedChange(e)}>Error</span>
				<span id='warning' className={`uppercase text-[#ff9966] text-2xl tab tab-bordered ${selected==='warning'&&"tab-active borderWarning"}`} onClick={onSelectedChange}>Warning</span>
				{/* <span id='notice' className={`uppercase  text-2xl tab tab-bordered ${selected==='notice'&&"tab-active border-warning"}`} onClick={onSelectedChange}>Notice</span> */}
		</div>
			<hr className='mt-2'/>	
			<div>
					
			  {
				  selected==="error"&&issues?.error &&
					<div id="allIssues" className="container mx-auto py-12 px-2">
					{/* <h2 className="uppercase my-8 font-bold text-2xl">All Problems</h2> */}
						<div className="grid grid-cols-1  xl:grid-cols-2 gap-4 ">
						{issues?.error?.map((item,_id) => (
						  <Card key={_id} item={item} bgColor={'error'} />
						))}
						</div>
					</div>
				}
			  {
				  selected==="warning"&&issues?.warning &&
					<div id="allIssues" className="container mx-auto py-12 px-2">
					{/* <h2 className="uppercase my-8 font-bold text-2xl">All Problems</h2> */}
						<div className="grid grid-cols-1  xl:grid-cols-2 gap-4">
						{issues?.warning?.map((item,_id) => (
							<Card key={_id} item={item} bgColor={'warning'} />
						))}
						</div>
					</div>
			}
			{
				  selected==="notice"&&issues?.notice &&
					<div id="allIssues" className="container mx-auto py-12 px-2">
					{/* <h2 className="uppercase my-8 font-bold text-2xl">All Problems</h2> */}
						<div className="grid grid-cols-1  xl:grid-cols-2 gap-4">
						{issues?.notice?.map((item,_id) => (
							<Card key={_id} item={item} bgColor={'notice'} />
						))}
						</div>
					</div>
			}
          </div>
			</div>
			</div>
  )
}

export default Result
