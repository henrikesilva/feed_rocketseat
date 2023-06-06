import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Conment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Conment({ content, onDeleteConment }) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteConment() {
        onDeleteConment(content)
    }

    function handleLikeConment() {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.conment}>
            <Avatar hasBorder={false} src="https://github.com/henrikesilva.png" />

            <div className={styles.conmentBox}>
                <div className={styles.conmentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Henrique Lima</strong>
                            <time title="29 de Maio às 08:13" dateTime="2023-05-29 08:13:25">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteConment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeConment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}