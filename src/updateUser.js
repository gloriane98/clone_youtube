import { Stack,Button, IconButton,Grid, Avatar, Box,TextField, Typography} from '@mui/material'
import React , {useState, useEffect}from 'react'
import {PhotoCamera} from '@mui/icons-material';
import {useSnackbar } from 'notistack';
import axios from 'axios';



export default function SettingProfile() {
    const [name, setName] = useState("");
    const [facebook, setFaceook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [twitter, setTwitter] = useState("");
    const [message, setMessage] = useState("");
    const [picture,setPicture]=useState("");

    const handleusername = (event) => {
        const name = event.target.value;
        setName(name);
      };
    
      const handleFacebook = (event) => {
        const facebook = event.target.value;
        setFaceook(facebook);
      };
    
      const handleInsta = (event) => {
        const insta = event.target.value;
        setInstagram(insta);
      };
      const handleTwitter = (event) => {
        const twitter = event.target.value;
        setTwitter(twitter);
      };

 /*      const handlePicture=(event)=>{
        const picture= event.target.value;
        setPicture(picture);
      }
    const submitPicture=async(e) =>{
        e.preventDefault();
        const newPicture ={
            picture:picture
        };
        await axios
        .post(
          `import.meta.env.VITE_APP_URL/user/update`,
          JSON.stringify(newPicture)
        )
        .then((result) => {
          console.log(result);
        });
    } */
      const submitUser = async (e) => {
        e.preventDefault();
        const userdata = {
          name: name,
          facebook: facebook,
          instagram: instagram,
          twitter: twitter,
        };
        await axios
          .post(
            `import.meta.env.VITE_APP_URL/user/update`,
            JSON.stringify(userdata)
          )
          .then((result) => {
            setMessage(result.data.msg);
            console.log(result.data);
            console.log(result.data.msg);
          });
      };
    const styles={
        positionForm:{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center"
    
        }
    }
    
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant) => () => {
    enqueueSnackbar('This is a success message!', { variant });
  };

  return (
    <>
    
      <Stack 
      direction={{xs:"column-reverse", sm:"column", md:"row", lg:"row"}}
      spacing={2}
      pt={15}
      pl={{xs:"90px", sm:"30%",lg:"0%",md:"0%"}}
      >
          <Grid 
          container 
          spacing={2}
          
          direction="column"
          alignItems="center"
          sx={{width:"60vw"}}

         >
        <Typography 
        variant='h5'
        sx={{
            color:"#007464",
            fontWeight:"600",
        }}
           >Profile User</Typography>
            <Grid
            pt={2}>
                <Avatar sx={{ width: 200, height: 200 }}>

                </Avatar>
            </Grid>
            <Grid pt={2}>
               <form method='post' 
            //    onSubmit={submitPicture}
               >
                    <input 
                    accept="image/*" 
                    id="icon-button-file"
                    type="file" style={{ display: 'none' }}
                    // onChange={(e)=> handlePicture(e)}
                     />
                        <label htmlFor="icon-button-file">
                            <IconButton color="#007464" aria-label="upload picture"
                            component="span">
                            <PhotoCamera />
                            </IconButton>
                        </label>
               </form>
            </Grid>
          </Grid>
        <Box 
        flexDirection="column">
               {/* {message ? (
              <div className="text-success text-white">
                {" "}
                <h5>{message} </h5>
              </div>
            ) : (
              <></>
            )} */}
            <form 
            method='post'
            style={styles.positionForm}
            onSubmit={submitUser}>
                <TextField
                            required
                            id="name"
                            name="name"
                            placeholder='Name'
                            onChange={(e) => handleusername(e)}
                            sx={{backgroundColor:"#E4E4EC",
                            mb:"20px",
                            width:{ sm: 300, md: 300, xs:300, lg:400 },
                            "& .MuiInputBase-root": {
                                height: 40
                            } }}
                            >
                        </TextField>
                        <TextField
                         
                            id="fb"
                            type="Facebook"
                            name="facebook"
                            placeholder='Facebook'
                            onChange={(e) => handleFacebook(e)}
                            sx={{backgroundColor:"#E4E4EC",
                            mb:"20px",
                            width:{ sm: 300, md: 300, xs:300, lg:400 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }}}
                            >
                        </TextField>
                        <TextField
                            required
                            id="ig"
                            name="instagram"
                            placeholder="Instagram"
                            onChange={(e) => handleInsta(e)}
                            sx={{backgroundColor:"#E4E4EC",
                            mb:"20px",
                            width: { sm: 300, md: 300, xs:300, lg:400 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }}}
                            >
                        </TextField>
                        <TextField
                            required
                            id="tw"
                            name='twitter'
                            placeholder="Twitter"
                            onChange={(e) => handleTwitter(e)}
                            sx={{backgroundColor:"#E4E4EC",
                            mb:"20px",
                            width: { sm: 300, md: 300, xs:300, lg:400 },
                            "& .MuiInputBase-root": {
                                height: 40
                            }}}
                            >
                        </TextField>
                         <Button type="submit">Register</Button>
                </form>
        </Box>
      </Stack>
    </>
  )
}

/*
                <form style={styles.positionForm} >
                    <TextField
                        required
                        id="name"
                        placeholder='Maria Lozo'
                        sx={{backgroundColor:"#E4E4EC",
                        mb:"20px",
                        width:{ sm: 300, md: 300, xs:300, lg:300 },
                        "& .MuiInputBase-root": {
                            height: 40
                        } }}
                        >
                    </TextField>
                    <TextField
                        required
                        id="boutique"
                        placeholder="Maria couture"
                        sx={{backgroundColor:"#E4E4EC",
                        mb:"20px",
                        width: { sm: 300, md: 300, xs:300, lg:300 },
                        "& .MuiInputBase-root": {
                            height: 40
                        }}}
                        >
                    </TextField>
                    <TextField
                        required
                        id="password"
                        type="password"
                        placeholder='Mot de passe'
                        sx={{backgroundColor:"#E4E4EC",
                        mb:"20px",
                        width:{ sm: 300, md: 300, xs:300, lg:300 },
                        "& .MuiInputBase-root": {
                            height: 40
                        }}}
                        >
                    </TextField>
                    <Button 
                    alignItems="center"
                    variant="contained" 
                    type="submit"
                    sx={{
                    backgroundColor: "#D2282D",
                    color : "#fff",
                    borderRadius:"10px",
                    '&:hover':{
                    backgroundColor:"#fff",
                    color:"#D2282D"
                    }}}
                    >
                        Envoyer
                    </Button>
                </form>

} */