export default function RiwayatPekerjaan() {
    return (
    <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl">Riwayat Pekerjaan</h2>
        <RowRiwayatPekerjaan tahunbekerja="2024-Sekarang" instansi="Tentara Nasional Indonesia" bekerjasebagai="Mayor Jendral" />
        <RowRiwayatPekerjaan tahunbekerja="2024-Sekarang" instansi="Master Chef Indonesia" bekerjasebagai="Chef" />
        <RowRiwayatPekerjaan tahunbekerja="2024-Sekarang" instansi="Kapal Laut" bekerjasebagai="Nahkoda" />
        <RowRiwayatPekerjaan tahunbekerja="2021-sekarang" instansi="Pemerintahan" bekerjasebagai="Presiden" />
        </div>
    );
}
interface RowRiwayatKerjaProps {
    tahunbekerja: string;
    instansi: string;
    bekerjasebagai: string;
  }

  function RowRiwayatPekerjaan(props: RowRiwayatKerjaProps) {
    return(
   <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 my-5">
         <div className="container mx-auto">
           <div className="grid grid-cols-12 gap-1">
             <div className="col-span-12 md:col-span-4">{props.tahunbekerja}</div>
             <div className="col-span-12 md:col-span-4">{props.instansi}
             </div>
             <div className="col-span-12 md:col-span-4">{props.bekerjasebagai}
             </div>
           </div>
         </div>
         </div>
    )
   }