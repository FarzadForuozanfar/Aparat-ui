import ReactDOM from "react-dom/client";
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './index.css';
import theme from './theme';
import { ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </>
);