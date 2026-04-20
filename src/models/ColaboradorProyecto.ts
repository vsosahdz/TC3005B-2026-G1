import {Model} from "sequelize";

interface ColaboradorProyectoAtributos{
    idProyectoColaboradorProyecto:number,
    idColaboradorColaboradorProyecto:number,
    tareaColaboradorProyecto:string
}

module.exports = (sequelize:any, DataTypes:any)=>{
    class ColaboradorProyectoModel extends Model<ColaboradorProyectoAtributos> implements ColaboradorProyectoAtributos{
        idProyectoColaboradorProyecto!:number;
        idColaboradorColaboradorProyecto!:number;
        tareaColaboradorProyecto!:string;
        static associate(models:any){
            //TO DO
        }
    }
    ColaboradorProyectoModel.init({
        idProyectoColaboradorProyecto:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            references:{
                model:'Proyecto',
                key:'idProyecto'
            }
        },
        idColaboradorColaboradorProyecto:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            references:{
                model:'Colaborador',
                key:'idColaborador'
            }
        },
        tareaColaboradorProyecto:DataTypes.STRING
    },{
        sequelize,
        modelName:'ColaboradorProyecto'
    });
    return ColaboradorProyectoModel
}