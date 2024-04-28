import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(recipieListArray:any[],searchKey:string): any[] {

    const result:any=[];

  if(!recipieListArray || searchKey==""){
    return recipieListArray;
  }
  else{
    recipieListArray.forEach((item:any)=>{
      //item==searchKey ? result.push(item)
      if(item.name?.toLowerCase().trim().includes(searchKey.toLowerCase().trim())){
        return result.push(item)
      }
    })
  }
    return result;
  }

}
