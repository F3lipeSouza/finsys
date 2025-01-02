const { DateTime } = require('luxon');
const date = DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss');
const  {  v4 : uuidv4  }  =  require ( 'uuid' ) ; 




const data = [{
    id : uuidv4(),
    date: date,
    title: 'freelancer de website',
    type: 'deposit',
    category: 'dev',
    amount: 6000,
},{
    id : uuidv4(),
    date: date,
    title: 'aluguel',
    type: 'withdraw',
    category: 'casa',
    amount: 1000,
},{
    id :'105',
    date: date,
    title: 'aluguel',
    type: 'withdraw',
    category: 'casa',
    amount: 1000,
}];

module.exports = { data };