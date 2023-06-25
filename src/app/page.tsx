import Image from 'next/image'
import getCurrentUSer from './actions/getCurrentUSer'
import getBlogs from './actions/getBlogs'

export default async function Home() {

  const currentUSer = await getCurrentUSer()
  const blogs = await getBlogs()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {blogs.map((item) => (
          <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <img src={item.imageSrc}/>
          </div>
          
        ))}
    </main>
  )
}
