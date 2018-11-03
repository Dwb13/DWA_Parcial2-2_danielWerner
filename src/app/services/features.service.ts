import { Injectable } from '@angular/core';

@Injectable()
export class FeaturesService {

    public caracteristicas = ['Num: 001', 'Level: 10', 'Type: Fire', 'Ability: Kamehameha', 'Nickname: Dragoncito', 'Color: yellow']; 

    constructor(){}
    
    addFeature(_nameFeature:string) {
        this.caracteristicas.push(_nameFeature);
        return this.getFeatures();
    }

    deleteFeature(_i:number) {
        this.caracteristicas.splice(_i, 1);
        return this.getFeatures();
    }

    getFeatures() {
        return this.caracteristicas;
    }

}
