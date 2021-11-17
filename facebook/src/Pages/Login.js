import React, { Component } from "react";
import { Link } from "react-router-dom";
import Ftitulo from '../img/facebook.svg';
import PlusImg from '../img/Plus.png';
import InputTextComponent from "../Components/FormComponents/InputText";
import InputPasswordComponent from "../Components/FormComponents/InputPassword";
import ButtonComponent from "../Components/FormComponents/ButtonSubmit";

class Login extends Component {
  render() {
    return(
      <div className='w-full bg-gray-200 h-screen py-20 px-40 flex gap-64'>
        <div>
          <img src={Ftitulo} alt='facebook' className='w-48'/>
          <div className='px-5'>
            <h1 className='text-3xl text-black'>Logins recentes</h1>
            <p className='text-sm text-gray-500'>Clique na sua foto ou adicione uma conta.</p>

            <div className='flex gap-3'>
              <div className='w-40 border rounded-md mt-6 bg-white'>
                <img src='https://scontent.fcxj5-1.fna.fbcdn.net/v/t1.6435-1/p160x160/69618903_433613227496947_3470654954685857792_n.jpg?_nc_cat=106&amp;ccb=1-5&amp;_nc_sid=dbb9e7&amp;_nc_ohc=75Vo4x3hYncAX8zkHYr&amp;_nc_ht=scontent.fcxj5-1.fna&amp;oh=c184bc5926e7e0e577087a17b14eaeb8&amp;oe=61B75A00' alt='' label='Fernando Nunes' className='rounded-md rounded-b-none'/>
                <div className='text-center py-1.5 text-lg text-gray-500'>Fernando</div>
              </div>
              <div className='w-40 border rounded-lg mt-6 bg-white'>
                <div className='w-full h-40 rounded-md rounded-b-none bg-gray-100 flex items-center justify-center'>
                  <img src={PlusImg} alt=''/>
                </div>
                <div className='text-center text-lg text-blue-500 py-1.5'>Adicionar Conta</div>
              </div>
            </div>
          </div>
          
        </div>  

        <div className='flex-colums items-center mt-12'>
          <div className='py-8 bg-white h-auto rounded-lg shadow-lg'>
            <div className='px-2'>
              <InputTextComponent />
              <InputPasswordComponent/>
              <ButtonComponent/>
              <Link to='/' className='text-blue-650 text-center text-sm hover:underline'>
                <p>Esqueceu a senha?</p>
              </Link>
              <hr className='w-4/5 mx-auto mt-4 mb-4 text-center'></hr>
              <Link to='/' className='grid justify-center'> 
                <button className='p-4 bg-green-vivid text-white font-bold rounded-lg'>Criar Nova Conta</button>
              </Link>
            </div>
          </div>
          <div className='block text-center mt-4 text-sm'><spam className='font-bold
          '>Criar uma Página</spam> para uma celebridade, uma marca ou uma empresa.</div>
        </div>
      </div>
    )
  }

}

export default Login;