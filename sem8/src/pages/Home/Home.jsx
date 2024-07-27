import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import CategoriaProduto from '../Products/CategoriaProduto'
import { useState, useEffect,  } from 'react'
import AgeVerificationModal from '../../components/Modal/AgeModal'

import './Home.css'

function Home() { 
    const PRODUTOS = [
        {
            id: 1,
            texto: 'Ofertas',
            imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_ofertas_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 2,
            texto: 'Cervejas',
            imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_cervejas_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75'     
        },
        {
            id: 3,
            texto: 'Vinhos',
            imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fvinhos2.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 4,
            texto: 'Água e Gelo',
            imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Frefri.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75'
        },
        {
            id: 5,
            texto: 'Refrigerantes',
            imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Frefri.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75'
        },
        {
            id: 6,
            texto: 'Chopps',
            imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_chopp_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75'
        },
        {
            id: 7,
            texto: 'Churrasco',
            imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_churrasco_v2_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75'
        },
        {
            id: 8,
            texto: 'Mercearia',
            imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_mercearia_v3.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75'
        },
    ]

    const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const modalShown = localStorage.getItem('ageVerificationShown');
    if (!modalShown) {
      setShowModal(true);
      localStorage.setItem('ageVerificationShown', 'true');
    }
  }, []);

  const handleCloseModal = (confirmed) => {
    if (confirmed) {
      // Usuário confirmou
      console.log('Usuário é maior de 18 anos.');
    } else {
      // Usuário não confirmou, redirecionar ou executar outra ação
      console.log('Usuário não é maior de 18 anos.');
    }
    setShowModal(false);
  };    
    return ( 
        <> 
            <Header/>
            <Hero/> 
                {showModal && <AgeVerificationModal onClose={handleCloseModal} />}
               <div className="content">
                     <div className="lista-categorias">
                    {PRODUTOS.map(produto => 
                        <CategoriaProduto key={produto.id} texto={produto.texto} imagem={produto.imagem}/> )}
                </div>
            </div>      
        </> 
    ) 
} 

export default Home
