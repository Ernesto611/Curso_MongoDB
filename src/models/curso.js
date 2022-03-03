import { Schema,model } from 'mongoose';

const rolSchema = new Schema({
    materia:{type: String, required:true},
    profesor:{type: String, required:true},
    status:{type: Boolean, required:true},
    cantalu:{type: Number, required:true},
},{
    versionKey:false//Quita el __v de la coleccion
});

export default model('curso',rolSchema)