
// Adewumi Sunkanmi 2022
// 355. Design Twitter
// Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.

// Implement the Twitter class:

// Twitter() Initializes your twitter object.
// void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.
// List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.
// void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.
// void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.
 

// Example 1:

// Input
// ["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
// [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
// Output
// [null, null, [5], null, null, [6, 5], null, [5]]

// Explanation
// Twitter twitter = new Twitter();
// twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
// twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
// twitter.follow(1, 2);    // User 1 follows user 2.
// twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
// twitter.getNewsFeed(1);  // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
// twitter.unfollow(1, 2);  // User 1 unfollows user 2.
// twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.
 

// Constraints:

// 1 <= userId, followerId, followeeId <= 500
// 0 <= tweetId <= 104
// All the tweets have unique IDs.
// At most 3 * 104 calls will be made to postTweet, getNewsFeed, follow, and unfollow.


var Twitter = function() {
    this.tweetMap = {} // map the userId to the [tweet count and tweet id ]
    this.followMap = {}  // map userId to a Set of followerIds
    this.count =  0; // store the tweet count
   };
   
   /** 
    * @param {number} userId 
    * @param {number} tweetId
    * @return {void}
    */
   Twitter.prototype.postTweet = function(userId, tweetId) {
    if (!(userId in this.tweetMap)){
        this.tweetMap[userId] = []
    }
    this.tweetMap[userId].push([this.count, tweetId])
    this.count -= 1;
   };
   
   /** 
    * @param {number} userId
    * @return {number[]}
    */
   Twitter.prototype.getNewsFeed = function(userId) {
       let minPQ = new PriorityQueue()
       let result = [] // array of tweetIds
       if (!(userId in this.followMap)){
        this.followMap[userId] = new Set()
       }
       this.followMap[userId].add(userId)
       for(let follower of this.followMap[userId]){
           if (follower in this.tweetMap){
               let index =  this.tweetMap[follower].length - 1
               let [count, tweetId] = this.tweetMap[follower][index]
               minPQ.offer([count, follower, tweetId, index-1])
           }
       }
       
       while(minPQ.size() > 0 && result.length < 10){
         let  [count,follower, tweetId, index] = minPQ.poll()
         result.push(tweetId)
         let tweet = this.tweetMap[follower][index]
         if(index >=0){
             minPQ.offer([tweet[0],follower, tweet[1], index-1 ])
         }
       }
       return result
   };
   
   /** 
    * @param {number} followerId 
    * @param {number} followeeId
    * @return {void}
    */
   Twitter.prototype.follow = function(followerId, followeeId) {
    if (!(followerId in this.followMap)){
        this.followMap[followerId] = new Set()
    }
    this.followMap[followerId].add(followeeId)
   };
   
   /** 
    * @param {number} followerId 
    * @param {number} followeeId
    * @return {void}
    */
   Twitter.prototype.unfollow = function(followerId, followeeId) {
       if(this.followMap[followerId]){
           if(this.followMap[followerId].has(followeeId))
           this.followMap[followerId].delete(followeeId)
       }
   };
   
   /** 
    * Your Twitter object will be instantiated and called as such:
    * var obj = new Twitter()
    * obj.postTweet(userId,tweetId)
    * var param_2 = obj.getNewsFeed(userId)
    * obj.follow(followerId,followeeId)
    * obj.unfollow(followerId,followeeId)
    */
   
   
   
   class PriorityQueue {
       constructor(data) {
           this.comparator = (a, b) => a - b;
           this.data = [];
           this.heapify();
       }
       
       heapify() {
           if (this.size < 2) return;
           
           for (let i = 1; i < this.size(); i++) {
               this.bubbleUp(i);
           }
       }
       
       peek() {
           if (this.size() === 0) return null; 
           
           return this.data[0];
       }
       
       offer(value) {
           this.data.push(value);
           this.bubbleUp(this.size() - 1);
       }
       
       poll() {
           if (this.size() === 0) return null;
           
           const result = this.data[0];
           const last = this.data.pop();
           
           if (this.size() !== 0) {
               this.data[0] = last;
               this.bubbleDown(0);
           }
   
           return result;
       }
       
       bubbleDown(index) {
           const lastIndex = this.size() - 1;
           
           while (true) {
               let leftIndex = index * 2 + 1;
               let rightIndex = index * 2 + 2;
               let findIndex = index;
               
               if (leftIndex <= lastIndex && this.comparator(this.data[leftIndex][0], this.data[findIndex][0]) < 0){
                   findIndex = leftIndex;
               }
               
               if (rightIndex <= lastIndex && this.comparator(this.data[rightIndex][0], this.data[findIndex][0]) < 0) {
                   findIndex = rightIndex;
               }
               
               if (index !== findIndex) {
                   this.swap(index, findIndex);
                   index = findIndex;
               } else {
                   break;
               }
           }
           
       }
       
       bubbleUp(index) {
           
           while (index > 0) {
               let parentIndex = Math.floor((index - 1) / 2);
               
               if (this.comparator(this.data[index][0], this.data[parentIndex][0]) < 0) {
                   this.swap(index, parentIndex);
                   index = parentIndex;
               } else {
                   break;   
               }
           }
           
       }
       
       swap(index1, index2) {
           [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
       }
       
       size() {
           return this.data.length;
       }
       
       
   }


