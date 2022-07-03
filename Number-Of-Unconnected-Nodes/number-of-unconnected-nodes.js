/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var numberOfUnconnectedNodes = function(n , edges) {
    const par =new Array(n)
    const rank =new Array(n).fill(1)
    for(let i = 0; i< n;i++){
      par[i] = i
    }
    
    function findParent(n){
        let p = par[n]
        while(p !== par[p]){
            par[p] = par[par[p]] // path compression 
            p = par[p]
        }
        return p
    }
      
    function union(n1, n2){
        let p1 = findParent(n1)
        let p2 = findParent(n2)
        
        if(p1 === p2){
            return 0
        }
        
        if(rank[p1] >= rank[p2]){
            par[p2] = p1
            rank[p1] += rank[p2]
        }else{
            par[p1] = p2
            rank[p2] += rank[p1]
        }
        return 1
    }
    let res = n
    for(let i = 0; i< edges.length;i++){
      let n1 = edges[i][0]
      let n2 = edges[i][1]
      if(union(n1,n2)){
          res-=1
      }
    }

    return res
  };