import ElementController from './controller/ElementController';
import Button from './model/Button';

//@ Testar o backend antes de ir pro React

const ec = new ElementController(new Button());
ec.setColor('-primary');
console.log(ec.build());