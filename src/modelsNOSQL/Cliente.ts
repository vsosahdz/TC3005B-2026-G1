import { modelOptions,prop,getModelForClass } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions:{
        collection:'clientes',
        timestamps:false // agregar dos atributos createdAt y updatedAt
    }
})

export class Cliente{
    @prop({required:true,trim:true})
    public nombre!:string;
    @prop({required:true,trim:true})
    public email!:string
}
export const ClienteModel = getModelForClass(Cliente);