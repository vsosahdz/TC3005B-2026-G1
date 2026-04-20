import {Model} from "sequelize";

interface ColaboradorProyectoAtributos{
    idProyectoCP:number,
    idColaboradorCP:number,
    tareaCP:string
}

module.exports = (sequelize:any, DataTypes:any)=>{
    class ColaboradorProyectoModel extends Model<ColaboradorProyectoAtributos> implements ColaboradorProyectoAtributos{
        idProyectoCP!:number;
        idColaboradorCP!:number;
        tareaCP!:string;
        static associate(models:any){
            //TO DO
        }
    }
    ColaboradorProyectoModel.init({
        idProyectoCP:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            references:{
                model:'Proyecto',
                key:'idProyecto'
            }
        },
        idColaboradorCP:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            references:{
                model:'Colaborador',
                key:'idColaborador'
            }
        },
        tareaCP:DataTypes.STRING
    },{
        sequelize,
        modelName:'ColabProy'
    });
    return ColaboradorProyectoModel
}