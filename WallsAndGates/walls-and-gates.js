// Adewumi Sunkanmi 2022

// Description
// You are given a m x n 2D grid initialized with these three possible values.

// -1 - A wall or an obstacle.
// 0 - A gate.
// INF - Infinity means an empty room. We use the value 2^31 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
// Fill each empty room with the distance to its nearest gate. If it is impossible to reach a Gate, that room should remain filled with INF

export class Solution {
    /**
     * @param rooms: m x n 2D grid
     * @return: nothing
     */
    wallsAndGates(rooms) {
        let ROW = rooms.length
        let COL = rooms[0].length
        let INF = 2147483647
        let visited = new Set()// [r,c]
        let queue = [];
        for (let r = 0; r < ROW; r++) {
            for (let c = 0; c < COL; c++) {
               if(rooms[r][c]=== 0){
                queue.push([r,c])
               }
            }
        }
      let distance = 1
      while(queue.length>0){
          const size = queue.length;
          for(let i=0; i< size; i++){
              let pos = queue.shift()
              let r = pos[0]
              let c = pos[1]
              let right = [r, c+1] 
              let left = [r, c-1]
              let down = [r+1, c]
              let up = [r-1, c]
              // check bounds and other valid conditions before marking visited
                if(right[0]>=0 && right[1]>= 0 && right[0] <ROW && 
                 right[1]<COL && !visited.has([right[0],right[1]].toString()) &&
                 rooms[right[0]][right[1]] ===INF
                 ){ 
                    rooms[right[0]][right[1]] = distance
                    visited.add([right[0], right[1]].toString())
                    queue.push([right[0], right[1]])
                 }

                if(left[0]>=0 && left[1]>= 0 && left[0] <ROW && 
                 left[1]<COL && !visited.has([left[0],left[1]].toString()) &&
                 rooms[left[0]][left[1]] ===INF
                 ){
                    rooms[left[0]][left[1]] = distance
                    visited.add([left[0], left[1]].toString())
                    queue.push([left[0], left[1]])
                 }

                 if(down[0]>=0 && down[1]>= 0 && down[0] <ROW && 
                 down[1]<COL && !visited.has([down[0],down[1]].toString()) &&
                 rooms[down[0]][down[1]] ===INF
                 ){ 
                    rooms[down[0]][down[1]] = distance
                    visited.add([down[0], down[1]].toString())
                    queue.push([down[0], down[1]])
                 }

                 if(up[0]>=0 && up[1]>= 0 && up[0] <ROW && 
                 up[1]<COL && !visited.has([up[0],up[1]].toString()) &&
                 rooms[up[0]][up[1]] ===INF
                 ){
                    rooms[up[0]][up[1]] = distance
                    visited.add([up[0], up[1]].toString())
                    queue.push([up[0], up[1]])
                 }
          }
          distance+=1
      }
    }
}