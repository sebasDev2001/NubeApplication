import express from 'express';
//import allProductsRouter from './Routes/allproducts.routes';
import findProductRouter from './Routes/searchproduct.routes';
//import getProductRouter from './Routes/getproduct.routes';
//import RadomProductRouter from './Routes/products.routes';
import mainPageRouter from './Routes/mainpage.routes';
import ListView from './Routes/listview.routes';
import path from 'path';
import Cors from 'cors';
import FileUpload from './Routes/FileUpload.routes';
import multer from 'multer';
import os from 'os'
import fileUpload from 'express-fileupload';


const app = express();
const port = process.env.PORT || 5000;
const cors = Cors({ origin: "*"});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../Front/views'));
app.use(cors);
app.use(express.static(path.join(__dirname, '../Front/scripts')));
app.use(express.static(path.resolve(__dirname,'..','build')))
app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(allProductsRouter)

app.use(getProductRouter)
app.use(RadomProductRouter)
*/

app.use(ListView)
app.use(findProductRouter)
app.use(mainPageRouter)

app.post('/upload', fileUpload({
    createParentPath: true
}), async(req, res) => {
    console.log(Object.keys(res.files))
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = req.files.avatar;

            console.log('fallo')

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            await avatar.mv('./uploads/' + avatar.name)


            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err)
    }
    /*setTimeout(() => {
        console.log('file Upload')
        return res.status(200).json({ result: true, msg: 'file uploaded' });
    }, 3000)*/
});

app.delete('/upload', (req, res) => {
    console.log('file deleted')
    return res.status(200).json({ result: true, msg: 'file deleted' });
})

app.listen(port, () => console.log(`Server running on port ${port}`));

//sabra