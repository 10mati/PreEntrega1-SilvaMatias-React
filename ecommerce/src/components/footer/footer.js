import React from "react";
import { FaRegCopyright } from "react-icons/fa";



const Footer = () => {
    return (
        <footer className="footer mt-5  ">
             <div className="is-flex is-flex-direction-column is-align-items-center">
             <figure className="image is-128x128"> 
             <img className="my-6" src="data:image/png;base64,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"  alt="Logos redes"/> 
             </figure>
             <p className="mt-0"><FaRegCopyright />Silva Matias - Todos los derechos reservados - 2024</p>
             </div>
        </footer>

    )
}
export default Footer;