import { Schema, model } from 'mongoose';

const citySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    province: {
        type: String,
        required: false
    }
});

const City = model('City', citySchema);

export { City };