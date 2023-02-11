import React from 'react'
function escapeHtml(html) {
    return html.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;')
}
const Card = (props) => {
  const { message, context, code,selector } = props.item
  const { bgColor } = props
  //const pTag=
  return (
    <div className={`p-7 shadow-xl bg-white`}>
        
        
      <p className={`text-xl mb-2  `}>{message}</p>
      <hr/>
      {/* <xmp><code>{context}</code></xmp> */}
      {/* <textarea className={`w-full block h-32 bg-white`} readOnly style={{ border: 'none', resize: 'none', outline: 'none' }} value={context ? context : "No Code to show"} ></textarea> */}
      {/* <textarea className={`w-full block h-32 bg-white`} readOnly style={{ border: 'none', resize: 'none', outline: 'none' }} value={pTag} ></textarea> */}
      {/* <span className='bg-slate-500'>CODE: {code}</span> */}
      <p className='my-4'>Context: <code>{`${context?context:"No Code to show"}`}</code></p>
      <hr/>
      <p className='my-4 text-lg text-white p-2' style={{background:"#29BDC1"}}>
        <span style={{color:"#D84242"}}>Selector: </span> {selector}
      </p>
      <hr/>
      {/* <textarea className='bg-white w-full block h-12 px-2 md:h-6 text-sm' readOnly style={{ border: 'none', resize: 'none', outline: 'none' }}  value={"CODE: "+code?code:"No Code to show .."}></textarea> */}
      <p className='mt-4'>CODE: {`${code?code:"No Code to show .."}`}</p>
    </div>
  )
}

export default Card
const bgWarning = {
  background:"#ff9966"
}