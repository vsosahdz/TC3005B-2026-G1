import {DATE, Model} from "sequelize";

interface ColaboradorAtributos{
    idColaborador:number,
    nombreColaborador:string,
    rolColaborador:string,
    emailColaborador:string,
}

export enum ColaboradorRoles{
    ADMIN ='ADMIN',
    SUPERVISOR ='SUPERVISOR',
    DESARROLLADOR = 'DESARROLLADOR',
    QA = 'QA',
    CLIENTE = 'CLIENTE'
}

module.exports = (sequelize:any,DataTypes:any)=>{
    class ColaboradorModel extends Model<ColaboradorAtributos> implements ColaboradorAtributos{
        idColaborador!:number;
        nombreColaborador!:string;
        rolColaborador!:string;
        emailColaborador!: string;
        //Un colaborador pertenece a muchos proyectos
        static associate(models:any){
            ColaboradorModel.belongsToMany(models.Proyecto,{
                through: 'ColabProy'
            })
        }
    }
    ColaboradorModel.init({
        idColaborador:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
            unique:true
        },
        nombreColaborador:DataTypes.STRING,
        rolColaborador:{
            type:DataTypes.ENUM,
            values: Object.values(ColaboradorRoles),
            allowNull:false
        },
        emailColaborador:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        }
    },{
        sequelize,
        modelName:'Colaborador'
    });
    return ColaboradorModel;
}