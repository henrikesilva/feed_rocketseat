import { Avatar } from './Avatar'
import { Conment } from './Conment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/henrikesilva.png" />
                    <div className={styles.authorInfo}>
                        <strong>Henrique Lima</strong>
                        <span>Fullstack dev</span>
                    </div>
                </div>

                <time title="29 de Maio às 08:13" dateTime="2023-05-29 08:13:25">Públicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
                <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.conmentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.conmentList}>
                <Conment />
                <Conment />
                <Conment />
            </div>
        </article>
    )
}