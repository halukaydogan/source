import styles from './index.module.css'

const Banner = (props) => {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            <span className={styles.title1}>Imtaki</span> 
            <span className={styles.title2}>Dukkanı</span> 
        </h1>

        <p className={styles.subTitle}>Yerel dukkanları keşfet</p>
         <button className={styles.button} onClick={props.handleOnClick}>{props.buttonText}</button>
    </div>
    )
}

export default Banner;