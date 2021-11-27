import React, { useContext } from "react" //useContext is a imported from from React. 

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import FormControl from '@mui/material/FormControl';

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import LockIcon from '@mui/icons-material/Lock';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { LanguageContext } from "../contexts/LanguageContext";
import '../styles/FormStyles.css';

const words = {
    english: {
        signIn: "Sign In",
        email: "Email Address",
        password: "Password",
        remember: "Remember Me"
    },
    french: {
        signIn: "Se Connecter",
        email: "Adresse Électronique",
        password: "Mot de Passe",
        remember: "Souviens-toi De Moi"
    },
    spanish: {
        signIn: "Registrarse",
        email: "Correo Electrónico",
        password: "Contraseña",
        remember: "Recuérdame"
    }
}

function Form(props) {

    const { languageValue, setLanguageFunc } = useContext(LanguageContext)

    const email = words[languageValue].email; //No idea how this works at all, searches the words object somehow. 
    const { signIn, password, remember } = words[languageValue];  //A destructured version of const email above, you could very easily have email in here too, just wanted a destructured and non-destructured version.

    return (
        <main >
            <Paper className="FormPaper">
                <Avatar className="avatar">
                    <LockIcon />
                </Avatar>
                <Typography variant="h5">
                    {signIn}
                </Typography>
                <Select value={languageValue} onChange={setLanguageFunc /*The function imported from LanguageContext above, the value this is set to is used in a setstate */} >
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="french">French</MenuItem>
                    <MenuItem value="spanish">Spanish</MenuItem>
                </Select>
                <form className="FormForm">
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">{email}</InputLabel>
                        <Input id="email" name="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">{password}</InputLabel>
                        <Input id="password" name="password" autoFocus />
                    </FormControl>
                    <FormControlLabel control={<Checkbox color="primary" />}
                        label={remember} />
                    <Button variant="contained" type="submit" color="primary" fullWidth>
                        {signIn}
                    </Button>
                </form>


            </Paper>
        </main>
    )
}

export default Form;