import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { loadCategories } from '../../store/asyncActions/loadCategories';
import { loadProducts } from '../../store/asyncActions/loadProducts';
import Futer from '../Futer';
import MainPage from '../MainPage';
import Nav from '../Nav';
import AllSales from '../../pages/AllSales';
import BasketPage from '../../pages/BasketPage';
import CategoryPage from '../../pages/CategoryPage';
import NotFoundPage from '../../pages/NotFoundPage';
import './index.css'
import ProductsPage from '../../pages/ProductsPage';
import ProductDescriptionPage from '../../pages/ProductDescriptionPage';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories);
    dispatch(loadProducts);
  }, [])


  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/categories' element={<CategoryPage />} />
        <Route path='/categories/:oneCategory' element={<ProductsPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/product/:id' element={<ProductDescriptionPage />} />
        <Route path='/sales' element={<AllSales />} />
        <Route path='/basket' element={<BasketPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      <Futer />
    </div>
  );
}

export default App;
