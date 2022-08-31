import { Router } from 'express';
import path from 'path'
import React from 'react';
import { useState } from 'react';

const FileUpload = Router();

FileUpload.get('/FileUpload', function(req){
    return  (
        <div className='app'>
            <p className="tittle">Upload file</p>
        </div>
    );
})

export default FileUpload