import { useMemo } from "react";
export const sortedProducts = (products:{name:string,file:string,rate:number,autor:string,discript:string,id:string}[],query:string) => {
    let result = new Array();
    if(!!query){
products.map((e:{})=>{
if(e.name.toLowerCase().includes(query.toLowerCase()))
result.push(e);   
}) 
return result;
    }
else
return products;
}
export const sortedByCosts = (products:{}[],costMin:number,costMax:number) =>
{
    let result:[]=[];
    products.map((e:any):any=>{
    if(e.cost<=costMax && e.cost>=costMin) 
    result.push(e);   
    })
    return result;
}


