class CommentSystem {
    constructor() {
        this.comments = JSON.parse(localStorage.getItem('comments')) || [];
        this.commentId = parseInt(localStorage.getItem('commentId')) || 1;
        this.replyId = parseInt(localStorage.getItem('replyId')) || 1;
        
        this.commentInput = document.getElementById('commentInput');
        this.postBtn = document.getElementById('postBtn');
        this.commentsList = document.getElementById('commentsList');
        
        this.initEventListeners();
        this.render();
    }

    initEventListeners() {
        this.postBtn.addEventListener('click', () => this.postComment());
        this.commentInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                this.postComment();
            }
        });
    }

    postComment() {
        const text = this.commentInput.value.trim();
        if (!text) {
            alert('Please write a comment!');
            return;
        }

        const comment = {
            id: this.commentId++,
            author: 'You',
            text: text,
            timestamp: new Date(),
            likes: 0,
            liked: false,
            replies: []
        };

        this.comments.unshift(comment);
        this.commentInput.value = '';
        this.saveToStorage();
        this.render();
    }

    deleteComment(id) {
        if (confirm('Are you sure you want to delete this comment?')) {
            this.comments = this.comments.filter(c => c.id !== id);
            this.saveToStorage();
            this.render();
        }
    }

    editComment(id) {
        const comment = this.comments.find(c => c.id === id);
        if (!comment) return;

        const editSection = document.querySelector(`#edit-${id}`);
        editSection.classList.toggle('show');

        if (editSection.classList.contains('show')) {
            const textarea = editSection.querySelector('textarea');
            textarea.value = comment.text;
            textarea.focus();
        }
    }

    saveEditComment(id) {
        const comment = this.comments.find(c => c.id === id);
        if (!comment) return;

        const textarea = document.querySelector(`#edit-${id} textarea`);
        const newText = textarea.value.trim();

        if (!newText) {
            alert('Comment cannot be empty!');
            return;
        }

        comment.text = newText;
        this.saveToStorage();
        this.render();
    }

    cancelEditComment(id) {
        const editSection = document.querySelector(`#edit-${id}`);
        editSection.classList.remove('show');
    }

    likeComment(id) {
        const comment = this.comments.find(c => c.id === id);
        if (!comment) return;

        if (comment.liked) {
            comment.likes--;
            comment.liked = false;
        } else {
            comment.likes++;
            comment.liked = true;
        }

        this.saveToStorage();
        this.render();
    }

    toggleReplyInput(id) {
        const replySection = document.querySelector(`#reply-input-${id}`);
        replySection.classList.toggle('show');
    }

    postReply(commentId) {
        const replySection = document.querySelector(`#reply-input-${commentId}`);
        const textarea = replySection.querySelector('textarea');
        const text = textarea.value.trim();

        if (!text) {
            alert('Please write a reply!');
            return;
        }

        const comment = this.comments.find(c => c.id === commentId);
        if (!comment) return;

        const reply = {
            id: this.replyId++,
            author: 'You',
            text: text,
            timestamp: new Date(),
            likes: 0,
            liked: false
        };

        comment.replies.push(reply);
        textarea.value = '';
        replySection.classList.remove('show');
        this.saveToStorage();
        this.render();
    }

    deleteReply(commentId, replyId) {
        if (confirm('Are you sure you want to delete this reply?')) {
            const comment = this.comments.find(c => c.id === commentId);
            if (comment) {
                comment.replies = comment.replies.filter(r => r.id !== replyId);
                this.saveToStorage();
                this.render();
            }
        }
    }

    editReply(commentId, replyId) {
        const comment = this.comments.find(c => c.id === commentId);
        if (!comment) return;

        const reply = comment.replies.find(r => r.id === replyId);
        if (!reply) return;

        const editSection = document.querySelector(`#reply-edit-${replyId}`);
        editSection.classList.toggle('show');

        if (editSection.classList.contains('show')) {
            const textarea = editSection.querySelector('textarea');
            textarea.value = reply.text;
            textarea.focus();
        }
    }

    saveEditReply(commentId, replyId) {
        const comment = this.comments.find(c => c.id === commentId);
        if (!comment) return;

        const reply = comment.replies.find(r => r.id === replyId);
        if (!reply) return;

        const textarea = document.querySelector(`#reply-edit-${replyId} textarea`);
        const newText = textarea.value.trim();

        if (!newText) {
            alert('Reply cannot be empty!');
            return;
        }

        reply.text = newText;
        this.saveToStorage();
        this.render();
    }

    cancelEditReply(replyId) {
        const editSection = document.querySelector(`#reply-edit-${replyId}`);
        editSection.classList.remove('show');
    }

    likeReply(commentId, replyId) {
        const comment = this.comments.find(c => c.id === commentId);
        if (!comment) return;

        const reply = comment.replies.find(r => r.id === replyId);
        if (!reply) return;

        if (reply.liked) {
            reply.likes--;
            reply.liked = false;
        } else {
            reply.likes++;
            reply.liked = true;
        }

        this.saveToStorage();
        this.render();
    }

    formatTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (seconds < 60) return 'just now';
        if (minutes < 60) return `${minutes}m ago`;
        if (hours < 24) return `${hours}h ago`;
        if (days < 7) return `${days}d ago`;
        return date.toLocaleDateString();
    }

    render() {
        if (this.comments.length === 0) {
            this.commentsList.innerHTML = '<div class="empty-state"><p>No comments yet. Be the first to comment!</p></div>';
            return;
        }

        this.commentsList.innerHTML = this.comments.map(comment => `
            <div class="comment" data-comment-id="${comment.id}">
                <div class="comment-header">
                    <div>
                        <span class="comment-author">${comment.author}</span>
                        <span class="comment-time">${this.formatTime(comment.timestamp)}</span>
                    </div>
                </div>
                <div class="comment-text">${this.escapeHtml(comment.text)}</div>
                <div class="comment-actions">
                    <button class="btn btn-small btn-like ${comment.liked ? 'liked' : ''}" onclick="commentSystem.likeComment(${comment.id})">
                        ❤️ Like ${comment.likes > 0 ? `(${comment.likes})` : ''}
                    </button>
                    <button class="btn btn-small btn-reply" onclick="commentSystem.toggleReplyInput(${comment.id})">
                        💬 Reply
                    </button>
                    <button class="btn btn-small btn-edit" onclick="commentSystem.editComment(${comment.id})">
                        ✏️ Edit
                    </button>
                    <button class="btn btn-small btn-delete" onclick="commentSystem.deleteComment(${comment.id})">
                        🗑️ Delete
                    </button>
                </div>

                <!-- Edit Section -->
                <div id="edit-${comment.id}" class="edit-section">
                    <textarea class="edit-textarea" placeholder="Edit your comment..."></textarea>
                    <div class="edit-buttons">
                        <button class="btn btn-small btn-primary" onclick="commentSystem.saveEditComment(${comment.id})">Save</button>
                        <button class="btn btn-small btn-cancel" onclick="commentSystem.cancelEditComment(${comment.id})">Cancel</button>
                    </div>
                </div>

                <!-- Reply Input Section -->
                <div id="reply-input-${comment.id}" class="reply-input-section">
                    <textarea class="reply-textarea-input" placeholder="Write a reply..." rows="3"></textarea>
                    <div class="reply-input-buttons">
                        <button class="btn btn-small btn-primary" onclick="commentSystem.postReply(${comment.id})">Post Reply</button>
                        <button class="btn btn-small btn-cancel" onclick="commentSystem.toggleReplyInput(${comment.id})">Cancel</button>
                    </div>
                </div>

                <!-- Replies Section -->
                ${comment.replies.length > 0 ? `
                    <div class="replies">
                        ${comment.replies.map(reply => `
                            <div class="reply" data-reply-id="${reply.id}">
                                <div class="reply-header">
                                    <span class="reply-author">${reply.author}</span>
                                    <span class="reply-time">${this.formatTime(reply.timestamp)}</span>
                                </div>
                                <div class="reply-text">${this.escapeHtml(reply.text)}</div>
                                <div class="reply-actions">
                                    <button class="btn btn-small btn-like ${reply.liked ? 'liked' : ''}" onclick="commentSystem.likeReply(${comment.id}, ${reply.id})">
                                        ❤️ ${reply.likes > 0 ? reply.likes : ''}
                                    </button>
                                    <button class="btn btn-small btn-edit" onclick="commentSystem.editReply(${comment.id}, ${reply.id})">
                                        ✏️ Edit
                                    </button>
                                    <button class="btn btn-small btn-delete" onclick="commentSystem.deleteReply(${comment.id}, ${reply.id})">
                                        🗑️ Delete
                                    </button>
                                </div>

                                <!-- Edit Reply Section -->
                                <div id="reply-edit-${reply.id}" class="reply-edit-section">
                                    <textarea class="reply-textarea" placeholder="Edit your reply..."></textarea>
                                    <div class="reply-edit-buttons">
                                        <button class="btn btn-small btn-primary" onclick="commentSystem.saveEditReply(${comment.id}, ${reply.id})">Save</button>
                                        <button class="btn btn-small btn-cancel" onclick="commentSystem.cancelEditReply(${reply.id})">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `).join('');

        this.saveToStorage();
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    saveToStorage() {
        localStorage.setItem('comments', JSON.stringify(this.comments));
        localStorage.setItem('commentId', this.commentId);
        localStorage.setItem('replyId', this.replyId);
    }
}

// Initialize the comment system
const commentSystem = new CommentSystem();
