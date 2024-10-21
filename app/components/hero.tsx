import foto from "../foto.jpeg";
function Profile() {
    return <img src={foto.src} alt="M Rozaqi Firlana Profile" className="fotoku" />;
  }
export default function Hero() {
    return (
      <div className="container mx-auto p-2 text-center">
        <h1 className="text-gray-300 font-bold"> CV ONLINE</h1>
        <h1 className="text-3xl">Rozaqi Firlana </h1>
        <Profile/>
        <p>
        M Rozaqi Firlana Adalah seorang mahasiswa dari fakultas komputer jurusan sistem informasi semester 5. saya lahir di bandung pada tanggal 16 Januari 2003. 
        </p>
    
      </div>
    );
}