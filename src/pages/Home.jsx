import Header from '../components/Header'
import './Home.css'

const Home = () => {
    return(
       <section className="home">
           <Header />
           <div className="contenido-principal">
               <div className="contenedor-imagen">
                   <img src='/usuario.PNG' alt="Perfil" className="imagen-perfil" width={1000} />
               </div>
           </div>
       </section>
    )   
   }

export default Home