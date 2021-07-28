export class FishEyeApi {
    async getFishEyeData(){
        let response = await fetch("./src/db/FishEye.json") ;
        let data = await response.json();

        return data ;
        }
}