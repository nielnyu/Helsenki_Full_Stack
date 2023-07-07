const Form = (props) =>{
    return(
        <div>
            <form onSubmit = {props.onSubmit}>
                {props.subject} : <input placeholder= {props.placeholder} onChange = {props.onChange}/>
                <button type = "submit">{props.buttonName}</button>
            </form>
        </div>
    )
}

export default Form;