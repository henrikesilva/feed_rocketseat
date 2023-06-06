import { useState } from 'react'
import { Avatar } from './Avatar'
import { Conment } from './Conment'
import styles from './Post.module.css'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'


export function Post({ author, publishedAt, content }) {
    
    const [conments, setConments] = useState([
        'Post muito bacana, hein',
    ])

    const [newConmentText, setNewConmentText] = useState('')

    const publishedDateFormated = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewConment() {
        event.preventDefault()

        setConments([...conments, newConmentText])
        setNewConmentText('')
    }

    function handleNewConmentChange() {
        event.target.setCustomValidity('')
        setNewConmentText(event.target.value)
    }

    function handleNewConmentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteConment(conmentToDelete) {
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
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
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