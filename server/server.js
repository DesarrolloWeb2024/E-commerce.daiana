const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


app.get('/api/products', (req, res) => {
  const products = [
    { 
      id: 1, 
      name: 'Jean', 
      oldPrice: 40000, 
      price: 37000, 
      urlImg: 'https://i.pinimg.com/736x/5c/c2/19/5cc219fa3354e2534a6cf3ea226e0eb4.jpg'
    },
    {
      id: 2, 
      name: 'Vestido floreado',  
      oldPrice: 35000, 
      price: 30000, 
      urlImg: 'https://i.pinimg.com/originals/cc/83/c6/cc83c6d1e7c62ac2b52df6dfbf17b526.jpg' 
    },
    { 
      id: 3, 
      name: 'Conjunto',  
      oldPrice: 10000, 
      price: 9000, 
      urlImg: 'https://th.bing.com/th/id/R.caac9ddfd5c6a84bde31e93e7c0dcb5e?rik=q9mXfxp5fSheLw&pid=ImgRaw&r=0' 
    },
    { 
      id: 3, 
      name: 'Blusa',  
      oldPrice: 3500, 
      price: 2200, 
      urlImg: 'https://th.bing.com/th/id/OIP.EUsPsum5IyI5DcWXRgrxgAAAAA?rs=1&pid=ImgDetMain' 
    },
    
    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//ar.pinterest.com/pin/1055599905474809/