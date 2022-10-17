import { City } from '../models/schemas/city.model';
import { CityDto } from '../models/dtos/city.dto';

export async function insert(city: CityDto) {
    const data = new City({
        name: city.name,
        description: city.description,
        province: city.province
    });
    const result = await data.save();
    return result;
}

export async function update(id: string, city: CityDto) {
    console.log("id: " + id);
    const data = await City.findByIdAndUpdate(id, city);
    return data;
}

export async function findAll() {
    const data = await City.find();
    return data;
}

export async function findById(id: string) {
    const data = await City.findById(id);
    return data;
}