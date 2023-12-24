const express = require('express');

const ProductsService = require('./../services/product.service');

//inportamos los esquemas y el validador
const validatorHandler = require('./../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schema/product.schema');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

//hacemos que el validador se ejecute antes de la respuesta a la peticion !
//al validador le mandamos que esquema queremos validar, este caso es "id", y en donde encontrara la informacion "params, body o query"
router.get('/:id', validatorHandler(getProductSchema, 'params'),async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    //aca llama al MID de error
    next(error);
  }
});

//al validador le mando, q quiero verificar y por donde va la info
router.post('/', validatorHandler(createProductSchema, 'body'), async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});


//es mu curioso xq primero balida el "ID" y luego "si tiene nombre y precio"
router.patch('/:id',validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'), async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }

});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
