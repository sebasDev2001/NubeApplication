import express from 'express';
import allProductsRouter from './Routes/allproducts.routes';
import findProductRouter from './Routes/searchproduct.routes';
//import getProductRouter from './Routes/getproduct.routes';
//import RadomProductRouter from './Routes/products.routes';
import mainPageRouter from './Routes/mainpage.routes';
import ListView from './Routes/listview.routes';
import path from 'path';
import Cors from 'cors';


const cors = Cors({origin: '*'});


const app = express();
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../Front/views'));
app.use(Cors());
app.use(express.static(path.join(__dirname, '../Front/scripts')));
app.use(express.static(path.resolve(__dirname,'..','build')))
app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(allProductsRouter)
app.use(findProductRouter)
//app.use(getProductRouter)
//app.use(RadomProductRouter)
app.use(mainPageRouter)
app.use(ListView)


app.listen(port, () => console.log(`Server running on port ${port}`));

//sabra
