import { FormEvent, ChangeEvent, useState, InvalidEvent } from 'react'
import { Avatar } from './Avatar'
import { Conment } from './Conment'
import styles from './Post.module.css'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'


interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;

}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType
}


export function Post({ post } : PostProps) {
    
    const [conments, setConments] = useState([
        'Post muito bacana, hein',
    ])

    const [newConmentText, setNewConmentText] = useState('')

    const publishedDateFormated = format(post.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewConment(event: FormEvent) {
        event.preventDefault()

        setConments([...conments, newConmentText])
        setNewConmentText('')
    }

    function handleNewConmentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewConmentText(event.target.value)
    }

    function handleNewConmentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteConment(conmentToDelete: string) {
        const conmentsWhitoutDeletedOne = conments.filter(conment => {
            return conment !== conmentToDelete
        })

        setConments(conmentsWhitoutDeletedOne)
    }

    const isNewConmentEmpty = newConmentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    }
                    else if (line.type === 'link') {
                        return (
                            <p key={line.content}>
                                <a href="">{line.content}</a>
                            </p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewConment} className={styles.conmentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='conment'
                    placeholder="Deixe um comentário"
                    value={newConmentText}
                    onChange={handleNewConmentChange}
                    onInvalid={handleNewConmentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewConmentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.conmentList}>
                {conments.map(conment => {
                    return (
                        <Conment 
                            key={conment}
                            content={conment} 
                            onDeleteConment={deleteConment} 
                        /> 
                    )
                })}
            </div>
        </article>
    )
}