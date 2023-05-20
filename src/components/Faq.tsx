import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { Fragment, useState } from "react";

export default function Faq() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Nie mogę się zarejestrować
        </AccordionHeader>
        <AccordionBody>
          Aby się zarejestrować musisz dołączyć na serwer Minecraft z adresu moderrkowo.pl. Po dołączeniu na serwer wykonać polecenie /zarejestruj HASLO POWTORZONE_HASLO słowa napisana Caps-Lockiem zamień na twoje hasło.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Zapomniałem hasła
        </AccordionHeader>
        <AccordionBody>
          W przypadku zapomnienia hasła musisz się zgłosić do administracji Moderrkowo na Discordzie. Twoje hasło zostanie zrestartowane. Nie mozemy przypominać haseł, ponieważ dbamy o bezpieczeństwo naszych graczy i nie mamy dostępu do takich informacji.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Jak zarabiać
        </AccordionHeader>
        <AccordionBody>
          Moderrkowo Sezon V polega na zarabaniu, wykonywaniu zadań i rozbudowywaniu wielkich działek. Zarabiać możesz przez Quety u NPC, Wygrywanie Wydarzeń, Sprzedawanie Przedmiotów u NPC bądź na rynku oraz za czas spędzony na serwerze.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          Gdzie znajde NPC / Zadania?
        </AccordionHeader>
        <AccordionBody>
          NPC tak samo jak zadania znajdują się na spawnie. Aby przenieść się do nich wykonaj komendę /spawn
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          Jak zgłosić gracza
        </AccordionHeader>
        <AccordionBody>
          Aby zgłosić gracza wykonaj komendę w grze /helpop lub skontaktuj się z nami na Discordzie na kanale #🐞┇zgłoś-problem-błąd
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}