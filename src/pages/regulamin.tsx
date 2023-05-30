import { Typography } from "@material-tailwind/react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";

export default function regulamin() {

  const rules = ["Na serwerze jeden gracz może posiadać 1 działkę na danej mapie.",
    "Zakaz przeklinania oraz ubliżania innym graczom.",
    "Zakaz spamowania.",
    "Zakaz reklamowania innych serwerów (przykładowo, podawanie adresów IP, nazw itp).",
    "Nie szanujemy griefowania/kradzieży.",
    "Zakaz wykorzystywania bugów gry/pluginów.",
    "Handel z graczami odbywa się na własne ryzyko.",
    "Zakaz podawania się za członka administracji serwera oraz powoływania się na znajomości przez nieuprawnionych graczy.",
    "Zakazane są: nękanie innych graczy oraz groźby nie związane z grą.",
    "Zakaz pisania nagminnych próśb do administracji o przedmioty.",
    "Tak zwane TP-Kill'e są zakazane.",
    "Zakaz nadużywania dużych liter (Caps Lock)",
    "Admin ma zawsze racje.",
    "Granie na serwerze oznacza akceptację regulaminu!",
    "Nie okradamy innych.",
    "Wykorzystywanie bugów w celu zysku ban.",
    "Można się handlować z osobą, ktora cię zabiła i ma twoje przedmioty"];

  return (<>
    <Seo templateTitle="Regulamin" />
    <Navbar />
    <section className="container mx-auto py-20 mt-10 rounded bg-blue-gray-50 shadow-lg">
      <h1 className="text-4xl  text-red-500 font-bold mb-5 text-center">Regulamin Moderrkowo.PL</h1>
      <section className="p-10 lg:pl-[10%] text-justify">
        {/* <Typography variant="paragraph">1. Na serwerze jeden gracz może posiadać 1 działkę na danej mapie.</Typography>
        <Typography variant="paragraph">2. Zakaz przeklinania oraz ubliżania innym graczom.</Typography>
        <Typography variant="paragraph">3. Zakaz spamowania.</Typography>
        <Typography variant="paragraph">4. Zakaz reklamowania innych serwerów (przykładowo, podawanie adresów IP, nazw itp).</Typography>
        <Typography variant="paragraph">5. Nie szanujemy griefowania/kradzieży.</Typography>
        <Typography variant="paragraph">6. Zakaz wykorzystywania bugów gry/pluginów.</Typography>
        <Typography variant="paragraph">7. Handel z graczami odbywa się na własne ryzyko.</Typography>
        <Typography variant="paragraph">8. Zakaz podawania się za członka administracji serwera oraz powoływania się na znajomości przez nieuprawnionych graczy.</Typography>
        <Typography variant="paragraph">9. Zakazane są: nękanie innych graczy oraz groźby nie związane z grą.</Typography>
        <Typography variant="paragraph">10. Zakaz pisania nagminnych próśb do administracji o przedmioty</Typography>
        <Typography variant="paragraph">11. Tak zwane TP-Kill'e są zakazane</Typography>
        <Typography variant="paragraph">12. Zakaz nadużywania dużych liter (Caps Lock)</Typography>
        <Typography variant="paragraph">13. Admin ma zawsze racje.</Typography>
        <Typography variant="paragraph">14. Granie na serwerze oznacza akceptację regulaminu!</Typography>
        <Typography variant="paragraph">15. Nie okradamy innych.</Typography>
        <Typography variant="paragraph">16. Wykorzystywanie bugów w celu zysku ban</Typography>
        <Typography variant="paragraph">17. Można się handlować z osobą, ktora cię zabiła i ma twoje przedmioty</Typography> */}
        {rules.map((d, idx) => {
          return (<Typography key={idx} variant="paragraph">{idx + 1}. {d}</Typography>)
        })}
      </section>
      <section className="lg:pl-[10%]">
        <Typography variant="small">* TP-Kill - Zabójstwo gracza po teleportacji podczas gdy zabitej osobnie nie zdążyły załadować się chunki.</Typography>
      </section>
    </section>
    <Footer />
  </>);
}