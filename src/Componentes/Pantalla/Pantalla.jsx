/* eslint-disable react/prop-types */
import "./Pantalla.css";
function Pantalla({ children }){
    return(
        <div className="pantalla_cal">
            {children}
        </div>
    );
}
export default Pantalla;