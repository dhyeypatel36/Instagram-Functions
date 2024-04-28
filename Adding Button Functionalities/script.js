//Complete this JS file to render the post1 on the screen with all the specified tags.
let post1 = {
    id: 1, 
    author: 'John',
    content: 'My first Post!', 
    likes: 10, 
    comments: ['Great post!', 'Nice photo!'], 
    image: 'https://files.codingninjas.in/image2-28694.jpg' };

function renderPosts(){
    const posts = document.getElementById('posts');

    const post = document.createElement('div');
    post.classList.add('post');
    posts.appendChild(post);

    const h3 = document.createElement('h3');
    post.appendChild(h3);
    h3.textContent = post1.author;

    const img = document.createElement('img');
    post.appendChild(img);
    img.src = post1.image;

    const p = document.createElement('p');
    post.appendChild(p);
    p.textContent = post1.content;

    const LikeButton = document.createElement('button');
    post.appendChild(LikeButton);
    LikeButton.textContent = 'Like';

    const inputText = document.createElement('input');
    post.appendChild(inputText);
    inputText.type = 'text';

    const commentButton = document.createElement('button');
    post.appendChild(commentButton);
    commentButton.textContent = 'Comment';

    const post_footer = document.createElement('div');
    post.appendChild(post_footer);
    post_footer.classList.add('post-footer');
    post_footer.innerHTML = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;

    const comments_container = document.createElement('div');
    post.appendChild(comments_container);
    comments_container.classList.add('comments-container');
    comments_container.style.display = 'none';

function commentsPrint(){
    const commArray = post1.comments;
    comments_container.style.display = 'block';
    commArray.forEach((com) => {
        const p1 = document.createElement('p');
        comments_container.appendChild(p1);
        p1.textContent = com;
    });
}

function AddedcommentsPrint(newComment){
    post1.comments.find((newCmt) => {
        if(newCmt === newComment){
            const p1 = document.createElement('p');
            comments_container.appendChild(p1);
            p1.textContent = newComment;
        }
    });
}

LikeButton.addEventListener('click' , () => {
    if(LikeButton.style.backgroundColor !== 'red'){
        LikeButton.style.backgroundColor = 'red';
        LikeButton.classList.add('like-button');
        const like = post1.likes.valueOf();
        post1.likes = like+1;
        post_footer.innerHTML = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;
    }else{ 
        post1.likes = post1.likes.valueOf()-1;
        LikeButton.style.backgroundColor = '';
        post_footer.innerHTML = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;
    }
});

commentsPrint();

//LIKE BUTTON 
post_footer.addEventListener('click' , () => {
    if(comments_container.style.display === 'none'){
        comments_container.style.display = 'block';
    }else{
        comments_container.style.display = 'none';
    }
});

//COMMENT BUTTON
commentButton.addEventListener('click' , () => {
    const text = inputText.value;
    if(text != ''){
        post1.comments.push(text);
        post1.length++;
        post_footer.innerHTML = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;
        inputText.value = '';
        AddedcommentsPrint(text);
    }
});

}

renderPosts();