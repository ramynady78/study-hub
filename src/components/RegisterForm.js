import emailjs from "emailjs-com"
import { useState } from "react";
import { Card } from "react-bootstrap";
import { register } from "../redux TK/slices/register-course";
import { useDispatch } from "react-redux";

function RegisterForm(props){
    const dispatch = useDispatch()
    const course = props.course
    const onCancle = props.onCancle;
    const onRegister = props.register;

    const clientNameRe = /[a-zA-Z]+(\s[a-zA-Z]+)/;
    const clientEmailRe = /^\w+@\w+.(com|ru|org|net|cloud)$/;
    
    const [userName ,setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [confirmedEmail, setConfirmedEmail] = useState("");
  
    
    
    const saveInputText = (event , set) =>{
        set(event.target.value);
        validateForm();
        setConfirmedEmail("")
    }
    const validateForm  = () => {
        const isNameValid = clientNameRe.test(userName);
        const isEmailValid = clientEmailRe.test(email);
        setIsValid(isNameValid  && isEmailValid);

    }
    const sendEmail = (e) => {
        e.preventDefault(); 
        
        const templateParams = {
            to_name: userName,
            to_email: email,                // Recipient's email from input
            from_name: "StudyHub Store",
            message: `
            Thank you for to register in course ...! `
        };
    
        emailjs
            .send(
                "service_re8gid2",  //  EmailJS service ID
                "template_bgaxa1q", //  EmailJS template ID
                templateParams,
                "RcmVDCsvxNx7bNONf"      //  EmailJS puplic key
            )
            .then(
                (response) => {
                    setConfirmedEmail("Confirmation email sent!"); 
                    dispatch(register(course));
                    onRegister();
                },
                (error) => {
                    console.error("Failed to send email:", error);
                    alert("Oops! Something went wrong.");
                }
            );
            
    };
    
    
    return (
      <Card  className= "register-form">
        <h2 className="head-register-form">{course.name}</h2>
        <form onSubmit={sendEmail}>
        <div className="inputs">
        <div className="mb-3">
          <label htmlFor="inputname" className="form-label" >Your Name</label>
          <input type="text" className="form-control" 
          placeholder="Your Name" id="inputname"
        //   value={userInfo.name}
          onChange={(event) => saveInputText(event , setUserName)}
          />
        </div>
     
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Email address</label>
          <input type="email" id="inputEmail"
          className="form-control" placeholder="Your Email"
           aria-describedby="emailHelp"
        //    value={userInfo.email}
           onChange={(event) => saveInputText(event , setEmail)}/>
        </div>
       
    
        </div>
        <div className="buttons">
        <button type="submit" 
        className="btn btn-primary m-2" disabled={!isValid}
        onClick={() => {
            document.querySelectorAll(".inputs input").forEach((input) => input.value = "");
            
        }}
        >Submit</button>
        <button 
        type="button" 
        className="btn btn-danger"
        onClick={onCancle}
        >Cancle</button>
        </div>

        <p className="confirmed-email">{confirmedEmail}</p>
      </form>
      </Card>
      
    );

}

export default RegisterForm;