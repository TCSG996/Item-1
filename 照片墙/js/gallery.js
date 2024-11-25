// 照片墙相关功能
let gallery = [];

// 加载图片
async function loadGallery() {
    try {
        // 这里应该从后端API获取数据
        // 临时使用本地数据
        gallery = [
            {
                id: 1,
                url: 'https://picsum.photos/500/500',
                title: '示例图片',
                author: '用户1'
            }
        ];
        renderGallery();
    } catch (error) {
        console.error('加载图片失败:', error);
    }
}

// 渲染照片墙
function renderGallery() {
    const galleryContainer = document.getElementById('gallery-grid');
    galleryContainer.innerHTML = gallery.map(image => `
        <div class="gallery-item">
            <img src="${image.url}" alt="${image.title}">
            <div class="overlay">
                <h4>${image.title}</h4>
                <p>上传者: ${image.author}</p>
            </div>
        </div>
    `).join('');
}

// 上传图片
async function uploadImage() {
    const input = document.getElementById('imageUpload');
    const file = input.files[0];
    
    if (!file) {
        showMessage('请选择图片', 'error');
        return;
    }

    // 这里应该实现实际的图片上传逻辑
    // 临时模拟上传
    const newImage = {
        id: gallery.length + 1,
        url: URL.createObjectURL(file),
        title: file.name,
        author: '当前用户'
    };

    gallery.unshift(newImage);
    renderGallery();
    input.value = '';
}

// 初始化照片墙
document.addEventListener('DOMContentLoaded', loadGallery); 