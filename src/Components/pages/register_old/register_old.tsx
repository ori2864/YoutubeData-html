import "./register_old.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserDetails } from "../../../model/UserDetails";
import { useNavigate } from "react-router-dom";

export function Register_old(): JSX.Element {
      // const [id,setId] = useState(0);
    // const [email,setEmail] = useState("");

    const navigate = useNavigate();

    //declare our needed methods from react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm<UserDetails>();

    const onSubmit: SubmitHandler<UserDetails> = (data) => {
        console.log(data)
        //todo, move to axios :)
    }

    return (
        <div className="Register">
            <div className="Box">
                <h1>Register</h1><hr />
                {/* <input type="text" placeholder="user name..." onChange={(args)=>setEmail(args.target.value)}/><br/><br/> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="user name..." {...register("name",{required:true})}/>
                    <br /><br />
                    <input type="text" placeholder="user email..." {
                        ...register("email", {required:true})}/>
                    <br/>{errors.email && <span style={{color:"red"}}>Email is required</span>}
                    <br /><br />
                    <input type="password" placeholder="user password..." {
                        ...register("password",{required:true, minLength:5, maxLength:10})}/>
                    {errors.password?.type=="required" && <><br/><span style={{color:"red"}}>password is required</span></>}
                    {errors.password?.type=="minLength" && <><br/><span style={{color:"red"}}>password is too short</span></>}
                    {errors.password?.type=="maxLength" && <><br/><span style={{color:"red"}}>password is too long</span></>}
                    <br /><br />
                    <input type="password" placeholder="password check..."/>
                    <br /><br />
                    <input type="text" placeholder="user type..." {...register("userType")}/>
                    <br /><br />
                    <input type="text" placeholder="user tel..." {...register("tel")}/>
                    <br /><br />
                    <input type="text" placeholder="user location..." {...register("location")}/>
                    <br /><br />
                    <input type="text" placeholder="user genre..." {...register("genre")}/>
                    <br />  <br />
                    <hr />
                    <input type="submit" value="register" />
                    <input type="button" value="cancel" onClick={()=>{navigate("/")}}/>
                </form>
            </div>
        </div>
    );
}

// old code
// import "./Register.css";
// import { useState } from "react";
// import axios from "axios";
// import { SongData } from "../../../model/SongData";
// import { useNavigate } from "react-router-dom";
// import { UserDetails } from "../../../model/UserDetails";
// import { SubmitHandler, useForm } from "react-hook-form";
// export function Register(): JSX.Element {
//     const [userName, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [checkPass, setCheck] = useState("");
//     const [userType, setUserType] = useState("");
//     const [telephone, setTel] = useState("");
//     const [location, setLocation] = useState("");
//     const [genre, setGenre] = useState("");
//     const [songData, setData] = useState<SongData>();
//     const [isRegistered, setLog] = useState(false);
//     const navigate = useNavigate();
//     const { register, handleSubmit, formState: { errors } } = useForm<UserDetails>();

//     const onSubmit: SubmitHandler<UserDetails> = (data) => {
//         console.log(data)
//         //todo, move to axios :)
//     }
//     return (
//         <div className="Register">
//             <h1>Register</h1><hr />
//             <div className="Box">

//                 <form onSubmit={handleSubmit(onSubmit)}>
//                 <input type="text" placeholder="user name..." {...register("name",{required:true})}/>
//                     <br /><br />
//                     <input type="text" placeholder="user email..." {
//                         ...register("email", {required:true})}/>
//                     <br/>{errors.email && <span style={{color:"red"}}>Email is required</span>}
//                     <br /><br />
//                     <input type="password" placeholder="user password..." {
//                         ...register("password",{required:true, minLength:5, maxLength:10})}/>
//                     <br/>{errors.password && <span style={{color:"red"}}>password is required</span>}
//                     <br /><br />
//                     <input type="password" placeholder="password check..."/>
//                     <br /><br />
//                     <input type="text" placeholder="user type..." {...register("userType")}/>
//                     <br /><br />
//                     <input type="text" placeholder="user tel..." {...register("tel")}/>
//                     <br /><br />
//                     <input type="text" placeholder="user location..." {...register("location")}/>
//                     <br /><br />
//                     <input type="text" placeholder="genre..." {...register("genre")}/>
//                     <br />  <br />
//                     <hr />
//                     <input type="submit" value="register" />
                   

//                     <input type="submit" value="register" onClick={() => {
//                         if (password === checkPass) {
//                             let userDetails: UserDetails = new UserDetails(userName, email, password, userType, telephone, location, genre)
//                             axios.post(`http://localhost:8080/user/addUser/`, { userDetails }).then(() => {
//                                 console.log(email)
//                                 console.log(password)
//                                 console.log(userDetails)
//                                 setLog(true)
//                                 //todo user private enum or class
//                             })
//                         } else { console.log("not good") }
//                     }} />
//                 </form>
//                 {isRegistered && <p>registered successfully</p>}
//                 <input type="button" value="back to list" onClick={() => { navigate("/") }} />


//             </div>
//         </div>
//     )
// }

