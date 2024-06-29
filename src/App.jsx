import { BrowserRouter as Router } from 'react-router-dom';
// import CSS
import './assets/css/index.scss';
import {AnimateRoutes} from "./routes/AnimateRoutes";

export default function App() {

  return (
    <Router basename = {process.env.PUBLIC_URL}>
        <AnimateRoutes />
    </Router>
  )
}