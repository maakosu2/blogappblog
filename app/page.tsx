import Image from 'next/image'
import Posts from './components/Posts'

export default function Home() {
  return (
    <main className="px-6 flex justify-center  min-h-screen">
      <p className="m-12  text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Akosu Aondohemba Mandela</span>.
        </span>
      </p>
      <Posts/>
    </main>
  )
}
