export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

      {/* 💬 BURBUJA */}
      <a
        href="https://wa.me/56981513100?text=Hola,%20tengo%20dudas%20sobre%20las%20sesiones"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white text-[#2F3A3F] text-sm px-4 py-2 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition"
      >
        {/* ICONO WHATSAPP */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="#25D366"
        >
          <path d="M20.52 3.48A11.8 11.8 0 0012.06 0C5.48 0 .13 5.35.13 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.64a11.86 11.86 0 005.8 1.48h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.18-1.24-6.17-3.48-8.43zM12.07 21.5h-.01a9.53 9.53 0 01-4.85-1.33l-.35-.21-3.71.97.99-3.61-.23-.37a9.5 9.5 0 01-1.46-5.05c0-5.27 4.29-9.56 9.57-9.56 2.55 0 4.94.99 6.74 2.8a9.45 9.45 0 012.8 6.73c0 5.28-4.29 9.57-9.56 9.57zm5.24-7.15c-.29-.14-1.72-.85-1.99-.95-.27-.1-.46-.14-.65.14-.19.29-.75.95-.92 1.14-.17.19-.34.21-.63.07-.29-.14-1.23-.45-2.35-1.44-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.12-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.57-.9-2.15-.24-.57-.48-.49-.65-.5h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.8 1.16 3c.14.19 2 3.05 4.84 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.72-.7 1.96-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33z"/>
        </svg>

        ¿Tienes dudas? Hablemos
      </a>

      {/* 🔘 BOTÓN (no se toca) */}
      <button className="w-14 h-14 rounded-full bg-[#3E5C50] text-white shadow-lg">
        💬
      </button>

    </div>
  );
}