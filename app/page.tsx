import FavColor from "./components/favColor";
import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import "./Rozaqel-style.css";

export default function MyApp() {
    return (
        <section>
            <Hero />
            <RiwayatPendidikan />
            <RiwayatPekerjaan/>
            <FavColor/>
        </section>
    );
}
