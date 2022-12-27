export function wincon(bdarr){
    const combinations=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,5,8],
        [2,4,6]
    ];
    //console.log(combinations);
    for(let i=0;i<8;i++){
        let [a,b,c]=combinations[i];
        if(bdarr[a]===bdarr[b] && bdarr[b]===bdarr[c] && bdarr[a]!=null){
            return {win:bdarr[a],winningcomb:[a,b,c],};
        }
     } 
     return {win:null,winningcomb:[],}
}