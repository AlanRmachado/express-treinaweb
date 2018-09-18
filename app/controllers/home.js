var cursos = [
    {nome : 'NodeJS'}, {nome : 'TreinaWeb'}, {nome : 'Java'}, {nome : 'C#'}
];
module.exports = function(app){
    var controller = {
        index: function(req, res){
            res.json({message:'Ola'});
        },

        cursos : function(req, res){
            res.render('../views/index', cursos);
        }
    }

    return controller;
}