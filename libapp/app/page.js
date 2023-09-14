import Image from 'next/image'

export default function Home() {
  return (
    <>
      <nav className="w-screen h-15 text-gray-300 bg-slate-600 space-x-6 flex items-center p-5 text-lg" >
        <Image className='logo ' src="/logo.png" width='44' height='64'></Image>
        <a className='' href=''>Home</a>
        <a className='' href=''>Video</a>
        <a className='' href=''>Notes</a>
       

        <a className=" absolute right-9" href=''>Login</a>

      </nav>
      <div><object data=
"note.pdf" 
                width="800"
                height="500">
        </object></div>
    </>
  )
}
