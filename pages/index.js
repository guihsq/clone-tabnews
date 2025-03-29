import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-100 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
        🎓 Parabéns pela formatura!
      </h1>

      <p className="text-lg md:text-xl text-gray-700 mb-6">
        Não fez mais que sua obrigação kkkkk 🤭
      </p>

      <div className="mb-6">
        <Image
          src="/capelo.png" // coloque uma imagem divertida de capelo ou diploma na pasta public
          alt="Capelo de formatura"
          width={150}
          height={150}
        />
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-4 max-w-md">
        <p className="text-gray-800">
          Que venham os boletos da vida adulta! 💸<br />
          Agora é só aguentar a cobrança da família: <br />
          <span className="font-semibold text-pink-600">“E o concurso?”</span>
        </p>
      </div>

      <footer className="mt-10 text-sm text-gray-500">
        Feito com deboche ❤️ por Guilherme Queiroz
      </footer>
    </div>
  );
}