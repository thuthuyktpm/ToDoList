import './footer.css'

const Footer = ({list,setTypelist}) =>{
    const handleActive =() =>{
        setTypelist(false)
    }
    const handleComplete =() =>{
        setTypelist(true)
    }
    const handleAll =() =>{
        setTypelist('')
    }
    return (
        <div className='footer'>
            <p>{list.length} Item left</p>
            <div className='but3'>
                <button className='but1' onClick={handleAll}>All </button>
                <button className='but1' onClick={handleActive}>Active </button>
                <button className='but1' onClick={handleComplete}>Complete </button>
            </div>
            <p>Complete</p>
        </div>
    )
}

export default Footer