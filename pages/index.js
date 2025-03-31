import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Home() {
  useEffect(() => {
    // Estoura confete quando a página carrega
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  const handleMotivationalClick = () => {
    const audio = new Audio("/motivacional.mp3"); // Som debochado
    audio.play();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-100 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-4 drop-shadow-md">
        🎓 Parabéns pela formatura!
      </h1>

      <p className="text-lg md:text-xl text-gray-700 mb-6">
        Não fez mais que sua obrigação kkkkk 🤭
      </p>

      <div className="mb-6">
        <img
          src="/graduation-funny.gif"
          alt="Formada engraçada"
          className="rounded-xl shadow-lg w-64"
        />
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md text-gray-800 text-base space-y-3">
        <p>Que venham os boletos da vida adulta! 💸</p>
        <p>
          Agora é só aguentar a cobrança da família: <br />
          <span className="font-semibold text-pink-600">
            “E o concurso?, Não vai prestar OAB?”
          </span>
        </p>

        <button
          onClick={handleMotivationalClick}
          className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all"
        >
          Ouvir discurso motivacional
        </button>
      </div>

      <footer className="mt-10 text-sm text-gray-500">
        Feito com deboche ❤️ por Guilherme Queiroz
      </footer>
    </div>
  );
}
