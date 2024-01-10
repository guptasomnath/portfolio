export const tabList = [
    { id : 1, href : "/", name : "Projects" },
    { id : 2, href : "/blogs", name : "Blogs" }
]

export const isTabNameExist = (tabName : string) : boolean => {
   
    for(let i = 0; i < tabList.length; i++){
      if(tabName.toLowerCase() === tabList[i].name.toLowerCase()){
        return true;
      }
    }

    return false;

}