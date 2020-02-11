let fs = require('fs');

let templatesModules = require('./templateModule');

module.exports = (fileName = 'Page', componentName = 'Page') => {
   fs.mkdir(`./${fileName}`, { recursive: true }, (err) => {
      if (err) throw err;
   });

   fs.writeFile(`./${fileName}/${fileName}-view.jsx`, templatesModules.viewTemplate(componentName), function (err) {

      if (err) {
         return console.log(err.message)
      }

      console.log('Arquivo Criado');
   });


   fs.writeFile(`./${fileName}/${fileName}-state.jsx`, templatesModules.stateTemplate(componentName), function (err) {
      
      if (err) {
         return console.log(err.message)
      }
      
      console.log('Arquivo Criado');
   });

   fs.writeFile(`./${fileName}/${fileName}-container.jsx`, templatesModules.containerTemplate(fileName, componentName), function (err) {

      if (err) {
         return console.log(err.message)
      }

      console.log('Arquivo Criado');
   });
};