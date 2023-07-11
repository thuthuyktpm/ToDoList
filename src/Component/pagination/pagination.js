import { useState, useEffect } from "react"
import React from 'react'
import "./pagination.css"

function Pagination({list , setCurrentList}) {
    const pages = 7
    const numberOfPages = []
    for (let i = 1; i <= pages; i++) {
        numberOfPages.push(i)
    }
    const [currentButton, setCurrentButton] = useState(1)
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([])
    const [itemPages]=useState(2)
    //const [currentPage,setCurrentPage]=useState(1)
    
    useEffect (() => {
        const indexOfLastPost=currentButton*itemPages;
        const indexOfFirstPost=indexOfLastPost-itemPages;
        const currentPosts=list.slice(indexOfFirstPost,indexOfLastPost);

        setCurrentList(currentPosts);
    },[currentButton,list])
  
    useEffect(() => {
        let tempNumberOfPages = [...numberOfPages]
        if(currentButton>=1&&currentButton<=3){
            tempNumberOfPages=[1,2,3,4,'...',numberOfPages.length]
        }
        else if (currentButton===4){
            const sliced=numberOfPages.slice(0,5)
            tempNumberOfPages=[...sliced,'...',numberOfPages.length]
        }
        else if(currentButton>4&&currentButton<numberOfPages.length-2){
            const sliced1=numberOfPages.slice(currentButton-2,currentButton)
            const sliced2=numberOfPages.slice(currentButton,currentButton-1)
            tempNumberOfPages=([1,'...',...sliced1,...sliced2,'...',numberOfPages.length])
        }

        setArrOfCurrButtons(tempNumberOfPages)
    }, [currentButton])
    return (
        <div>

            <div className="pagination-container">
                <a href='!#' className=""
                    onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}>
                    Prev
                </a>
                {arrOfCurrButtons.map((page,index) => {
                    return (
                        <a key={index} 
                        onClick={() => setCurrentButton(page)}
                            href='!#'
                            className={currentButton === page ? 'active':''}>{page}</a>
                    )
                })

                }


                <a
                    onClick={() => setCurrentButton((prev) => prev === numberOfPages.length ? prev : prev + 1)}>
                    Next</a>

            </div>
        </div>
    )
}

export default Pagination
