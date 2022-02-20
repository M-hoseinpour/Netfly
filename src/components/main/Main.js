import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../shared/Navbar/Navbar';
import Header from '../shared/Header/Header';
import HomeState from '../Home/home_state/HomeState';
import Footer from '../shared/Footer/Footer';
import Theme from './Theme/Theme';
import Loading from '../shared/Loading';
import MovieState from '../Movie/movie_state/MovieState';
import SeriesState from '../Series/Series_state/SeriesState';
import PersonState from '../Person/Person_state/PersonState';
import ScrollTop from '../shared/main/ScrollTop';
import { Toaster } from 'react-hot-toast';

//  ******************** movie ********************
const LazyMovie = React.lazy(() => import('../Movie/Movie'));
const Movie = () => (
    <Suspense fallback={<Loading />}>
        <ScrollTop>
            <Navbar />
            <MovieState>
                <LazyMovie />
            </MovieState> 
        </ScrollTop>
        <Footer />
    </Suspense>
  );

//  ******************** series ********************
const LazySeries = React.lazy(() => import('../Series/Series'));
const Series = () => (
    <Suspense fallback={<Loading />}>
        <ScrollTop>
            <Navbar />
            <SeriesState>
                <LazySeries />
            </SeriesState> 
            <Footer />
        </ScrollTop>
    </Suspense>
  );
//  ******************** person ********************
const LazyPerson = React.lazy(() => import('../Person/Person'));
const Person = () => (
    <Suspense fallback={<Loading />}>
        <ScrollTop>
            <Navbar />
            <PersonState>
                <LazyPerson />
            </PersonState> 
            <Footer />
        </ScrollTop>
    </Suspense>
  );
//  ******************** search ********************
const LazySearch = React.lazy(() => import('../Search/Search'));
const Search = () => (
    <Suspense fallback={<Loading />}>
        <ScrollTop>
            <Navbar />
            <LazySearch />
        </ScrollTop>
    </Suspense>
  );
//  ******************** discover movie ********************
const LazyDiscover = React.lazy(() => import('../Discover/MovieDiscover'));
const MovieDiscover = () => (
    <Suspense fallback={<Loading />}>
        <ScrollTop>
            <Navbar />
            <MovieState>
                <LazyDiscover type='movie' />
            </MovieState>
        </ScrollTop>
    </Suspense>
  );
//  ******************** discover series ********************
const LazyDiscovertv = React.lazy(() => import('../Discover/MovieDiscover'));
const SerieDiscover = () => (
    <Suspense fallback={<Loading />}>
        <ScrollTop>
            <Navbar />
            <MovieState>
                <LazyDiscovertv type='tv' />
            </MovieState>
        </ScrollTop>
    </Suspense>
  );
//  ******************** Profile ********************
const LazyProfile = React.lazy(() => import('../Profile/Profile'));
const Profile = () => (
    <Suspense fallback={<Loading />}>
        <ScrollTop>
            <Navbar />
            <MovieState>
                <LazyProfile />
            </MovieState>
        </ScrollTop>
    </Suspense>
  );
//  ******************** Collection ********************
const LazyCollection = React.lazy(() => import('../Collection/Collection'));
const Collection = () => (
    <Suspense fallback={<Loading />}>
        <ScrollTop>
            <Navbar />
                <LazyCollection />
        </ScrollTop>
    </Suspense>
  );
//  ******************** Home ********************
const LazyHome = React.lazy(() => import('../Home/Home'));
const Home = () => (
    <Suspense fallback={<Loading />}>
        <ScrollTop>
            <HomeState>
                <Navbar />
                <Header />
                <LazyHome />
                <Footer />
            </HomeState>
        </ScrollTop>
    </Suspense>
  );
//  ******************** 404 ********************
const LazyNotFound = React.lazy(() => import('../shared/NotFound/NotFound'));
const NotFound = () => (
    <Suspense fallback={<Loading />}>
        <ScrollTop>
            <Navbar />
            <LazyNotFound />
            <Footer />
        </ScrollTop>
    </Suspense>
  );

const Pages = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}  />
                <Route exact path="Movie/:id" element={<Movie />}  />
                <Route exact path="Series/:id" element={<Series />}  />
                <Route exact path="Person/:id" element={<Person />}  />
                <Route exact path="Search" element={<Search />}  />
                <Route exact path="Discover/movies" element={<MovieDiscover />}  />
                <Route exact path="Discover/series" element={<SerieDiscover />}  />
                <Route exact path="Profile" element={<Profile />}  />
                <Route exact path="Collection/:id" element={<Collection />}  />
                <Route exact path="NotFound" element={<NotFound message={"Page"} />}  />
                <Route exact path='*' element={<NotFound message={"Page"} />} />
            </Routes>
        </Router>
    )
}

function Main() {
    return (
        <Theme>
            <Toaster containerStyle={{ top: '70px' }} position="top-right" />
            <Pages />
        </Theme>
    )
}

export default Main;
