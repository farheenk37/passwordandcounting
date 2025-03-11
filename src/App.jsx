import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [allMovie, setallMovie] = useState([])
  let getMovie = () => {
    let apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
    axios.get(apiUrl)
      .then((ress) => {
        setallMovie(ress.data)
      })
      .catch((error) => {
        console.log(error)
      })




  }
  useEffect(() => {
    getMovie()
  }, [])



  return (
    <>
      <header className='bg-slate-200' >
        <h1 className='py-5 text-center text-[40px] font-bold'>Movie App </h1>
      </header>
      <form className='max-w-[1320px] py-6 mx-auto grid grid-cols-[20%_auto] items-center'>
        <label>Movie Search</label>
        <input type='text' className='h-16 border-[2px]' />
      </form>
      <div className='max-w-[1320px] mx-auto grid grid-cols-4 gap-5'>
        {allMovie.length > 0
          ?
          allMovie.map((items, index) => {
            return(
              <>
                <MovieItems data={items} />
              </>
            )
            
          })
          :
          'No Data Found'
        }

      </div>
    </>
  )
}

export default App

function MovieItems({data}){
  let {id,original_title,popularity,poster_path} = data
  return(
    // let staticUrl = `https://image.tmdb.org/t/p/w1280`;

  <div className='shadow-lg'>
  <h1>{id}</h1>

    <img src={ `${poster_path}`} alt=''/>
    <div className='flex justify-between p-6 bg-yellow-400'>
      <h3>{original_title}</h3>
      <p>{popularity}</p>
    </div>
  </div>
  )
}