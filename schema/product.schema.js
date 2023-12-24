
//para validar el datos q manda el FontEnd
const Joi = require('joi');


//hacemos esquemas para cada campo
const id = Joi.string().uuid();//id es de tipo string y la valisacion
const name = Joi.string().alphanum().min(3).max(15);//las caracterisitcas del campo
const price = Joi.number().integer().min(10);


//creamos el esquema para la creacion
const createProductSchema = Joi.object({
  //para la creacion
  name: name.required(),// requeri el esquema definido para name, arriba !!!!!
  price: price.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
