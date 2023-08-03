import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'    // this is the existing file, due to which the existing css was showing a black background

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header/>

    {/* <div className='container min-h-screen mx-auto bg-red-600'>container</div> */}

    <Component {...pageProps} />
    <Footer/>
    </>
  )
}
