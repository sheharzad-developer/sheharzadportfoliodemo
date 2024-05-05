import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Typography,
  makeStyles,
  Container,
  TextField,
  TextareaAutosize,
  Button,
  Input,
  Box,
  Grid,
  Link,
} from "@material-ui/core";
// import { meta } from "../../components/Content/Content";

const style = makeStyles((theme) => ({
  HireBackground: {
    backgroundColor: "#282C34",
    padding: "122px 0",
    [theme.breakpoints.down("lg")]: {
      padding: "60px 0",
    },
    [theme.breakpoints.down("md")]: {
      padding: "60px 0",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "60px 0",
    },
  },
  Container: {
    maxWidth: "1520px",
    [theme.breakpoints.down("lg")]: {
      width: "80px",
    },
    [theme.breakpoints.down("md")]: {
      width: "80px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80px",
    },
  },
  hireText: {
    fontSize: "55px",
    fontFamily: "Touche",
    color: "white",
    paddingBottom: "12px",
    textAlign: "center",
    [theme.breakpoints.down("lg")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  hireTitle: {
    fontFamily: "Arial",
    fontSize: "19px",
    color: "white",
    paddingBottom: "26px",
    textAlign: "center",
  },
  LinkedinText: {
    color: "white",
    textDecoration: "none",
  },
  InputText: {
    width: "550px",
    borderRadius: "16px",
    paddingBottom: "20px",
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8D8F98",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8D8F98",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8D8F98",
    },
    "& .MuiOutlinedInput-input": {
      color: "#fff",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "#fff",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#fff",
    },
    "& .MuiInputLabel-outlined": {
      color: "#fff",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "#fff",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#fff",
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  InputArea: {
    width: "550px",
    height: "120px",
  },
  SendButton: {
    width: "226px",
    height: "50px",
    backgroundColor: "#F9004D",
    fontSize: "12px",
    borderRadius: "6px",
    color: "#fff",
    display: "flex",
    margin: "0 auto",
    "&:hover": {
      backgroundColor: "#282C34",
      border: "1px solid white",
      borderRadius: "6px",
      transition: "1s",
    },
  },
  box: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  HireImg: {
    width: "300px",
    height: "300px",
    objectFit: "contain",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  form:{
    display:'grid',
    justifyContent:"CENTER",
  },
  HireImgBox: {
    display: "flex",
    alignItems: "center",
  },
  HireMe: {
    marginTop: "5rem",
    [theme.breakpoints.down("lg")]: {
      marginRight: "0",
      fontSize: "13px",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginRight: "0",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginRight: "0",
    },
  },
  LeftForm: {
    textAlign: "center",
    margin: "0 auto",
  },
  IconLi: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    paddingTop: "50px",
    justifyContent: "flex-start",
  },
  li: {
    padding: "0 30px 0 0",
    [theme.breakpoints.down("lg")]: {
      padding: "0 30px 0 0",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 30px 0 0",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 24px 0 0",
    },
  },
  facebookIcon: {
    width: "50px",
    height: "50px",
    lineHeight: "47px",
    fontSize: "16px",
    color: "#fff",
    borderRadius: "100%",
    textAlign: "center",
    border: "2px solid #fff",
    padding: "10px 10px",
    "&:hover": {
      backgroundColor: "#F9004D",
      transition: "1s",
    },
    [theme.breakpoints.down("lg")]: {
      width: "20px !important",
      height: "20px !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      height: "30px",
    },
  },
  instagramIcon: {
    width: "50px",
    height: "50px",
    lineHeight: "47px",
    fontSize: "16px",
    color: "#fff",
    borderRadius: "100%",
    textAlign: "center",
    border: "2px solid #fff",
    padding: "10px 10px",
    "&:hover": {
      backgroundColor: "#F9004D",
      transition: "1s",
    },
    [theme.breakpoints.down("lg")]: {
      width: "20px !important",
      height: "20px !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      height: "30px",
    },
  },
  linkedInIcon: {
    width: "50px",
    height: "50px",
    lineHeight: "47px",
    fontSize: "16px",
    color: "#fff",
    borderRadius: "100%",
    textAlign: "center",
    border: "2px solid #fff",
    padding: "10px 10px",
    "&:hover": {
      backgroundColor: "#F9004D",
      transition: "1s",
    },
    [theme.breakpoints.down("lg")]: {
      width: "20px !important",
      height: "20px !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      height: "30px",
    },
  },
  twitterIcon: {
    width: "50px",
    height: "50px",
    lineHeight: "47px",
    fontSize: "16px",
    color: "#fff",
    borderRadius: "100%",
    textAlign: "center",
    border: "2px solid #fff",
    padding: "10px 10px",
    "&:hover": {
      backgroundColor: "#F9004D",
      transition: "1s",
    },
    [theme.breakpoints.down("lg")]: {
      width: "20px !important",
      height: "20px !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      height: "30px",
    },
  },
}));

export const ContactUs = () => {
  const classes = style();
  const [loading, setLoading] = useState(false);
  const nameRef = useRef(null); // Define nameRef
  const emailRef = useRef(null); // Define emailRef
  const messageRef = useRef(null); // Define messageRef
  const messageAreaRef = useRef(null); // Define messageAreaRef

  useEffect(() => emailjs.init("cyhAdV4SulzwmwCXd"), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_6yg36kj";
    const templateId = "template_g9rsq16";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
      });
      alert("Email successfully sent, check inbox");
    } catch (error) {
      console.error("Failed to send email", error);
      alert("Failed to send email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className="form_group">
        <TextField
          ref={nameRef}
          id="name"
          required
          type="text"
          name="user_name"
          variant="outlined"
          label="First Name"
          id="standard-basic"
          className={classes.InputText}
          autoComplete="off"
        />
        <br />
      </div>
      <div className="form_group">
        <TextField
          required
          ref={emailRef}
          type="email"
          name="user_email"
          variant="outlined"
          label="Your Email"
          id="standard-basic"
          className={classes.InputText}
          autoComplete="off"
        />
        <br />
      </div>
      <div className="form_group">
        <TextField
          required
          ref={messageRef}
          type="text"
          name="message"
          variant="outlined"
          label="Write a Subject"
          id="standard-basic"
          className={classes.InputText}
          autoComplete="off"
        />
        <br />
      </div>
      <div className="form_group">
        <TextField
          required
          ref={messageAreaRef}
          type="text"
          name="message"
          variant="outlined"
          multiline
          rows={4}
          label="Your Message"
          id="standard-basic"
          className={classes.InputText}
          autoComplete="off"
        />
        <br />
      </div>
      <Button className={classes.SendButton} type='submit'>Send a message</Button>
    </form>
  );
};

export default ContactUs;
