import express, {NextFunction} from 'express';
import { Server, ic, query } from 'azle';
import {
    HttpResponse,
    HttpTransformArgs,
} from 'azle/canisters/management';
export type Cita={
    id_citas: number,
    fecha: Date,
    litros:number,
    total:number,
    metodoPago:string,
    estado:boolean,
    ubicacion:string
}
  
export default Server(
    () => {
        
        const app = express();
        app.use(express.json());

        let citas : Cita[] = [{
            id_citas:1,
            fecha: new Date(2024,10,23),
            litros: 100,
            total: 7000,
            metodoPago:'ckBTC',
            estado:false,
            ubicacion:'La Estación Rincón, Avenida Universidad 1001, El Potrero, 20400 Rincón de Romos, Ags.'
        }];

        app.get('/cita', (_req, res) => {
            res.json(citas);
        });

        function getNextId(): number {
            return Math.max(...citas.map(cita => cita.id_citas), 0) + 1;
        }
          // POST 
    app.post('/cita', (req ,res ) => {
        try {
        const {litros,total,metodoPago,estado,ubicacion} = req.body
        const nuevaCita: Cita ={ id_citas: getNextId(),
            fecha: new Date(),
            litros,
            total,
            metodoPago,
            estado,
            ubicacion
        };
        citas.push(nuevaCita);
        res.send("Cita Generada");
    } catch (error) {
        res.status(500).send("Error al crear cita: " );
    }
     
    });
     //UPTADE
     app.put('/cita/:id', (req, res) => {
        try {
        const id_ci = parseInt(req.params.id);
        const Cita = citas.find((Cita) => Cita.id_citas === id_ci);

        if (!Cita) {
            res.status(404).send("Not found");
            return;
        }
 
        const updatedCitas = { ...Cita, ...req.body };
        
        citas = citas.map((b) => b.id_citas === updatedCitas.id_ci ? updatedCitas : b);

        res.send("Cita Actualizada");
    }
    catch (error) {
                res.status(500).send("Error al actualizar cita: ");
    }
});
//DELETE
app.delete("/cita/:id", (req, res) => {
    try {
    const id_ci = parseInt(req.params.id);
    const Cita = citas.find((Cita) => Cita.id_citas === id_ci);

    if (!Cita) {
        res.status(404).send("Not found");
        return;
    }
    citas = citas.filter((Cita) => Cita.id_citas !== id_ci);
    res.send("Cita Eliminada");
    } catch (error) {
     res.status(500).send("Error al eliminar cita: ")
    }
    });



        
        app.post('/price-oracle', async (req, res) => {
            ic.setOutgoingHttpOptions({
                maxResponseBytes: 20_000n,
                cycles: 500_000_000_000n, // HTTP outcalls cost cycles. Unused cycles are returned.
                transformMethodName: 'transform'
            });

            const date = '2024-04-01';
            const response = await (await fetch(`https://api.coinbase.com/v2/prices/${req.body.pair}/spot?date=${date}`)).json();
            res.json(response);
        });

        app.use(express.static('/dist'));
        return app.listen();
    },
    {
        // The transformation function for the HTTP outcall responses.
        // Required to reach consensus among different results the nodes might get.
        // Only if they all get the same response, the result is returned, so make sure
        // your HTTP requests are idempotent and don't depend e.g. on the time.
        transform: query([HttpTransformArgs], HttpResponse, (args) => {
            return {
                ...args.response,
                headers: []
            };
        })
    }
);
