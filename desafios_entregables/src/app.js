import express from 'express'
import ProductManager from "./ProductManager.js"

const PORT = 8080;
const app = express();
app.use(express.urlencoded({ extended: true }));

const productManager = new ProductManager('./desafios_entregables/src/ProductFile.json');

app.listen(PORT, () => {
    console.log(`servidor funcionando en puerto ${PORT}`);
});

app.get('/products', async (req, res) => {
    const { limit } = req.query;

    const productList = await productManager.getProducts();

    if (!limit || limit >= productList.length) {
        return res.send({ productList });
    };

    const limitedList = productList.splice(0, limit);
    return res.send({limitedList});

})

app.get('/products/:pid', async (req, res) => {
    const { pid } = req.params;

    const productById = await productManager.getProductById(parseInt(pid));
    if(!productById){
        return res.send({error: 'el producto no existe'})
    }
    res.send({productById})
} )




















const agregarProductos = async () => {

    const producto1 = {
        title: 'ESTUCHE JOHNNIE WALKER 18 AÑOS 750 + DOS VASOS EDICIÓN LIMIT',
        description: `Se trata de una mezcla contemporánea y sutilmente ahumada que incorpora los sabores plenos característicos de JOHNNIE WALKER con carácter de Speyside, dulce y elegante. Tiene un sabor rico, oscuro e intenso que recompensa a los que se toman
    el tiempo para saborearlo. Johnnie Walker 18 Años es una mezcla compleja con capas profundas de sabor que equilibran a la perfección el carácter diverso de las distintas destilerías. "Es un sofiisticado Whisky para momentos especiales".`,
        price: 169710,
        thumbnail: 'Sin imagen',
        code: 'JW-18years-estuche',
        stock: 1
    };
    const producto2 = {
        title: 'JOHNNIE WALKER XR 21 AÑOS',
        description: `Inspirado en las notas de Sir Alexander Walker II, Johnnie Walker XR es una mezcla de whiskies raros, de la reserva exclusiva de Johnnie Walker, todos maduraron durante 21 años. Equilibrado y elegante, la nariz ofrece aromas de miel, especias para hornear y humo delicado. En boca ofrece notas de ralladura de naranja, frutas tropicales, caramelo, tabaco y pasas, con una columna vertebral sutil y turba.`,
        price: 96788,
        thumbnail: 'Sin imagen',
        code: 'JW-21years-xr',
        stock: 1
    };
    const producto3 = {
        title: 'JOHNNIE WALKER RED LABEL',
        description: `La mezcla es en parte arte y en parte ciencia. Es una habilidad de la Familia Walker desarrollada a lo largo de muchas generaciones. Etiqueta roja, con su combinación de whiskies claros de la oscura costa este de Escocia y whiskies de la punta de la costa oeste, creó una mezcla con una extraordinaria profundidad de sabor. El sabor viaja en toda su paladar para ofrecer una experiencia que ni siquiera otros whiskies no ordinarios pueden igualar.`,
        price: 14475,
        thumbnail: 'Sin imagen',
        code: 'JW-RedLabel-750',
        stock: 1
    };
    const producto4 = {
        title: 'JOHNNIE WALKER DOUBLE BLACK',
        description: `La última creación de Johnnie Walker es Double Black un destilado fascinante que busca desafiar a los más exigentes. Bajo una edición limitada, la casa de whisky más famosa presenta un 'Blended Premium' de fuerte personalidad. Johnnie Walker Double Black ha sido creado con turba de la costa occidental de Escocia, una manera de enfatizar las notas ahumadas de Black Label para conseguir una bebida más intensa. Se trata de un destilado para aquellos que aprecian el carácter de Johnnie Walker y buscan una mayor profundidad en el whisky.`,
        price: 32950,
        thumbnail: 'Sin imagen',
        code: 'JW-DoubleBlack-750',
        stock: 1
    };
    const producto5 = {
        title: 'JOHNNIE WALKER GOLD LABEL RESERVE',
        description: `JOHNNIE WALKER GOLD LABEL fue mezclado para celebrar los primeros 100 años de Johnnie Walker en 1920. Un secreto muy bien guardado que solo estuvo disponible fuera de la compañía desde los años noventa.Tiene un distintivo carácter suave, dulce y
    lujoso, con un estilo elegante y calidad refinada. Gold Label fue creado usando whiskies como el Clynelis para un sabor y una textura cremosa que aún conserva la característica firma humeante de JOHNNIE WALKER. Con su rico color dorado y antiguos reflejos de oro, que revelan un completo, rotundo y profundo aroma.Tiene toques de pasas de uva suave y caramelo, malta fresca y crema de leche, es tan atractivo como sensual. Su paladar es rico y amplio, con un pleno sabor de malta y especias, miel con almendras y mazapán, que conduce a una cremosidad distintiva. El Cardhu le proporciona una fuerte pero suave malta y sabores de roble. Los whiskeis extra escoceses de grano maduro le ofrecen una parte de la dulzura persistente, mientras que el Clynelish de la sierra norte es responsable de una cremosidad aromática inusual. El acabado es multi-dimensional y satisfactoriamente duradero.`,
        price: 62110,
        thumbnail: 'Sin imagen',
        code: 'JW-GoldLabel-750',
        stock: 1
    };
    const producto6 = {
        title: 'JOHNNIE WALKER BLUE LABEL',
        description: `Johnnie Walker Blue Label era el whisky reservado a la realeza, se trata de un blended de whiskys de malta (vatted) excepcional y singular, embotellado y sellado a mano. En su fórmula intervienen 16 whiskies diferentes, todos ellos con una crianza de entre 21 y 50 años en barrica, que se dice pronto. Algunas de las destilerias del Johnnie Walker etiqueta azul que se comercializa ahora ya no existen, lo que lo convierte en un objeto de culto, en un whisky extraordinario, elegante e irrepetible. Grado Alcohólico: 40º Elaboración: Envejecimiento de 21 a 50 años.`,
        price: 247190,
        thumbnail: 'Sin imagen',
        code: 'JW-BlueLabel-750',
        stock: 1
    };
    const producto7 = {
        title: 'JOHNNIE WALKER SWING',
        description: `Johnnie Walker Swing es un whisky, Blended, elaborado a partir de una mezcla de 35 maltas y whiskies de grano seleccionados. La combinación de cerca de 35 whiskies de malta y de grano, dan a este whisky un tono oro viejo y una dulzura casi perfumada. Esta basado en la receta original del Extra Special Old Highland Whisky. Origen: Escocia. 18 años de envejecimiento.`,
        price: 65900,
        thumbnail: 'Sin imagen',
        code: 'JW-Swing-750',
        stock: 1
    };
    const producto8 = {
        title: 'JOHNNIE WHITE WALKER BY GAME OF THRONES',
        description: `El whisky White Walker es una edición limitada, una mezcla de dos whisky escocés de malta de las destilerías Cardhu y Clynelish en el norte de Escocia. Lo mejor es cuando la botella se pone en el congelador, para darle al whisky la temperatura ideal, la icónica tinta pigmentada termocrómica blanca y azul de la botella de 750 ml brilla, un guiño a los colores emitidos por los ojos de los malvados caminantes blancos de GOT.`,
        price: 55760,
        thumbnail: 'Sin imagen',
        code: 'JW-GOT-750',
        stock: 1
    };
    const producto9 = {
        title: 'JOHNNIE WALKER GREEN LABEL',
        description: `Cuatro años después de su remoción del mercado, Johnnie Walker Green Label vuelve a estar disponible a nivel mundial. Según indicó la marca, la decisión se tomó como respuesta a la demanda popular por el producto. Johnnie Walker lanzó este blend en 2005 para reemplazar al Pure Malt, y fue en 2012 cuando la empresa discontinuó su venta (con excepción de Taiwan). Ahora, se puede adquirir en todo el mundo, y en nuestro país en Bebiendo Estrellas.El Green Label es un blend de whiskies de maltas provenientes de diferentes regiones, como Speyside, Highland, Lowland e Island, combinación que le otorga el carácter de un single malt pero con un sabor más amplio. “Lo que buscamos al realizar el blend es lograr que los aromas se tornen más pronunciados y vibrantes, permitiéndonos formar una mezcla con una profundidad de carácter tal, que no sería posible obtener a partir de un whisky de una sola malta”, explicó Jim Beveridge, Master Blender de Johnnie Walker.`,
        price: 103690,
        thumbnail: 'Sin imagen',
        code: 'JW-GreenLabel-750',
        stock: 1
    };
    const producto10 = {
        title: 'JOHNNIE WALKER BLACK LABEL',
        description: `Con sus orígenes en la década de 1870 el Whisky Añejo Especial, JOHNNIE WALKER BLACK LABEL se convirtió en "ETIQUETA NEGRA" en 1909. Es considerado por los expertos como la última instancia en whisky escocés de lujo, es el punto de referencia por el cual se miden todos los demás.Cada botella de ETIQUETA NEGRA ha estado dos décadas en planificación y utiliza whisky de las mejores destilerías de toda Escocia añejadas en las mejores barricas de whisky. Cada whisky es madurado de una forma ligeramente diferente, debido a las complejidades de la madera, el clima y la ubicación. La habilidad del Maestro Mezclador está en la mezcla de estos whiskies para crear un whisky con una extraordinaria gama de sabores. Un enfoque permanente en la calidad y el estilo ha dado lugar a JOHNNIE WALKER ETIQUETA NEGRA para ganar numerosos premios. Hoy en día la mezcla sigue siendo tan rica y suave como lo fue cuando el hijo de John Walker y su nieto fueron Maestros Mezcladores. Fue llamado "una obra maestra, el David de Miguel Ángel del arte del mezclado, el mejor en su categoría" por Charles Maclean, escritor de whisky y autor de "El Savoy, el Everest de los whiskies de lujo" y por Jim Murray, autor de 'La Biblia del Whisky".`,
        price: 29880,
        thumbnail: 'Sin imagen',
        code: 'JW-BlackLabel-750',
        stock: 1
    };

    await productManager.addProduct(producto1);
    await productManager.addProduct(producto2);
    await productManager.addProduct(producto3);
    await productManager.addProduct(producto4);
    await productManager.addProduct(producto5);
    await productManager.addProduct(producto6);
    await productManager.addProduct(producto7);
    await productManager.addProduct(producto8);
    await productManager.addProduct(producto9);
    await productManager.addProduct(producto10);

}

