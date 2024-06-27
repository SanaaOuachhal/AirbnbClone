import { Listing } from "@/interfaces/listings";

export default {


    getAllByCategory: (category: string): Promise<Listing[]> =>{

        const categoryPath: string = category.replace(' ','').toLowerCase();
        return fetch('http://192.168.1.37:8080/api/listing/'+ categoryPath)
        .then(response =>  response.json());
        
      },

    getAllGeo: (): Promise<any> =>{

        return fetch('http://192.168.1.37:8080/api/listing/geo')
        .then(response => response.json())
        
    },
    getById: (id: string): Promise<Listing> =>{
      return fetch('http://192.168.1.37:8080/api/listing/details/'+id)
      .then(response => response.json())
      
   }
}
      
