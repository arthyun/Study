import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Signin from './Signin';
import Home from './Home';
import Home1_1 from './subpages/Home1_1';
import Home1_2 from './subpages/Home1_2';
import Home1_3 from './subpages/Home1_3';
import About from './About';
import Contact from './Contact';
import Faq from './Faq';
import Notfound from './Notfound';
import DataGridMain from './MUI/DataGrid';
import Detail from './MUI/Detail';
import Popup from './Popup';
import Select from './Select';

const AppRouter = ({ account }) => {
  return (
    <Fragment>
      {account ? (
        <>
          <Header />

          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="1" element={<Home1_1 />} />
              <Route path="2" element={<Home1_2 />} />
              <Route path="3" element={<Home1_3 />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/select" element={<Select />} />
            <Route path="/mui" element={<DataGridMain />} />
            <Route path="/mui/:id" element={<Detail />} />

            <Route path="/popup" element={<Popup />} />

            <Route path="*" element={<Notfound />} />
          </Routes>
        </>
      ) : (
        <Signin />
      )}
    </Fragment>
  );
};

export default AppRouter;
