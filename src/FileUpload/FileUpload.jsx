import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './fileUpload.scss'
import axios from 'axios'
import FormData from "form-data";


const FileUpload = ({files,setFiles, removeFile}) =>{
    const uploadHandler=(event)=>{
        const file = event.target.files[0];
        file.isUploading = true;
        setFiles([...files, file]);

        const formData = new FormData();
        formData.append(
            file.name,
            file,
            file.name 
        )

            
        axios.post('http://localhost:8080/upload', formData, {
        })
        .then((res)=> {
            file.isUploading = false;
            setFiles([...files, file])
        })
        .catch((err)=> {
            console.log(err)
            removeFile(file.name)
        })
    }
    return(
        <>
            <div className="file-card">
                <div className="file-inputs">
                    <input type="file" onChange={uploadHandler}/>
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
