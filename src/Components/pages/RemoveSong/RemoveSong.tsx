import "./RemoveSong.css";
import { useState } from "react";
import axios from "axios";
import { SongData } from "../../../model/SongData";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup} from "@mui/material";
import TextField, { TextFieldProps } from '@mui/material/TextField';
export function RemoveSong(): JSX.Element {
    const [songID,setID] = useState("");
    const [songData,setData] = useState<SongData>();
    const navigate = useNavigate();
    const [isRemoved,setRemoved] = useState(false);
    return (
        <div className="RemoveSong">
			<h1>Remove Song</h1><hr/>
            <div className="Box">
            <TextField label="youtube song id" variant="outlined" onChange={(args=>setID(args.target.value))}fullWidth></TextField>
                <ButtonGroup variant="contained" fullWidth> 
                <Button color="error" onClick={()=>{
                    axios.put(`http://localhost:8080/playlist/delete/1/${songID}`).then(()=>{
                        //todo properly inject list id
                        setRemoved(true)
                    })
                }}>remove</Button>

                        <Button color="warning" onClick={()=>{navigate("/")}}>back to list</Button>
                        </ButtonGroup><br />
                        {isRemoved&&<p className="Textiii">Song removed</p>}
                
                </div>
        </div>
    )
}
