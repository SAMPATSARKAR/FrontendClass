// Simple Comment System - Under 30 lines
let comments = [], id = 1;
const input = document.getElementById('commentInput');
const btn = document.getElementById('postBtn');
const list = document.getElementById('commentsList');

btn.onclick = () => {
    const text = input.value.trim();
    if (!text) return alert('Please write a comment!');
    comments.push({id: id++, text, likes: 0, liked: false, replies: []});
    input.value = '';
    render();
};

function likeComment(id) { const c = comments.find(c => c.id === id); if (c) { c.liked = !c.liked; c.likes += c.liked ? 1 : -1; render(); } }
function replyToComment(id) { const reply = prompt('Write a reply:'); if (reply && reply.trim()) { const c = comments.find(c => c.id === id); if (c) c.replies.push({id: Date.now(), text: reply.trim(), likes: 0, liked: false}); render(); } }
function deleteComment(id) { comments = comments.filter(c => c.id !== id); render(); }

function render() {
    list.innerHTML = comments.length ? comments.map(c => `
        <div class="comment"><div class="comment-text">${c.text}</div>
        <div class="comment-actions">
            <button class="btn-small ${c.liked ? 'liked' : ''}" onclick="likeComment(${c.id})">👍 ${c.likes}</button>
            <button class="btn-small" onclick="replyToComment(${c.id})">💬 Reply</button>
            <button class="btn-small" onclick="deleteComment(${c.id})">🗑️ Delete</button>
        </div>${c.replies.length ? `<div class="replies">${c.replies.map(r => `<div class="reply"><div class="reply-text">${r.text}</div></div>`).join('')}</div>` : ''}</div>
    `).join('') : '<div style="text-align: center; color: #999; padding: 40px;">No comments yet!</div>';
}

render();
