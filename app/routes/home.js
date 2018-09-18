

module.exports = (app)=>{
    var controller = app.controllers.home;
   
    app.get('/', controller.index);
    app.get('/cursos', controller.cursos);

}