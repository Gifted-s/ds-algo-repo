// Adewumi Sunkanmi 2022
// 211. Design Add and Search Words Data Structure
// Medium

// 5016

// 239

// Add to List

// Share
// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 

// Example:

// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True



var TrieNode = function() {
    this.children ={}
    this.endOfword = false;
};

var WordDictionary = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let cur = this.root;
    for(c of word.split("")){
        if(!(c in cur.children)){
            cur.children[c] = new TrieNode()
        }
        cur = cur.children[c]
    }
    cur.endOfword = true;
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    function dfs(j, root){
        let cur = root
        for (let i=j; i<word.length; i++){
        let c = word[i]
        if(c==="."){
            for(let child of Object.values(cur.children)){
               if(dfs(i+1, child)){
                   return true
               }
            }
            return false
            
        }else{
            if(!(c in cur.children)){
                return false
            }
            cur = cur.children[c]
        }
        
    }
       return cur.endOfword;
    }
    return dfs(0, this.root)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */