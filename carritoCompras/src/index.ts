// inciar el servidor

import app from './app';

const port = 3000;

app.listen(port, ()=>{
    console.log(`aplicacion ejecutandose en el puerto ${port}`);
});

