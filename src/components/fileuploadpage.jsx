import FileUpload from '../FileUpload/FileUpload'
import {useState} from 'react'
import FileList from '../FileUpload/FileList';
import '../App.css';


function FileUploadPage() {
    const [files,setFiles]= useState([{
      name: 'myfile.pdf'
    }])

    const removeFile = (filename) => {
      setFiles(files.filter(file=> file.name !== filename))
    }

    console.log(files)
    return (
      <div className='app'>
        <p className='tittle'> Subir Archivos</p>
        <FileUpload files ={files} setFiles = {setFiles} removeFile = {removeFile} />
        <FileList files={files} removeFile={removeFile}/>
      </div>
    );
}

export default FileUploadPage