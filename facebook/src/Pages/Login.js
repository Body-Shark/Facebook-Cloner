import React, { Component } from "react";
import Ftitulo from '../img/facebook.svg';
import PlusImg from '../img/Plus.png'

class Login extends Component {
  render() {
    return(
      <div className='w-full bg-white h-screen py-20 px-40'>
        <div>
          <img src={Ftitulo} alt='facebook' className='w-48'/>
          <div className='px-5'>
            <h1 className='text-3xl text-black'>Logins recentes</h1>
            <p className='text-sm text-gray-500'>Clique na sua foto ou adicione uma conta.</p>

            <div className='flex gap-3'>
              <div className='w-40 border rounded-md mt-6'>
                <img src='https://scontent.fcxj5-1.fna.fbcdn.net/v/t1.6435-1/p160x160/69618903_433613227496947_3470654954685857792_n.jpg?_nc_cat=106&amp;ccb=1-5&amp;_nc_sid=dbb9e7&amp;_nc_ohc=75Vo4x3hYncAX8zkHYr&amp;_nc_ht=scontent.fcxj5-1.fna&amp;oh=c184bc5926e7e0e577087a17b14eaeb8&amp;oe=61B75A00' alt='' label='Fernando Nunes' className='rounded-md rounded-b-none'/>
                <div className='text-center py-1.5 text-lg text-gray-500'>Fernando</div>
              </div>
              <div className='w-40 border rounded-md mt-6'>
                <div className='w-full h-40 rounded-md rounded-b-none bg-gray-100 flex items-center justify-center'>
                  <img src={PlusImg} alt=''/>
                </div>
                <div className='text-center py-1.5 text-lg text-blue-500'>Adicionar Conta</div>
              </div>
            </div>
          </div>
          
        </div>  

        <div>
        
        </div>
      </div>
    )
  }

}

export default Login;