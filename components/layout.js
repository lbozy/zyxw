import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name='Abahgroup';
export const siteTitle='Next.js sample website';

export default function Layout({children,home}){
    return (
        <div className={styles.container}>
        <Head>
            {/* <Link rel='icon' href="/favicon.ico"/> */}
            <meta
            name='description'
            content='Learn how to build personal website' />
            <meta property='og:image'
            content={'https://og-image.vercel.app/${encodeURI(siteTittle,)}.png?theme=light&md=0&fontSize=75px&image=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'}
            />
            <meta name='og:title' content={siteTitle}/>
            <meta name='twitter:card' content='summary_large_image'/>
        </Head>
        <header className={styles.header}>
           {home?(
            <>
                <Image
                priority src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt="" />
            <h1 className={utilStyles.heading2x1}>{name}</h1>
            </>
           ):(
            <>
                <Link href="/">
                    <a>
                        <Image
                        priority src="/images/profile.jpg"
                        className={utilStyles.borderCircle}
                        height={108}
                        width={108}
                        alt="" />
                    </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                    <Link href="/">
                        <a className={utilStyles.colorInherit}>{name}</a>
                    </Link>
                </h2>
            </>
           )} 
        </header>
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        )}
        </div>

    )
    
}