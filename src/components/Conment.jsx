import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Conment.module.css'
import { Avatar } from './Avatar'

export function Conment({content}) {
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

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}