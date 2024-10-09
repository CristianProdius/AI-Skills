import Header from "../components/Header";
import Footer from "../components/Footer";
const Despre = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-8 md:mb-10">
        <h1 className="text-3xl font-bold mb-6 text-center ">
          Despre Proiectul Nostru
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 ">
            AI-Oportunități: Către locuri de muncă sustenabile prin Inteligență
            Artificială
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Proiectul "AI-Oportunități: Către locuri de muncă sustenabile prin
            Inteligență Artificială" este o inițiativă inovatoare implementată
            de Asociația pentru Combaterea Izolării Informaționale ECOU în
            parteneriat cu AO Soluții Comunitare și Subdiviziunea Teritorială
            Cahul a Agenției Naționale pentru Ocupare din Moldova.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Acest proiect face parte din programul Building Resilience in the
            Eastern Neighbourhood (BREN), susținut de Conflict, Stability and
            Security Fund al Regatului Unit și implementat de Institute for War
            and Peace Reporting (IWPR) în parteneriat cu Global Network of Women
            Peacebuilders (GNWP).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 ">
            Obiectivul Proiectului
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Proiectul își propune să abordeze provocările legate de integrarea
            profesională a persoanelor vulnerabile din raioanele Cahul, Cantemir
            și Taraclia prin dezvoltarea competențelor digitale și de
            inteligență artificială.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 ">
            Cursul "Introducere în Inteligența Artificială Generativă"
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Cursul este un program comprehensiv conceput pentru a dezvolta
            competențele digitale și de inteligență artificială ale grupurilor
            vulnerabile din regiunea de sud a Republicii Moldova. Structurat în
            12 module, cursul acoperă o gamă largă de subiecte, de la conceptele
            fundamentale ale AI până la aplicații practice în domenii precum
            marketing, crearea de conținut audio-vizual, și dezvoltarea
            carierei.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Programul pune un accent deosebit pe instrumente populare precum
            ChatGPT, Midjourney și alte platforme AI, oferind cursanților
            abilități practice și relevante pentru piața muncii actuală.
          </p>
        </section>

        <section className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 italic">
            Acest curs este produs în cadrul proiectului "AI Oportunități: Către
            locuri sustenabile prin Inteligența Artificială", finanțat printr-un
            grant oferit de Institutul de Raportare despre Război și Pace (IWPR)
            cu sprijinul Guvernului Regatului Unit. Opiniile, constatările și
            concluziile menționate aparțin autorilor și nu reflectă neapărat pe
            cele ale IWPR sau ale Guvernului Regatului Unit.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Despre;
