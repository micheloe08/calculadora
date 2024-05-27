import "./BotonClear.css";
// eslint-disable-next-line react/prop-types
function BotonClear({ children, clear }){
    return(
        <div className="botonClear" onClick={clear}>
            {children}
        </div>
    );
}
export default BotonClear;