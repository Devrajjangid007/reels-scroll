let reel_main = document.querySelector('.reel_main')
   
   
const reels = [
{
mute:true,
videoUrl: "1.mp4",
likeCount: 1200,
isLiked: true,
isUnliked: true,
commentCount: 85,
shareCount: 30,
userName: "devraj_j",
userImage: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
caption: "Exploring Bangalore streets. Loving the vibe!"
},
{
mute:true,
videoUrl: "2.mp4",
likeCount: 980,
isLiked: false,
isUnliked: true,
commentCount: 40,
shareCount: 12,
userName: "shivem_store",
userImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
caption: "New jewellery designs dropping soon!"
},
{
mute:true,
videoUrl: "3.mp4",
likeCount: 1500,
isLiked: true,
isUnliked: false,
commentCount: 110,
shareCount: 55,
userName: "jd_gaming",
userImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
caption: "CS2 clutch moments 🔥🔥"
},
{
mute:true,
videoUrl: "4.mp4",
likeCount: 760,
isLiked: false,
isUnliked: false,
commentCount: 22,
shareCount: 8,
userName: "deepraaj_design",
userImage: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
caption: "Modern interior design ideas."
},
{
mute:true,
videoUrl: "5.mp4",
likeCount: 2100,
isLiked: true,
isUnliked: false,
commentCount: 150,
shareCount: 70,
userName: "travel_vibes",
userImage: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
caption: "Sunset that touches the heart 💛"
},
{
mute:true,
videoUrl: "6.mp4",
likeCount: 540,
isLiked: false,
isUnliked: false,
commentCount: 18,
shareCount: 6,
userName: "foodie_world",
userImage: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
caption: "Crispy momos kinda day 😋"
},
{
mute:true,
videoUrl: "7.mp4",
likeCount: 3100,
isLiked: true,
isUnliked: false,
commentCount: 200,
shareCount: 90,
userName: "fitness_guru",
userImage: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
caption: "Never skip leg day 💪🔥"
},
{
mute:true,
videoUrl: "8.mp4",
likeCount: 670,
isLiked: false,
isUnliked: true,
commentCount: 12,
shareCount: 4,
userName: "coding_life",
userImage: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
caption: "Debugging = solving a mystery 🕵️‍♂️"
},
{
mute:true,
videoUrl: "9.mp4",
likeCount: 2500,
isLiked: true,
isUnliked: false,
commentCount: 130,
shareCount: 64,
userName: "street_shots",
userImage: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
caption: "Every street has a story 📸"
},
{
mute:true,
videoUrl: "5.mp4",
likeCount: 840,
isLiked: false,
isUnliked: true,
commentCount: 27,
shareCount: 11,
userName: "daily_quotes",
userImage: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
caption: "Small steps = big results."
}
];
   
   function allreel(){
let sum = '';
reels.forEach(function(elem , idx){

    sum = sum + `<div class="reel">
               

               <video 
                class="x-mejs advanced-controls lazyloaded"
                poster=""
                preload="metadata"
                loop
                ${elem.mute ? 'muted' : ''}
                
                autoplay
                src="${elem.videoUrl}">
              </video>


              <div class="mute" id="${idx}" >
              ${elem.mute ? '<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-fill"></i>'}
            

          </div>


                <div class="bottom">
                    <div class="bottom_head">
                        <span><img src="${elem.userImage}" class="user" alt="">${elem.userName}</span>
                        <button id="${idx}" class="follow">${elem.isUnliked ? 'Unfollow' : 'Follow'}</button>
                    </div>
                    <div class="caption">${elem.caption}</div>
                </div>


                <div class="right">
                    <div id="${idx}" class="like">
                        <div class="icon"> ${elem.isLiked ? '<i class="ri-heart-3-line"></i>' : '<i class="love ri-heart-3-fill"></i>'}  </div>
                        <div class="count">${elem.likeCount}</div>
                    </div>
                    <div class="icon_box">
                        <div class="icon"><i class="ri-chat-3-line"></i></div>
                        <div class="count">${elem.commentCount}</div>
                    </div>
                    <div class="icon_box">
                        <div class="icon"><i class="ri-share-forward-fill"></i></div>
                        <div class="count">${elem.shareCount}</div>
                    </div>
                    <div class="icon_box">
                        <div class="icon"><i class="ri-more-2-fill"></i></div>
                    </div>
                </div>            
            </div>`
            
        })
        reel_main.innerHTML= sum

   }


   reel_main.addEventListener('click',function(dats){
    if(dats.target.className == 'like'){
        if(reels[dats.target.id].isLiked){            
            reels[dats.target.id].likeCount++
            reels[dats.target.id].isLiked = false
        }
        else{
            reels[dats.target.id].likeCount--
            reels[dats.target.id].isLiked = true
        }        
        allreel()
    }

    if(dats.target.className == 'follow'){
        if(reels[dats.target.id].isUnliked){
            reels[dats.target.id].isUnliked = false
        }
        else{
            reels[dats.target.id].isUnliked = true            
        }       
        allreel()
    }
    
     if(dats.target.className == 'mute'){
        if(reels[dats.target.id].mute){
            reels[dats.target.id].mute = false
        }
        else{
            reels[dats.target.id].mute = true            
        }       
        allreel()
    }
    
    

   })


   allreel()
