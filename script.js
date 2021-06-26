
var userLikes = [0,0,0]
users= document.getElementsByClassName("user-likes")
function addLike(idx){
    userLikes[idx]++;
    users[idx].innerText= userLikes[idx] +" Likes"
}