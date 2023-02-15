module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/collection',
     handler: 'collection.collect',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/collection/investments',
      handler: 'collection.collectInvestments',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
