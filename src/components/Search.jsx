import React, { useEffect, useState } from "react";
import { TextField, FormControl, Button, Grid, Typography } from "@mui/material";

export default function Search() {

    const [username, setUsername] = useState()
    const [userdata, setUserdata] = useState([]);
    const [repos, setRepos] = useState();
    const [showdetails, setShowdetails] = useState(false);

    const handleSearch = (uname) => {

        console.log(uname)
        fetch(`https://api.github.com/users/${uname}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setUserdata(data)
                console.log(userdata)
                fetch(`${data.repos_url}`)
                    .then(res => res.json())
                    .then(data => {
                        setRepos(data)
                        console.log(repos[0].name)
                    })
            })


        setShowdetails(true)
    }

    return (
        <>
            <Grid container sx={{ mt: 4 }}>
                <Grid item xs={12} md={8}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField value={username} onChange={(e) => setUsername(e.target.value)} id="outlined-basic" label="Username" variant="outlined" size="small" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button sx={{ m: 1 }} variant="contained" onClick={() => handleSearch(username)}>Search</Button>
                </Grid>
                {showdetails == false ? <></> :
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={6} md={4}>
                            <img src={userdata.avatar_url} width={120} style={{ border: '2px solid gray' }} />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Typography>Name: {userdata.name}</Typography>
                            <Typography>Username: {userdata.login}</Typography>
                            <Typography>Followers: {userdata.followers}</Typography>
                            <Typography>Repositories: {userdata.public_repos}</Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography>Newest Repositories:</Typography>
                            <Typography>{}</Typography>
                            <Typography>{}</Typography>
                            <Typography>{}</Typography>
                            <Typography>{}</Typography>
                        </Grid>
                    </Grid>
                }
            </Grid>
        </>
    )
}