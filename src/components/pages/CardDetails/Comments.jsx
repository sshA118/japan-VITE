import React, { useState, useEffect } from 'react';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        loadComments();
    }, []);
    // const UrlParams = async () =>{
    //     console.log(useLocation.pathname)
    // }
    // UrlParams()
    const loadComments = async () => {
        try {
            const response = await fetch('https://672a07666d5fa4901b6f7076.mockapi.io/comments');
            const data = await response.json();
            setComments(data);
        } catch (error) {
            console.error('Ошибка загрузки комментариев:', error);
        }
    };

    const deleteComment = async (id) => {
        try {
            await fetch(`https://672a07666d5fa4901b6f7076.mockapi.io/comments/${id}`, {
                method: 'DELETE',
            });
            loadComments();
        } catch (error) {
            console.error('Ошибка удаления комментария:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !commentText) {
            alert('Заполните имя и текст комментария.');
            return;
        }

        try {
            await fetch('https://672a07666d5fa4901b6f7076.mockapi.io/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    age,
                    text: commentText,
                }),
            });
            setName('');
            setAge('');
            setCommentText('');
            loadComments();
        } catch (error) {
            console.error('Ошибка отправки комментария:', error);
        }
    };

    return (
        <>
            
            <div className="container__comments">
                <div className="comments-list">
                    {comments.map((comment) => (
                        <div key={comment.id} className="comment-item">
                            <p><strong>Имя:</strong> {comment.name}</p>
                            <p><strong>Достопримечательность:</strong> {comment.age || 'Не указан'}</p>
                            <p><strong>Комментарий:</strong> {comment.text}</p>
                            <button onClick={() => deleteComment(comment.id)}>Удалить</button>
                        </div>
                    ))}
                </div>
                <div className="coments">
                    <h1>Оставьте свой комментарий</h1>  
                </div>  
                <div className="modal__comments">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ваше имя"
                            required
                        />
                        <input
                            type="text"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Про какую достопримечательность вы хотите написать"
                        />
                        <input
                            type="text"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder="Введите сам комментарий"
                            required
                        />
                        <button className="btn__form" type="submit">
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Comments;