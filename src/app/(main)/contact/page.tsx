// ContactPage.js
import Head from 'next/head';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="container mx-auto p-8">
      <Head>
        <title>Contacto</title>
      </Head>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Contate-nos!</h1>
        <p>Estamos aqui para ajudá-lo. Não hesite em nos contatar!</p>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        <a href="https://www.instagram.com/fitabsolutepro/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700 cursor-pointer" />
        </a>
        <a href="https://www.facebook.com/fitabsolute.pro" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-3xl text-blue-500 hover:text-blue-700 cursor-pointer" />
        </a>
        <a href="https://wa.me/+351929002531" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-3xl text-green-500 hover:text-green-700 cursor-pointer" />
        </a>
        <a href="mailto:fitabsolutepro@gmal.com">
          <FaEnvelope className="text-3xl text-red-500 hover:text-red-700 cursor-pointer" />
        </a>
      </div>

      <div className="text-center">
        <p>Você pode nos encontrar nas seguintes redes sociais ou entrar em contato conosco por email.</p>
      </div>
    </div>
  );
};

export default ContactPage;
