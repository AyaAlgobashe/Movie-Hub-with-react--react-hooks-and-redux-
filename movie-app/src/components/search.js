import { useRef } from "react";

function Search(props) {
    const { handleSearchMovie } = props;
    const inputRef=useRef();
    const searchMovie=()=>{
       const targetMovie= inputRef.current.value;
       handleSearchMovie(targetMovie)
        
    }

    return (
        <div className="container" style={{ padding: "10px", position: "relative", marginBottom: "5%" ,width:"40%"}}>
            <h2>Search</h2>
            <div className="input-group input-group-lg "  >
                <span className="input-group-text" id="inputGroup-sizing-xlg"
                    style={{ fontSize: "20px", backgroundColor: " rgb(65, 65, 23)", color: "white" }}
                    onClick={searchMovie} >
                    <i className="bi bi-search"
                    ></i>
                </span>
                <input type="text" className="form-control"
                 aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg "
                 style={{ backgroundColor: "rgb(221, 221, 120)" }} ref={inputRef} 
                 onChange={searchMovie} />
            </div>

        </div>
    )
}
export default Search