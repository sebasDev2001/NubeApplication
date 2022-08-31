import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './fileUpload.scss'

const FileUpload = ({files,setfiles}) =>{
    const uploadHandler=()=>{

    }
    return(
        <>
            <div className="file-card">
                <div className="file-inputs">
                    <input type="file" />
                    <button>
                        <i>
                            <FontAwesomeIcon icon={faPlus} />
                        </i>
                        Actualizar
                    </button>
                    <p className="main">Archivos Permitidos</p>
                    <p className="info">PDF,JPG,VIRUS</p>
                </div>
            </div>
        </>
    )
}

export default FileUpload;
