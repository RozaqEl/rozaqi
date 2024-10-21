import FavColor from "./components/favColor";
import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import FormKuis from "./components/formKuis";
import "./Rozaqel-style.css";

export default function MyApp() {
    return (
        <section>
            <Hero />
            <RiwayatPendidikan />
            <RiwayatPekerjaan/>
            <FavColor/>
            <FormKuis/>
        </section>
    );
}
