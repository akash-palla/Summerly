document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    const storyData = {
        'Phineas & Ferb': { pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749632769/phineas-ferb-revival_bz3fvb.jpg', stories: ['https://res.cloudinary.com/db4hiru80/image/upload/v1749622555/1920_04_PAF_S5_27x40_PREMIERE863559-691x1024_igytzh.jpg', 'https://res.cloudinary.com/db4hiru80/image/upload/v1749622589/Phineas_and_ferb_8_bzevd0.webp'] },
        'Doraemon': { pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749631981/q4jq5d2rojod1_b5vhca.png', stories: ['https://res.cloudinary.com/db4hiru80/image/upload/v1749629628/45c4eeda6269e709f7b9e4a3828c928270c8d334a20176010b3c19a8a12f2641._SX1080_FMjpg__k1k0jt.jpg'] },
        'Ben': { pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749632581/6833dd5f92bc04e64a60cc3bbded2391_lopezx.jpg', stories: ['https://res.cloudinary.com/db4hiru80/image/upload/v1749630143/MV5BYjgwY2I1ZTQtMWI5Zi00NGU3LWFjYTAtOGI2OWM4MGUxYWYwXkEyXkFqcGc_._V1__tvyolz.jpg'] },
        'Gwen': { pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749632406/21df9132-be57-4d10-9315-43584002e8f1_z0sodx.webp', stories: ['https://res.cloudinary.com/db4hiru80/image/upload/v1749630150/Game_Over_y3iswd.webp'] },
        'Max Tennyson': { pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749631487/Vo_max_poster1_aqqgtf.webp', stories: ['https://res.cloudinary.com/db4hiru80/image/upload/v1749631487/Vo_max_poster1_aqqgtf.webp'] },
        'Tom & Jerry': { pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749630231/tomjerry1_yaa2kj.jpg', stories: ['https://res.cloudinary.com/db4hiru80/image/upload/v1749630277/tom-and-jerry-duo-sticker-india-600x800_eshdck.webp'] },
        'Candace': { pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749622149/candace-flynn_ckpb09.webp', stories: ['https://res.cloudinary.com/db4hiru80/image/upload/v1749622634/64907680-5922-4692-9f6d-eb4b012cf1ed_ogdhba.avif'] },
        'Isabella': { pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749624621/IsabellaFull.JPG_up3y90.webp', stories: ['https://res.cloudinary.com/db4hiru80/image/upload/v1749622721/MixCollage-11-Mar-2024-04-10-AM-5521_k2hzqk.webp'] },
        'Doofenshmirtz': { pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749622210/Doofenshmirtz_Portrait_oo4uvr.webp', stories: ['https://res.cloudinary.com/db4hiru80/image/upload/v1749622767/doofenshmirtzfeatureimage_w98sf9.avif'] },
        'Perry': { pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749622267/Profile_-_Perry_the_Platypus.PNG_vps3ek.webp', stories: ['https://res.cloudinary.com/db4hiru80/image/upload/v1749622798/Perry-and-Dr.-Doofenshmirtzs-First-Battle-e1646905291960_baxyvt.avif'] },
        'Buford': { pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749622282/Profile_-_Buford_Van_Stomm.PNG_umnzzc.webp', stories: ['https://res.cloudinary.com/db4hiru80/image/upload/v1749624865/00-1180w_664h__sd1yfh.jpg'] }
    };
    const postData = [
        { id: 'post1', username: 'Phineas & Ferb', pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749632769/phineas-ferb-revival_bz3fvb.jpg', image: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749622523/phineas-ferb-season-five-61603865a7024e3388cbd0883142ae8e_zpntly.jpg', caption: 'Exams anni mugisipoye, Vacchenu Summer Vacation, Mana lanti pillala kalala pandaga selavulocchayi choodu..', likes: 1042, isLiked: false, comments: [{ user: 'Isabella', text: 'Whatcha doin\'?' }] },
        { id: 'post7', username: 'Gwen', pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749632406/21df9132-be57-4d10-9315-43584002e8f1_z0sodx.webp', image: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749630150/Game_Over_y3iswd.webp', caption: 'Ee Tingarodiki games aadatam kuda raadhu', likes: 412, isLiked: false, comments: [{ user: 'Ben', text: 'Gayyaali!!!😠' }] },
        { id: 'post4', username: 'Ben', pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749632581/6833dd5f92bc04e64a60cc3bbded2391_lopezx.jpg', image: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749633405/a-ben-10-scene-with-a-yugi-oh-track-cause-i-am-bored-v0-aGw5bzYzMXljOTljMaePMBTEAjcJrc9-fxoduFNdtH2dLdkGMMsP4rMigjck_tcab8h.webp', caption: 'Hero ki bhayam ante ento telidu!😎', likes: 2530, isLiked: false, comments: [{ user: 'Gwen', text: 'Don\'t mess this up, doofus!' }, { user: 'Max Tennyson', text: 'Stay safe out there, kiddo.' }] },
        { id: 'post2', username: 'Candace', pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749622149/candace-flynn_ckpb09.webp', image: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749622721/MixCollage-11-Mar-2024-04-10-AM-5521_k2hzqk.webp', caption: 'Ela aina veellani mom daggara irikinchaali😈', likes: 5, isLiked: false, comments: [{ user: 'Stacy Hirano', text: 'You go, girl!' }, { user: 'Jeremy Johnson', text: 'Looking Good, Candace' }] },
        { id: 'post8', username: 'Nobita Nobi', pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749629806/61WuOakG74L._AC_UF894_1000_QL80__lt5dgm.jpg', image: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749631473/time_machine_exciting_gadget_cg1zhn.webp', caption: 'Time machine lo future ki velli na maths exam pass aipothaaa!😌', likes: 2, isLiked: false, comments: [{ user: 'Doraemon', text: 'Not again, Nobita!' }, { user: 'Nobita Nobi', text: 'Nuvvu ala anaku doraemonnnnn😭😭!' }] },
        { id: 'post5', username: 'Doraemon', pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749631981/q4jq5d2rojod1_b5vhca.png', image: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749629595/doraemon-5k-1920x1080-13819_qqpkky.jpg', caption: 'Thank you India, For your support 🧡', likes: 987, isLiked: false, comments: [{ user: 'Nobita Nobi', text: 'India lo kuda naa lanti telivaina vallu unnaru anta doraemonnnn' }] },
        { id: 'post3', username: 'Doofenshmirtz', pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749622210/Doofenshmirtz_Portrait_oo4uvr.webp', image: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749622939/Heinz_making_Balloony_mzw7hn.webp', caption: 'Idhi balloon kaadhu na best friend, Happy Birthday my friend', likes: 1, isLiked: false, comments: [] },
        { id: 'post6', username: 'Tom & Jerry', pfp: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749630231/tomjerry1_yaa2kj.jpg', image: 'https://res.cloudinary.com/db4hiru80/image/upload/v1749632094/hq720_m6uqy5.jpg', caption: 'Milk is good for health', likes: 1245, isLiked: false, comments: [] }
    ];

    // --- DOM ELEMENT SELECTION ---
    const storiesContainer = document.getElementById('stories-container');
    const feed = document.getElementById('feed');
    const storyViewerContainer = document.getElementById('story-viewer-container');
    const storyViewerImage = document.getElementById('story-viewer-image');
    const storyViewerPfp = document.getElementById('story-viewer-pfp');
    const storyViewerUsername = document.getElementById('story-viewer-username');
    const closeStoryBtn = document.querySelector('.close-story-btn');
    const storyProgressBarsContainer = document.getElementById('story-progress-bars');
    const storyNavLeft = document.querySelector('.story-nav-left');
    const storyNavRight = document.querySelector('.story-nav-right');

    // --- STATE MANAGEMENT ---
    let viewedStories = new Set(JSON.parse(localStorage.getItem('viewedStories')) || []);
    let currentStoryUser = null;
    let currentStoryIndex = 0;
    let storyTimer;
    const storyUsernames = Object.keys(storyData);

    // --- RENDER FUNCTIONS ---
    const renderStories = () => {
        storiesContainer.innerHTML = '';
        storyUsernames.forEach(username => {
            const user = storyData[username];
            const storyDiv = document.createElement('div');
            storyDiv.classList.add('story');
            storyDiv.dataset.username = username;
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add('story-image-wrapper');
            if (viewedStories.has(username)) {
                imageWrapper.classList.add('viewed');
            }
            imageWrapper.innerHTML = `<img src="${user.pfp}" alt="${username}'s Story">`;
            storyDiv.innerHTML = `<p class="story-username">${username}</p>`;
            storyDiv.prepend(imageWrapper);
            storiesContainer.appendChild(storyDiv);
        });
    };

    const renderPosts = () => {
        feed.innerHTML = '<p class="loading-indicator">Loading feed...</p>';
        const postElements = postData.map(post => createPostElement(post));
        feed.innerHTML = '';
        postElements.forEach(el => feed.appendChild(el));
    };

    const createPostElement = (post) => {
        const article = document.createElement('article');
        article.classList.add('post');
        article.dataset.postId = post.id;
        const likeIconClass = post.isLiked ? 'fas' : 'far';
        
        article.innerHTML = `
            <header class="post-header">
                <img src="${post.pfp}" alt="Author" class="post-profile-pic">
                <span class="post-username">${post.username}</span>
            </header>
            <div class="post-image">
                <img src="${post.image}" alt="Post by ${post.username}">
                <i class="fas fa-heart dbl-click-heart"></i>
            </div>
            <footer class="post-footer">
                <div class="post-actions">
                    <i class="${likeIconClass} fa-heart like-button"></i>
                    <i class="far fa-comment comment-icon"></i>
                    <i class="far fa-paper-plane"></i>
                </div>
                <div class="post-likes"><span>${post.likes.toLocaleString()} likes</span></div>
                <div class="post-caption"></div>
                <div class="post-comments"></div>
                <div class="comment-form">
                    <input type="text" class="comment-input" placeholder="Add a comment...">
                    <button class="comment-btn">Post</button>
                </div>
            </footer>`;

        if (post.caption) {
            const captionContainer = article.querySelector('.post-caption');
            const user = document.createElement('strong');
            user.textContent = post.username;
            const text = document.createTextNode(` ${post.caption}`);
            captionContainer.append(user, text);
        }
        const commentsContainer = article.querySelector('.post-comments');
        post.comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            const user = document.createElement('strong');
            user.textContent = comment.user;
            const text = document.createTextNode(` ${comment.text}`);
            commentDiv.append(user, text);
            commentsContainer.appendChild(commentDiv);
        });
        return article;
    };

    // --- EVENT HANDLING ---
    const setupEventListeners = () => {
        feed.addEventListener('click', (e) => {
            const postElement = e.target.closest('.post');
            if (!postElement) return;
            const postId = postElement.dataset.postId;
            if (e.target.matches('.like-button')) {
                toggleLike(postId, postElement);
            }
            if (e.target.matches('.comment-icon')) {
                postElement.querySelector('.comment-input').focus();
            }
            if (e.target.matches('.comment-btn')) {
                const input = postElement.querySelector('.comment-input');
                if (input.value.trim() !== '') {
                    addComment(postId, input.value, postElement);
                    input.value = '';
                    e.target.classList.remove('active');
                }
            }
        });
        
        feed.addEventListener('dblclick', (e) => {
            const postImageContainer = e.target.closest('.post-image');
            if(postImageContainer) {
                const postElement = postImageContainer.closest('.post');
                const postId = postElement.dataset.postId;
                const heartIcon = postElement.querySelector('.dbl-click-heart');
                heartIcon.classList.add('active');
                setTimeout(() => heartIcon.classList.remove('active'), 1000);
                const post = postData.find(p => p.id === postId);
                if (post && !post.isLiked) {
                    toggleLike(postId, postElement);
                }
            }
        });

        feed.addEventListener('keyup', (e) => {
            if (e.target.matches('.comment-input')) {
                e.target.nextElementSibling.classList.toggle('active', e.target.value.trim() !== '');
            }
        });
        storiesContainer.addEventListener('click', (e) => {
            const storyElement = e.target.closest('.story');
            if (storyElement) {
                openStory(storyElement.dataset.username);
            }
        });
        closeStoryBtn.addEventListener('click', closeStory);
        storyNavLeft.addEventListener('click', prevStory);
        storyNavRight.addEventListener('click', nextStory);
    };

    // --- LOGIC FOR LIKES & COMMENTS ---
    const toggleLike = (postId, postElement) => {
        const post = postData.find(p => p.id === postId);
        if (!post) return;
        post.isLiked = !post.isLiked;
        post.likes += post.isLiked ? 1 : -1;
        const likeButton = postElement.querySelector('.like-button');
        likeButton.classList.toggle('fas', post.isLiked);
        likeButton.classList.toggle('far', !post.isLiked);
        postElement.querySelector('.post-likes span').textContent = `${post.likes.toLocaleString()} likes`;
    };

    const addComment = (postId, text, postElement) => {
        const post = postData.find(p => p.id === postId);
        if (!post) return;
        post.comments.push({ user: 'You', text: text });
        const commentsContainer = postElement.querySelector('.post-comments');
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        const user = document.createElement('strong');
        user.textContent = 'You';
        const textNode = document.createTextNode(` ${text}`);
        commentDiv.append(user, textNode);
        commentsContainer.appendChild(commentDiv);
    };

    // --- STORY VIEWER LOGIC ---
    const openStory = (username) => {
        currentStoryUser = username;
        currentStoryIndex = 0;
        viewedStories.add(username);
        localStorage.setItem('viewedStories', JSON.stringify([...viewedStories]));
        renderStories();
        playCurrentStory();
    };

    const closeStory = () => {
        clearTimeout(storyTimer);
        document.body.classList.remove('story-open');
        storyViewerContainer.classList.remove('active');
    };

    const playCurrentStory = () => {
        if (!currentStoryUser) return;
        document.body.classList.add('story-open');
        storyViewerContainer.classList.add('active');
        const user = storyData[currentStoryUser];
        const stories = user.stories;
        storyProgressBarsContainer.innerHTML = '';
        stories.forEach((_, index) => {
            const bar = document.createElement('div');
            bar.classList.add('progress-bar');
            const fill = document.createElement('div');
            fill.classList.add('progress-bar-fill');
            if(index < currentStoryIndex) {
                fill.style.transition = 'none';
                fill.style.width = '100%';
            }
            bar.appendChild(fill);
            storyProgressBarsContainer.appendChild(bar);
        });
        storyViewerImage.src = stories[currentStoryIndex];
        storyViewerPfp.src = user.pfp;
        storyViewerUsername.textContent = currentStoryUser;
        const currentFill = storyProgressBarsContainer.children[currentStoryIndex]?.firstElementChild;
        if(currentFill) {
            setTimeout(() => {
                currentFill.style.transition = 'width 5s linear';
                currentFill.style.width = '100%';
            }, 10);
        }
        clearTimeout(storyTimer);
        storyTimer = setTimeout(nextStory, 5000);
    };

    const nextStory = () => {
        const userStories = storyData[currentStoryUser].stories;
        if (currentStoryIndex < userStories.length - 1) {
            currentStoryIndex++;
            playCurrentStory();
        } else {
            const currentUserListIndex = storyUsernames.indexOf(currentStoryUser);
            if (currentUserListIndex < storyUsernames.length - 1) {
                openStory(storyUsernames[currentUserListIndex + 1]);
            } else {
                closeStory();
            }
        }
    };
    
    const prevStory = () => {
        if (currentStoryIndex > 0) {
            currentStoryIndex--;
            playCurrentStory();
        } else {
            const currentUserListIndex = storyUsernames.indexOf(currentStoryUser);
            if (currentUserListIndex > 0) {
                const prevUser = storyUsernames[currentUserListIndex - 1];
                openStory(prevUser);
                currentStoryIndex = storyData[prevUser].stories.length - 1;
                playCurrentStory();
            }
        }
    };
    
    // --- INITIAL PAGE LOAD ---
    renderStories();
    renderPosts();
    setupEventListeners();
});