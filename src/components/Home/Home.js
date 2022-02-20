import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HomeCarousel from './HomeCarousel'
import CompanyMovies from './collection/CompanyMovies';
import Stars from './Stars/Stars';

function Home() {
  const [Trendings, setTrendings] = useState("")
  const [TopNetfly, setTopNetfly] = useState("")
  const [TopSeries, setTopSeries] = useState("")
  const [Family, setFamily] = useState("")
  const [Comedy, setComedy] = useState("")
  const [Action, setAction] = useState("")
  const [Drama, setDrama] = useState("")
  const [Romantic, setRomantic] = useState("")
  const [Music, setMusic] = useState("")
  const [Horror, setHorror] = useState("")
  const [ScienceFiction, setScienceFiction] = useState("")


  const getTrendings = async () => await axios.get(`/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false`).then(res => setTrendings(res.data.results))
  const getTopNetfly = async () => await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_watch_monetization_types=free`).then(res => setTopNetfly(res.data.results))
  const getTopSeries = async () => await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false`).then(res => setTopSeries(res.data.results))
  const getFamily = async () => await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=16&with_watch_monetization_types=flatrate`).then(res => setFamily(res.data.results))
  const getComedy = async () => await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&&include_adult=false&include_video=false&with_genres=35`).then(res => setComedy(res.data.results))
  const getAction = async () => await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&&include_adult=false&include_video=false&with_genres=28`).then(res => setAction(res.data.results))
  const getDrama = async () => await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&&include_adult=false&include_video=false&with_genres=18`).then(res => setDrama(res.data.results))
  const getRomantics = async () => await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&&include_adult=false&include_video=false&with_genres=10749`).then(res => setRomantic(res.data.results))
  const getMusic = async () => await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&&include_adult=false&include_video=false&with_genres=10402`).then(res => setMusic(res.data.results))
  const getHorror = async () => await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&&include_adult=false&include_video=false&with_genres=27`).then(res => setHorror(res.data.results))
  const getScienceFiction = async () => await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&&include_adult=false&include_video=false&with_genres=878`).then(res => setScienceFiction(res.data.results))

  useEffect(() => {
    getTrendings();
    getTopNetfly();
    getTopSeries();
    getFamily();
    getComedy();
    getAction();
    getDrama();
    getRomantics();
    getMusic();
    getHorror();
    getScienceFiction()
  },[])
  
  return (
  <div>
    <HomeCarousel items={Trendings && Trendings} Heading='Top New' link='/discover/movies?' />
    <HomeCarousel items={TopNetfly && TopNetfly} Heading='Top Netfly' link='/discover/movies?SortBy=popularity&Sort=desc' />
    <HomeCarousel items={TopSeries && TopSeries} Heading='Top Series' link='/discover/series?' />
    <HomeCarousel items={Family && Family} Heading='Family' link='/discover/movies?Genre=Family' />
    <CompanyMovies /> 
    <HomeCarousel items={Action && Action} Heading='Action' link='/discover/movies?Genre=Action' />
    <HomeCarousel items={Drama && Drama} Heading='Drama' link='/discover/movies?Genre=Drama' />
    <Stars />
    <HomeCarousel items={Romantic && Romantic} Heading='Romantic' link='/discover/movies?Genre=Romance' />
    <HomeCarousel items={Music && Music} Heading='Music' link='/discover/movies?Genre=Music' />
    <HomeCarousel items={Comedy && Comedy} Heading='Comedy' link='/discover/movies?Genre=Comedy' />
    <HomeCarousel items={Horror && Horror} Heading='Horror' link='/discover/movies?Genre=Horror' />
    <HomeCarousel items={ScienceFiction && ScienceFiction} Heading='Science Fiction' link='/discover/movies?Genre=Science Fiction' />
  </div>
  )
}

export default Home;
