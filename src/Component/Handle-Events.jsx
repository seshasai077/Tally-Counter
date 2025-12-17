import React , {Fragment, useState} from "react"

let TallyCounter = () => {

    let [state , setstate] = useState({
        count : 0
    })
// ---------------------------------- increment button --------------------------------------------------- //
    let increBButton = () => {
        setstate((state) =>{                                               
            return{  /* Curly braces {} = object literal.  Parentheses () = grouping. */ 
               count : state.count + 1
            }
        })
    }
//------------------------------------ decrementButton -----------------------------------------------------//
let decrementButton = () => {
    setstate((state) => {
        return{
            count : state.count - 1
        }

    })
}
//-------------------------------------- resetButton -------------------------------------------------------------//
let resetButton = () => {
    setstate((state) => {
        return{
            count : 0
        }
    })
}

    

    return(
        <Fragment>
            <body>
            <div className="container m-5 mx-auto">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <div className="card ">
                            <div className="card-header bg-primary">
                                <i class="fa-solid fa-list-ol text-white "></i><span className="text-white"> TALLY</span> <span className="text-white">COUNTER</span>
                            </div>
                            <div className="card-body p-4 fs-1">{state.count}</div>
                        <div className="card-footer">
                            <button className="btn btn-success m-1 text-white"  onClick={increBButton}>increment</button>
                            <button className="btn btn-warning m-1 text-white" onClick={decrementButton}>decrement</button>
                        </div>
                    </div>
                </div>
            </div>
</div>
{/* ------------------------------------------------------ resetButton------------------------------------------- */}
                <div class="d-flex justify-content-center "  >
                <button class="btn btn-danger text-white m-0" onClick={resetButton}>reset</button>
                </div>
               
           </body>
        </Fragment>

    )
}
export default TallyCounter