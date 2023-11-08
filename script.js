function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function addComment() {
    var comment = document.getElementById('new-comment').value;
    var commentsContainer = document.getElementById('comments');
    var newComment = document.createElement('div');
    newComment.className = 'comment';
    newComment.innerHTML = '<p>' + comment + '</p>';
    commentsContainer.appendChild(newComment);
    document.getElementById('new-comment').value = '';
}

function clearComments() {
    var commentsContainer = document.getElementById('comments');
    commentsContainer.innerHTML = '';
}