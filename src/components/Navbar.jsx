// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false); // Controle do menu

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="relative mb-20 py-6 text-white justify-items-end">
//       <div className="flex items-center justify-between px-8">
//         <button
//           onClick={toggleMenu}
//           className="block lg:hidden text-3xl focus:outline-none"
//         >
//           ☰ {/* Ícone do hamburger */}
//         </button>
//       </div>

//       {/* Menu Links - sobreposto */}
//       <div
//         onClick={toggleMenu}
//         className={`${
//           isOpen ? "block" : "hidden"
//         } absolute top-16 left-0 w-full z-1000 shadow-lg lg:relative lg:flex lg:top-0 lg:w-auto lg:shadow-none`}
//       >
//         <div className="flex flex-row lg:flex-row items-start lg:items-center gap-4 px-8 py-4 lg:py-0 md:flex-row">
//           <a href="#sobremim" className="hover:text-gray-400 block py-2">
//             Sobre mim
//           </a>
//           <a href="#tecnologias" className="hover:text-gray-400 block py-2">
//             Tecnologias
//           </a>
//           <a href="#experiencias" className="hover:text-gray-400 block py-2">
//             Experiências
//           </a>
//           <a href="#projetos" className="hover:text-gray-400 block py-2">
//             Projetos
//           </a>
//           <a href="#contato" className="hover:text-gray-400 block py-2">
//             Contato
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



//////////////////////////


import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Controle do menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative py-6 text-white justify-items-end">
      <div className="flex items-center justify-between ">
        {/* <h1 className="text-1xl">Jonathan Melo</h1> */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-3xl focus:outline-none"
        >
          ☰ {/* Ícone do hamburger */}
        </button>
      </div>

      {/* Menu Links */}
      <div
        onClick={toggleMenu}
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row items-start lg:items-center w-full lg:w-auto gap-4  py-4 justify-items-end`}
      >
        <a
          href="#sobremim"
          className="hover:text-gray-400 block py-2 text-sm sm:text-base"
        >
          Sobre mim
        </a>
        <a
          href="#tecnologias"
          className="hover:text-gray-400 block py-2 text-sm sm:text-base"
        >
          Tecnologias
        </a>
        <a
          href="#experiencias"
          className="hover:text-gray-400 block py-2 text-sm sm:text-base"
        >
          Experiências
        </a>
        <a
          href="#projetos"
          className="hover:text-gray-400 block py-2 text-sm sm:text-base"
        >
          Projetos
        </a>
        <a
          href="#contato"
          className="hover:text-gray-400 block py-2 text-sm sm:text-base"
        >
          Contato
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

