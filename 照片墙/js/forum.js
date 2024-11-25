// 论坛相关功能
let posts = [];

// 加载帖子
async function loadPosts() {
    try {
        // 这里应该从后端API获取数据
        // 临时使用本地数据
        posts = [
            {
                id: 1,
                author: '用户1',
                content: '这是一个测试帖子',
                time: new Date(),
                likes: 0
            }
        ];
        renderPosts();
    } catch (error) {
        console.error('加载帖子失败:', error);
    }
}

// 渲染帖子列表
function renderPosts() {
    const postsContainer = document.getElementById('posts-list');
    postsContainer.innerHTML = posts.map(post => `
        <div class="post-item" data-id="${post.id}">
            <div class="post-header">
                <span class="post-author">${post.author}</span>
                <span class="post-time">${formatDate(post.time)}</span>
            </div>
            <div class="post-content">${post.content}</div>
            <div class="post-actions">
                <button onclick="likePost(${post.id})">
                    👍 ${post.likes}
                </button>
                <button onclick="replyToPost(${post.id})">
                    💬 回复
                </button>
            </div>
        </div>
    `).join('');
}

// 创建新帖子
function createPost() {
    const content = document.getElementById('newPost').value.trim();
    if (!content) {
        showMessage('请输入内容', 'error');
        return;
    }

    const newPost = {
        id: posts.length + 1,
        author: '当前用户',
        content: content,
        time: new Date(),
        likes: 0
    };

    posts.unshift(newPost);
    renderPosts();
    document.getElementById('newPost').value = '';
}

// 初始化论坛
document.addEventListener('DOMContentLoaded', loadPosts); 