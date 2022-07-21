import daoproducts from '../Dao/daoproducts'

/*
const getProduct = async (req, res) => {
    try{
        const id = parseInt(req.params.id) || await daoproducts.randomProductDao()
        const product = await daoproducts.getProductDao(id);
        res.json(product[0]);
    } catch (err) {
        console.log(err);
    }
}
*/

const getAllProducts = async (req, res) => {
    try{
        const products = await daoproducts.getAllProductsDao();
        res.json(products[0]);
    } catch (err) {
        console.log(err);
    }
}
/*
const radomProduct = async (req, res) => {
    try{
        const id = await daoproducts.randomProductDao()
        const product = await daoproducts.getProductDao(id);
        res.json(product[0]);
    } catch (err) {
        console.log(err);
    }
}   
*/
export default { getAllProducts}