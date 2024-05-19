import { useState } from "react";
import "./AddSong.css";
import axios from "axios";
import { SongData } from "../../../model/SongData";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { ClassNames } from "@emotion/react";
export function AddSong(): JSX.Element {
    const [songID,setID] = useState("");
    const [songData,setData] = useState<SongData>();
    const [playlistID,setListID] = useState(0);
    const [response,setResponse] = useState(0);
    const navigate = useNavigate();
    
    return (
        <div className="AddSong">
			<h1>Add Song</h1><hr/>
            <div className="Box">
                <TextField  variant="outlined" placeholder="youtube song id" onChange={(args=>setID(args.target.value))}/>
                <ButtonGroup>
                <Button size="large" onClick={()=>{
                    //send command to backend, to get the song info
                    axios.get(`http://localhost:8080/song/get/${songID}`).then((result)=>{
                        console.log(result.data);
                        let songData:SongData = new SongData(
                            result.data.id,
                            result.data.name,
                            result.data.description,
                            result.data.imageURL
                        );
                        setData(songData);
                    })       
                }}>search</Button>
                </ButtonGroup>
                <hr/>
                <div className="Box">{songData?(<>
                    <h1>{songData?.name}</h1><hr/>
                    <img src={songData?.image} width={200}/><br/>
                    {songData?.desc}<br/><br/></>):<p></p>}
                    <TextField variant="outlined" fullWidth margin="normal" placeholder="list id to add song to" onChange={arg => setListID(Number(arg.target.value))} />
                
                    
                    {/* <ButtonGroup variant="contained" fullWidth>
                        <Button type="submit" color="primary" >login</Button>
                        <Button color="success" onClick={() => { navigate("/register") }}>register</Button>
                </ButtonGroup> */}
                 <ButtonGroup variant="contained" fullWidth>
                 <Button color="success" onClick={()=>{
                        console.log(response)
                        console.log(playlistID, songID)
                        axios.post(`http://localhost:8080/playlist/add/${playlistID}/${songID}`).then((response) => {
                            console.log("Song added successfully: ", response.data);
                            setResponse(1);
                        }).catch(error => {
                            console.error("Error adding song", error);
                            setResponse(2);
                        })
                    }}>add song to my list</Button>
                    </ButtonGroup><br/>
                    {response!=0 ?( response==1?<p className="textiii">song added successfully</p>:<p className="box">something went wrong</p> ): <p></p>}
                    
                </div>
            </div>
        </div>
    );
}
