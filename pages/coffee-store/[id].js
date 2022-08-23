import {useRouter}  from "next/router";
import Link         from "next/Link";
import Head         from "next/head";
import Image        from "next/image";
import styles       from "../../styles/coffee-store.module.css";

import coffeeStoresData from '../../data/coffee-stores.json'

export function getStaticProps(staticProps){
    const params = staticProps.params;
    return {
        props: {
            coffeeStore : coffeeStoresData.find(coffeeStore => {
                return coffeeStore.id === Number(params.id)
            })
        }
    }
}

export function getStaticPaths() {
    const paths = coffeeStoresData.map(coffeeStore => {
        return {
            params:{
                id: coffeeStore.id.toString()
            }
        }
    })
    return {
        paths,
        fallback    :   true
    }
}

const CoffeeStore = (props) => {
    const router = useRouter();

    
    if(router.isFallback){
        return <div>Loading...</div>
    }

    const   {id, name, imgUrl, websiteUrl, address, neighbourhood} = props.coffeeStore;

        return (
        <div className={styles.layout}>
            <Head>
              <title>{name}</title>
            </Head>
            <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src="/static/coffee-store/darkhorse-coffee.png"
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          />
        </div>

        <div className={styles.col2}>
          <p>{address}</p>
          <p>{neighbourhood}</p>
        </div>
      </div>
    </div>
    )

};

export default CoffeeStore;