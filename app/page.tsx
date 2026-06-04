import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Coupe du monde de football 2026
          </h1>
          <h2>Faites vos pronostiques maintenant !</h2>
          <img src="/coupe-du-monde-2026.jpg" alt="logo" />
          <p>Faites vos pronostiques sur les matchs de coupe du monde 2026</p>
          <h3>Règles du jeu :</h3>
          <ul className="list-disc list-inside text-left">
            <li>Choisissez les équipes qui vont se rencontrer</li>
            <li>Prévoyez le score exact du match</li>
            <li>
              Les pronostiques doivent être soumis avant le début du match
            </li>
          </ul>
          <p style={{ color: "red" }}>
            Attention, un seul pronostique par match est autorisé. Bonne chance
            à tous !
          </p>
        </div>
      </main>
    </div>
  );
}
