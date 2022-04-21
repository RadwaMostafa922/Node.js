const clientController = require('../controllers/client')

module.exports = (app)=>{
  app.get('/api/clients', clientController.apiGetAllClients)
// //
  app.post('/api/client', clientController.apiCreateClient)
// //
  app.put('/api/client/:id', clientController.apiUpdateClient)
// //
  app.delete('/api/client/:id', clientController.apiDeleteClient)
// //
  app.get('/api/client/:id', clientController.apiGetClientById)
}