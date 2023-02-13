import logo from './logo.svg';
import './App.css';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback/ErrorFallback';
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
const DisplayUser = React.lazy(()=>import ('./DisplayUser/DisplayUser'))
const AboutUs = React.lazy(() => import ('./AboutUs/AboutUs'))
const AddUser = React.lazy(()=> import ('./AddUser/AddUser'))
const ContactUs = React.lazy(()=> import ('./ContactUs/ContactUs'));



function App() {
  return (
    <div>
      
      <BrowserRouter>
       <Header />
       <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={
                          <div>
                            <div className="spinner-border m-5" role="status">
                              <span className="visually-hidden">Loading...</span>
                            </div>
                          </div>
                        }>
          <Routes>

              <Route path='/about' element={<AboutUs />} />
              <Route path='/adduser' element={<AddUser />} />
              <Route path='/contactus' element={<ContactUs />} />
              <Route path='/displayuser' element={<DisplayUser />} />
              <Route path='/' element={<AboutUs />} />
                           
            </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


