// Wersja polska strony: wszystkie teksty i dane (ta sama struktura co uk.mjs)

const ASK = "po konsultacji";

const PACKS = [
  { name: "Pakiet Standard", price: "1000",
    f: "Dla osób, które chcą samodzielnie przejść procedurę, korzystając z profesjonalnej pomocy przy przygotowaniu dokumentów.",
    li: ["Indywidualna konsultacja dotycząca Twojej sprawy", "Spersonalizowana checklista wymaganych dokumentów", "Weryfikacja kompletu dokumentów — 1 raz", "Wskazanie brakujących dokumentów i niezbędnych uzupełnień", "Przygotowanie wniosku w systemie MOS", "Przygotowanie dokumentów do złożenia elektronicznego"],
    note: "Otrzymujesz przygotowany komplet dokumentów i wiesz, jakie kroki musisz wykonać samodzielnie." },
  { tag: "Polecany", hot: true, name: "Pakiet Kompleksowy", price: "1800",
    f: "Dla osób, które chcą powierzyć specjaliście przygotowanie dokumentów i główne prowadzenie sprawy.",
    inc: "Wszystko z pakietu Standard, a także:",
    li: ["Pomoc w zebraniu i uporządkowaniu dokumentów", "Przygotowanie dokumentów, które musi dostarczyć pracodawca", "Wsparcie przy elektronicznym złożeniu wniosku", "Kontrola stanu sprawy i ważnych terminów procesowych", "Weryfikacja kompletu dokumentów — 1 raz przed złożeniem", "Przygotowanie i złożenie 1 ponaglenia (skargi na bezczynność organu), jeśli istnieją podstawy prawne", "Przygotowanie do 2 standardowych odpowiedzi na wezwania urzędu", "Przygotowanie do 2 dodatkowych kompletów dokumentów w ramach sprawy", "Odwołanie, jeśli istnieją podstawy prawne"] },
  { name: "Pakiet Premium", price: "2100",
    f: "Dla osób, które potrzebują rozszerzonego wsparcia, w szczególności przy przewlekłości postępowania.",
    inc: "Wszystko z pakietu Kompleksowego, a także:",
    li: ["Weryfikacja kompletu dokumentów — do 2 razy przed złożeniem", "Przygotowanie do 3 standardowych odpowiedzi na wezwania urzędu", "Przygotowanie do 3 dodatkowych kompletów dokumentów w ramach sprawy", "Analiza sytuacji procesowej w razie przewlekłości postępowania", "Przygotowanie i złożenie 1 ponaglenia (skargi na bezczynność organu), jeśli istnieją podstawy prawne", "Pomoc w założeniu Profilu Zaufanego", "Pomoc w konfiguracji e-Doręczeń", "Wsparcie przy odbiorze karty pobytu w uzgodnionym zakresie"] }
];

const PACKS_BIZ = [
  { name: "Pakiet Start", price: "1200", pay: "Płatność w 2 etapach",
    f: "Dla przedsiębiorców, którzy są gotowi samodzielnie przejść procedurę z profesjonalnym wsparciem na etapie przygotowania.",
    li: ["Indywidualna konsultacja dotycząca procedury", "Wstępna analiza sytuacji przedsiębiorcy i podstawowych wymogów", "Spersonalizowana checklista dokumentów", "Weryfikacja przekazanego kompletu dokumentów — 1 raz", "Przygotowanie wniosku w systemie MOS 2.0", "Przygotowanie dokumentów do złożenia elektronicznego"] },
  { tag: "Polecany", hot: true, name: "Pakiet Biznes", price: "2400", pay: "Płatność w 2 etapach",
    f: "Dla przedsiębiorców, którzy chcą powierzyć przygotowanie dokumentów i główne prowadzenie sprawy.",
    inc: "Wszystko z pakietu Start, a także:",
    li: ["Szczegółowa analiza dokumentów firmy w zakresie istotnym dla procedury", "Weryfikacja dokumentów rejestrowych, księgowych i finansowych w uzgodnionym zakresie", "Pomoc w zebraniu i uporządkowaniu wymaganej dokumentacji", "Rekomendacje dotyczące potwierdzenia prowadzenia działalności gospodarczej", "Pomoc w uzyskaniu wymaganych dokumentów od kontrahentów", "Weryfikacja kompletu dokumentów — 1 raz przed złożeniem", "Przygotowanie i złożenie 1 ponaglenia (skargi na bezczynność organu), jeśli istnieją podstawy prawne", "Kontrola stanu sprawy i ważnych terminów procesowych", "Przygotowanie do 2 standardowych odpowiedzi na wezwania urzędu", "Przygotowanie do 2 dodatkowych kompletów dokumentów w ramach sprawy", "Wsparcie przy odbiorze karty pobytu w uzgodnionym zakresie"] },
  { name: "Pakiet Biznes Premium", price: "2800", pay: "Płatność w 2 etapach",
    f: "Dla przedsiębiorców, którzy potrzebują szerszego wsparcia, w tym możliwych działań w razie przewlekłości postępowania.",
    inc: "Wszystko z pakietu Biznes, a także:",
    li: ["Weryfikacja kompletu dokumentów — do 2 razy przed złożeniem", "Przygotowanie do 3 standardowych odpowiedzi na wezwania urzędu", "Przygotowanie do 3 dodatkowych kompletów dokumentów w ramach sprawy", "Analiza sytuacji procesowej w razie przewlekłości postępowania", "Przygotowanie i złożenie 1 ponaglenia (skargi na bezczynność organu), jeśli istnieją podstawy prawne", "Konsultacja dotycząca dalszych działań w razie bezczynności organu", "Pomoc w założeniu Profilu Zaufanego", "Pomoc w konfiguracji e-Doręczeń", "Wsparcie przy odbiorze karty pobytu w uzgodnionym zakresie"] }
];

const TERMS = `
      <div class="terms">
        <div><b>Oficjalna umowa w dwóch językach</b> i potwierdzenie każdej płatności.</div>
        <div>Ceny nie obejmują opłat skarbowych za wniosek i pełnomocnictwo ani kosztów tłumaczenia dokumentów.</div>
        <div>Ceny są ostateczne dla standardowych spraw. Jeśli sprawa wymaga dodatkowych działań lub niestandardowego kompletu dokumentów, wynagrodzenie ustalamy indywidualnie.</div>
      </div>`;

const TERMS_PACKS = `
      <div class="conds">
        <div class="cond">
          <h3>* Specjalne warunki dla rodzin</h3>
          <p>Złóż dokumenty dla kilku członków rodziny jednocześnie i skorzystaj ze specjalnych cen:</p>
          <ul>
            <li>Każdy kolejny pełnoletni członek rodziny — <b>1300 zł</b></li>
            <li>Dziecko do 18 lat — <b>500 zł</b></li>
          </ul>
        </div>
        <div class="cond">
          <h3>* Ogólne warunki dla wszystkich pakietów</h3>
          <ul>
            <li>Ceny dotyczą standardowych spraw.</li>
            <li>Opłaty skarbowe (<a href="poslugy.html#oplaty">wykaz</a>), koszty pełnomocnictwa, tłumaczeń i inne koszty zewnętrzne są płatne osobno.</li>
            <li>Liczba weryfikacji oznacza liczbę sprawdzeń kompletu dokumentów w uzgodnionym zakresie, a nie nieograniczoną edycję każdego dokumentu.</li>
            <li>Standardowa odpowiedź to przygotowanie odpowiedzi na typowe wezwanie w ramach bieżącej sprawy. Złożone wezwania, nowe okoliczności lub znaczna dodatkowa analiza są wyceniane osobno.</li>
            <li>Dodatkowe prace wykonujemy po wcześniejszym uzgodnieniu zakresu i kosztu z klientem.</li>
            <li>Przygotowanie i złożenie ponaglenia (skargi na bezczynność organu) lub innej skargi następuje wyłącznie, gdy istnieją odpowiednie podstawy prawne.</li>
            <li>Decyzja i czas rozpatrzenia sprawy zależą od właściwego organu. Żaden pakiet nie gwarantuje pozytywnej decyzji ani przyspieszenia procedury.</li>
          </ul>
        </div>
      </div>`;

const SERVICES = [
  { slug: "karta-pobytu", name: "Karta pobytu", h1: "Karta pobytu czasowego", price: "od 1000 zł",
    short: "Pobyt czasowy na podstawie pracy, rodziny lub studiów.",
    intro: "Pomoc w przygotowaniu dokumentów, złożeniu wniosku i prowadzeniu procedury legalizacji pobytu w Polsce — na podstawie pracy, rodziny lub studiów.",
    chips: ["Praca", "Rodzina", "Studia"],
    does: ["Analizujemy Twoją sytuację i podstawę pobytu", "Przygotowujemy spersonalizowaną checklistę dokumentów", "Przygotowujemy wniosek w systemie MOS i dokumenty do złożenia elektronicznego", "Kontrolujemy sprawę i ważne terminy procesowe", "Przygotowujemy ponaglenie lub odwołanie, jeśli istnieją podstawy prawne"],
    lines: [["Pakiet Standard", "1000 zł"], ["Pakiet Kompleksowy", "1800 zł"], ["Pakiet Premium", "2100 zł"]], packs: "main" },
  { slug: "karta-cukr", name: "Karta pobytu CUKR", h1: "Karta pobytu CUKR dla obywateli Ukrainy", price: "650 zł",
    short: "Kompleksowe wsparcie w uzyskaniu karty pobytu CUKR dla obywateli Ukrainy.",
    intro: "Pomagamy przygotować dokumenty i przejść procedurę uzyskania karty pobytu CUKR: od sprawdzenia spełnienia wymogów po kontrolę przebiegu sprawy.",
    alert: { text: "Nie zwlekaj — zdąż złożyć wniosek do 4 marca 2027 roku!" },
    doesTitle: "Co obejmuje usługa",
    does: ["<b>Konsultacja specjalisty</b> — analiza Twojej sytuacji i sprawdzenie spełnienia wymogów procedury CUKR.", "<b>Weryfikacja dokumentów</b> — ustalenie wymaganych dokumentów i sprawdzenie ich kompletności.", "<b>Przygotowanie wniosku</b> — wypełnienie wniosku w systemie MOS 2.0 i pomoc w jego elektronicznym złożeniu.", "<b>Narzędzia elektroniczne</b> — pomoc z Profilem Zaufanym, podpisem elektronicznym i założeniem skrzynki e-Doręczeń, jeśli jest to potrzebne w procedurze.", "<b>Kontrola sprawy</b> — śledzenie przebiegu postępowania i informowanie o niezbędnych dalszych krokach.", "<b>Ponaglenie</b> — analiza podstaw i przygotowanie ponaglenia w razie bezczynności lub przewlekłości postępowania, jeśli istnieją podstawy prawne.", "<b>Wsparcie do odbioru karty</b> — konsultacyjne wsparcie na końcowych etapach procedury."],
    lines: [["Kompleksowa obsługa uzyskania karty pobytu CUKR", "650 zł"]] },
  { slug: "karta-biznes", name: "Karta pobytu na podstawie działalności", h1: "Pobyt czasowy w związku z prowadzeniem działalności gospodarczej", price: "od 1200 zł",
    short: "Zezwolenie na pobyt dla cudzoziemców prowadzących własną firmę w Polsce.",
    intro: "Prowadzimy wnioski o pobyt czasowy w związku z prowadzeniem działalności gospodarczej w Polsce — od analizy sytuacji przedsiębiorcy po odbiór karty.",
    does: ["Analizujemy sytuację przedsiębiorcy i podstawowe wymogi", "Przygotowujemy spersonalizowaną checklistę dokumentów", "Weryfikujemy dokumenty firmy i pomagamy uzyskać dokumenty od kontrahentów", "Przygotowujemy wniosek w MOS 2.0 i dokumenty do złożenia elektronicznego", "Kontrolujemy sprawę i przygotowujemy ponaglenie, jeśli istnieją podstawy prawne"],
    lines: [["Pakiet Start", "1200 zł"], ["Pakiet Biznes", "2400 zł"], ["Pakiet Biznes Premium", "2800 zł"]], packs: "biz" },
  { slug: "blue-card", name: "Blue Card", h1: "Blue Card — Niebieska Karta UE", price: "1000–2000 zł",
    short: "Zezwolenie na pobyt i pracę dla wysoko wykwalifikowanych specjalistów.",
    intro: "Twój rozwój zawodowy w Polsce — z legalnym pobytem i pracą.",
    aboutTitle: "O usłudze",
    about: ["Niebieska Karta UE to zezwolenie na pobyt czasowy i pracę dla wysoko wykwalifikowanych specjalistów, którzy spełniają ustawowe wymogi.", "Prowadzimy proces we współpracy z Tobą i Twoim pracodawcą — od weryfikacji warunków zatrudnienia po decyzję Wojewody."],
    doesTitle: "Co obejmuje wsparcie",
    does: ["<b>Weryfikacja wymogów</b> — analizujemy kwalifikacje, umowę, stanowisko, wynagrodzenie i inne niezbędne warunki.", "<b>Przygotowanie dokumentów</b> — przygotowujemy listę dokumentów dla pracownika i pracodawcy oraz sprawdzamy ich zgodność z wymogami.", "<b>Kompleksowe przygotowanie wniosku</b> — przygotowujemy komplet dokumentów i pomagamy w złożeniu wniosku.", "<b>Prowadzenie sprawy</b> — kontrolujemy przebieg postępowania i pomagamy przygotować odpowiedzi na wezwania urzędu w ramach uzgodnionego pakietu.", "<b>Zmiana pracodawcy</b> — doradzamy w sprawie wymaganych formalności i prowadzimy procedurę zmiany warunków zatrudnienia lub pracodawcy zgodnie z Twoją sytuacją."],
    forWhom: "Dla zagranicznych specjalistów, którzy planują pracę w Polsce na stanowisku spełniającym wymogi Blue Card, a także dla posiadaczy Niebieskiej Karty, którzy muszą zmienić pracodawcę lub warunki zatrudnienia.",
    closing: "Twoje kwalifikacje zasługują na profesjonalne wsparcie. Skontaktuj się z nami — sprawdzimy Twoją sytuację, ustalimy wymagane dokumenty i wyjaśnimy kolejne kroki.",
    stagesNote: "Etapy współpracy dostosowujemy do potrzeb firmy i specyfiki każdej sprawy.",
    lines: [["Prowadzenie sprawy", "1000–2000 zł"], ["Konsultacja, 1 godz.", "300 zł"]] },
  { slug: "rezydent-ue", name: "Pobyt stały i rezydent UE", h1: "Karta pobytu stałego i rezydenta długoterminowego UE", price: "od 1000 zł",
    short: "Prawo do stałego zamieszkania w Polsce — pobyt stały lub status rezydenta UE.",
    intro: "Pomagamy uzyskać prawo do stałego zamieszkania w Polsce — od sprawdzenia podstaw po prowadzenie sprawy w urzędzie.",
    aboutTitle: "O usłudze",
    about: ["Każda podstawa ma własne wymogi dotyczące dokumentów, okresu pobytu i potwierdzenia okoliczności. Analizujemy Twoją sytuację i pomagamy przygotować dokumenty zgodnie z wybraną procedurą."],
    doesTitle: "Co obejmuje wsparcie",
    does: ["<b>Weryfikacja podstaw</b> — analizujemy możliwość uzyskania zezwolenia na pobyt stały lub statusu rezydenta długoterminowego UE.", "<b>Analiza historii pobytu</b> — sprawdzamy ciągłość pobytu i uwzględniamy wyjazdy z Polski.", "<b>Przygotowanie dokumentów</b> — analizujemy i porządkujemy dokumenty z poprzednich lat, ustalamy, czego brakuje.", "<b>Przygotowanie i złożenie wniosku</b> — kompletujemy dokumenty zgodnie z Twoją podstawą.", "<b>Kontrola sprawy</b> — śledzimy przebieg postępowania i pomagamy przygotować odpowiedzi na wezwania urzędu w ramach uzgodnionego pakietu."],
    whichTitle: "Które zezwolenie jest dla Ciebie?",
    which: ["<b>Pobyt stały</b> — m.in. dla osób polskiego pochodzenia, posiadaczy Karty Polaka i innych kategorii spełniających wymogi ustawowe.", "<b>Rezydent długoterminowy UE</b> — dla osób spełniających wymogi dotyczące okresu i legalności pobytu, stabilnego dochodu, ubezpieczenia zdrowotnego i innych warunków ustawowych."],
    closing: "Nie wiesz, która podstawa jest dla Ciebie? Przeanalizujemy Twoją sytuację i pomożemy ustalić dalsze kroki.",
    chips: ["Polskie pochodzenie", "Karta Polaka", "Rezydent UE"],
    lines: [["Pobyt stały — polskie pochodzenie", "2000–3000 zł"], ["Pobyt stały na podstawie Karty Polaka", "1000–2000 zł"], ["Karta rezydenta UE", "1000–2500 zł"], ["Analiza dokumentów pobytowych", "350–500 zł"]] },
  { slug: "hromadianstvo", name: "Obywatelstwo", h1: "Obywatelstwo polskie", price: "od 3000 zł",
    short: "Prowadzenie procedury uznania za obywatela polskiego.",
    intro: "Prowadzimy procedurę uznania za obywatela polskiego przez Wojewodę — dla cudzoziemców spełniających wymogi ustawowe.",
    aboutTitle: "O usłudze",
    about: ["Każda sytuacja jest indywidualna. Analizujemy historię Twojego pobytu, sprawdzamy dokumenty i ustalamy, czy spełniasz wymogi ustawowe."],
    doesTitle: "Co obejmuje wsparcie",
    does: ["<b>Analiza Twojej sytuacji</b> — ustalamy właściwą podstawę prawną.", "<b>Weryfikacja dokumentów</b> — oceniamy historię pobytu, dochody, mieszkanie i inne wymagane okoliczności.", "<b>Przygotowanie wniosku</b> — przygotowujemy wniosek i niezbędne załączniki.", "<b>Prowadzenie sprawy</b> — kontrolujemy przebieg procedury i pomagamy reagować na wezwania organu w ramach uzgodnionego pakietu.", "<b>Wsparcie do decyzji</b> — towarzyszymy Ci na wszystkich etapach przewidzianych umową."],
    forWhom: "Pomagamy ocenić możliwość uzyskania obywatelstwa, m.in. na podstawie długotrwałego pobytu w Polsce, małżeństwa z obywatelem polskim, polskiego pochodzenia lub Karty Polaka, statusu uchodźcy, a także w innych przypadkach przewidzianych prawem.",
    closing: "Twoja droga do polskiego obywatelstwa zaczyna się od właściwej oceny sytuacji.",
    lines: [["Uznanie za obywatela polskiego", "od 3000 zł"], ["Konsultacja, 1 godz.", "300 zł"]] },
  { slug: "vozziednannia-simi", name: "Łączenie z rodziną", h1: "Karta pobytu w celu połączenia z rodziną", price: "od 1300 zł",
    short: "Legalizacja pobytu małżonka, dzieci i rodziców.",
    intro: "Pomagamy rodzinom przejść procedurę legalizacji pobytu w Polsce — od sprawdzenia dokumentów po prowadzenie sprawy w urzędzie.",
    pre: `<h2 class="subh">Koszt wsparcia</h2>
        <p class="plain">Koszt zależy od tego, czy główny wnioskodawca składa wniosek jednocześnie z członkami rodziny, czy jego sprawa jest już rozpatrywana w urzędzie.</p>
        <div class="variant">
          <h3>Wariant 1. Główny wnioskodawca składa wniosek o pobyt w związku z pracą</h3>
          <p>Jeśli jeden z członków rodziny składa wniosek o pobyt czasowy i pracę, mąż lub żona oraz dzieci mogą skorzystać ze specjalnej ceny wsparcia w swoich sprawach.</p>
          <div class="vrow"><span>Wniosek męża lub żony o pobyt czasowy</span><b>1300 zł</b></div>
          <div class="vrow"><span>Wniosek dziecka do 18 lat</span><b>500 zł za dziecko</b></div>
          <p class="vnote">Korzyść dla rodziny: gdy sprawy są prowadzone w ramach jednego procesu rodzinnego, koszt wsparcia dla męża lub żony i dzieci jest niższy.</p>
        </div>
        <div class="variant">
          <h3>Wariant 2. Główny wnioskodawca złożył już dokumenty, a jego sprawa jest w toku</h3>
          <p>Jeśli mąż lub żona złożyli już wniosek o pobyt czasowy i pracę, a sprawa jest rozpatrywana przez urząd wojewódzki, drugi z małżonków może złożyć odrębny wniosek o pobyt czasowy na odpowiedniej podstawie prawnej.</p>
          <div class="vrow"><span>Wniosek męża lub żony o pobyt czasowy</span><b>1500 zł</b></div>
          <div class="vrow"><span>Wniosek dziecka do 18 lat</span><b>500 zł za dziecko</b></div>
          <p class="vnote">Sprawdzimy Twoją sytuację, ustalimy właściwą podstawę prawną i przygotujemy dokumenty zgodnie z wymogami procedury.</p>
        </div>`,
    doesTitle: "Co obejmuje koszt wsparcia (warianty 1 i 2)",
    does: ["Analiza sytuacji rodziny i sprawdzenie podstawy prawnej wniosku", "Indywidualna lista wymaganych dokumentów", "Weryfikacja dokumentów wnioskodawcy i potwierdzeń więzi rodzinnych", "Przygotowanie i wypełnienie wniosku o pobyt czasowy", "Sprawdzenie kompletności dokumentów przed złożeniem", "Wsparcie przy złożeniu wniosku w uzgodnionym zakresie", "Kontrola przebiegu sprawy i informowanie o niezbędnych dalszych krokach"],
    post: `<div class="variant parents">
          <h3>Legalizacja pobytu rodziców pełnoletnich dzieci w Polsce</h3>
          <div class="vrow"><span>Pełne wsparcie, za jedną osobę</span><b>1800 zł</b></div>
          <p class="lbl2">Co obejmuje usługa:</p>
          <ul class="checks">
            <li>Wstępna analiza sytuacji rodziców i statusu prawnego pełnoletniego dziecka w Polsce</li>
            <li>Sprawdzenie, czy istnieją podstawy prawne do uzyskania zezwolenia na pobyt czasowy ze względu na okoliczności rodzinne</li>
            <li>Indywidualna lista wymaganych dokumentów</li>
            <li>Weryfikacja dokumentów potwierdzających więzi rodzinne, środki finansowe, mieszkanie i inne okoliczności sprawy</li>
            <li>Przygotowanie wniosku i niezbędnych załączników zgodnie z wybraną podstawą prawną</li>
            <li>Pomoc w złożeniu dokumentów w odpowiedniej procedurze</li>
            <li>Kontrola przebiegu sprawy i informowanie o głównych czynnościach procesowych</li>
            <li>Przygotowanie do dwóch standardowych odpowiedzi na wezwania organu w ramach uzgodnionego zakresu usługi</li>
          </ul>
          <p class="lbl2">Ważne</p>
          <p>Połączenie rodziców z pełnoletnimi dziećmi nie jest procedurą dostępną automatycznie wyłącznie na podstawie pokrewieństwa. Przed rozpoczęciem współpracy trzeba ocenić status prawny dziecka w Polsce i konkretne okoliczności rodzinne. W niektórych przypadkach należy rozważyć inną podstawę legalizacji pobytu.</p>
          <p>Cena dotyczy usług wsparcia. Opłaty skarbowe, tłumaczenia, koszty notarialne i inne koszty zewnętrzne są płatne osobno. Złożone dodatkowe wezwania organu, odwołanie i skarga do sądu nie wchodzą w zakres podstawowy i są uzgadniane osobno.</p>
        </div>`,
    lines: [["Mąż lub żona — wspólne złożenie", "1300 zł"], ["Mąż lub żona — sprawa głównego wnioskodawcy w toku", "1500 zł"], ["Dziecko do 18 lat", "500 zł"], ["Rodzice pełnoletnich dzieci, za osobę", "1800 zł"]] },
  { slug: "zmina-robotodavtsia", name: "Zmiana pracodawcy", h1: "Zmiana pracodawcy przy karcie pobytu", price: "500 zł",
    short: "Aby nowa praca nie zagroziła Twojemu legalnemu statusowi.",
    intro: "Zmiana pracy przy ważnej karcie pobytu wymaga formalności i dotrzymania terminów. Bierzemy to na siebie.",
    does: ["Sprawdzamy, co jest potrzebne w Twojej sytuacji", "Przygotowujemy wniosek o zmianę lub nowy wniosek", "Zawiadamiamy wojewodę o zakończeniu pracy", "Kontaktujemy się z nowym pracodawcą w sprawie dokumentów"],
    lines: [["Zmiana pracodawcy", "500 zł"], ["Zawiadomienie wojewody (cudzoziemiec)", "200 zł"]] },
  { slug: "dovidky", name: "Zaświadczenia: sąd, US, ZUS", h1: "Zaświadczenia z sądu, urzędu skarbowego i ZUS", price: "od 150 zł",
    short: "Uzyskujemy zaświadczenia potrzebne do pobytu, obywatelstwa lub banku.",
    intro: "Uzyskujemy za Ciebie zaświadczenia wymagane przez urzędy, banki i pracodawców.",
    does: ["Zaświadczenie o niezaleganiu w podatkach", "Zaświadczenie z ZUS o przebiegu zatrudnienia", "Zaświadczenia z sądu", "PESEL, Profil Zaufany, EKUZ"],
    lines: [["Zaświadczenie z urzędu skarbowego", "150 zł"], ["Zaświadczenie z ZUS", "150 zł"], ["Numer PESEL", "150 zł"], ["Profil Zaufany (ePUAP)", "150 zł"], ["Karta EKUZ", "150 zł"], ["Zaświadczenia z sądu", "na zapytanie"]] },
  { slug: "akty-tsyvilnoho-stanu", name: "Akty urodzenia i małżeństwa", h1: "Transkrypcja zagranicznych aktów stanu cywilnego", price: "800 zł",
    short: "Wpisanie zagranicznych aktów urodzenia i małżeństwa do polskiego rejestru, uznanie ojcostwa.",
    intro: "Wpisanie zagranicznego aktu urodzenia lub małżeństwa do polskiego rejestru stanu cywilnego (umiejscowienie zagranicznych aktów).",
    about: [
      "Transkrypcja to oficjalny proces uznania dokumentów zagranicznych w Polsce. Akt urodzenia lub małżeństwa wydany za granicą zostaje przeniesiony do polskich ksiąg stanu cywilnego. W rezultacie otrzymujesz polski dokument, w pełni odpowiadający oryginałowi, ale posiadający moc prawną na terytorium Polski.",
      "Oryginały dokumentów zagranicznych są w trakcie procedury zatrzymywane, dlatego zalecamy wcześniejsze uzyskanie duplikatów, jeśli mogą być potrzebne w przyszłości."
    ],
    when: [
      "jeśli planujesz ubiegać się o obywatelstwo polskie;",
      "jeśli chcesz uzyskać zezwolenie na pobyt czasowy lub stały dla członka rodziny w ramach łączenia rodzin i nie masz możliwości uzyskania apostille w kraju pochodzenia (wymóg większości urzędów od 1 czerwca 2025 r.)."
    ],
    doesTitle: "W czym pomagamy",
    does: ["Przeprowadzamy konsultację dotyczącą Twojej sytuacji i analizujemy dokumenty", "Jasno i przystępnie wyjaśniamy każdy etap procedury", "Organizujemy profesjonalne tłumaczenie przysięgłe", "Przygotowujemy i składamy wniosek wraz ze wszystkimi dokumentami w Urzędzie Stanu Cywilnego", "Odbieramy gotowy polski akt i przekazujemy go Tobie", "Prowadzimy również procedurę uznania ojcostwa"],
    faq: [
      ["Ile trwa procedura?", "Zazwyczaj do 30 dni."],
      ["Czy liczba dokumentów wpływa na cenę?", "Cena zależy nie od liczby, lecz od stopnia skomplikowania dokumentów."],
      ["Czy oryginały aktów urodzenia i małżeństwa są zatrzymywane?", "Tak, oryginały są zatrzymywane, dlatego zalecamy wcześniejsze uzyskanie duplikatów w kraju wydania."],
      ["Czy można złożyć notarialnie poświadczone kopie?", "Nie, wymagane są wyłącznie oryginały aktu urodzenia (oraz aktu małżeństwa)."]
    ],
    lines: [["Wpisanie aktu do rejestru", "800 zł"], ["Uznanie ojcostwa", ASK], ["Tłumaczenie przysięgłe", "na zapytanie"]],
    note: "Dodatkowo płatne są opłaty skarbowe i tłumaczenie przysięgłe dokumentów." },
  { slug: "strakhuvannia", name: "Ubezpieczenia", h1: "Wszystkie rodzaje ubezpieczeń", price: ASK,
    short: "Ubezpieczenie zdrowotne i inne — w tym polisy wymagane w sprawach pobytowych.",
    intro: "Dobieramy ubezpieczenie dla Ciebie i Twojej rodziny, w tym polisy zdrowotne wymagane w sprawach o pobyt.",
    does: ["Dobieramy polisę do Twojej sytuacji i wymogów urzędu", "Zawieramy ubezpieczenie zdrowotne dla członków rodziny", "Pomagamy uzyskać kartę EKUZ", "Wyjaśniamy, co obejmuje polisa"],
    lines: [["Dobór i zawarcie polisy", ASK], ["Karta EKUZ", "150 zł"]] }
];

const OTHER = [
  ["Konsultacja, 1 godzina", "pierwsza godzina płatna w całości, dalej — połowa kwoty za każde 30 min", "300 zł"],
  ["Osobista asysta w urzędzie", "1 wyjazd", "300 zł"],
  ["Dokument podróży dla cudzoziemca", "", "350 zł"],
  ["Oświadczenie o powierzeniu wykonywania pracy cudzoziemcowi", "wraz z kopią umowy i zawiadomieniami o rozpoczęciu i zakończeniu pracy", "500 zł"],
  ["Zaproszenie dla cudzoziemca", "", "500 zł"],
  ["Analiza i uporządkowanie dokumentów pobytowych", "zależnie od liczby dokumentów i złożoności sprawy", "350–500 zł"],
  ["Wiza do Wielkiej Brytanii", "", "2000 zł"],
  ["Zawiadomienie wojewody o zakończeniu pracy", "200 zł dla cudzoziemca, 300 zł dla pracodawcy", "200 / 300 zł"],
  ["Sprawdzenie statusu sprawy", "ustalenie stanu sprawy, zapoznanie się z aktami na podstawie pełnomocnictwa, analiza, plan działań i jedno oficjalne pismo do Wojewody (zapytanie, wniosek lub ponaglenie). Bez odwołania i dalszego prowadzenia sprawy", "1000 zł"],
  ["Tłumaczenia i legalizacja dokumentów", "apostille na polskich dokumentach, tłumaczenia przysięgłe, weryfikacja wymogów dotyczących dokumentów", "indywidualnie"],
  ["Wymiana zagranicznego prawa jazdy na polskie", "a także wymiana polskiego prawa jazdy po upływie terminu ważności: analiza, dokumenty, tłumaczenie, złożenie wniosku, kontrola statusu", "800 zł"],
  ["Odwołanie od decyzji urzędu", "w pakiecie Kompleksowym i Premium odwołanie jest wliczone, jeśli istnieją podstawy prawne", ASK],
  ["Rejestracja pobytu obywatela UE", "", ASK]
];

const FEES = [
  ["Zezwolenie na pobyt czasowy i pracę", "", "440 zł"],
  ["Niebieska Karta UE", "", "440 zł"],
  ["Zezwolenie na pobyt czasowy (pozostałe przypadki — w tym tzw. karta pobytu CUKR)", "", "340 zł"],
  ["Zezwolenie na pobyt stały", "", "640 zł"],
  ["Zezwolenie na pobyt rezydenta długoterminowego UE", "", "640 zł"],
  ["Wpis zaproszenia do ewidencji zaproszeń", "", "27 zł"],
  ["Duplikat decyzji", "", "5 zł za każdą rozpoczętą stronę"],
  ["Zmiana zezwolenia na pobyt i pracę", "", "220 zł"],
  ["Decyzja — udzielenie świadczenia pieniężnego dla posiadacza Karty Polaka", "", "10 zł"],
  ["Wydanie zaświadczenia", "", "17 zł"],
  ["Pełnomocnictwo", "", "17 zł"],
  ["Wydanie lub wymiana karty pobytu (w tym tzw. karta pobytu CUKR — dorośli i dzieci)", "", "100 zł"],
  ["Wydanie lub wymiana karty pobytu dla małoletnich, którzy w dniu złożenia wniosku nie ukończyli 16 lat, uczniów szkół ponadpodstawowych i studentów", "", "50 zł"],
  ["Uznanie za obywatela polskiego", "", "1000 zł"],
  ["Nadanie obywatelstwa polskiego przez Prezydenta RP", "", "1669 zł"]
];

const STAGES = [
  { h: "Pierwsza konsultacja i analiza sytuacji",
    p: "Współpraca zaczyna się od szczegółowego zapoznania się z Twoją sytuacją — podczas spotkania w biurze lub konsultacji online.",
    l: "Na tym etapie:",
    li: ["analizujemy Twoją obecną sytuację i podstawy legalizacji", "sprawdzamy dokumenty i oceniamy możliwe ryzyka", "określamy realne perspektywy uzyskania karty pobytu", "dobieramy najbezpieczniejszą i najskuteczniejszą strategię prowadzenia sprawy"],
    o: "Naszym celem jest, aby już po pierwszej konsultacji dać Ci pełne zrozumienie dalszych działań, terminów i możliwych scenariuszy." },
  { h: "Indywidualny plan prowadzenia sprawy",
    p: "Po podjęciu decyzji o współpracy przechodzimy do przygotowania indywidualnej strategii.",
    l: "Ten etap obejmuje:",
    li: ["zawarcie oficjalnej umowy", "przygotowanie indywidualnej listy wymaganych dokumentów", "opracowanie planu wsparcia krok po kroku", "ustalenie terminów i kolejności składania dokumentów"],
    o: "Otrzymujesz jasną strukturę działań i pełne wsparcie — bez chaosu, niepewności i zbędnych błędów." },
  { h: "Przygotowanie pełnego kompletu dokumentów",
    p: "Bierzemy na siebie całą organizacyjną i biurokratyczną część procesu.",
    l: "W szczególności:",
    li: ["przygotowanie wniosków, ankiet i wymaganych formularzy", "współpracę z pracodawcą, księgowością i instytucjami", "sprawdzenie poprawności wszystkich dokumentów", "przygotowanie kopii, tłumaczeń i poświadczeń notarialnych", "wsparcie przy składaniu dokumentów w urzędzie"],
    o: "Dzięki starannemu przygotowaniu i kontroli szczegółów ograniczamy ryzyko błędów i zwiększamy szanse na pozytywną decyzję." },
  { h: "Pełne wsparcie na wszystkich etapach",
    p: "Przez cały proces prowadzimy Twoją sprawę jako oficjalny pełnomocnik.",
    l: "W ramach wsparcia:",
    li: ["reprezentujemy Twoje interesy przed organami państwowymi", "kontrolujemy przebieg sprawy", "śledzimy statusy i terminy", "przygotowujemy i składamy dodatkowe dokumenty w razie potrzeby", "pozostajemy z Tobą w kontakcie do momentu uzyskania decyzji"],
    o: "Zawsze wiesz, na jakim etapie jest Twoja sprawa i jakie działania podejmują specjaliści." },
  { h: "Zakończenie procesu",
    p: "",
    l: "Po otrzymaniu pozytywnej decyzji:",
    li: ["wspieramy Cię przy odbiorze karty pobytu", "doradzamy w sprawie dalszego legalnego pobytu w Polsce", "w razie potrzeby pomagamy w kolejnych etapach legalizacji"],
    o: "Wspieramy klienta nie tylko do momentu złożenia dokumentów, ale do faktycznego rezultatu." }
];

const POSTS = [
  { slug: "cukr-vyizd", title: "Czy można wyjechać z Polski po złożeniu wniosku o kartę pobytu CUKR?",
    lead: "Złożenie wniosku o kartę pobytu CUKR nie pozbawia wnioskodawcy statusu UKR.",
    body: `<p>Złożenie wniosku o kartę pobytu CUKR nie pozbawia wnioskodawcy statusu UKR. Oznacza to, że w oczekiwaniu na wydanie karty można wyjeżdżać z Polski, ale jedna taka nieobecność nie powinna przekraczać 30 dni.</p>
<h2>Na co zwrócić uwagę?</h2>
<ul><li><b>Wyjazd za granicę:</b> po złożeniu wniosku można podróżować, przestrzegając limitu długości nieobecności.</li><li><b>Status UKR:</b> samo złożenie wniosku o CUKR nie powoduje jego utraty.</li><li><b>Otrzymanie karty CUKR:</b> po odebraniu karty status UKR wygasa, a pobyt w Polsce opiera się na zezwoleniu na pobyt czasowy udzielonym w związku z wydaniem tej karty.</li></ul>
<h2>Dlaczego warto kontrolować długość wyjazdu?</h2>
<p>Jeśli planujesz wyjazd w trakcie rozpatrywania wniosku, sprawdź wcześniej daty podróży i upewnij się, że Twoja nieobecność nie przekroczy dozwolonego okresu. Naruszenie zasad pobytu w ramach statusu UKR może wpłynąć na Twój status prawny i dalszą legalizację.</p>` },
  { slug: "cukr-termin", title: "Karta pobytu CUKR: do kiedy można złożyć wniosek i na jaki okres jest wydawana?",
    lead: "Wniosek o kartę pobytu CUKR można złożyć do 4 marca 2027 roku.",
    body: `<p>Obywatele Ukrainy korzystający w Polsce z ochrony czasowej i spełniający określone wymogi mogą złożyć wniosek o kartę pobytu CUKR. Ten dokument pozwala przejść ze statusu UKR na zezwolenie na pobyt czasowy na szczególnych zasadach.</p>
<h2>Do kiedy trzeba złożyć wniosek o CUKR?</h2>
<p>Wniosek o kartę pobytu CUKR można złożyć do 4 marca 2027 roku. Składa się go wyłącznie w formie elektronicznej przez specjalny portal MOS.</p>` },
  { slug: "ukr-robota", title: "Czy można legalnie pracować w Polsce ze statusem UKR? Obowiązki pracodawcy i zasady zatrudnienia",
    lead: "Obywatele Ukrainy ze statusem UKR mogą pracować bez odrębnego zezwolenia na pracę, jeśli spełnione są wymogi prawa.",
    body: `<p>Obywatele Ukrainy korzystający w Polsce z ochrony czasowej i posiadający numer PESEL ze statusem UKR mogą pracować bez uzyskiwania odrębnego zezwolenia na pracę, pod warunkiem przestrzegania przepisów.</p>
<p>Prawo do pracy pozwala na zatrudnienie na podstawie umowy o pracę lub umowy zlecenia, jeśli dana forma zatrudnienia jest zgodna z obowiązującymi zasadami. Jednocześnie dla niektórych stanowisk mogą obowiązywać szczególne ograniczenia ustawowe.</p>
<h2>Co musi zrobić pracodawca?</h2>
<p>Aby zatrudnienie było zgodne z prawem, pracodawca musi dopełnić kilku formalności:</p>
<ul><li>Powiadomić powiatowy urząd pracy o powierzeniu pracy cudzoziemcowi zgodnie z ustaloną procedurą.</li><li>Dotrzymać terminu powiadomienia — z reguły w ciągu 7 dni od rozpoczęcia pracy.</li><li>Zawrzeć odpowiednią umowę, określając warunki pracy, wynagrodzenie i zakres obowiązków.</li><li>Wykonać obowiązki wobec ZUS i podatkowe, w tym zgłosić pracownika do ubezpieczeń społecznych, jeśli wymaga tego dany rodzaj umowy i status pracownika.</li></ul>
<h2>Co, jeśli pracodawca nie powiadomi urzędu pracy w terminie?</h2>
<p>Obowiązek powiadomienia o zatrudnieniu spoczywa na pracodawcy. Odpowiedzialność za jego niedopełnienie również ponosi pracodawca.</p>
<p>Jednocześnie skutki prawne braku powiadomienia trzeba oceniać z uwzględnieniem obowiązujących przepisów i konkretnych okoliczności zatrudnienia. Nie należy zakładać, że każde naruszenie automatycznie nie ma skutków dla pracownika: ważne jest sprawdzenie, czy zachowuje on legalną podstawę pobytu i pracy.</p>
<p>Za naruszenie obowiązku powiadomienia pracodawcy może grozić grzywna. Dlatego terminowe dopełnienie formalności pozostaje ważną częścią legalnego zatrudnienia.</p>
<h2>Czy trzeba uzyskać zezwolenie na pracę?</h2>
<p>Jeśli masz prawo do pracy na podstawie statusu UKR, odrębne zezwolenie na pracę zwykle nie jest potrzebne. Warto jednak sprawdzić aktualność statusu, legalność pobytu i zgodność konkretnej formy zatrudnienia z obowiązującymi wymogami.</p>
<p>Jeśli status UKR został utracony lub zmieniła się podstawa pobytu, zasady dostępu do rynku pracy mogą być inne.</p>` },
  { slug: "zmina-prizvyshcha", title: "Zmiana nazwiska po ślubie: czy można wyjechać z Polski ze starym paszportem i kartą pobytu?",
    lead: "Tak, wyjazd może być możliwy na podstawie ważnego paszportu i karty pobytu wydanej na nazwisko panieńskie.",
    body: `<p>Tak, wyjazd może być możliwy na podstawie ważnego paszportu i karty pobytu wydanej na nazwisko panieńskie. Przed podróżą warto jednak sprawdzić zasady przekraczania granicy i warunki powrotu do Polski.</p>
<h2>Jakie dokumenty mieć przy powrocie do Polski?</h2>
<p>Jeśli nowy paszport wydano na nazwisko męża, a karta pobytu pozostaje na nazwisko panieńskie, zaleca się mieć przy sobie:</p>
<ul><li>ważny paszport na nowe nazwisko;</li><li>ważną kartę pobytu na nazwisko panieńskie;</li><li>akt małżeństwa, a w razie potrzeby jego tłumaczenie na język polski wykonane przez tłumacza przysięgłego;</li><li>stary paszport lub jego kopię, jeśli są dostępne.</li></ul>
<p>Te dokumenty pomogą potwierdzić zmianę nazwiska, ale nie gwarantują automatycznego przekroczenia granicy.</p>` },
  { slug: "prodovzhennia-pobytu", title: "Kończy się zezwolenie na pobyt czasowy. Jak je „przedłużyć”?",
    lead: "W Polsce nie ma procedury automatycznego przedłużenia zezwolenia na pobyt czasowy.",
    body: `<p>W Polsce nie ma procedury automatycznego przedłużenia zezwolenia na pobyt czasowy. Aby nadal legalnie mieszkać w kraju, trzeba złożyć wniosek o nowe zezwolenie przed upływem ważności obecnego.</p>
<p>Jeśli nie planujesz zostać w Polsce, musisz wyjechać przed upływem ważności zezwolenia, chyba że masz inną podstawę legalnego pobytu.</p>` },
  { slug: "lyst-urzad", title: "Nie odebrałeś listu z urzędu w sprawie legalizacji pobytu. Co robić?",
    lead: "W pewnych warunkach nieodebrany list uznaje się za doręczony, nawet jeśli adresat go faktycznie nie otrzymał.",
    body: `<p>Jeśli list został prawidłowo wysłany na adres podany we wniosku, ale nie został odebrany w terminie, wraca do urzędu z adnotacją „nie podjęto w terminie”. W pewnych warunkach taki list uznaje się za doręczony, nawet jeśli adresat faktycznie go nie otrzymał.</p>
<h2>Co zrobić w takiej sytuacji?</h2>
<p>Ustal, jaki list został wysłany i czy wyznaczono w nim termin na spełnienie wymogów urzędu.</p>
<p>Jeśli list nie dotyczył usunięcia braków formalnych wniosku, można zwrócić się do urzędu przez formularz lub złożyć pisemne wyjaśnienie z prośbą o przedłużenie terminu.</p>
<p><b>Ważne:</b> nieodebranie korespondencji nie zwalnia z obowiązku złożenia dokumentów. Jeśli list zawierał wezwanie do usunięcia braków formalnych, trzeba postąpić zgodnie z jego treścią i sprawdzić, czy wciąż można dotrzymać wyznaczonego terminu.</p>` },
  { slug: "povidomlennia-voievody", title: "Co oznacza obowiązek zawiadomienia wojewody o ustaniu przyczyny udzielenia zezwolenia na pobyt czasowy?",
    lead: "Cudzoziemiec ma 15 dni roboczych na zawiadomienie wojewody o ustaniu przyczyny udzielenia zezwolenia.",
    body: `<blockquote>„Zgodnie z art. 113 ustawy o cudzoziemcach, cudzoziemiec, któremu udzielono zezwolenia na pobyt czasowy, zawiadamia wojewodę, który udzielił tego zezwolenia, w terminie 15 dni roboczych, o ustaniu przyczyny udzielenia zezwolenia”.</blockquote>
<p>Cudzoziemiec, który otrzymał zezwolenie na pobyt czasowy, ma obowiązek w ciągu 15 dni roboczych zawiadomić wojewodę, który wydał zezwolenie, o ustaniu okoliczności, które były podstawą jego udzielenia.</p>
<p>Może to być na przykład zakończenie pracy, studiów lub ustanie innych okoliczności, na podstawie których wydano zezwolenie.</p>
<h2>Jak zawiadomić wojewodę?</h2>
<p>Zawiadomienie należy złożyć na piśmie we właściwym urzędzie wojewódzkim. Należy w nim podać swoje dane osobowe, numer sprawy (jeśli jest znany) i informację o ustaniu przyczyny udzielenia zezwolenia.</p>
<p><b>Ważne:</b> ustanie przyczyny udzielenia zezwolenia może wpłynąć na dalszy legalny pobyt w Polsce. Dlatego warto sprawdzić, czy masz inną podstawę pobytu w kraju.</p>` }
];

const CASES = [
  { slug: "polske-pokhodzhennia", lead: "Wnioskodawca uzyskał pobyt stały ze względu na polskie pochodzenie po dwóch odmowach.", tag: "Pobyt stały",
    title: "Karta pobytu stałego na podstawie polskiego pochodzenia: od dwóch odmów do pozytywnego wyniku",
    sit: ["Obywatel Ukrainy zwrócił się do nas po długim oczekiwaniu i nieudanym wcześniejszym prowadzeniu sprawy przez innego specjalistę. Przy pierwszym złożeniu wnioskodawca otrzymał odmowę, ponieważ poprzedni pełnomocnik nie dostarczył do sprawy oryginałów tłumaczeń dokumentów. Później wnioskodawca nie otrzymał rzetelnej informacji o przebiegu sprawy, a wszystkie oryginały dokumentów rodzinnych pozostawały w Urzędzie Wojewódzkim.", "Po zgłoszeniu się do nas wnioskodawca ponownie złożył dokumenty, jednak znów otrzymał odmowę. Wojewoda powołał się m.in. na to, że w poprzednim wniosku o pobyt czasowy wnioskodawca wskazał narodowość ukraińską, oraz uznał, że brak bezpośredniego potwierdzenia dokumentami polskiego pochodzenia w danej linii rodowodu nie daje podstaw do udzielenia zezwolenia na pobyt stały.", "Sytuację komplikowało to, że w dokumentach wnioskodawcy i jego ojca rodzice zostali wskazani jako Ukraińcy, podczas gdy dokumenty archiwalne poprzedniego pokolenia potwierdzały narodowość polską. Pełna ocena sprawy wymagała odtworzenia jej historii i zbadania materiałów archiwalnych."],
    done: ["Odtworzyliśmy historię sprawy i przeanalizowaliśmy dostępne materiały oraz dokumenty archiwalne.", "Zbadaliśmy dokumenty kilku pokoleń rodziny, aby uzasadnić polskie pochodzenie wnioskodawcy.", "Przygotowaliśmy rzetelne odwołanie od odmowy, argumentując stanowisko z uwzględnieniem okoliczności historycznych i politycznych, które mogły wpływać na wpisywanie narodowości w oficjalnych dokumentach.", "Przedstawiliśmy ocenę prawną argumentów Wojewody dotyczących braku bezpośredniego potwierdzenia pochodzenia.", "Pomogliśmy odzyskać wszystkie dokumenty rodzinne, które znajdowały się w Urzędzie Wojewódzkim."],
    res: ["Mimo wcześniejszych niepowodzeń i trudnej sytuacji dokumentowej wnioskodawca uzyskał zezwolenie na pobyt stały ze względu na polskie pochodzenie. Wszystkie dokumenty rodzinne również zostały mu zwrócone."],
    moral: "Ten przypadek pokazuje, że odmowa nie zawsze oznacza brak podstaw prawnych do uzyskania zezwolenia. W złożonych sprawach ważne jest nie tylko zebranie dokumentów, ale też odtworzenie historii wcześniejszych postępowań, zbadanie materiałów archiwalnych i konsekwentne uzasadnienie stanowiska prawnego." },
  { slug: "karta-za-18-dniv", lead: "Po pięciu miesiącach oczekiwania wnioskodawczyni otrzymała kartę pobytu 18 dni po analizie sprawy.", tag: "Karta pobytu",
    title: "Karta pobytu w 18 dni: pilne zakończenie sprawy przed wyjazdem za granicę",
    sit: ["Zwróciła się do nas kobieta, która osobiście złożyła pełny komplet dokumentów o zezwolenie na pobyt czasowy w związku z małżeństwem. Rozpatrywanie sprawy się przeciągało: wnioskodawczyni czekała na decyzję Wojewody już ponad pięć miesięcy.", "Sytuacja stała się szczególnie pilna, ponieważ kobieta musiała wyjechać za granicę, a niepewność co do terminu zakończenia sprawy utrudniała zaplanowanie podróży."],
    done: ["Zapoznaliśmy się z dokumentami i aktami sprawy.", "Przeanalizowaliśmy aktualny stan postępowania i możliwe dalsze działania w celu przyspieszenia rozpatrzenia.", "Zorganizowaliśmy dalsze prowadzenie sprawy z uwzględnieniem pilnej potrzeby uzyskania dokumentu potwierdzającego udzielone zezwolenie."],
    res: ["Już 18 dni po analizie dokumentów złożonych w sprawie wnioskodawczyni otrzymała kartę pobytu."],
    moral: "Ten przypadek pokazuje, że nawet po długim oczekiwaniu warto ocenić faktyczny stan sprawy i ustalić dalsze kroki, które mogą pomóc przybliżyć jej zakończenie.",
    imgs: [["img/cases/case2-decyzja.jpg"], ["img/cases/case2-list.jpg"]] },
  { slug: "karta-dlia-materi", lead: "Matka wnioskodawczyni otrzymała kartę pobytu na 3 lata, choć sama wnioskodawczyni nie miała własnego dochodu.", tag: "Rodzina",
    title: "Łączenie z rodziną: karta pobytu na 3 lata dla matki wnioskodawczyni",
    sit: ["Zwróciła się do nas kobieta z prośbą o pomoc w legalizacji pobytu jej matki w Polsce. Sama wnioskodawczyni miała zezwolenie na pobyt rezydenta, ale nie miała własnego dochodu ani nieruchomości, ponieważ w pełni pozostawała na utrzymaniu męża.", "Taka sytuacja wymagała indywidualnego podejścia: trzeba było nie tylko zebrać standardowy komplet dokumentów, ale też właściwie uzasadnić okoliczności rodzinne i potwierdzić sytuację finansową rodziny. W podobnych sprawach lista dokumentów nie zawsze jest oczywista, a standardowe zalecenia urzędu mogą nie wystarczyć, by zrozumieć, jak najlepiej potwierdzić konkretne okoliczności."],
    done: ["Przeanalizowaliśmy sytuację osobistą i rodzinną wnioskodawczyni.", "Ustaliliśmy, jakie okoliczności trzeba potwierdzić do rozpatrzenia sprawy.", "Przygotowaliśmy indywidualny komplet dokumentów z uwzględnieniem tego, że wnioskodawczyni nie miała własnego dochodu i pozostawała na utrzymaniu męża.", "Przygotowaliśmy dokumenty, które właściwie odzwierciedlały sytuację finansową rodziny i uzasadniały podstawy legalizacji pobytu matki."],
    res: ["Matka wnioskodawczyni otrzymała kartę pobytu na okres 3 lat."],
    moral: "Ten przypadek pokazuje, że w sprawach legalizacji pobytu członków rodziny ważne jest uwzględnienie nie tylko formalnej listy dokumentów, ale też rzeczywistych okoliczności życiowych. Indywidualna analiza pomaga ustalić, jakie dowody są potrzebne w Twojej sytuacji, uniknąć zbędnych kroków i zmniejszyć ryzyko przewlekłości z powodu niewystarczającego udokumentowania." },
  { slug: "12-spetsialistiv", lead: "Wszystkich 12 specjalistów rozpoczęło pracę u nowego pracodawcy w ciągu dwóch tygodni.", tag: "Pracodawca",
    title: "12 specjalistów w 2 tygodnie: kompleksowe wsparcie zatrudnienia i legalizacji",
    sit: ["Zwrócił się do nas pracodawca, który musiał zatrudnić w swojej firmie 12 specjalistów — obywateli Ukrainy i Białorusi. Każdy pracownik miał indywidualną sytuację migracyjną: ktoś miał już kartę pobytu wydaną w związku z pracą u poprzedniego pracodawcy; ktoś był w trakcie rozpatrywania wniosku o zezwolenie na pobyt; ktoś dopiero przygotowywał się do złożenia dokumentów, a dwie osoby korzystały ze statusu UKR.", "Dodatkową trudnością było to, że większość specjalistów miała rodziny, a więc zmiana pracy mogła wpływać nie tylko na ich własną sytuację, ale też na dalszą legalizację pobytu bliskich.", "Czasu na organizację procesu było mało, a zakres pracy i odpowiedzialność — duże. Trzeba było szybko przeanalizować 12 odrębnych sytuacji, ustalić właściwe procedury i przygotować dokumenty tak, aby każdy pracownik mógł rozpocząć pracę zgodnie z przepisami."],
    done: ["Przeprowadziliśmy indywidualną analizę statusu migracyjnego każdego z 12 pracowników, uwzględniając posiadane karty pobytu, niezakończone postępowania i status UKR.", "Oceniliśmy sytuację zatrudnienia i ustaliliśmy wymagane dokumenty oraz procedury dla każdego specjalisty.", "Uwzględniliśmy sytuację rodzinną pracowników i możliwy wpływ zmiany pracy na legalizację pobytu członków ich rodzin.", "Przygotowaliśmy indywidualne komplety dokumentów do zatrudnienia i dalszego składania wniosków lub wprowadzenia niezbędnych zmian, zależnie od konkretnej sytuacji.", "Skoordynowaliśmy proces tak, aby pracodawca i pracownicy mogli działać konsekwentnie, bez zbędnych opóźnień i chaosu w dokumentach."],
    res: ["Już w ciągu dwóch tygodni od pierwszej konsultacji wszystkich 12 specjalistów rozpoczęło pracę u nowego pracodawcy. Każdy otrzymał komplet dokumentów przygotowany do swojej sytuacji na potrzeby dalszych procedur.", "Następnie wszyscy pracownicy otrzymali wymagane karty pobytu, a część z nich wraz z nami złożyła już dokumenty o zezwolenie na pobyt rezydenta długoterminowego UE."],
    moral: "Ten przypadek dotyczy systemowej pracy z wieloma różnymi sytuacjami migracyjnymi jednocześnie. Gdy pracodawca musi szybko zatrudnić specjalistów, nie wystarczy przygotować jednego standardowego kompletu dokumentów dla wszystkich. Ważne jest ocenienie statusu każdego pracownika, uwzględnienie sytuacji rodzinnej i właściwe ustalenie dalszych kroków. Właśnie takie podejście pozwala zorganizować proces w krótkim czasie i zmniejszyć ryzyko błędów." }
];

export default {
  meta: { lang: "pl", code: "PL", name: "Polski", locale: "pl-PL", og: "pl_PL", hl: "pl" },
  nav: { services: "Usługi", how: "Jak pracujemy", about: "O nas", cases: "Case studies", blog: "Blog", contacts: "Kontakt" },
  ui: {
    write: "Napisz", home: "Strona główna",
    footerTag: "Legalizacja pobytu i pracy cudzoziemców w Polsce.",
    fServices: "Usługi", fAll: "Wszystkie usługi i ceny", fSite: "Strona", fContacts: "Kontakt",
    disclaimer: "Treści publikowane na stronie internetowej Julia Hajecka — Legalizacja pobytu cudzoziemców mają charakter informacyjny i edukacyjny. Nie stanowią indywidualnej porady prawnej ani podatkowej lub formalnej opinii prawnej i nie zastępują analizy konkretnej sprawy.",
    cookieSettings: "Ustawienia cookies",
    ccText: "Używamy niezbędnych plików cookies. Za Twoją zgodą ładujemy też mapę Google Maps, która zapisuje własne cookies.",
    ccNecessary: "Tylko niezbędne", ccAll: "Akceptuję wszystkie",
    consult: "Umów konsultację", request: "Zostaw zgłoszenie",
    bandH: "Opowiedz o swojej sytuacji", bandP: "Napisz na komunikatorze — odpowiemy i zaproponujemy termin konsultacji.",
    more: "Szczegóły i cena", read: "Czytaj →", readCase: "Czytaj case study →", choose: "Wybieram pakiet",
    price: "Cena", service: "Usługa", wa: "Napisz na WhatsApp",
    stagesDefault: "Etapy współpracy dostosowujemy do specyfiki każdej sprawy.", stagesMore: "Więcej —", stagesLink: "jak pracujemy",
    aboutProc: "O procedurze", when: "Kiedy jest potrzebna", doesDefault: "Co robimy", forWhom: "Dla kogo jest ta usługa?",
    faqEyebrow: "Najczęstsze pytania", faqH: "Odpowiedzi na częste pytania",
    packsEyebrow: "Wsparcie w procesie legalizacji", also: "Zobacz też", otherServices: "Inne usługi",
    rvEyebrow: "Opinie", rvH: "Co mówią klienci", rvMore: "Więcej opinii klientów — w profilu Google.", rvBtn: "Czytaj opinie w Google", prev: "Wstecz", next: "Dalej",
    articleNote: "Artykuł ma charakter informacyjny. Każda sprawa ma swoje niuanse — napisz, a przeanalizujemy właśnie Twoją sytuację.",
    readAlso: "Czytaj także", caseWord: "Case", caseSit: "Sytuacja", caseDone: "Co zrobiliśmy", caseRes: "Rezultat",
    caseHidden: "Dane klienta zostały ukryte.", otherCases: "Inne case studies", date: "Październik 2026",
    caseImgs: ["Decyzja Wojewody", "Zaproszenie po odbiór karty"],
    packsets: {
      main: { title: "Pakiety wsparcia", lead: "Pomoc w przygotowaniu dokumentów, złożeniu wniosku i prowadzeniu procedury legalizacji pobytu w Polsce." },
      biz: { title: "Pakiety dla przedsiębiorców", lead: "Pobyt czasowy w związku z prowadzeniem działalności gospodarczej." }
    }
  },
  home: {
    title: "Julia Hajecka — legalizacja pobytu i pracy cudzoziemców w Polsce",
    desc: "Karta pobytu, Blue Card, łączenie z rodziną, obywatelstwo. Wsparcie od konsultacji do decyzji. Warszawa.",
    eyebrow: "Warszawa · karta pobytu · Blue Card · obywatelstwo",
    h1: "Legalny pobyt i praca w Polsce — bez błędów i zbędnych nerwów",
    sub: "Prowadzimy sprawę od pierwszej konsultacji do decyzji: sprawdzamy dokumenty, składamy wniosek, kontrolujemy przebieg sprawy w urzędzie.",
    prices: "Usługi i ceny",
    door1t: "Jestem cudzoziemcem", door1p: "Karta pobytu, Blue Card, łączenie z rodziną, obywatelstwo, zaświadczenia",
    urgentH: "Kończy się wiza lub karta pobytu?",
    urgent: ["Wniosek trzeba złożyć najpóźniej w ostatnim dniu legalnego pobytu.", "Im wcześniej zaczniemy, tym spokojniej przebiegnie proces."],
    urgentBtn: "Napisz teraz",
    svcEyebrow: "Usługi", svcH: "W czym pomagamy", svcLead: "Każda usługa — z jawną ceną i jasnym zakresem pracy.", svcAll: "Wszystkie usługi i ceny",
    komuEyebrow: "Komu pomagamy", komuH: "Realne wsparcie dla cudzoziemców i pracodawców w Polsce",
    komuLead: "Oferujemy szereg specjalistycznych usług dostosowanych do indywidualnych potrzeb. Koncentrujemy się na zrozumieniu Twojej sytuacji i dostarczeniu skutecznych, praktycznych rozwiązań.",
    foreignH: "Dla cudzoziemców",
    foreignP: "Chcesz uregulować swój pobyt w Polsce, załatwić sprawy urzędowe lub rozpocząć własną działalność? Pomożemy Ci przejść przez formalności.",
    foreignLi: [
      "<b>Legalizacja pobytu</b> — uzyskanie karty pobytu czasowego lub stałego.",
      "<b>Obywatelstwo polskie</b> — przygotowanie do złożenia wniosku o nadanie lub uznanie za obywatela polskiego.",
      "<b>Wymiana dokumentów</b> — karty pobytu i prawa jazdy, a także uzyskanie numeru PESEL.",
      "<b>Odwołania od decyzji urzędowych</b> — pomoc w przypadku odmowy wydania dokumentu lub udzielenia zezwolenia.",
      "<b>Rejestracja pobytu obywateli UE</b> — dopełnienie formalności związanych z pobytem w Polsce.",
      "<b>Transkrypcja zagranicznych aktów stanu cywilnego</b> — przeniesienie zagranicznych dokumentów do polskiego rejestru.",
      "<b>Profil zaufany</b> — uzyskanie dostępu do usług administracji publicznej online."
    ],
    stagesEyebrow: "Proces", stagesH: "Jak pracujemy", stagesMore: "Więcej o etapach",
    blogEyebrow: "Blog", blogH: "Przydatne informacje o legalizacji", blogAll: "Wszystkie artykuły"
  },
  servicesPage: {
    title: "Usługi i ceny — Julia Hajecka",
    desc: "Karta pobytu, Blue Card, rezydent UE, obywatelstwo, łączenie z rodziną, zaświadczenia, ubezpieczenia. Ceny wszystkich usług.",
    eyebrow: "Usługi", h1: "Usługi i ceny", lead: "Wybierz usługę, aby zobaczyć, co dokładnie robimy i ile to kosztuje.",
    packsH: "Karta pobytu czasowego: pakiety wsparcia",
    packsLead: "Pomoc w przygotowaniu dokumentów, złożeniu wniosku i prowadzeniu procedury legalizacji pobytu w Polsce.",
    allEyebrow: "Wszystkie usługi", allH: "Wybierz usługę", priceEyebrow: "Cennik", priceH: "Usługi dodatkowe",
    toc: ["Na tej stronie", "Pakiety wsparcia", "Usługi główne", "Usługi dodatkowe", "Opłaty skarbowe"],
    feesEyebrow: "Opłaty urzędowe", feesH: "Opłaty skarbowe", feesLead: "Opłaty wnosi się do właściwego organu, osobno od wynagrodzenia za nasze usługi."
  },
  how: {
    title: "Jak pracujemy — Julia Hajecka", desc: "Pięć etapów wsparcia: konsultacja, plan sprawy, dokumenty, prowadzenie, decyzja.",
    crumb: "Jak pracujemy", eyebrow: "Proces", h1: "Jak pracujemy", lead: "Od pierwszej konsultacji do odbioru karty — pięć jasnych etapów.",
    bandH: "Zacznijmy od konsultacji", bandP: "Pierwsza godzina — 300 zł. Po niej wiesz, jakie są dalsze kroki, terminy i możliwe scenariusze."
  },
  about: {
    title: "O nas — Julia Hajecka",
    desc: "Od 2017 roku pomagamy cudzoziemcom, ich rodzinom i przedsiębiorcom w sprawach legalizacji pobytu i pracy w Polsce.",
    crumb: "O nas", eyebrow: "O nas", h1: "Indywidualne podejście. Doświadczenie. Strategia.",
    paras: [
      "Od 2017 roku wspieram cudzoziemców, ich rodziny oraz przedsiębiorców w sprawach związanych z legalizacją pobytu i pracy w Polsce. Dziś łączę własne doświadczenie z wiedzą zespołu sprawdzonych specjalistów: nadzoruję kierunek działań, dbam o spójność strategii i jakość obsługi na każdym etapie.",
      "Nie wierzę w uniwersalne rozwiązania. Zanim podejmiemy działania, analizujemy okoliczności sprawy, potrzeby klienta i dostępne możliwości prawne — i patrzymy szerzej niż na pojedynczy wniosek: na długoterminowe plany, ryzyka i kolejne etapy pobytu w Polsce."
    ],
    pull: "Ponad 1500 rodzin obdarzyło mnie swoim zaufaniem. Za tą liczbą kryją się konkretne historie i ludzie, dla których legalizacja pobytu oznacza możliwość życia razem, pracy i planowania przyszłości w Polsce.",
    prEyebrow: "Podejście", prH: "Zasady naszej pracy",
    principles: [
      ["Indywidualne podejście do każdej sprawy", "Nie korzystamy z gotowych schematów. Dokładnie analizujemy Twoją sytuację, potrzeby i cele, aby zaproponować najlepiej dopasowane rozwiązanie zgodne z obowiązującymi przepisami."],
      ["Jasne zasady współpracy", "Od początku wiesz, na czym polega współpraca, jakie są jej koszty i przewidywany czas realizacji. Przejrzyste warunki, rzetelne informacje i brak ukrytych kosztów."],
      ["Bieżące wsparcie i kontakt", "Pozostajemy z Tobą w kontakcie na każdym etapie: odpowiadamy na pytania i informujemy o postępach. Jesteśmy dostępni telefonicznie, mailowo oraz przez WhatsApp, Viber i Telegram."]
    ],
    bandH: "Twoja przyszłość w Polsce zasługuje na przemyślaną strategię",
    bandP: "Potrzebujesz wsparcia w legalizacji pobytu lub pracy? Napisz do nas — przeanalizujemy Twoją sytuację i wskażemy możliwe kierunki działania."
  },
  casesPage: {
    title: "Case studies — Julia Hajecka", desc: "Historie spraw: z czym zgłaszali się klienci i jak się zakończyły.",
    crumb: "Case studies", eyebrow: "Case studies", h1: "Historie spraw", lead: "Bez imion i danych osobowych: sytuacja, co zrobiliśmy, rezultat."
  },
  blogPage: {
    title: "Blog o legalizacji w Polsce — Julia Hajecka", desc: "Odpowiedzi na częste pytania o legalizację pobytu i pracy w Polsce.",
    crumb: "Blog", eyebrow: "Blog", h1: "Przydatne informacje o legalizacji", lead: "Odpowiedzi na pytania, które klienci zadają nam najczęściej."
  },
  contact: {
    title: "Kontakt — Julia Hajecka", desc: "WhatsApp, Telegram, biuro w Bliznem Łaszczyńskiego pod Warszawą.",
    crumb: "Kontakt", eyebrow: "Kontakt", h1: "Opowiedz o swojej sytuacji",
    lead: "Napisz na komunikatorze lub zostaw zgłoszenie — odpowiemy i zaproponujemy termin konsultacji.",
    phone: "Telefon", email: "E-mail", office: "Biuro", hours: "Godziny", hoursV: "Pn–Pt od 9:00, spotkania po wcześniejszym umówieniu",
    langs: "Języki", langsV: "polski, ukraiński, rosyjski",
    fName: "Imię", fPhone: "Telefon", fMsgr: "Preferowany komunikator", fOther: "Inny", fLang: "Język kontaktu",
    fWho: "Jestem", whoPriv: "Osoba prywatna", whoEmp: "Pracodawca", fService: "Usługa", svcConsult: "Konsultacja", svcOther: "Inne",
    fMsg: "Krótko o sytuacji", fSend: "Wyślij przez WhatsApp", fNote: "Zgłoszenie otworzy się w WhatsApp z gotową treścią — wystarczy kliknąć „Wyślij”.",
    visitEyebrow: "Dojazd", visitH: "Planujesz wizytę w naszym biurze?",
    visitP: "Z przyjemnością Cię powitamy! Biuro znajduje się w Bliznem Łaszczyńskiego, niedaleko warszawskiego Bemowa. Możesz dotrzeć do nas samochodem lub komunikacją miejską.",
    route: "Wyznacz trasę", gcard: "Wizytówka Google", mapPh: "Mapa Google Maps pojawi się po wyrażeniu zgody na cookies.", mapBtn: "Pokaż mapę"
  },
  ask: ASK, packs: PACKS, packsBiz: PACKS_BIZ, terms: TERMS, termsPacks: TERMS_PACKS,
  services: SERVICES, other: OTHER, fees: FEES, stages: STAGES, posts: POSTS, cases: CASES
};
