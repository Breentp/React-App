import CircularProgress from '@mui/material/CircularProgress';
import Typography from "@mui/material/Typography";
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import "./About.css"

function About() {
    const about = {
        nombre: "Brenda Tiburcio",
        email: "brenda.tiburcio.31@gmail.com",
        descripcion: "Enthusiastically, sometime, overly",
    };

    return (
        <>
        <EmojiNatureIcon/>
        <Typography variant="h3"> About me</Typography>
        <div className="card-container">
            <h2> {about.nombre} </h2>
            <p> {about.email} </p>
            <p> {about.descripcion} </p>
        </div>
        ) : (
            <CircularProgress />
        )
        </>
    );
}

export default About;