export const exams = {
  "2019": [
    {
      "id": "2019-1-a",
      "pytanie": "1. Dlaczego router ma więcej niż jeden adres IP?",
      "odpowiedz": "Jeden adres IP jest zawsze zarezerwowany do wysyłania pakietów do bramy domyślnej.",
      "odp": false
    },
    {
      "id": "2019-1-b",
      "pytanie": "1. Dlaczego router ma więcej niż jeden adres IP?",
      "odpowiedz": "Do każdego wpisu z tablicy routingu konieczny jest osobny adres IP.",
      "odp": false
    },
    {
      "id": "2019-1-c",
      "pytanie": "1. Dlaczego router ma więcej niż jeden adres IP?",
      "odpowiedz": "Jeden adres służy tylko do przyjmowania pakietów a drugi tylko do ich wysyłania.",
      "odp": false,
      "tip": "Routery działają w trybie pełnego dupleksu"
    },
    {
      "id": "2019-1-d",
      "pytanie": "1. Dlaczego router ma więcej niż jeden adres IP?",
      "odpowiedz": "Każdy z interfejsów sieciowych routera jest zazwyczaj w odrębnej sieci i tym interfejsom przypisane są adresy z tych sieci.",
      "odp": true,
      "tip": "Zadaniem routera jest łączenie różnych sieci. Aby mógł on \"widzieć\" sieci i przekazywać między nimi pakiety, musi być fizycznie lub logicznie częścią każdej z nich."
    },
    {
      "id": "2019-2-a",
      "pytanie": "2. Załóżmy, że routery A i B są bezpośrednio połączone i wykorzystują algorytm routingu dynamicznego oparty na wektorach odległości z włączonym mechanizmem zatruwania ścieżek z metryką równą liczbie hopów. Tablica routingu A zawiera wpis określający, że istnieje ścieżka długości 3 do routera X, na której pierwszym krokiem jest router B. Router B wysyła do routera A informację, że jego odległość od X wynosi 5. Co zrobi router A?",
      "odpowiedz": "Zignoruje tę informację, gdyż jego obecna trasa jest lepsza.",
      "odp": false,
      "tip": "W wektorach odległości (np. protokół RIP) router ufa swojemu sąsiadowi. Skoro router A dociera do X za pośrednictwem routera B, to musi uwierzyć w każdą nową wartość podaną przez B (nawet gorszą), ponieważ i tak cały jego ruch przechodzi przez ten węzeł."
    },
    {
      "id": "2019-2-b",
      "pytanie": "2. Załóżmy, że routery A i B są bezpośrednio połączone i wykorzystują algorytm routingu dynamicznego oparty na wektorach odległości z włączonym mechanizmem zatruwania ścieżek z metryką równą liczbie hopów. Tablica routingu A zawiera wpis określający, że istnieje ścieżka długości 3 do routera X, na której pierwszym krokiem jest router B. Router B wysyła do routera A informację, że jego odległość od X wynosi 5. Co zrobi router A?",
      "odpowiedz": "Zaktualizuje swój wpis, zmieniając odległość do routera X na 6.",
      "odp": true,
      "tip": "Złota zasada wektora odległości: odległość całkowita to \"odległość sąsiada do celu\" plus \"odległość od nas do sąsiada\". Skoro B podaje odległość 5, a przejście z A do B to 1 skok (są bezpośrednio połączone), to nowa trasa z A do X wynosi: 5 + 1 = 6."
    },
    {
      "id": "2019-2-c",
      "pytanie": "2. Załóżmy, że routery A i B są bezpośrednio połączone i wykorzystują algorytm routingu dynamicznego oparty na wektorach odległości z włączonym mechanizmem zatruwania ścieżek z metryką równą liczbie hopów. Tablica routingu A zawiera wpis określający, że istnieje ścieżka długości 3 do routera X, na której pierwszym krokiem jest router B. Router B wysyła do routera A informację, że jego odległość od X wynosi 5. Co zrobi router A?",
      "odpowiedz": "Zaktualizuje swój wpis, zmieniając odległość do routera X na 8.",
      "odp": false,
      "tip": "Wartość matematycznie błędna. Router A aktualizuje dystans wyłącznie na podstawie nowej informacji od B (5) i kosztu dotarcia do B (1). Stara wartość na tablicy (3) jest w tym momencie po prostu zastępowana, a nie dodawana."
    },
    {
      "id": "2019-2-d",
      "pytanie": "2. Załóżmy, że routery A i B są bezpośrednio połączone i wykorzystują algorytm routingu dynamicznego oparty na wektorach odległości z włączonym mechanizmem zatruwania ścieżek z metryką równą liczbie hopów. Tablica routingu A zawiera wpis określający, że istnieje ścieżka długości 3 do routera X, na której pierwszym krokiem jest router B. Router B wysyła do routera A informację, że jego odległość od X wynosi 5. Co zrobi router A?",
      "odpowiedz": "Powyższa informacja nie dotrze do A ze względu na mechanizm zatruwania ścieżek.",
      "odp": false,
      "tip": "Zatruwanie ścieżek (route poisoning) działa inaczej – polega na oznaczaniu całkowicie zerwanych lub niedostępnych tras nieskończonym kosztem (np. jako 16 skoków w RIP), aby szybko wygasić fałszywe informacje. Ten mechanizm nie blokuje przesyłania standardowych, poprawnych aktualizacji metryk (takich jak przesłana tu wartość 5) pomiędzy routerami."
    },
    {
      "id": "2019-3-a",
      "pytanie": "3. Zaznacz prawdziwe zdania o sumach kontrolnych i kodach.",
      "odpowiedz": "Jeśli odległość Hamminga między dowolną parą kodów wynosi co najmniej 4, to takie kodowanie potrafi wykryć 3 błędy pojedynczych bitów.",
      "odp": true,
      "tip": "Wzór na zdolność wykrywania błędów to d >= e + 1 (gdzie d to odległość Hamminga, a e to liczba błędów do wykrycia). Skoro odległość wynosi 4, kod z łatwością poradzi sobie z zauważeniem 3 błędów."
    },
    {
      "id": "2019-3-b",
      "pytanie": "3. Zaznacz prawdziwe zdania o sumach kontrolnych i kodach.",
      "odpowiedz": "Sumy kontrolne CRC stosowane są w warstwie łącza danych.",
      "odp": true,
      "tip": "Suma kontrolna CRC (Cykliczny Kod Nadmiarowy) jest fizycznie doklejana na samym końcu każdej ramki Ethernet (jako tzw. sekwencja FCS). Oznacza to, że sprawdza ona poprawność transmisji w warstwie łącza danych (warstwa 2)."
    },
    {
      "id": "2019-3-c",
      "pytanie": "3. Zaznacz prawdziwe zdania o sumach kontrolnych i kodach.",
      "odpowiedz": "Kody MAC stosowane są do korekcji błędów transmisji.",
      "odp": false,
      "tip": "Kody MAC (Message Authentication Code) to pojęcie kryptograficzne. Służą one wyłącznie do upewnienia się, że nikt celowo nie podmienił wiadomości po drodze (autentyczność i integralność), ale nie posiadają wbudowanych mechanizmów do naprawiania uszkodzonych bitów."
    },
    {
      "id": "2019-3-d",
      "pytanie": "3. Zaznacz prawdziwe zdania o sumach kontrolnych i kodach.",
      "odpowiedz": "Jeśli odległość Hamminga między dowolną parą kodów wynosi co najmniej 4, to takie kodowanie potrafi skorygować 2 błędy pojedynczych bitów.",
      "odp": false,
      "tip": "Wzór na zdolność korekcji (czyli nie tylko wykrycia, ale i naprawienia) błędów jest znacznie bardziej rygorystyczny: d >= 2e + 1. Przy odległości wynoszącej 4, ten kod gwarantuje bezbłędne naprawienie tylko 1 błędu. Do skorygowania 2 błędów potrzebowalibyśmy odległości wynoszącej minimum 5."
    },
    {
      "id": "2019-4-a",
      "pytanie": "4. Zaznacz prawdziwe zdania",
      "odpowiedz": "Mechanizm Go-Back-N jest szczególnym przypadkiem ogólnego mechanizmu okna przesuwnego, w którym okno odbiorcy jest równe 1.",
      "odp": true,
      "tip": "W Go-Back-N nadawca może wysłać wiele ramek na raz, ale odbiorca ma bufor (okno) o rozmiarze dokładnie 1. Oznacza to, że czeka tylko na jedną, konkretną ramkę w odpowiedniej kolejności. Jeśli dostanie ramkę z przyszłości (poza kolejnością), bezwzględnie ją odrzuca."
    },
    {
      "id": "2019-4-b",
      "pytanie": "4. Zaznacz prawdziwe zdania",
      "odpowiedz": "Mechanizm Stop-And-Wait jest szczególnym przypadkiem ogólnego mechanizmu okna przesuwnego, w którym okno odbiorcy jest równe 1.",
      "odp": false,
      "tip": "Samo stwierdzenie, że okno odbiorcy wynosi 1, to definicja protokołu Go-Back-N (patrz punkt wyżej). To, co wyróżnia mechanizm Stop-And-Wait na tle innych algorytmów, to ograniczenie po stronie nadawcy."
    },
    {
      "id": "2019-4-c",
      "pytanie": "4. Zaznacz prawdziwe zdania",
      "odpowiedz": "Mechanizm Stop-And-Wait jest szczególnym przypadkiem ogólnego mechanizmu okna przesuwnego, w którym okno nadawcy jest równe 1.",
      "odp": true,
      "tip": "Nazwa mówi sama za siebie (\"zatrzymaj się i czekaj\"). Nadawca \"wypuszcza\" w sieć tylko jedną ramkę (jego okno nadawcze wynosi 1) i zamraża transmisję do momentu, aż nie dostanie na nią potwierdzenia (ACK)."
    },
    {
      "id": "2019-4-d",
      "pytanie": "4. Zaznacz prawdziwe zdania",
      "odpowiedz": "Mechanizm Go-Back-N jest szczególnym przypadkiem ogólnego mechanizmu okna przesuwnego, w którym okno nadawcy jest równe 1.",
      "odp": false,
      "tip": "Zaletą mechanizmu Go-Back-N jest właśnie to, że okno nadawcy jest większe niż 1 (wynosi N). Dzięki temu nadawca nie musi tracić czasu na czekanie i może wysłać pakiet wielu ramek jedna po drugiej, zanim otrzyma pierwsze potwierdzenia."
    },
    {
      "id": "2019-5-a",
      "pytanie": "5. Załóżmy, że interfejs enp0s0 jest już aktywny. Po wpisaniu linuksowego polecenia ip addr add 10.1.1.15/24 dev enp0s0 następujące ustawienia zostaną skonfigurowane dla sieci podłączonej do interfejsu enp0s0:",
      "odpowiedz": "Brama domyślna zostanie ustawiona na 10.0.0.1.",
      "odp": false,
      "tip": "Polecenie ip addr add służy wyłącznie do przypisania adresu IP oraz określenia rozmiaru podsieci na danym interfejsie. Konfiguracja routingu to osobny proces. Aby ustawić bramę domyślną, należy użyć polecenia ip route add default via <adres_bramy>."
    },
    {
      "id": "2019-5-b",
      "pytanie": "5. Załóżmy, że interfejs enp0s0 jest już aktywny. Po wpisaniu linuksowego polecenia ip addr add 10.1.1.15/24 dev enp0s0 następujące ustawienia zostaną skonfigurowane dla sieci podłączonej do interfejsu enp0s0:",
      "odpowiedz": "Brama domyślna zostanie ustawiona na 10.1.1.1.",
      "odp": false,
      "tip": "Polecenie ip addr add służy wyłącznie do przypisania adresu IP oraz określenia rozmiaru podsieci na danym interfejsie. Konfiguracja routingu to osobny proces. Aby ustawić bramę domyślną, należy użyć polecenia ip route add default via <adres_bramy>."
    },
    {
      "id": "2019-5-c",
      "pytanie": "5. Załóżmy, że interfejs enp0s0 jest już aktywny. Po wpisaniu linuksowego polecenia ip addr add 10.1.1.15/24 dev enp0s0 następujące ustawienia zostaną skonfigurowane dla sieci podłączonej do interfejsu enp0s0:",
      "odpowiedz": "Adres rozgłoszeniowy zostanie ustawiony na 10.1.1.255.",
      "odp": true,
      "tip": "Maska /24 (czyli 255.255.255.0) oznacza, że pierwsze trzy oktety określają sieć, a ostatni – hosty. System Linux samodzielnie kalkuluje z tego adres rozgłoszeniowy (broadcast), zmieniając bity hosta na same jedynki. Daje to w efekcie adres 10.1.1.255."
    },
    {
      "id": "2019-5-d",
      "pytanie": "5. Załóżmy, że interfejs enp0s0 jest już aktywny. Po wpisaniu linuksowego polecenia ip addr add 10.1.1.15/24 dev enp0s0 następujące ustawienia zostaną skonfigurowane dla sieci podłączonej do interfejsu enp0s0:",
      "odpowiedz": "Adres rozgłoszeniowy zostanie ustawiony na 10.255.255.255.",
      "odp": false,
      "tip": "Adres 10.255.255.255 zostałby wyliczony przez system tylko wtedy, gdybyś użył maski /8 (domyślnej dla starych sieci klasy A), czyli polecenia: ip addr add 10.1.1.15/8. My podaliśmy jednak precyzyjną maskę /24."
    },
    {
      "id": "2019-6-a",
      "pytanie": "6. Tylko jedna poprawna odpowiedź. Na komputerze użytkownik uruchomił program ping, pingając adres innego komputera w lokalnej sieci ethernetowej. Co (i w jakiej kolejności) znajdzie się w wysyłanych przez kartę sieciową danych?",
      "odpowiedz": "Nagłówek ramki, nagłówek pakietu IP, nagłówek ICMP, dane ICMP, suma kontrolna CRC",
      "odp": true,
      "tip": "Zadziałała tutaj zasada hermetyzacji (enkapsulacji). Program ping generuje dane i dodaje nagłówek ICMP. To trafia do warstwy sieciowej, która dokleja nagłówek IP. Na koniec trafia to do warstwy łącza danych (Ethernet), która dodaje nagłówek ramki na początku, a na samym końcu dokleja sumę kontrolną (CRC), aby zweryfikować poprawność całości."
    },
    {
      "id": "2019-6-b",
      "pytanie": "6. Tylko jedna poprawna odpowiedź. Na komputerze użytkownik uruchomił program ping, pingając adres innego komputera w lokalnej sieci ethernetowej. Co (i w jakiej kolejności) znajdzie się w wysyłanych przez kartę sieciową danych?",
      "odpowiedz": "Nagłówek ramki, nagłówek ICMP, dane ICMP, suma kontrolna CRC",
      "odp": false,
      "tip": "Brakuje nagłówka IP. Komunikaty ICMP nie potrafią podróżować samodzielnie w samej ramce Ethernet – zawsze muszą być \"zapakowane\" w protokół IP, który nadaje im adresy źródłowe i docelowe."
    },
    {
      "id": "2019-6-c",
      "pytanie": "6. Tylko jedna poprawna odpowiedź. Na komputerze użytkownik uruchomił program ping, pingając adres innego komputera w lokalnej sieci ethernetowej. Co (i w jakiej kolejności) znajdzie się w wysyłanych przez kartę sieciową danych?",
      "odpowiedz": "Nagłówek ramki, nagłówek pakietu IP, dane ICMP, suma kontrolna CRC",
      "odp": false,
      "tip": "Brakuje nagłówka ICMP. Bez niego odbiorca nie wiedziałby, czy przesłane dane to żądanie odpowiedzi (Echo Request), odpowiedź (Echo Reply), czy może informacja o błędzie."
    },
    {
      "id": "2019-6-d",
      "pytanie": "6. Tylko jedna poprawna odpowiedź. Na komputerze użytkownik uruchomił program ping, pingając adres innego komputera w lokalnej sieci ethernetowej. Co (i w jakiej kolejności) znajdzie się w wysyłanych przez kartę sieciową danych?",
      "odpowiedz": "Nagłówek ramki, suma kontrolna CRC, nagłówek pakietu IP, nagłówek ICMP",
      "odp": false,
      "tip": "Błędna kolejność. Suma kontrolna CRC (tzw. sekwencja FCS w ramce Ethernet) z definicji znajduje się na samym końcu przesyłanych danych (jako zwiastun/trailer ramki), a nie w środku."
    },
    {
      "id": "2019-7-a",
      "pytanie": "7. Które z poniższych zdań są prawdziwe w przypadku protokołu TCP?",
      "odpowiedz": "Wykorzystuje algorytm okna przesuwnego.",
      "odp": true,
      "tip": "Okno przesuwne to fundament wydajności TCP. Pozwala nadawcy wysyłać wiele kolejnych segmentów danych bez konieczności zatrzymywania się i czekania na potwierdzenie (ACK) każdego z nich z osobna."
    },
    {
      "id": "2019-7-b",
      "pytanie": "7. Które z poniższych zdań są prawdziwe w przypadku protokołu TCP?",
      "odpowiedz": "Otrzymuje strumień danych z warstwy sieciowej i dzieli go na segmenty.",
      "odp": false,
      "tip": "Kierunek przepływu danych jest tu odwrotny. TCP odbiera strumień z warstwy aplikacji (z góry), dzieli go na mniejsze paczki (segmenty) i dopiero wtedy przesyła w dół do warstwy sieciowej (IP)."
    },
    {
      "id": "2019-7-c",
      "pytanie": "7. Które z poniższych zdań są prawdziwe w przypadku protokołu TCP?",
      "odpowiedz": "Potrafi dokonywać konwersji pomiędzy różnymi formatami plików.",
      "odp": false,
      "tip": "TCP jest całkowicie \"ślepe\" na zawartość. Interesuje go tylko bezpieczne i bezbłędne przesłanie surowych bajtów. Konwersją plików, kodowaniem czy szyfrowaniem zajmują się wyższe warstwy (np. prezentacji lub aplikacji)."
    },
    {
      "id": "2019-7-d",
      "pytanie": "7. Które z poniższych zdań są prawdziwe w przypadku protokołu TCP?",
      "odpowiedz": "Umożliwia kontrolę przepływu.",
      "odp": true,
      "tip": "Dzięki polu \"rozmiar okna\" w swoim nagłówku, TCP potrafi dynamicznie regulować prędkość transmisji, aby upewnić się, że szybki nadawca nie \"zaleje\" danymi wolniejszego odbiorcy."
    },
    {
      "id": "2019-8-a",
      "pytanie": "8. Jądro systemu odebrało segment TCP w pakiecie IP i zapisało zawartość segmentu do bufora odbiorczego związanego z pewnym gniazdem. Na podstawie jakich informacji w segmencie zostało wybrane gniazdo?",
      "odpowiedz": "Lokalny port",
      "odp": true,
      "tip": "Port (np. 80 dla serwera WWW) to kluczowa informacja w nagłówku TCP. To on mówi systemowi operacyjnemu, do jakiej konkretnie aplikacji (do którego gniazda) mają trafić odebrane dane."
    },
    {
      "id": "2019-8-b",
      "pytanie": "8. Jądro systemu odebrało segment TCP w pakiecie IP i zapisało zawartość segmentu do bufora odbiorczego związanego z pewnym gniazdem. Na podstawie jakich informacji w segmencie zostało wybrane gniazdo?",
      "odpowiedz": "Zdalny adres IP",
      "odp": true,
      "tip": "Każde aktywne połączenie TCP jest identyfikowane przez unikalną \"czwórkę\": lokalny port, lokalny IP, zdalny port i zdalny IP. Dzięki obecności zdalnego adresu IP w pakiecie, serwer wie, od którego z wielu podłączonych klientów pochodzą dane, i kieruje je do właściwego gniazda."
    },
    {
      "id": "2019-8-c",
      "pytanie": "8. Jądro systemu odebrało segment TCP w pakiecie IP i zapisało zawartość segmentu do bufora odbiorczego związanego z pewnym gniazdem. Na podstawie jakich informacji w segmencie zostało wybrane gniazdo?",
      "odpowiedz": "MTU",
      "odp": false,
      "tip": "MTU (Maximum Transmission Unit) określa jedynie maksymalny fizyczny rozmiar pakietu (np. 1500 bajtów), jaki może przejść przez sieć. Nie służy do identyfikacji czy adresowania."
    },
    {
      "id": "2019-8-d",
      "pytanie": "8. Jądro systemu odebrało segment TCP w pakiecie IP i zapisało zawartość segmentu do bufora odbiorczego związanego z pewnym gniazdem. Na podstawie jakich informacji w segmencie zostało wybrane gniazdo?",
      "odpowiedz": "Rozmiar okna",
      "odp": false,
      "tip": "Rozmiar okna (Window Size) to parametr w nagłówku TCP służący wyłącznie do kontroli przepływu (mówi o tym, ile wolnego miejsca w buforze ma odbiorca). Nie bierze udziału w procesie przydzielania pakietu do odpowiedniej aplikacji."
    },
    {
      "id": "2019-9-a",
      "pytanie": "9. Jaka maska podsieci umożliwi wykorzystanie dokładnie 510 adresów IP do adresowania komputerów?",
      "odpowiedz": "255.255.254.0",
      "odp": true,
      "tip": "2^n - 2, Maska 255.255.254.0 kończy się dokładnie dziewięcioma zerami w zapisie dwójkowym."
    },
    {
      "id": "2019-9-b",
      "pytanie": "9. Jaka maska podsieci umożliwi wykorzystanie dokładnie 510 adresów IP do adresowania komputerów?",
      "odpowiedz": "255.255.252.0",
      "odp": false,
      "tip": "2^n - 2"
    },
    {
      "id": "2019-9-c",
      "pytanie": "9. Jaka maska podsieci umożliwi wykorzystanie dokładnie 510 adresów IP do adresowania komputerów?",
      "odpowiedz": "255.255.255.0",
      "odp": false,
      "tip": "2^n - 2"
    },
    {
      "id": "2019-9-d",
      "pytanie": "9. Jaka maska podsieci umożliwi wykorzystanie dokładnie 510 adresów IP do adresowania komputerów?",
      "odpowiedz": "255.255.0.0",
      "odp": false,
      "tip": "2^n - 2"
    },
    {
      "id": "2019-10-a",
      "pytanie": "10. Które zdania dotyczące współczesnych wersji protokołu HTTP są prawdziwe?",
      "odpowiedz": "Wykorzystuje protokół UDP",
      "odp": false,
      "tip": "Klasyczne i najczęściej omawiane wersje HTTP (1.1 oraz 2) opierają się na niezawodnym protokole TCP, który gwarantuje, że dane dotrą w całości."
    },
    {
      "id": "2019-10-b",
      "pytanie": "10. Które zdania dotyczące współczesnych wersji protokołu HTTP są prawdziwe?",
      "odpowiedz": "Typem MIME dla wysyłanej strony HTML jest text/plain",
      "odp": false,
      "tip": "Właściwy typ MIME, który mówi przeglądarce \"to jest strona internetowa, wyrenderuj ją\", to text/html. Z kolei text/plain to czysty tekst – przeglądarka wyświetliłaby po prostu surowy kod źródłowy zamiast ładnej strony."
    },
    {
      "id": "2019-10-c",
      "pytanie": "10. Które zdania dotyczące współczesnych wersji protokołu HTTP są prawdziwe?",
      "odpowiedz": "Serwer korzysta z portu 80",
      "odp": true,
      "tip": "Port 80 to od lat standardowy, domyślny port dla klasycznej (nieszyfrowanej) komunikacji HTTP."
    },
    {
      "id": "2019-10-d",
      "pytanie": "10. Które zdania dotyczące współczesnych wersji protokołu HTTP są prawdziwe?",
      "odpowiedz": "Pliki do serwera można wysyłać korzystając z metody GET",
      "odp": false,
      "tip": "Metoda GET służy do pobierania danych z serwera. Dodatkowo umieszcza ona parametry w samym adresie URL (co ma bardzo rygorystyczne limity pojemności). Do przesyłania większych paczek danych, w tym plików, służy metoda POST (lub PUT), która ukrywa zawartość w tzw. ciele (body) żądania."
    },
    {
      "id": "2019-11-a",
      "pytanie": "11. Komputer z prywatnym adresem IP 192.168.0.10 wysłał datagram UDP pod adres 22.22.22.22 do portu 53 i datagram UDP pod adres 33.33.33.33 do portu 123. W obu przypadkach źródłowym numerem portu był 12345. Pośredniczący router z funkcją NAT zamienił w obu przypadkach adres źródłowy na 11.11.11.11:34567.",
      "odpowiedz": "Router może być ograniczonym asymetrycznym (restricted cone) NAT",
      "odp": true
    },
    {
      "id": "2019-11-b",
      "pytanie": "11. Komputer z prywatnym adresem IP 192.168.0.10 wysłał datagram UDP pod adres 22.22.22.22 do portu 53 i datagram UDP pod adres 33.33.33.33 do portu 123. W obu przypadkach źródłowym numerem portu był 12345. Pośredniczący router z funkcją NAT zamienił w obu przypadkach adres źródłowy na 11.11.11.11:34567.",
      "odpowiedz": "Router może być asymetrycznym ograniczonym portowo (port-restricted cone) NAT",
      "odp": true
    },
    {
      "id": "2019-11-c",
      "pytanie": "11. Komputer z prywatnym adresem IP 192.168.0.10 wysłał datagram UDP pod adres 22.22.22.22 do portu 53 i datagram UDP pod adres 33.33.33.33 do portu 123. W obu przypadkach źródłowym numerem portu był 12345. Pośredniczący router z funkcją NAT zamienił w obu przypadkach adres źródłowy na 11.11.11.11:34567.",
      "odpowiedz": "Router może być pełnym asymetrycznym (full cone) NAT",
      "odp": true
    },
    {
      "id": "2019-11-d",
      "pytanie": "11. Komputer z prywatnym adresem IP 192.168.0.10 wysłał datagram UDP pod adres 22.22.22.22 do portu 53 i datagram UDP pod adres 33.33.33.33 do portu 123. W obu przypadkach źródłowym numerem portu był 12345. Pośredniczący router z funkcją NAT zamienił w obu przypadkach adres źródłowy na 11.11.11.11:34567.",
      "odpowiedz": "Router może być symetrycznym NAT",
      "odp": false
    },
    {
      "id": "2019-12-a",
      "pytanie": "12. Które zdania dotyczące sieci bezprzewodowych 802.11 są prawdziwe?",
      "odpowiedz": "Dostęp do kanału opiera się na mechanizmie odczekiwania wykładniczego",
      "odp": true
    },
    {
      "id": "2019-12-b",
      "pytanie": "12. Które zdania dotyczące sieci bezprzewodowych 802.11 są prawdziwe?",
      "odpowiedz": "Protokół wykorzystuje przeskakiwanie częstotliwości (frequency hopping)",
      "odp": false
    },
    {
      "id": "2019-12-c",
      "pytanie": "12. Które zdania dotyczące sieci bezprzewodowych 802.11 są prawdziwe?",
      "odpowiedz": "Jeśli nie słyszymy transmisji, to rozpoczęcie nadawania nie spowoduje interferencji u odbiorcy",
      "odp": false
    },
    {
      "id": "2019-12-d",
      "pytanie": "12. Które zdania dotyczące sieci bezprzewodowych 802.11 są prawdziwe?",
      "odpowiedz": "Dostęp do kanału opiera się na wykrywaniu kolizji",
      "odp": false
    },
    {
      "id": "2019-13-a",
      "pytanie": "13. Które z poniższych zdań są prawdziwe w przypadku protokołu UDP?",
      "odpowiedz": "Otrzymuje strumień danych z warstwy aplikacji i dzieli go na datagramy",
      "odp": false
    },
    {
      "id": "2019-13-b",
      "pytanie": "13. Które z poniższych zdań są prawdziwe w przypadku protokołu UDP?",
      "odpowiedz": "Wysyłane datagramy są potwierdzane",
      "odp": false
    },
    {
      "id": "2019-13-c",
      "pytanie": "13. Które z poniższych zdań są prawdziwe w przypadku protokołu UDP?",
      "odpowiedz": "Wysyłane datagramy zawierają w nagłówku UDP numer sekwencyjny",
      "odp": false
    },
    {
      "id": "2019-13-d",
      "pytanie": "13. Które z poniższych zdań są prawdziwe w przypadku protokołu UDP?",
      "odpowiedz": "Jest protokołem bezpołączeniowym",
      "odp": true
    },
    {
      "id": "2019-14-a",
      "pytanie": "14. Które z poniższych zdań są prawdziwe w przypadku protokołu IP (wersji 4)?",
      "odpowiedz": "Nagłówek protokołu IP zawiera adres MAC karty odbiorcy",
      "odp": false
    },
    {
      "id": "2019-14-b",
      "pytanie": "14. Które z poniższych zdań są prawdziwe w przypadku protokołu IP (wersji 4)?",
      "odpowiedz": "Pakiety IP są enkapsulowane w ramkach warstwy łącza danych",
      "odp": true
    },
    {
      "id": "2019-14-c",
      "pytanie": "14. Które z poniższych zdań są prawdziwe w przypadku protokołu IP (wersji 4)?",
      "odpowiedz": "Umożliwia kontrolę przeciążenia",
      "odp": false
    },
    {
      "id": "2019-14-d",
      "pytanie": "14. Które z poniższych zdań są prawdziwe w przypadku protokołu IP (wersji 4)?",
      "odpowiedz": "Jest połączeniowy",
      "odp": false
    },
    {
      "id": "2019-15-a",
      "pytanie": "15. Tylko jedna poprawna odpowiedź. Przeglądarka WWW nawiązała połączenie z serwerem WWW. Pakiet zawierający całe żądanie HTTP gubi się. Co się stanie?",
      "odpowiedz": "Po pewnym czasie przeglądarka WWW wyśle zapytanie ARP",
      "odp": false,
      "tip": "Protokół ARP służy do znajdowania adresów fizycznych MAC w sieci lokalnej na samym początku komunikacji. Skoro połączenie z serwerem zostało już pomyślnie nawiązane, urządzenia wiedzą już, dokąd kierować ruch."
    },
    {
      "id": "2019-15-b",
      "pytanie": "15. Tylko jedna poprawna odpowiedź. Przeglądarka WWW nawiązała połączenie z serwerem WWW. Pakiet zawierający całe żądanie HTTP gubi się. Co się stanie?",
      "odpowiedz": "Po pewnym czasie przeglądarka WWW ponownie wyśle pakiet",
      "odp": false,
      "tip": "Przeglądarka to warstwa aplikacji. Jej zadaniem jest przekazać żądanie HTTP \"w dół\" do systemu operacyjnego i czekać na odpowiedź. Nie zajmuje się ona śledzeniem i retransmisją pojedynczych, zagubionych w sieci pakietów."
    },
    {
      "id": "2019-15-c",
      "pytanie": "15. Tylko jedna poprawna odpowiedź. Przeglądarka WWW nawiązała połączenie z serwerem WWW. Pakiet zawierający całe żądanie HTTP gubi się. Co się stanie?",
      "odpowiedz": "Po pewnym czasie warstwa transportowa ponownie wyśle pakiet",
      "odp": true,
      "tip": "HTTP korzysta z protokołu TCP w warstwie transportowej, który gwarantuje niezawodność. Jeśli nadawca (Twój system) nie otrzyma od serwera potwierdzenia (tzw. ACK) w ustalonym czasie, warstwa transportowa automatycznie wyśle zgubiony pakiet ponownie."
    },
    {
      "id": "2019-15-d",
      "pytanie": "15. Tylko jedna poprawna odpowiedź. Przeglądarka WWW nawiązała połączenie z serwerem WWW. Pakiet zawierający całe żądanie HTTP gubi się. Co się stanie?",
      "odpowiedz": "Po pewnym czasie serwer WWW wyśle żądanie o ponowne przesłanie zagubionego pakietu",
      "odp": false,
      "tip": "Serwer fizycznie nie wie, że przeglądarka cokolwiek wysłała, skoro pakiet zgubił się po drodze. Serwer po prostu \"milczy\" i oczekuje na dane. Ciężar zorientowania się, że pakiet zaginął (na podstawie braku potwierdzenia), spoczywa wyłącznie na nadawcy."
    },
    {
      "id": "2019-16-a",
      "pytanie": "16. Zaznacz prawdziwe zdania.",
      "odpowiedz": "44.44.44.44/30 jest adresem przypisywanym komputerowi",
      "odp": false,
      "tip": "maska mówi, że pierwsze 30 bitów określa sieć, tutaj dwie (32-30) ostatnie liczby to zera, więc jest to adres sieci"
    },
    {
      "id": "2019-16-b",
      "pytanie": "16. Zaznacz prawdziwe zdania.",
      "odpowiedz": "127.127.127.127/25 jest adresem rozgłoszeniowym",
      "odp": true,
      "tip": "maska mówi, że pierwsze 25 bitów określa sieć, a reszta ma być jedynkami - ostatnie 32-25 bitów jest jedynkami"
    },
    {
      "id": "2019-16-c",
      "pytanie": "16. Zaznacz prawdziwe zdania.",
      "odpowiedz": "192.168.1.0/8 jest adresem sieci",
      "odp": false,
      "tip": "maska mówi, że pierwsze 8 bitów określa sieć, a reszta ma być zerami - tutaj ostatnie 32-8 bitów nie jest zerami"
    },
    {
      "id": "2019-16-d",
      "pytanie": "16. Zaznacz prawdziwe zdania.",
      "odpowiedz": "10.10.10.0/24 jest adresem sieci",
      "odp": true,
      "tip": "maska mówi, że pierwsze 24 bitów określa sieć, a reszta ma być zerami - ostatnie 32-24 bity są zerami"
    },
    {
      "id": "2019-17-a",
      "pytanie": "17. Sieć 192.168.15.128/25 została podzielona na 5 rozłącznych podsieci, tak żeby każdy adres był w dokładnie jednej z nich. Czy podany adres może być adresem rozgłoszeniowym w jakiejś z tych podsieci?",
      "odpowiedz": "192.168.15.223",
      "odp": true
    },
    {
      "id": "2019-17-b",
      "pytanie": "17. Sieć 192.168.15.128/25 została podzielona na 5 rozłącznych podsieci, tak żeby każdy adres był w dokładnie jednej z nich. Czy podany adres może być adresem rozgłoszeniowym w jakiejś z tych podsieci?",
      "odpowiedz": "192.168.15.251",
      "odp": false
    },
    {
      "id": "2019-17-c",
      "pytanie": "17. Sieć 192.168.15.128/25 została podzielona na 5 rozłącznych podsieci, tak żeby każdy adres był w dokładnie jednej z nich. Czy podany adres może być adresem rozgłoszeniowym w jakiejś z tych podsieci?",
      "odpowiedz": "192.168.15.135",
      "odp": true
    },
    {
      "id": "2019-17-d",
      "pytanie": "17. Sieć 192.168.15.128/25 została podzielona na 5 rozłącznych podsieci, tak żeby każdy adres był w dokładnie jednej z nich. Czy podany adres może być adresem rozgłoszeniowym w jakiejś z tych podsieci?",
      "odpowiedz": "192.168.15.255",
      "odp": true
    },
    {
      "id": "2019-18-a",
      "pytanie": "18. Które zdania dotyczące programu traceroute są prawdziwe?",
      "odpowiedz": "Traceroute wysyła kolejne pakiety o coraz mniejszych wartościach pola TTL",
      "odp": false
    },
    {
      "id": "2019-18-b",
      "pytanie": "18. Które zdania dotyczące programu traceroute są prawdziwe?",
      "odpowiedz": "Traceroute służy do przypisywania adresów IP",
      "odp": false
    },
    {
      "id": "2019-18-c",
      "pytanie": "18. Które zdania dotyczące programu traceroute są prawdziwe?",
      "odpowiedz": "Traceroute opiera się na technice wykrywania MTU dla ścieżki",
      "odp": false
    },
    {
      "id": "2019-18-d",
      "pytanie": "18. Które zdania dotyczące programu traceroute są prawdziwe?",
      "odpowiedz": "W przypadku wysłania pakietu o polu TTL równym t, odległy o t przeskoków router niebędący docelowym komputerem odpowie komunikatem echo reply",
      "odp": false
    },
    {
      "id": "2019-19-a",
      "pytanie": "19. Bezpośrednim efektem wywołania na gnieździe TCP funkcji connect() jest:",
      "odpowiedz": "Wywołanie funkcji connect() jest dozwolone tylko w przypadku gniazd UDP",
      "odp": false
    },
    {
      "id": "2019-19-b",
      "pytanie": "19. Bezpośrednim efektem wywołania na gnieździe TCP funkcji connect() jest:",
      "odpowiedz": "Wysłanie segmentu z ustawionym bitem ACK",
      "odp": false
    },
    {
      "id": "2019-19-c",
      "pytanie": "19. Bezpośrednim efektem wywołania na gnieździe TCP funkcji connect() jest:",
      "odpowiedz": "Wysłanie segmentu z ustawionymi bitami SYN i ACK",
      "odp": false
    },
    {
      "id": "2019-19-d",
      "pytanie": "19. Bezpośrednim efektem wywołania na gnieździe TCP funkcji connect() jest:",
      "odpowiedz": "Wysłanie segmentu z ustawionym bitem SYN",
      "odp": true
    },
    {
      "id": "2019-20-a",
      "pytanie": "20. Komputerowi został przypisany adres IP równy 10.0.0.255/23 a brama domyślna została wybrana jako 10.0.1.0. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Komputer będzie mógł komunikować się bez pośrednictwa routera ze wszystkimi adresami IP z podsieci 10.0.0.0/8",
      "odp": true
    },
    {
      "id": "2019-20-b",
      "pytanie": "20. Komputerowi został przypisany adres IP równy 10.0.0.255/23 a brama domyślna została wybrana jako 10.0.1.0. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Komputer nie będzie mógł się komunikować się z bramą domyślną, gdyż leży poza jego podsiecią",
      "odp": false
    },
    {
      "id": "2019-20-c",
      "pytanie": "20. Komputerowi został przypisany adres IP równy 10.0.0.255/23 a brama domyślna została wybrana jako 10.0.1.0. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Podany adres IP komputer jest błędny, gdyż jest adresem rozgłoszeniowym",
      "odp": false
    },
    {
      "id": "2019-20-d",
      "pytanie": "20. Komputerowi został przypisany adres IP równy 10.0.0.255/23 a brama domyślna została wybrana jako 10.0.1.0. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Podany adres IP komputer jest błędny, gdyż jest adresem sieci",
      "odp": false
    },
    {
      "id": "2019-21-a",
      "pytanie": "21. Zaznacz techniki routingu dynamicznego pomagające uniknąć cykli w routingu.",
      "odpowiedz": "Certyfikaty SSL",
      "odp": false
    },
    {
      "id": "2019-21-b",
      "pytanie": "21. Zaznacz techniki routingu dynamicznego pomagające uniknąć cykli w routingu.",
      "odpowiedz": "Wysyłanie informacji o zmianie topologii sieci (np. awarii łącza) zaraz po jej wykryciu",
      "odp": true
    },
    {
      "id": "2019-21-c",
      "pytanie": "21. Zaznacz techniki routingu dynamicznego pomagające uniknąć cykli w routingu.",
      "odpowiedz": "Wykrywanie MTU dla ścieżki",
      "odp": false
    },
    {
      "id": "2019-21-d",
      "pytanie": "21. Zaznacz techniki routingu dynamicznego pomagające uniknąć cykli w routingu.",
      "odpowiedz": "Zatruwanie ścieżki",
      "odp": true
    },
    {
      "id": "2019-22-a",
      "pytanie": "22. Mechanizm kontroli przeciążenia wykorzystywany w TCP:",
      "odpowiedz": "wymaga komunikatów kontrolnych wysyłanych przez routery",
      "odp": false,
      "tip": "Klasyczny mechanizm kontroli przeciążenia w TCP działa w modelu end-to-end (od końca do końca). Nadawca sam wnioskuje, że sieć jest zakorkowana, obserwując opóźnienia i brak potwierdzeń. Nie polega na żadnych specjalnych komunikatach czy ostrzeżeniach generowanych przez pośredniczące routery."
    },
    {
      "id": "2019-22-b",
      "pytanie": "22. Mechanizm kontroli przeciążenia wykorzystywany w TCP:",
      "odpowiedz": "zakłada, że utrata pakietów nastąpiła na skutek przepełnienia kolejek",
      "odp": true,
      "tip": "To absolutnie fundamentalne założenie protokołu TCP. Skoro kable i światłowody rzadko psują dane, TCP przyjmuje w ciemno, że jeśli pakiet zginął, to z powodu przeciążenia w sieci – po prostu nie zmieścił się w przepełnionym buforze jakiegoś routera i został odrzucony. Po takim incydencie TCP natychmiast zwalnia tempo nadawania."
    },
    {
      "id": "2019-22-c",
      "pytanie": "22. Mechanizm kontroli przeciążenia wykorzystywany w TCP:",
      "odpowiedz": "zakłada, że utrata pakietów nastąpiła na skutek błędów warstwy fizycznej",
      "odp": false,
      "tip": "Jest dokładnie odwrotnie (patrz punkt wyżej). TCP zakłada, że sprzęt jest w miarę bezbłędny. Z tego powodu protokół ten czasami radzi sobie gorzej w sieciach bezprzewodowych (np. Wi-Fi), gdzie pakiety często gubią się przez zwykłe zakłócenia fizyczne. TCP błędnie interpretuje to jako korki w sieci i niepotrzebnie zmniejsza prędkość pobierania."
    },
    {
      "id": "2019-22-d",
      "pytanie": "22. Mechanizm kontroli przeciążenia wykorzystywany w TCP:",
      "odpowiedz": "preferuje transmisje o większym czasie RTT",
      "odp": false,
      "tip": "Czas RTT (Round Trip Time) to czas, jakiego pakiet potrzebuje na dotarcie do celu i powrót z potwierdzeniem. TCP faworyzuje połączenia o krótkim RTT. Im szybciej do nadawcy wracają potwierdzenia (ACK), tym szybciej jego \"okno nadawcze\" się powiększa i transmisja się rozpędza. Połączenia z dużym RTT (np. satelitarne) rozkręcają się znacznie wolniej."
    },
    {
      "id": "2019-23-a",
      "pytanie": "23. Zaznacz prawdziwe zdania",
      "odpowiedz": "Protokół BitTorrent służy do przesyłania plików",
      "odp": true
    },
    {
      "id": "2019-23-b",
      "pytanie": "23. Zaznacz prawdziwe zdania",
      "odpowiedz": "Protokół HTTP służy do pobierania stron WWW",
      "odp": true
    },
    {
      "id": "2019-23-c",
      "pytanie": "23. Zaznacz prawdziwe zdania",
      "odpowiedz": "Protokół POP3 służy do wysyłania poczty elektronicznej do serwera",
      "odp": false
    },
    {
      "id": "2019-23-d",
      "pytanie": "23. Zaznacz prawdziwe zdania",
      "odpowiedz": "Protokół SMTP służy do pobierania poczty elektronicznej z serwera",
      "odp": false,
      "tip": "SMTP jest do wysyłania (send), IMAP jest do pobierania"
    },
    {
      "id": "2019-24-a",
      "pytanie": "24. Do wiadomości została dołączona suma CRC wykorzystująca wielomian x^4 + 1.",
      "odpowiedz": "Dowolna zmiana polegająca na zmianie pojedynczego bitu zostanie wykryta",
      "odp": true
    },
    {
      "id": "2019-24-b",
      "pytanie": "24. Do wiadomości została dołączona suma CRC wykorzystująca wielomian x^4 + 1.",
      "odpowiedz": "Do wiadomości zostały dołączone 5 bity sumy kontrolnej",
      "odp": false,
      "tip": "Tyle bitów, ile stopień wielomianu"
    },
    {
      "id": "2019-24-c",
      "pytanie": "24. Do wiadomości została dołączona suma CRC wykorzystująca wielomian x^4 + 1.",
      "odpowiedz": "Do wiadomości zostało dołączonych 6 bitów sumy kontrolnej",
      "odp": false,
      "tip": "Tyle bitów, ile stopień wielomianu"
    },
    {
      "id": "2019-24-d",
      "pytanie": "24. Do wiadomości została dołączona suma CRC wykorzystująca wielomian x^4 + 1.",
      "odpowiedz": "Dowolna zmiana polegająca na zmianie dwóch dowolnych bitów zostanie wykryta",
      "odp": false
    },
    {
      "id": "2019-25-a",
      "pytanie": "25. Które zdania dotyczące szyfrowania są prawdziwe?",
      "odpowiedz": "RSA jest szyfrem monoalfabetycznym",
      "odp": false
    },
    {
      "id": "2019-25-b",
      "pytanie": "25. Które zdania dotyczące szyfrowania są prawdziwe?",
      "odpowiedz": "Algorytmy szyfrowania asymetrycznego są zazwyczaj wolniejsze niż algorytmy szyfrowania symetrycznego",
      "odp": true
    },
    {
      "id": "2019-25-c",
      "pytanie": "25. Które zdania dotyczące szyfrowania są prawdziwe?",
      "odpowiedz": "One-time pad - jest szyfrem monoalfabetycznym",
      "odp": false,
      "tip": "Szyfr polialfabetyczny (a w zasadzie \"nieskończenie-alfabetyczny\"), w którym jeden znak tekstu jawnego może przyjąć dowolną postać w tekście zaszyfrowanym w zależności od losowego klucza."
    },
    {
      "id": "2019-25-d",
      "pytanie": "25. Które zdania dotyczące szyfrowania są prawdziwe?",
      "odpowiedz": "W algorytmach szyfrowania symetrycznego wiadomość szyfrujemy i deszyfrujemy za pomocą tego samego klucza",
      "odp": true
    },
    {
      "id": "2019-26-a",
      "pytanie": "26. Adres 123.5.66.63 jest adresem rozgłoszeniowym przy masce podsieci:",
      "odpowiedz": "/26",
      "odp": true
    },
    {
      "id": "2019-26-b",
      "pytanie": "26. Adres 123.5.66.63 jest adresem rozgłoszeniowym przy masce podsieci:",
      "odpowiedz": "/24",
      "odp": false
    },
    {
      "id": "2019-26-c",
      "pytanie": "26. Adres 123.5.66.63 jest adresem rozgłoszeniowym przy masce podsieci:",
      "odpowiedz": "/25",
      "odp": false
    },
    {
      "id": "2019-26-d",
      "pytanie": "26. Adres 123.5.66.63 jest adresem rozgłoszeniowym przy masce podsieci:",
      "odpowiedz": "/28",
      "odp": true
    },
    {
      "id": "2019-27-a",
      "pytanie": "27. W jakich warstwach są używane poniższe mechanizmy?",
      "odpowiedz": "Nawiązywanie połączenia stosowane jest w warstwie transportowej",
      "odp": true,
      "tip": "Za nawiązywanie połączeń odpowiada warstwa transportowa (np. protokół TCP), która ustala zasady komunikacji przed wysłaniem właściwych danych (tzw. 3-way handshake)."
    },
    {
      "id": "2019-27-b",
      "pytanie": "27. W jakich warstwach są używane poniższe mechanizmy?",
      "odpowiedz": "Typ MIME stosowany jest w warstwie sieciowej",
      "odp": false,
      "tip": "Typ MIME (np. text/html czy image/jpeg) określa format pliku i działa w warstwie aplikacji. Warstwy sieciowej (protokołu IP) nie interesuje, co znajduje się wewnątrz przesyłanego pakietu."
    },
    {
      "id": "2019-27-c",
      "pytanie": "27. W jakich warstwach są używane poniższe mechanizmy?",
      "odpowiedz": "Kontrola przepływu stosowana jest w warstwie sieciowej",
      "odp": false,
      "tip": "Hamowanie zbyt szybkiego nadawcy to zadanie warstwy transportowej (np. TCP) lub łącza danych. Warstwa sieciowa po prostu przesyła pakiety w trybie \"najlepiej jak potrafi\"."
    },
    {
      "id": "2019-27-d",
      "pytanie": "27. W jakich warstwach są używane poniższe mechanizmy?",
      "odpowiedz": "Routing stosowany jest w warstwie łącza danych",
      "odp": false,
      "tip": "Wyznaczanie trasy dla pakietów (routing) to kluczowe zadanie warstwy sieciowej (wykorzystuje routery i adresy IP)."
    },
    {
      "id": "2019-28-a",
      "pytanie": "28. Jakie informacje są zawarte w nagłówku TCP?",
      "odpowiedz": "rozmiar okna nadawczego",
      "odp": false
    },
    {
      "id": "2019-28-b",
      "pytanie": "28. Jakie informacje są zawarte w nagłówku TCP?",
      "odpowiedz": "rozmiar okna odbiorczego",
      "odp": true
    },
    {
      "id": "2019-28-c",
      "pytanie": "28. Jakie informacje są zawarte w nagłówku TCP?",
      "odpowiedz": "port nadawcy",
      "odp": true
    },
    {
      "id": "2019-28-d",
      "pytanie": "28. Jakie informacje są zawarte w nagłówku TCP?",
      "odpowiedz": "numer sekwencyjny",
      "odp": true
    },
    {
      "id": "2019-29-a",
      "pytanie": "29. Jeśli maską podsieci jest /26, to następujący adres można przypisać komputerowi:",
      "odpowiedz": "10.3.1.191",
      "odp": false
    },
    {
      "id": "2019-29-b",
      "pytanie": "29. Jeśli maską podsieci jest /26, to następujący adres można przypisać komputerowi:",
      "odpowiedz": "192.23.1.192",
      "odp": false
    },
    {
      "id": "2019-29-c",
      "pytanie": "29. Jeśli maską podsieci jest /26, to następujący adres można przypisać komputerowi:",
      "odpowiedz": "10.23.1.32",
      "odp": true
    },
    {
      "id": "2019-29-d",
      "pytanie": "29. Jeśli maską podsieci jest /26, to następujący adres można przypisać komputerowi:",
      "odpowiedz": "172.13.160.1",
      "odp": true
    },
    {
      "id": "2019-30-a",
      "pytanie": "30. Tylko jedna poprawna odpowiedź. Które linuksowe polecenie wyświetli routery na trasie do komputera o adresie 10.20.30.40?",
      "odpowiedz": "traceroute 10.20.30.40",
      "odp": true
    },
    {
      "id": "2019-30-b",
      "pytanie": "30. Tylko jedna poprawna odpowiedź. Które linuksowe polecenie wyświetli routery na trasie do komputera o adresie 10.20.30.40?",
      "odpowiedz": "ping 10.20.30.40",
      "odp": false
    },
    {
      "id": "2019-30-c",
      "pytanie": "30. Tylko jedna poprawna odpowiedź. Które linuksowe polecenie wyświetli routery na trasie do komputera o adresie 10.20.30.40?",
      "odpowiedz": "ip route 10.20.30.40",
      "odp": false
    },
    {
      "id": "2019-30-d",
      "pytanie": "30. Tylko jedna poprawna odpowiedź. Które linuksowe polecenie wyświetli routery na trasie do komputera o adresie 10.20.30.40?",
      "odpowiedz": "ip link 10.20.30.40",
      "odp": false
    },
    {
      "id": "2019-31-a",
      "pytanie": "31. Tylko jedna poprawna odpowiedź. Przez łącze 1 Mbit o czasie propagacji 2 ms (ms = 10^-3) przesyłamy 500-bajtowy pakiet. Ile czasu upłynie od momentu nadania pierwszego bitu do momentu otrzymania ostatniego bitu?",
      "odpowiedz": "2,5 ms",
      "odp": false
    },
    {
      "id": "2019-31-b",
      "pytanie": "31. Tylko jedna poprawna odpowiedź. Przez łącze 1 Mbit o czasie propagacji 2 ms (ms = 10^-3) przesyłamy 500-bajtowy pakiet. Ile czasu upłynie od momentu nadania pierwszego bitu do momentu otrzymania ostatniego bitu?",
      "odpowiedz": "4 ms",
      "odp": false
    },
    {
      "id": "2019-31-c",
      "pytanie": "31. Tylko jedna poprawna odpowiedź. Przez łącze 1 Mbit o czasie propagacji 2 ms (ms = 10^-3) przesyłamy 500-bajtowy pakiet. Ile czasu upłynie od momentu nadania pierwszego bitu do momentu otrzymania ostatniego bitu?",
      "odpowiedz": "18 ms",
      "odp": false
    },
    {
      "id": "2019-31-d",
      "pytanie": "31. Tylko jedna poprawna odpowiedź. Przez łącze 1 Mbit o czasie propagacji 2 ms (ms = 10^-3) przesyłamy 500-bajtowy pakiet. Ile czasu upłynie od momentu nadania pierwszego bitu do momentu otrzymania ostatniego bitu?",
      "odpowiedz": "6 ms",
      "odp": true
    },
    {
      "id": "2019-32-a",
      "pytanie": "32. Które zdania dotyczące protokołu DNS są prawdziwe?",
      "odpowiedz": "DNS służy tylko do zamiany nazw domen na adresy IP, do zamiany adresów IP na nazwy domen wykorzystywany jest odrębny protokół",
      "odp": false,
      "tip": "Służy do tego tzw. Odwrotny DNS (Reverse DNS), który wciąż jest częścią tego samego protokołu. Wykorzystuje się w nim rekordy PTR (Pointer Records)"
    },
    {
      "id": "2019-32-b",
      "pytanie": "32. Które zdania dotyczące protokołu DNS są prawdziwe?",
      "odpowiedz": "Jedna domena może mieć przypisanych wiele adresów IP",
      "odp": true,
      "tip": "Giganci jak Netflix czy Google muszą mieć kilka serwerów i rozkładają obciążenie między nimi (DNS Round Robin)"
    },
    {
      "id": "2019-32-c",
      "pytanie": "32. Które zdania dotyczące protokołu DNS są prawdziwe?",
      "odpowiedz": "Rekord NS umożliwia określenie serwera nazw odpowiedzialnego za daną domenę",
      "odp": true,
      "tip": "NS - name server"
    },
    {
      "id": "2019-32-d",
      "pytanie": "32. Które zdania dotyczące protokołu DNS są prawdziwe?",
      "odpowiedz": "Strefą jest dowolny podzbiór zbioru nazw domen",
      "odp": false,
      "tip": "Strefą jest spójny podzbiór"
    },
    {
      "id": "2019-33-a",
      "pytanie": "33. W typowej kryptografii asymetrycznej:",
      "odpowiedz": "Łatwo złamać klucz, jeśli znamy parę tekst jawny + szyfrogram",
      "odp": false,
      "tip": "Mega trudny problem matematyczny"
    },
    {
      "id": "2019-33-b",
      "pytanie": "33. W typowej kryptografii asymetrycznej:",
      "odpowiedz": "Szyfrujemy wiadomość kluczem publicznym odbiorcy",
      "odp": true
    },
    {
      "id": "2019-33-c",
      "pytanie": "33. W typowej kryptografii asymetrycznej:",
      "odpowiedz": "Szyfrujemy wiadomość kluczem prywatnym nadawcy",
      "odp": false,
      "tip": "Szyfrowanie kluczem prywatnym hasza wiadomości to podpis cyfrowy"
    },
    {
      "id": "2019-33-d",
      "pytanie": "33. W typowej kryptografii asymetrycznej:",
      "odpowiedz": "Szyfrujemy wiadomość kluczem prywatnym odbiorcy",
      "odp": false,
      "tip": "Po co miałby sam sobie szyfrować, publicznym się to robi"
    },
    {
      "id": "2019-34-a",
      "pytanie": "34. Zaznacz prawdziwe zdania w przypadku systemów autonomicznych.",
      "odpowiedz": "BGP jest protokołem stanu łączy",
      "odp": false
    },
    {
      "id": "2019-34-b",
      "pytanie": "34. Zaznacz prawdziwe zdania w przypadku systemów autonomicznych.",
      "odpowiedz": "OSPF jest jednym z protokołów routingu stosowanym wewnątrz systemu autonomicznego",
      "odp": true
    },
    {
      "id": "2019-34-c",
      "pytanie": "34. Zaznacz prawdziwe zdania w przypadku systemów autonomicznych.",
      "odpowiedz": "RIP jest protokołem stosowanym powszechnie do routingu pomiędzy systemami autonomicznymi",
      "odp": false
    },
    {
      "id": "2019-34-d",
      "pytanie": "34. Zaznacz prawdziwe zdania w przypadku systemów autonomicznych.",
      "odpowiedz": "Każdy system autonomiczny w Internecie musi posiadać co najmniej dwa połączenia z innymi",
      "odp": false
    },
    {
      "id": "2019-35-a",
      "pytanie": "35. Tablica routingu zawiera następujące 6 wpisów (podsieć, którędy słać): 0.0.0.0/0 przez router C, 10.0.0.0/24 przez router A, 10.0.0.128/25 przez router B, 10.0.0.192/26 przez router A, 10.0.1.0/24 przez router A, 10.0.2.0/23 przez router A",
      "odpowiedz": "Możliwe jest skonstruowanie równoważnej tablicy routingu zawierającej 4 wpisy",
      "odp": true
    },
    {
      "id": "2019-35-b",
      "pytanie": "35. Tablica routingu zawiera następujące 6 wpisów (podsieć, którędy słać): 0.0.0.0/0 przez router C, 10.0.0.0/24 przez router A, 10.0.0.128/25 przez router B, 10.0.0.192/26 przez router A, 10.0.1.0/24 przez router A, 10.0.2.0/23 przez router A",
      "odpowiedz": "Możliwe jest skonstruowanie równoważnej tablicy routingu zawierającej 7 wpisów",
      "odp": true
    },
    {
      "id": "2019-35-c",
      "pytanie": "35. Tablica routingu zawiera następujące 6 wpisów (podsieć, którędy słać): 0.0.0.0/0 przez router C, 10.0.0.0/24 przez router A, 10.0.0.128/25 przez router B, 10.0.0.192/26 przez router A, 10.0.1.0/24 przez router A, 10.0.2.0/23 przez router A",
      "odpowiedz": "Możliwe jest skonstruowanie równoważnej tablicy routingu zawierającej 3 wpisy",
      "odp": true
    },
    {
      "id": "2019-35-d",
      "pytanie": "35. Tablica routingu zawiera następujące 6 wpisów (podsieć, którędy słać): 0.0.0.0/0 przez router C, 10.0.0.0/24 przez router A, 10.0.0.128/25 przez router B, 10.0.0.192/26 przez router A, 10.0.1.0/24 przez router A, 10.0.2.0/23 przez router A",
      "odpowiedz": "Możliwe jest skonstruowanie równoważnej tablicy routingu zawierającej 2 wpisy",
      "odp": false
    },
    {
      "id": "2019-36-a",
      "pytanie": "36. Komputer A nawiązuje połączenie z komputerem B za pomocą TCP. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Komputer A może wysłać segment z danymi już po otrzymaniu pierwszego segmentu z ustawionym bitem ACK",
      "odp": true,
      "tip": "Nawiązywanie połączenia składa się z trzech kroków. Komputer A wysyła SYN, a w odpowiedzi otrzymuje od B pakiet SYN-ACK (to jest pierwszy otrzymany pakiet z bitem ACK). Gdy tylko A go odbierze, wysyła ostatnie potwierdzenie i w tym samym momencie może do niego dołączyć pierwsze użyteczne dane (np. żądanie HTTP)."
    },
    {
      "id": "2019-36-b",
      "pytanie": "36. Komputer A nawiązuje połączenie z komputerem B za pomocą TCP. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Komputer A rozpocznie od wysłania segmentu z ustawionym bitem SYN",
      "odp": true,
      "tip": "To bezwzględnie pierwszy krok przy tworzeniu każdego nowego połączenia TCP. Flaga SYN (Synchronize) informuje serwer: \"chcę nawiązać połączenie\" i synchronizuje początkowe numery sekwencyjne dla pakietów."
    },
    {
      "id": "2019-36-c",
      "pytanie": "36. Komputer A nawiązuje połączenie z komputerem B za pomocą TCP. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Komputer B może wysłać segment z danymi już po otrzymaniu pierwszego segmentu z ustawionym bitem RST",
      "odp": false,
      "tip": "Flaga RST (Reset) służy do awaryjnego, twardego zresetowania (zerwania) połączenia (np. gdy port jest zamknięty lub wystąpił błąd). Po otrzymaniu RST jakiekolwiek przesyłanie danych jest niemożliwe – połączenie zostaje natychmiast przerwane."
    },
    {
      "id": "2019-36-d",
      "pytanie": "36. Komputer A nawiązuje połączenie z komputerem B za pomocą TCP. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Komputer A może wysłać segment z danymi dopiero po otrzymaniu pierwszego segmentu z danymi od B",
      "odp": false,
      "tip": "Protokół TCP jest dwukierunkowy i niezależny. Gdy tylko połączenie zostanie nawiązane, komputer A (zazwyczaj klient) nie musi na nic czekać i wręcz najczęściej jako pierwszy wysyła dane (np. zapytanie o stronę WWW). Nie musi czekać, aż serwer wyśle swoje dane jako pierwszy."
    },
    {
      "id": "2019-37-a",
      "pytanie": "37. Jakie rozwiązania poprawiają wydajności komunikacji za pośrednictwem protokołu HTTP?",
      "odpowiedz": "Zapytania ARP",
      "odp": false,
      "tip": "Protokół ARP działa w niższych warstwach i służy do zamiany adresów IP na adresy fizyczne MAC w sieci lokalnej."
    },
    {
      "id": "2019-37-b",
      "pytanie": "37. Jakie rozwiązania poprawiają wydajności komunikacji za pośrednictwem protokołu HTTP?",
      "odpowiedz": "Sender Policy Framework (SPF)",
      "odp": false,
      "tip": "SPF to mechanizm zabezpieczający pocztę e-mail (korzysta z rekordów TXT w DNS, aby zapobiegać podszywaniu się pod nadawcę)."
    },
    {
      "id": "2019-37-c",
      "pytanie": "37. Jakie rozwiązania poprawiają wydajności komunikacji za pośrednictwem protokołu HTTP?",
      "odpowiedz": "Sieci CDN",
      "odp": true,
      "tip": "CDN (Content Delivery Network) to rozproszone sieci serwerów, które przechowują kopie plików strony (np. grafiki, skrypty) blisko użytkownika końcowego. Dzięki temu dane pokonują krótszą drogę, co drastycznie poprawia czas ładowania stron HTTP."
    },
    {
      "id": "2019-37-d",
      "pytanie": "37. Jakie rozwiązania poprawiają wydajności komunikacji za pośrednictwem protokołu HTTP?",
      "odpowiedz": "Połączenia trwałe (wiele komunikatów HTTP w jednym połączeniu TCP)",
      "odp": true,
      "tip": "Standardowo każde zapytanie HTTP wymagałoby nawiązania nowego połączenia TCP (co zajmuje czas i zasoby). Mechanizm Keep-Alive (połączenia trwałe) pozwala pobrać wiele elementów strony (np. plik HTML, CSS i obrazki) w ramach raz otwartego \"tunelu\", co znacząco przyspiesza komunikację."
    },
    {
      "id": "2019-38-a",
      "pytanie": "38. Które zdania dotyczące protokołu CSMA/CD są prawdziwe?",
      "odpowiedz": "Jest wykorzystywany w sieciach bezprzewodowych",
      "odp": false
    },
    {
      "id": "2019-38-b",
      "pytanie": "38. Które zdania dotyczące protokołu CSMA/CD są prawdziwe?",
      "odpowiedz": "Wymaga potwierdzania odbieranych ramek",
      "odp": false
    },
    {
      "id": "2019-38-c",
      "pytanie": "38. Które zdania dotyczące protokołu CSMA/CD są prawdziwe?",
      "odpowiedz": "Jeśli jest wiele komputerów, które chcą nadać ramkę, to komputer, któremu właśnie powiodła się transmisja ma większe szanse nadania kolejnej ramki niż pozostali",
      "odp": true
    },
    {
      "id": "2019-38-d",
      "pytanie": "38. Które zdania dotyczące protokołu CSMA/CD są prawdziwe?",
      "odpowiedz": "Wykorzystuje algorytm odczekiwania wykładniczego",
      "odp": true
    },
    {
      "id": "2019-39-a",
      "pytanie": "39. Zaznacz prawdziwe zdania.",
      "odpowiedz": "W sieci 192.168.0.0/26 dokładnie 60 adresów IP można przypisać komputerom",
      "odp": false
    },
    {
      "id": "2019-39-b",
      "pytanie": "39. Zaznacz prawdziwe zdania.",
      "odpowiedz": "W sieci 192.168.0.0/24 dokładnie 126 adresów IP można przypisać komputerom",
      "odp": false
    },
    {
      "id": "2019-39-c",
      "pytanie": "39. Zaznacz prawdziwe zdania.",
      "odpowiedz": "W sieci 192.168.0.0/28 dokładnie 16 adresów IP można przypisać komputerom",
      "odp": false
    },
    {
      "id": "2019-39-d",
      "pytanie": "39. Zaznacz prawdziwe zdania.",
      "odpowiedz": "W sieci 192.168.0.0/29 dokładnie 6 adresów IP można przypisać komputerom",
      "odp": true
    },
    {
      "id": "2019-40-a",
      "pytanie": "40. Tylko jedna poprawna odpowiedź. W pewnym typie Ethernetu wysłanie pojedynczego bitu zajmuje 1/100 mikrosekundy ($1\\ mikrosekunda = 10^{-6}\\ sekundy$). Wszystkie ramki mają po 20 bajtów (160 bitów). Zakładamy, że sygnał w kablu rozchodzi się z prędkością 200 000 km/s. Jaka jest maksymalna odległość między dwoma komputerami umożliwiająca działanie protokołowi CSMA/CD?",
      "odpowiedz": "40 m",
      "odp": false
    },
    {
      "id": "2019-40-b",
      "pytanie": "40. Tylko jedna poprawna odpowiedź. W pewnym typie Ethernetu wysłanie pojedynczego bitu zajmuje 1/100 mikrosekundy ($1\\ mikrosekunda = 10^{-6}\\ sekundy$). Wszystkie ramki mają po 20 bajtów (160 bitów). Zakładamy, że sygnał w kablu rozchodzi się z prędkością 200 000 km/s. Jaka jest maksymalna odległość między dwoma komputerami umożliwiająca działanie protokołowi CSMA/CD?",
      "odpowiedz": "800 m",
      "odp": false
    },
    {
      "id": "2019-40-c",
      "pytanie": "40. Tylko jedna poprawna odpowiedź. W pewnym typie Ethernetu wysłanie pojedynczego bitu zajmuje 1/100 mikrosekundy ($1\\ mikrosekunda = 10^{-6}\\ sekundy$). Wszystkie ramki mają po 20 bajtów (160 bitów). Zakładamy, że sygnał w kablu rozchodzi się z prędkością 200 000 km/s. Jaka jest maksymalna odległość między dwoma komputerami umożliwiająca działanie protokołowi CSMA/CD?",
      "odpowiedz": "400 m",
      "odp": false
    },
    {
      "id": "2019-40-d",
      "pytanie": "40. Tylko jedna poprawna odpowiedź. W pewnym typie Ethernetu wysłanie pojedynczego bitu zajmuje 1/100 mikrosekundy ($1\\ mikrosekunda = 10^{-6}\\ sekundy$). Wszystkie ramki mają po 20 bajtów (160 bitów). Zakładamy, że sygnał w kablu rozchodzi się z prędkością 200 000 km/s. Jaka jest maksymalna odległość między dwoma komputerami umożliwiająca działanie protokołowi CSMA/CD?",
      "odpowiedz": "160 m",
      "odp": true
    }
  ],
  "2013": [
    {
      "id": "2013-1-a",
      "pytanie": "1. Sieci S₁ i S₂ są połączone za pomocą routera. Komputer w sieci S₁ wysyła pakiet IP do komputera w sieci S₂, wkładając go uprzednio w ramkę. Co zrobi router?",
      "odpowiedz": "Zmodyfikuje adres docelowy ramki.",
      "odp": true
    },
    {
      "id": "2013-1-b",
      "pytanie": "1. Sieci S₁ i S₂ są połączone za pomocą routera. Komputer w sieci S₁ wysyła pakiet IP do komputera w sieci S₂, wkładając go uprzednio w ramkę. Co zrobi router?",
      "odpowiedz": "Zmodyfikuje adres docelowy pakietu IP.",
      "odp": false
    },
    {
      "id": "2013-1-c",
      "pytanie": "1. Sieci S₁ i S₂ są połączone za pomocą routera. Komputer w sieci S₁ wysyła pakiet IP do komputera w sieci S₂, wkładając go uprzednio w ramkę. Co zrobi router?",
      "odpowiedz": "Podzieli pakiet na fragmenty, jeśli MTU sieci S₂ jest mniejsze niż rozmiar pakietu.",
      "odp": true
    },
    {
      "id": "2013-1-d",
      "pytanie": "1. Sieci S₁ i S₂ są połączone za pomocą routera. Komputer w sieci S₁ wysyła pakiet IP do komputera w sieci S₂, wkładając go uprzednio w ramkę. Co zrobi router?",
      "odpowiedz": "Przekaże otrzymaną ramkę bez zmian do sieci S₂.",
      "odp": false
    },
    {
      "id": "2013-2-a",
      "pytanie": "2. Protokol SSH",
      "odpowiedz": "umozliwia prace zdalna",
      "odp": true
    },
    {
      "id": "2013-2-b",
      "pytanie": "2. Protokol SSH",
      "odpowiedz": "wykorzystuje uwierzytelnianie za pomoca kryptografii asymetrycznej",
      "odp": true
    },
    {
      "id": "2013-2-c",
      "pytanie": "2. Protokol SSH",
      "odpowiedz": "wykorzystuje szyfrowanie za pomoca kryptografii asymetrycznej",
      "odp": true
    },
    {
      "id": "2013-2-d",
      "pytanie": "2. Protokol SSH",
      "odpowiedz": "wykorzystuje szyfrowanie za pomoca kryptografii symetrycznej",
      "odp": true
    },
    {
      "id": "2013-3-a",
      "pytanie": "3. Zaznacz prawdziwe zdania o routingu hierarchicznym",
      "odpowiedz": "stosowany jest wylacznie wewnatrz systemow autonomycznych",
      "odp": false
    },
    {
      "id": "2013-3-b",
      "pytanie": "3. Zaznacz prawdziwe zdania o routingu hierarchicznym",
      "odpowiedz": "stosowany jest w internecie",
      "odp": true
    },
    {
      "id": "2013-3-c",
      "pytanie": "3. Zaznacz prawdziwe zdania o routingu hierarchicznym",
      "odpowiedz": "pozwala zredukowac rozmiar tablicy routingu",
      "odp": true
    },
    {
      "id": "2013-3-d",
      "pytanie": "3. Zaznacz prawdziwe zdania o routingu hierarchicznym",
      "odpowiedz": "jego istota jest przesylanie segmentow TCP w pakietach IP",
      "odp": false
    },
    {
      "id": "2013-4-a",
      "pytanie": "4. Ktore z ponziszych zdan sa prawdziwe w przypadku protokolu TCP?",
      "odpowiedz": "otrzymuje strumien danych z wartswy sieciowej i dzieli go na segmenty",
      "odp": false,
      "tip": "Kierunek przepływu danych jest tu odwrotny. TCP odbiera strumień z warstwy aplikacji (z góry), dzieli go na mniejsze paczki (segmenty) i dopiero wtedy przesyła w dół do warstwy sieciowej (IP)."
    },
    {
      "id": "2013-4-b",
      "pytanie": "4. Ktore z ponziszych zdan sa prawdziwe w przypadku protokolu TCP?",
      "odpowiedz": "wszystkie gniazda sa gniazdami nasluchujacymi",
      "odp": false
    },
    {
      "id": "2013-4-c",
      "pytanie": "4. Ktore z ponziszych zdan sa prawdziwe w przypadku protokolu TCP?",
      "odpowiedz": "potrafi dokonywac konwersji miedzy roznymi formatami plikow",
      "odp": false
    },
    {
      "id": "2013-4-d",
      "pytanie": "4. Ktore z ponziszych zdan sa prawdziwe w przypadku protokolu TCP?",
      "odpowiedz": "wysylane dane sa potwierdzane",
      "odp": true
    },
    {
      "id": "2013-5-a",
      "pytanie": "5. Ktore z ponziszych informacji opisuja gniazdo polaczone?",
      "odpowiedz": "zdalny port",
      "odp": true
    },
    {
      "id": "2013-5-b",
      "pytanie": "5. Ktore z ponziszych informacji opisuja gniazdo polaczone?",
      "odpowiedz": "MTU",
      "odp": false
    },
    {
      "id": "2013-5-c",
      "pytanie": "5. Ktore z ponziszych informacji opisuja gniazdo polaczone?",
      "odpowiedz": "lokalny port",
      "odp": true
    },
    {
      "id": "2013-5-d",
      "pytanie": "5. Ktore z ponziszych informacji opisuja gniazdo polaczone?",
      "odpowiedz": "zdalny adres IP",
      "odp": true
    },
    {
      "id": "2013-6-a",
      "pytanie": "6. Ktore z ponziszych zdan sa prawdziwe w przypadku Ethernetu?",
      "odpowiedz": "podczas transmisji moga wystepowac kolizje",
      "odp": true
    },
    {
      "id": "2013-6-b",
      "pytanie": "6. Ktore z ponziszych zdan sa prawdziwe w przypadku Ethernetu?",
      "odpowiedz": "dostep do kanalu jest deterministyczny",
      "odp": false
    },
    {
      "id": "2013-6-c",
      "pytanie": "6. Ktore z ponziszych zdan sa prawdziwe w przypadku Ethernetu?",
      "odpowiedz": "komputery przekazuja sobie token, by uzyskac dostep do kanalu",
      "odp": true
    },
    {
      "id": "2013-6-d",
      "pytanie": "6. Ktore z ponziszych zdan sa prawdziwe w przypadku Ethernetu?",
      "odpowiedz": "wykorzystuje protokol CSMA/CA",
      "odp": false
    },
    {
      "id": "2013-6-e",
      "pytanie": "6. Ktore z ponziszych zdan sa prawdziwe w przypadku Ethernetu?",
      "odpowiedz": "Router musi być symetrycznym NAT.",
      "odp": false
    },
    {
      "id": "2013-6-f",
      "pytanie": "6. Ktore z ponziszych zdan sa prawdziwe w przypadku Ethernetu?",
      "odpowiedz": "Router może być asymetrycznym ograniczonym (restricted cone) NAT.",
      "odp": true
    },
    {
      "id": "2013-6-g",
      "pytanie": "6. Ktore z ponziszych zdan sa prawdziwe w przypadku Ethernetu?",
      "odpowiedz": "Router może być asymetrycznym ograniczonym portowo (port-restricted cone) NAT.",
      "odp": true
    },
    {
      "id": "2013-6-h",
      "pytanie": "6. Ktore z ponziszych zdan sa prawdziwe w przypadku Ethernetu?",
      "odpowiedz": "Router może być pełnym asymetrycznym (full cone) NAT.",
      "odp": true
    },
    {
      "id": "2013-8-a",
      "pytanie": "8. W jakich warstwach używane są poniższe mechanizmy?",
      "odpowiedz": "Typ MIME stosowany jest w warstwie transportowej.",
      "odp": false
    },
    {
      "id": "2013-8-b",
      "pytanie": "8. W jakich warstwach używane są poniższe mechanizmy?",
      "odpowiedz": "Suma CRC wykorzystywana jest w warstwie łącza danych.",
      "odp": true
    },
    {
      "id": "2013-8-c",
      "pytanie": "8. W jakich warstwach używane są poniższe mechanizmy?",
      "odpowiedz": "Routing stosowany jest w warstwie aplikacji.",
      "odp": false
    },
    {
      "id": "2013-8-d",
      "pytanie": "8. W jakich warstwach używane są poniższe mechanizmy?",
      "odpowiedz": "Nawiązywanie połączenia stosowane jest w warstwie transportowej.",
      "odp": true
    },
    {
      "id": "2013-9-a",
      "pytanie": "9. Tylko 1 poprawna odpowiedz: Przy stosowaniu sumy kontrolnej crc opartej o wielomian x^2 + 1 do wiadomosci 100001 zostanie dolaczona suma kontrolna:",
      "odpowiedz": "1",
      "odp": false,
      "tip": "dopisujemy do 100001 dwa zera (bo stopień wielomianu = 2), a potem dzielimy binarnie przez 101"
    },
    {
      "id": "2013-9-b",
      "pytanie": "9. Tylko 1 poprawna odpowiedz: Przy stosowaniu sumy kontrolnej crc opartej o wielomian x^2 + 1 do wiadomosci 100001 zostanie dolaczona suma kontrolna:",
      "odpowiedz": "10",
      "odp": false,
      "tip": "dopisujemy do 100001 dwa zera (bo stopień wielomianu = 2), a potem dzielimy binarnie przez 101"
    },
    {
      "id": "2013-9-c",
      "pytanie": "9. Tylko 1 poprawna odpowiedz: Przy stosowaniu sumy kontrolnej crc opartej o wielomian x^2 + 1 do wiadomosci 100001 zostanie dolaczona suma kontrolna:",
      "odpowiedz": "11",
      "odp": true,
      "tip": "dopisujemy do 100001 dwa zera (bo stopień wielomianu = 2), a potem dzielimy binarnie przez 101"
    },
    {
      "id": "2013-9-d",
      "pytanie": "9. Tylko 1 poprawna odpowiedz: Przy stosowaniu sumy kontrolnej crc opartej o wielomian x^2 + 1 do wiadomosci 100001 zostanie dolaczona suma kontrolna:",
      "odpowiedz": "01",
      "odp": false,
      "tip": "dopisujemy do 100001 dwa zera (bo stopień wielomianu = 2), a potem dzielimy binarnie przez 101"
    },
    {
      "id": "2013-10-a",
      "pytanie": "10. Podczas modelowego kończenia polaczenia w protokole TCP:",
      "odpowiedz": "przesylane sa dwa segmenty FIN",
      "odp": true
    },
    {
      "id": "2013-10-b",
      "pytanie": "10. Podczas modelowego kończenia polaczenia w protokole TCP:",
      "odpowiedz": "strona wykonujaca zamkniecie bierne bedzie pozniej w stanie TIME WAIT",
      "odp": false
    },
    {
      "id": "2013-10-c",
      "pytanie": "10. Podczas modelowego kończenia polaczenia w protokole TCP:",
      "odpowiedz": "strona, ktora wyslala pierwszy segment FIN, moze jeszcze potem nadawac dane",
      "odp": false
    },
    {
      "id": "2013-10-d",
      "pytanie": "10. Podczas modelowego kończenia polaczenia w protokole TCP:",
      "odpowiedz": "strona, ktora wyslala pierwszy segment FIN, moze jeszcze potem odbierac dane",
      "odp": true
    },
    {
      "id": "2013-11-a",
      "pytanie": "11. Ktore zdania dotyczace sieci bezprzewodowych 802.11 sa prawdziwe?",
      "odpowiedz": "protokol wykorzystuje przeskakiwanie czestotliwosci (frequency hopping)",
      "odp": false
    },
    {
      "id": "2013-11-b",
      "pytanie": "11. Ktore zdania dotyczace sieci bezprzewodowych 802.11 sa prawdziwe?",
      "odpowiedz": "urzadzenia nadajace na takiej samej czestotliwosci wzajemnie sie zaklocaja",
      "odp": true
    },
    {
      "id": "2013-11-c",
      "pytanie": "11. Ktore zdania dotyczace sieci bezprzewodowych 802.11 sa prawdziwe?",
      "odpowiedz": "urzadzenia pracujace na pasmie 2,4 Ghz moga byc od sievie bardziej oddalone niz pracujace na pasmie 5 Ghz",
      "odp": true
    },
    {
      "id": "2013-11-d",
      "pytanie": "11. Ktore zdania dotyczace sieci bezprzewodowych 802.11 sa prawdziwe?",
      "odpowiedz": "dostep do kanalu opiera sie na wykrywaniu kolizji tak jak w Ethernecie",
      "odp": false
    },
    {
      "id": "2013-12-a",
      "pytanie": "12. Po wpisaniu polecenia if config eth0 10.1.1.15 nastepujace ustawienia zostana skonfigurowane dla sieci podlaczonej do interfejsu eth0:",
      "odpowiedz": "adres rozgloszeniowy zsotanie ustawiony na 10.1.1.255",
      "odp": true,
      "tip": "jak nie poda się maski to bierze ją jako 255.255.255.0"
    },
    {
      "id": "2013-12-b",
      "pytanie": "12. Po wpisaniu polecenia if config eth0 10.1.1.15 nastepujace ustawienia zostana skonfigurowane dla sieci podlaczonej do interfejsu eth0:",
      "odpowiedz": "brama domyslna zostanie ustawiona na 10.0.0.1",
      "odp": false,
      "tip": "nie ustawia bramek domyślnych, bo nie do tego służy"
    },
    {
      "id": "2013-12-c",
      "pytanie": "12. Po wpisaniu polecenia if config eth0 10.1.1.15 nastepujace ustawienia zostana skonfigurowane dla sieci podlaczonej do interfejsu eth0:",
      "odpowiedz": "polecenie zostanie odrzucone gdyz nie podani maski podsieci",
      "odp": false,
      "tip": "weźmie domyślną 255.255.255.0"
    },
    {
      "id": "2013-12-d",
      "pytanie": "12. Po wpisaniu polecenia if config eth0 10.1.1.15 nastepujace ustawienia zostana skonfigurowane dla sieci podlaczonej do interfejsu eth0:",
      "odpowiedz": "brama domyslna zostanie ustawiona na 10.1.1.1",
      "odp": false,
      "tip": "nie ustawia bramek domyślnych, bo nie do tego służy"
    },
    {
      "id": "2013-13-a",
      "pytanie": "13. Ktore zdania dotyczace protokolu TCP sa prawdziwe?",
      "odpowiedz": "RTO oznacza czas, po uplywie ktorego niepotwierdzony segment zostanie wyslany ponownie",
      "odp": true
    },
    {
      "id": "2013-13-b",
      "pytanie": "13. Ktore zdania dotyczace protokolu TCP sa prawdziwe?",
      "odpowiedz": "wartosc RTO jest ustalana na podstawie zmierzonego czasu RTT",
      "odp": true
    },
    {
      "id": "2013-13-c",
      "pytanie": "13. Ktore zdania dotyczace protokolu TCP sa prawdziwe?",
      "odpowiedz": "wartosc RTO jest ustalana za pomoca protokolu ICMP",
      "odp": false
    },
    {
      "id": "2013-13-d",
      "pytanie": "13. Ktore zdania dotyczace protokolu TCP sa prawdziwe?",
      "odpowiedz": "wartosc RTO jest stala dla wszystkich segmentow i niezmienna przez caly czas trwania polaczenia",
      "odp": false
    },
    {
      "id": "2013-14-a",
      "pytanie": "14. Zaznacz prawdziwe zdania:",
      "odpowiedz": "kanal simpleksowy umozliwia transmisje danych w obu kierunkach, ale tylko w jednym naraz",
      "odp": false
    },
    {
      "id": "2013-14-b",
      "pytanie": "14. Zaznacz prawdziwe zdania:",
      "odpowiedz": "Ethernet oparty na koncentratorach umozliwia uzyskanie pelnego dupleksu",
      "odp": true
    },
    {
      "id": "2013-14-c",
      "pytanie": "14. Zaznacz prawdziwe zdania:",
      "odpowiedz": "kanal poldupleksowy umozliwia transmisje danych tylko w jednym kierunku",
      "odp": false
    },
    {
      "id": "2013-14-d",
      "pytanie": "14. Zaznacz prawdziwe zdania:",
      "odpowiedz": "kanal pelnodupleksowy umozliwia transmisje danych w obu kierunkacj naraz",
      "odp": true
    },
    {
      "id": "2013-15-a",
      "pytanie": "15. Zaznacz prawdziwe zdania:",
      "odpowiedz": "Protokol FTP sluzy do przesylania poczty elektronicznej",
      "odp": false,
      "tip": "FTP (File Transfer Protocol) służy wyłącznie do przesyłania plików między komputerem klienckim a serwerem"
    },
    {
      "id": "2013-15-b",
      "pytanie": "15. Zaznacz prawdziwe zdania:",
      "odpowiedz": "Protokol DNS sluzy do przesylania plikow",
      "odp": false,
      "tip": "DNS (Domain Name System) to \"książka telefoniczna\" internetu. Zamienia przyjazne dla człowieka nazwy domen (np. onet.pl) na zrozumiałe dla komputerów adresy IP (np. 213.180.141.140)."
    },
    {
      "id": "2013-15-c",
      "pytanie": "15. Zaznacz prawdziwe zdania:",
      "odpowiedz": "Protokol SMTP sluzy do pobierania poczty elektronicznej z serwera",
      "odp": false,
      "tip": "SMPT - do wysyłania, POP3 - do odbierania"
    },
    {
      "id": "2013-15-d",
      "pytanie": "15. Zaznacz prawdziwe zdania:",
      "odpowiedz": "Protokol POP3 sluzy do wysylania poczty elektronicznej do serwera",
      "odp": false,
      "tip": "SMPT - do wysyłania, POP3 - do odbierania"
    },
    {
      "id": "2013-16-a",
      "pytanie": "16. Jakie informacje sa zawarte w naglowku UDP?",
      "odpowiedz": "suma kontrolna",
      "odp": true
    },
    {
      "id": "2013-16-b",
      "pytanie": "16. Jakie informacje sa zawarte w naglowku UDP?",
      "odpowiedz": "numer sekwencyjny",
      "odp": false
    },
    {
      "id": "2013-16-c",
      "pytanie": "16. Jakie informacje sa zawarte w naglowku UDP?",
      "odpowiedz": "rozmiar okna",
      "odp": false
    },
    {
      "id": "2013-16-d",
      "pytanie": "16. Jakie informacje sa zawarte w naglowku UDP?",
      "odpowiedz": "dlugosc",
      "odp": true
    },
    {
      "id": "2013-17-a",
      "pytanie": "17. Jeśli maską podsieci jest /28, to następujący adres można przypisać komputerowi:",
      "odpowiedz": "172.13.160.1",
      "odp": true
    },
    {
      "id": "2013-17-b",
      "pytanie": "17. Jeśli maską podsieci jest /28, to następujący adres można przypisać komputerowi:",
      "odpowiedz": "10.3.1.160",
      "odp": false
    },
    {
      "id": "2013-17-c",
      "pytanie": "17. Jeśli maską podsieci jest /28, to następujący adres można przypisać komputerowi:",
      "odpowiedz": "10.28.1.250",
      "odp": true
    },
    {
      "id": "2013-17-d",
      "pytanie": "17. Jeśli maską podsieci jest /28, to następujący adres można przypisać komputerowi:",
      "odpowiedz": "192.23.1.191",
      "odp": false
    },
    {
      "id": "2013-18-a",
      "pytanie": "18. Protokół ICMP:",
      "odpowiedz": "Umożliwia kontrolę przeciążeń.",
      "odp": false
    },
    {
      "id": "2013-18-b",
      "pytanie": "18. Protokół ICMP:",
      "odpowiedz": "Umożliwia działanie programowi ping.",
      "odp": true
    },
    {
      "id": "2013-18-c",
      "pytanie": "18. Protokół ICMP:",
      "odpowiedz": "Wykorzystuje port 23 do komunikacji.",
      "odp": false
    },
    {
      "id": "2013-18-d",
      "pytanie": "18. Protokół ICMP:",
      "odpowiedz": "Wykorzystuje port 63 do komunikacji.",
      "odp": false
    },
    {
      "id": "2013-19-a",
      "pytanie": "19. Zaznacz prawdziwe zdania o atakach typu DoS (denial of service).",
      "odpowiedz": "Odbity atak DoS może być wykonany tylko jeśli atakujący posiada wiele komputerów.",
      "odp": false
    },
    {
      "id": "2013-19-b",
      "pytanie": "19. Zaznacz prawdziwe zdania o atakach typu DoS (denial of service).",
      "odpowiedz": "Rozproszony atak DoS oznacza, że wiele komputerów jest atakowanych jednocześnie.",
      "odp": false
    },
    {
      "id": "2013-19-c",
      "pytanie": "19. Zaznacz prawdziwe zdania o atakach typu DoS (denial of service).",
      "odpowiedz": "Atak DoS wymaga fałszowania adresów IP.",
      "odp": false
    },
    {
      "id": "2013-19-d",
      "pytanie": "19. Zaznacz prawdziwe zdania o atakach typu DoS (denial of service).",
      "odpowiedz": "Do wykrywania źródła ataku można wykorzystać protokół ICMP traceback.",
      "odp": true
    },
    {
      "id": "2013-20-a",
      "pytanie": "20. Zaznacz prawdziwe zdania :",
      "odpowiedz": "Protokol BOOTP zamienia adresy MAC na adresy IP",
      "odp": true
    },
    {
      "id": "2013-20-b",
      "pytanie": "20. Zaznacz prawdziwe zdania :",
      "odpowiedz": "Protokol DNS zamienia nazwy domen na adresy IP",
      "odp": true
    },
    {
      "id": "2013-20-c",
      "pytanie": "20. Zaznacz prawdziwe zdania :",
      "odpowiedz": "Protokol ARP zamienia adresy IP na adresy MAC",
      "odp": true
    },
    {
      "id": "2013-20-d",
      "pytanie": "20. Zaznacz prawdziwe zdania :",
      "odpowiedz": "Protokol DHCP zamienia adresy IP na adresy MAC",
      "odp": false
    },
    {
      "id": "2013-21-a",
      "pytanie": "21. Sieć 192.168.17.0/26 została podzielona na 3 rozłączne podsieci, tak żeby każdy adres był w dokładnie jednej z nich. Jaki adres na pewno nie może być adresem rozgłoszeniowym w żadnej z tych podsieci?",
      "odpowiedz": "192.168.17.31",
      "odp": false
    },
    {
      "id": "2013-21-b",
      "pytanie": "21. Sieć 192.168.17.0/26 została podzielona na 3 rozłączne podsieci, tak żeby każdy adres był w dokładnie jednej z nich. Jaki adres na pewno nie może być adresem rozgłoszeniowym w żadnej z tych podsieci?",
      "odpowiedz": "192.168.17.63",
      "odp": false
    },
    {
      "id": "2013-21-c",
      "pytanie": "21. Sieć 192.168.17.0/26 została podzielona na 3 rozłączne podsieci, tak żeby każdy adres był w dokładnie jednej z nich. Jaki adres na pewno nie może być adresem rozgłoszeniowym w żadnej z tych podsieci?",
      "odpowiedz": "192.168.17.255",
      "odp": true
    },
    {
      "id": "2013-21-d",
      "pytanie": "21. Sieć 192.168.17.0/26 została podzielona na 3 rozłączne podsieci, tak żeby każdy adres był w dokładnie jednej z nich. Jaki adres na pewno nie może być adresem rozgłoszeniowym w żadnej z tych podsieci?",
      "odpowiedz": "192.168.17.15",
      "odp": false
    },
    {
      "id": "2013-22-a",
      "pytanie": "22. Tylko jedna poprawna odpowiedź. Klient DNS pyta serwer DNS o nazwę domeny skojarzoną z adresem 10.20.30.40.",
      "odpowiedz": "Klient wyśle zapytanie o rekord A związany z domeną 40.30.20.10.in-addr.arpa",
      "odp": false
    },
    {
      "id": "2013-22-b",
      "pytanie": "22. Tylko jedna poprawna odpowiedź. Klient DNS pyta serwer DNS o nazwę domeny skojarzoną z adresem 10.20.30.40.",
      "odpowiedz": "Klient wyśle zapytanie o rekord A związany z domeną 10.20.30.40.in-addr.arpa",
      "odp": false
    },
    {
      "id": "2013-22-c",
      "pytanie": "22. Tylko jedna poprawna odpowiedź. Klient DNS pyta serwer DNS o nazwę domeny skojarzoną z adresem 10.20.30.40.",
      "odpowiedz": "Klient wyśle zapytanie o rekord PTR związany z domeną 10.20.30.40.in-addr.arpa",
      "odp": false
    },
    {
      "id": "2013-22-d",
      "pytanie": "22. Tylko jedna poprawna odpowiedź. Klient DNS pyta serwer DNS o nazwę domeny skojarzoną z adresem 10.20.30.40.",
      "odpowiedz": "Klient wyśle zapytanie o rekord PTR związany z domeną 40.30.20.10.in-addr.arpa",
      "odp": true
    },
    {
      "id": "2013-23-a",
      "pytanie": "23. Tylko jedna poprawna odpowiedź. Przeglądarka WWW nawiązuje połączenie z serwerem WWW. Pakiet zawierający całe żądanie HTTP gubi się. Co się stanie?",
      "odpowiedz": "Po pewnym czasie przeglądarka WWW wyśle zapytanie ARP.",
      "odp": false
    },
    {
      "id": "2013-23-b",
      "pytanie": "23. Tylko jedna poprawna odpowiedź. Przeglądarka WWW nawiązuje połączenie z serwerem WWW. Pakiet zawierający całe żądanie HTTP gubi się. Co się stanie?",
      "odpowiedz": "Po pewnym czasie serwer WWW wyśle żądanie o ponowne przesłanie zagubionego pakietu.",
      "odp": false
    },
    {
      "id": "2013-23-c",
      "pytanie": "23. Tylko jedna poprawna odpowiedź. Przeglądarka WWW nawiązuje połączenie z serwerem WWW. Pakiet zawierający całe żądanie HTTP gubi się. Co się stanie?",
      "odpowiedz": "Po pewnym czasie warstwa transportowa ponownie wyśle pakiet.",
      "odp": true
    },
    {
      "id": "2013-23-d",
      "pytanie": "23. Tylko jedna poprawna odpowiedź. Przeglądarka WWW nawiązuje połączenie z serwerem WWW. Pakiet zawierający całe żądanie HTTP gubi się. Co się stanie?",
      "odpowiedz": "Po pewnym czasie przeglądarka WWW ponownie wyśle pakiet.",
      "odp": false
    },
    {
      "id": "2013-24-a",
      "pytanie": "24. Załóżmy, że routery A i B są bezpośrednio połączone i wykorzystują algorytm RIP. Tablica routingu A zawiera wpis, że istnieje ścieżka długości 5 do routera X, na której pierwszym krokiem jest router B. Router B wysyła do A informację, że jego obecna trasa do X wynosi 10. Co zrobi router A?",
      "odpowiedz": "Zignoruje tę informację, gdyż jego obecna trasa do X jest lepsza.",
      "odp": false
    },
    {
      "id": "2013-24-b",
      "pytanie": "24. Załóżmy, że routery A i B są bezpośrednio połączone i wykorzystują algorytm RIP. Tablica routingu A zawiera wpis, że istnieje ścieżka długości 5 do routera X, na której pierwszym krokiem jest router B. Router B wysyła do A informację, że jego obecna trasa do X wynosi 10. Co zrobi router A?",
      "odpowiedz": "Powyższa informacja w ogóle nie dotrze do A ze względu na technikę dzielenia horyzontu.",
      "odp": false
    },
    {
      "id": "2013-24-c",
      "pytanie": "24. Załóżmy, że routery A i B są bezpośrednio połączone i wykorzystują algorytm RIP. Tablica routingu A zawiera wpis, że istnieje ścieżka długości 5 do routera X, na której pierwszym krokiem jest router B. Router B wysyła do A informację, że jego obecna trasa do X wynosi 10. Co zrobi router A?",
      "odpowiedz": "Zaktualizuje swój wpis, zmieniając odległość do routera X na 9.",
      "odp": false
    },
    {
      "id": "2013-24-d",
      "pytanie": "24. Załóżmy, że routery A i B są bezpośrednio połączone i wykorzystują algorytm RIP. Tablica routingu A zawiera wpis, że istnieje ścieżka długości 5 do routera X, na której pierwszym krokiem jest router B. Router B wysyła do A informację, że jego obecna trasa do X wynosi 10. Co zrobi router A?",
      "odpowiedz": "Zaktualizuje swój wpis, zmieniając odległość do routera X na 11.",
      "odp": true
    },
    {
      "id": "2013-25-a",
      "pytanie": "25. Tylko jedna poprawna odpowiedź. W pewnym typie Ethernetu wysłanie pojedynczego bitu zajmuje 1/10 mikrosekundy, ramki mają po 20 bajtów, sygnał rozchodzi się z prędkością 100 000 km/s. Jaka jest maksymalna odległość między dwoma komputerami umożliwiająca działanie CSMA/CD?",
      "odpowiedz": "320 m",
      "odp": false
    },
    {
      "id": "2013-25-b",
      "pytanie": "25. Tylko jedna poprawna odpowiedź. W pewnym typie Ethernetu wysłanie pojedynczego bitu zajmuje 1/10 mikrosekundy, ramki mają po 20 bajtów, sygnał rozchodzi się z prędkością 100 000 km/s. Jaka jest maksymalna odległość między dwoma komputerami umożliwiająca działanie CSMA/CD?",
      "odpowiedz": "800 m",
      "odp": true
    },
    {
      "id": "2013-25-c",
      "pytanie": "25. Tylko jedna poprawna odpowiedź. W pewnym typie Ethernetu wysłanie pojedynczego bitu zajmuje 1/10 mikrosekundy, ramki mają po 20 bajtów, sygnał rozchodzi się z prędkością 100 000 km/s. Jaka jest maksymalna odległość między dwoma komputerami umożliwiająca działanie CSMA/CD?",
      "odpowiedz": "1600 m",
      "odp": false
    },
    {
      "id": "2013-25-d",
      "pytanie": "25. Tylko jedna poprawna odpowiedź. W pewnym typie Ethernetu wysłanie pojedynczego bitu zajmuje 1/10 mikrosekundy, ramki mają po 20 bajtów, sygnał rozchodzi się z prędkością 100 000 km/s. Jaka jest maksymalna odległość między dwoma komputerami umożliwiająca działanie CSMA/CD?",
      "odpowiedz": "32 m",
      "odp": false
    },
    {
      "id": "2013-26-a",
      "pytanie": "26. Kryptograficzna funkcja skrótu (fingerprint) określona jest funkcją h. Jakie są pożądane właściwości takiej funkcji?",
      "odpowiedz": "Funkcja h powinna być efektywnie obliczalna.",
      "odp": true
    },
    {
      "id": "2013-26-b",
      "pytanie": "26. Kryptograficzna funkcja skrótu (fingerprint) określona jest funkcją h. Jakie są pożądane właściwości takiej funkcji?",
      "odpowiedz": "Funkcja h powinna być bijekcją.",
      "odp": false
    },
    {
      "id": "2013-26-c",
      "pytanie": "26. Kryptograficzna funkcja skrótu (fingerprint) określona jest funkcją h. Jakie są pożądane właściwości takiej funkcji?",
      "odpowiedz": "Dla dowolnego x znalezienie y ≠ x spełniającego h(x) = h(y) jest obliczeniowo trudne.",
      "odp": true
    },
    {
      "id": "2013-26-d",
      "pytanie": "26. Kryptograficzna funkcja skrótu (fingerprint) określona jest funkcją h. Jakie są pożądane właściwości takiej funkcji?",
      "odpowiedz": "Funkcja h⁻¹ powinna być efektywnie obliczalna.",
      "odp": false
    },
    {
      "id": "2013-27-a",
      "pytanie": "27. Komputer (nadawca) wysyła wiadomość do komputera (odbiorcy) leżącego w innej sieci. Co znajdzie się w ramce w momencie jej wysyłania przez komputer?",
      "odpowiedz": "Adres MAC karty sieciowej odbiorcy.",
      "odp": false
    },
    {
      "id": "2013-27-b",
      "pytanie": "27. Komputer (nadawca) wysyła wiadomość do komputera (odbiorcy) leżącego w innej sieci. Co znajdzie się w ramce w momencie jej wysyłania przez komputer?",
      "odpowiedz": "Adres MAC karty sieciowej nadawcy.",
      "odp": true
    },
    {
      "id": "2013-27-c",
      "pytanie": "27. Komputer (nadawca) wysyła wiadomość do komputera (odbiorcy) leżącego w innej sieci. Co znajdzie się w ramce w momencie jej wysyłania przez komputer?",
      "odpowiedz": "Adres MAC karty sieciowej bramy domyślnej.",
      "odp": true
    },
    {
      "id": "2013-27-d",
      "pytanie": "27. Komputer (nadawca) wysyła wiadomość do komputera (odbiorcy) leżącego w innej sieci. Co znajdzie się w ramce w momencie jej wysyłania przez komputer?",
      "odpowiedz": "Adres MAC karty przełącznika sieciowego.",
      "odp": false
    },
    {
      "id": "2013-28-a",
      "pytanie": "28. Jakie techniki pomagają w walce ze spamem?",
      "odpowiedz": "phishing",
      "odp": false
    },
    {
      "id": "2013-28-b",
      "pytanie": "28. Jakie techniki pomagają w walce ze spamem?",
      "odpowiedz": "ICMP traceback",
      "odp": false
    },
    {
      "id": "2013-28-c",
      "pytanie": "28. Jakie techniki pomagają w walce ze spamem?",
      "odpowiedz": "greylisting",
      "odp": true
    },
    {
      "id": "2013-28-d",
      "pytanie": "28. Jakie techniki pomagają w walce ze spamem?",
      "odpowiedz": "filtry bayesowskie",
      "odp": true
    },
    {
      "id": "2013-29-a",
      "pytanie": "29. Komputerowi został przypisany adres IP równy 10.20.30.255/23, a brama domyślna 10.20.32.200. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Komputer nie będzie mógł się komunikować, gdyż ma przypisany adres rozgłoszeniowy.",
      "odp": false
    },
    {
      "id": "2013-29-b",
      "pytanie": "29. Komputerowi został przypisany adres IP równy 10.20.30.255/23, a brama domyślna 10.20.32.200. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Komputer będzie mógł komunikować się tylko z komputerami leżącymi w jego podsieci.",
      "odp": true
    },
    {
      "id": "2013-29-c",
      "pytanie": "29. Komputerowi został przypisany adres IP równy 10.20.30.255/23, a brama domyślna 10.20.32.200. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Komputer nie będzie mógł się komunikować, gdyż ma przypisany adres sieci.",
      "odp": false
    },
    {
      "id": "2013-29-d",
      "pytanie": "29. Komputerowi został przypisany adres IP równy 10.20.30.255/23, a brama domyślna 10.20.32.200. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Komputer będzie mógł komunikować się bezpośrednio w swojej podsieci, a z innymi za pośrednictwem bramy domyślnej.",
      "odp": false
    },
    {
      "id": "2013-30-a",
      "pytanie": "30. Który z poniższych protokołów działa w warstwie transportowej?",
      "odpowiedz": "DNS",
      "odp": false
    },
    {
      "id": "2013-30-b",
      "pytanie": "30. Który z poniższych protokołów działa w warstwie transportowej?",
      "odpowiedz": "TCP",
      "odp": true
    },
    {
      "id": "2013-30-c",
      "pytanie": "30. Który z poniższych protokołów działa w warstwie transportowej?",
      "odpowiedz": "ICMP",
      "odp": false
    },
    {
      "id": "2013-30-d",
      "pytanie": "30. Który z poniższych protokołów działa w warstwie transportowej?",
      "odpowiedz": "FTP",
      "odp": false
    },
    {
      "id": "2013-31-a",
      "pytanie": "31. Tylko jedna poprawna odpowiedź. Karta sieciowa ma adres 172.16.2.100/25, brama domyślna 172.16.2.1, pamięć ARP pusta. Co nastąpi jako pierwsze, jeśli komputer chce wysłać ramkę do adresu 172.16.2.200/25?",
      "odpowiedz": "Komputer roześle (na adres rozgłoszeniowy) zapytanie ARP o adres 172.16.2.1",
      "odp": true
    },
    {
      "id": "2013-31-b",
      "pytanie": "31. Tylko jedna poprawna odpowiedź. Karta sieciowa ma adres 172.16.2.100/25, brama domyślna 172.16.2.1, pamięć ARP pusta. Co nastąpi jako pierwsze, jeśli komputer chce wysłać ramkę do adresu 172.16.2.200/25?",
      "odpowiedz": "Komputer roześle (na adres rozgłoszeniowy) zapytanie ARP o adres 172.16.2.200",
      "odp": false
    },
    {
      "id": "2013-31-c",
      "pytanie": "31. Tylko jedna poprawna odpowiedź. Karta sieciowa ma adres 172.16.2.100/25, brama domyślna 172.16.2.1, pamięć ARP pusta. Co nastąpi jako pierwsze, jeśli komputer chce wysłać ramkę do adresu 172.16.2.200/25?",
      "odpowiedz": "Ramka nie zostanie wysłana, a aplikacja otrzyma komunikat ICMP redirect.",
      "odp": false
    },
    {
      "id": "2013-31-d",
      "pytanie": "31. Tylko jedna poprawna odpowiedź. Karta sieciowa ma adres 172.16.2.100/25, brama domyślna 172.16.2.1, pamięć ARP pusta. Co nastąpi jako pierwsze, jeśli komputer chce wysłać ramkę do adresu 172.16.2.200/25?",
      "odpowiedz": "Komputer wyśle ramkę do przełącznika, a przełącznik wyśle ją do odpowiedniego adresu.",
      "odp": false
    },
    {
      "id": "2013-32-a",
      "pytanie": "32. Tylko jedna poprawna odpowiedź. Jedna czwarta listów to spam. Słowo „zalicz\" występuje w 25% maili niebędących spamem i w 50% maili będących spamem. Dostajemy losowy mail i okazuje się, że jest w nim słowo „zalicz\". Jakie jest prawdopodobieństwo, że to spam?",
      "odpowiedz": "1/4",
      "odp": false
    },
    {
      "id": "2013-32-b",
      "pytanie": "32. Tylko jedna poprawna odpowiedź. Jedna czwarta listów to spam. Słowo „zalicz\" występuje w 25% maili niebędących spamem i w 50% maili będących spamem. Dostajemy losowy mail i okazuje się, że jest w nim słowo „zalicz\". Jakie jest prawdopodobieństwo, że to spam?",
      "odpowiedz": "4/7",
      "odp": false
    },
    {
      "id": "2013-32-c",
      "pytanie": "32. Tylko jedna poprawna odpowiedź. Jedna czwarta listów to spam. Słowo „zalicz\" występuje w 25% maili niebędących spamem i w 50% maili będących spamem. Dostajemy losowy mail i okazuje się, że jest w nim słowo „zalicz\". Jakie jest prawdopodobieństwo, że to spam?",
      "odpowiedz": "2/5",
      "odp": true
    },
    {
      "id": "2013-32-d",
      "pytanie": "32. Tylko jedna poprawna odpowiedź. Jedna czwarta listów to spam. Słowo „zalicz\" występuje w 25% maili niebędących spamem i w 50% maili będących spamem. Dostajemy losowy mail i okazuje się, że jest w nim słowo „zalicz\". Jakie jest prawdopodobieństwo, że to spam?",
      "odpowiedz": "1/2",
      "odp": false
    },
    {
      "id": "2013-33-a",
      "pytanie": "33. Które zdania dotyczące szyfrowania są prawdziwe?",
      "odpowiedz": "Algorytmy szyfrowania asymetrycznego są zazwyczaj wolniejsze niż algorytmy szyfrowania symetrycznego.",
      "odp": true
    },
    {
      "id": "2013-33-b",
      "pytanie": "33. Które zdania dotyczące szyfrowania są prawdziwe?",
      "odpowiedz": "W algorytmach szyfrowania symetrycznego wiadomość szyfrujemy i deszyfrujemy za pomocą tego samego klucza.",
      "odp": true
    },
    {
      "id": "2013-33-c",
      "pytanie": "33. Które zdania dotyczące szyfrowania są prawdziwe?",
      "odpowiedz": "RSA jest szyfrem monoalfabetycznym.",
      "odp": false
    },
    {
      "id": "2013-33-d",
      "pytanie": "33. Które zdania dotyczące szyfrowania są prawdziwe?",
      "odpowiedz": "One-time pad jest szyfrem monoalfabetycznym.",
      "odp": false
    },
    {
      "id": "2013-34-a",
      "pytanie": "34. Zakres adresów 123.0.0.0/18 ma zostać podzielony na 6 rozłącznych sieci, tak żeby każdy adres był w dokładnie jednej z nich. Co można powiedzieć o wielkościach tych podsieci?",
      "odpowiedz": "Możliwe jest stworzenie podsieci o masce /22",
      "odp": true
    },
    {
      "id": "2013-34-b",
      "pytanie": "34. Zakres adresów 123.0.0.0/18 ma zostać podzielony na 6 rozłącznych sieci, tak żeby każdy adres był w dokładnie jednej z nich. Co można powiedzieć o wielkościach tych podsieci?",
      "odpowiedz": "Możliwe jest stworzenie podsieci o masce /19",
      "odp": true
    },
    {
      "id": "2013-34-c",
      "pytanie": "34. Zakres adresów 123.0.0.0/18 ma zostać podzielony na 6 rozłącznych sieci, tak żeby każdy adres był w dokładnie jednej z nich. Co można powiedzieć o wielkościach tych podsieci?",
      "odpowiedz": "Możliwe jest stworzenie podsieci o masce /24",
      "odp": false
    },
    {
      "id": "2013-34-d",
      "pytanie": "34. Zakres adresów 123.0.0.0/18 ma zostać podzielony na 6 rozłącznych sieci, tak żeby każdy adres był w dokładnie jednej z nich. Co można powiedzieć o wielkościach tych podsieci?",
      "odpowiedz": "Możliwe jest stworzenie podsieci o masce /23",
      "odp": true
    },
    {
      "id": "2013-35-a",
      "pytanie": "35. Efektem wywołania na gnieździe TCP funkcji bind() jest:",
      "odpowiedz": "wysłanie segmentu z ustawioną flagą SYN.",
      "odp": false
    },
    {
      "id": "2013-35-b",
      "pytanie": "35. Efektem wywołania na gnieździe TCP funkcji bind() jest:",
      "odpowiedz": "wysłanie segmentu z ustawioną flagą RST.",
      "odp": false
    },
    {
      "id": "2013-35-c",
      "pytanie": "35. Efektem wywołania na gnieździe TCP funkcji bind() jest:",
      "odpowiedz": "wywołanie funkcji bind() jest dozwolone tylko w przypadku gniazd UDP.",
      "odp": false
    },
    {
      "id": "2013-35-d",
      "pytanie": "35. Efektem wywołania na gnieździe TCP funkcji bind() jest:",
      "odpowiedz": "wysłanie segmentu z ustawioną flagą ACK.",
      "odp": false
    },
    {
      "id": "2013-36-a",
      "pytanie": "36. Algorytm Nagle'a:",
      "odpowiedz": "Jest wyłączany w przypadku niektórych usług interaktywnych.",
      "odp": true
    },
    {
      "id": "2013-36-b",
      "pytanie": "36. Algorytm Nagle'a:",
      "odpowiedz": "Stosowany jest w protokole ARP.",
      "odp": false
    },
    {
      "id": "2013-36-c",
      "pytanie": "36. Algorytm Nagle'a:",
      "odpowiedz": "Jest wyłączany w przypadku połączeń SMTP.",
      "odp": false
    },
    {
      "id": "2013-36-d",
      "pytanie": "36. Algorytm Nagle'a:",
      "odpowiedz": "Stosowany jest w protokole UDP.",
      "odp": false
    },
    {
      "id": "2013-37-a",
      "pytanie": "37. Które z poniższych adresów są dopuszczalnymi formami zapisu adresu IPv6 0fed:0000:0000:0000:f000:0000:0000:0001?",
      "odpowiedz": "0fed::f000:0001",
      "odp": false
    },
    {
      "id": "2013-37-b",
      "pytanie": "37. Które z poniższych adresów są dopuszczalnymi formami zapisu adresu IPv6 0fed:0000:0000:0000:f000:0000:0000:0001?",
      "odpowiedz": "fed:0:0:0:f:0:0:1",
      "odp": false
    },
    {
      "id": "2013-37-c",
      "pytanie": "37. Które z poniższych adresów są dopuszczalnymi formami zapisu adresu IPv6 0fed:0000:0000:0000:f000:0000:0000:0001?",
      "odpowiedz": "fed:0:0:0:f000:0:0:1",
      "odp": true
    },
    {
      "id": "2013-37-d",
      "pytanie": "37. Które z poniższych adresów są dopuszczalnymi formami zapisu adresu IPv6 0fed:0000:0000:0000:f000:0000:0000:0001?",
      "odpowiedz": "0fed:0000:0000:0000:f000:0000:0000:1",
      "odp": true
    },
    {
      "id": "2013-38-a",
      "pytanie": "38. Adres 203.0.1.191 jest adresem rozgłoszeniowym przy masce podsieci:",
      "odpowiedz": "/28",
      "odp": true
    },
    {
      "id": "2013-38-b",
      "pytanie": "38. Adres 203.0.1.191 jest adresem rozgłoszeniowym przy masce podsieci:",
      "odpowiedz": "/25",
      "odp": false
    },
    {
      "id": "2013-38-c",
      "pytanie": "38. Adres 203.0.1.191 jest adresem rozgłoszeniowym przy masce podsieci:",
      "odpowiedz": "/26",
      "odp": true
    },
    {
      "id": "2013-38-d",
      "pytanie": "38. Adres 203.0.1.191 jest adresem rozgłoszeniowym przy masce podsieci:",
      "odpowiedz": "/24",
      "odp": false
    },
    {
      "id": "2013-39-a",
      "pytanie": "39. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Jeśli łączymy mostem dwie sieci o różnych MTU, to most będzie w razie potrzeby dzielił ramki na mniejsze części.",
      "odp": false
    },
    {
      "id": "2013-39-b",
      "pytanie": "39. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Przełącznik sieciowy pozwala na redukowanie domen kolizji.",
      "odp": true
    },
    {
      "id": "2013-39-c",
      "pytanie": "39. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Przełączenie karty sieciowej w tryb nasłuchu (promiscuous mode) umożliwia podsłuchiwanie całego ruchu sieciowego w sieci lokalnej, nawet jeśli sieć wykorzystuje przełączniki.",
      "odp": false
    },
    {
      "id": "2013-39-d",
      "pytanie": "39. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Koncentrator pozwala na redukowanie domen kolizji.",
      "odp": false
    },
    {
      "id": "2013-40-a",
      "pytanie": "40. Wynoszące 15 ograniczenie algorytmu RIP na maksymalną odległość między dwoma routerami:",
      "odpowiedz": "Umożliwia usunięcie duplikatów pakietów z sieci.",
      "odp": false
    },
    {
      "id": "2013-40-b",
      "pytanie": "40. Wynoszące 15 ograniczenie algorytmu RIP na maksymalną odległość między dwoma routerami:",
      "odpowiedz": "Powoduje, że algorytmu tego nie można stosować w sieciach o średnicy równej 20.",
      "odp": true
    },
    {
      "id": "2013-40-c",
      "pytanie": "40. Wynoszące 15 ograniczenie algorytmu RIP na maksymalną odległość między dwoma routerami:",
      "odpowiedz": "W niektórych przypadkach pomaga pozbyć się pętli w routingu.",
      "odp": true
    },
    {
      "id": "2013-40-d",
      "pytanie": "40. Wynoszące 15 ograniczenie algorytmu RIP na maksymalną odległość między dwoma routerami:",
      "odpowiedz": "Zabezpiecza przed otrzymywaniem spamu.",
      "odp": false
    },
    {
      "id": "2013-28-a",
      "pytanie": "28. Tylko jedna poprawna odpowiedź. Przy stosowaniu sumy kontrolnej CRC opartej o wielomian x²+1 do wiadomości 100001 zostanie dołączona suma kontrolna:",
      "odpowiedz": "11",
      "odp": true
    },
    {
      "id": "2013-28-b",
      "pytanie": "28. Tylko jedna poprawna odpowiedź. Przy stosowaniu sumy kontrolnej CRC opartej o wielomian x²+1 do wiadomości 100001 zostanie dołączona suma kontrolna:",
      "odpowiedz": "01",
      "odp": false
    },
    {
      "id": "2013-28-c",
      "pytanie": "28. Tylko jedna poprawna odpowiedź. Przy stosowaniu sumy kontrolnej CRC opartej o wielomian x²+1 do wiadomości 100001 zostanie dołączona suma kontrolna:",
      "odpowiedz": "10",
      "odp": false
    },
    {
      "id": "2013-28-d",
      "pytanie": "28. Tylko jedna poprawna odpowiedź. Przy stosowaniu sumy kontrolnej CRC opartej o wielomian x²+1 do wiadomości 100001 zostanie dołączona suma kontrolna:",
      "odpowiedz": "1",
      "odp": false
    },
    {
      "id": "2013-29-a",
      "pytanie": "29. Zakres adresów 123.0.0.0/18 ma zostać podzielony na 6 rozłącznych sieci, tak żeby każdy adres był w dokładnie jednej z nich. Co można powiedzieć o wielkościach tych podsieci?",
      "odpowiedz": "Możliwe jest stworzenie podsieci o masce /22",
      "odp": true
    },
    {
      "id": "2013-29-b",
      "pytanie": "29. Zakres adresów 123.0.0.0/18 ma zostać podzielony na 6 rozłącznych sieci, tak żeby każdy adres był w dokładnie jednej z nich. Co można powiedzieć o wielkościach tych podsieci?",
      "odpowiedz": "Możliwe jest stworzenie podsieci o masce /24",
      "odp": false
    },
    {
      "id": "2013-29-c",
      "pytanie": "29. Zakres adresów 123.0.0.0/18 ma zostać podzielony na 6 rozłącznych sieci, tak żeby każdy adres był w dokładnie jednej z nich. Co można powiedzieć o wielkościach tych podsieci?",
      "odpowiedz": "Możliwe jest stworzenie podsieci o masce /19",
      "odp": true
    },
    {
      "id": "2013-29-d",
      "pytanie": "29. Zakres adresów 123.0.0.0/18 ma zostać podzielony na 6 rozłącznych sieci, tak żeby każdy adres był w dokładnie jednej z nich. Co można powiedzieć o wielkościach tych podsieci?",
      "odpowiedz": "Możliwe jest stworzenie podsieci o masce /23",
      "odp": true
    },
    {
      "id": "2013-30-a",
      "pytanie": "30. W jakich warstwach używane są poniższe mechanizmy?",
      "odpowiedz": "Nawiązywanie połączenia stosowane jest w warstwie transportowej.",
      "odp": true
    },
    {
      "id": "2013-30-b",
      "pytanie": "30. W jakich warstwach używane są poniższe mechanizmy?",
      "odpowiedz": "Typ MIME stosowany jest w warstwie transportowej.",
      "odp": false
    },
    {
      "id": "2013-30-c",
      "pytanie": "30. W jakich warstwach używane są poniższe mechanizmy?",
      "odpowiedz": "Routing stosowany jest w warstwie aplikacji.",
      "odp": false
    },
    {
      "id": "2013-30-d",
      "pytanie": "30. W jakich warstwach używane są poniższe mechanizmy?",
      "odpowiedz": "Suma CRC wykorzystywana jest w warstwie łącza danych.",
      "odp": true
    },
    {
      "id": "2013-31-a",
      "pytanie": "31. Protokół ICMP.",
      "odpowiedz": "Umożliwia działanie programowi ping.",
      "odp": true
    },
    {
      "id": "2013-31-b",
      "pytanie": "31. Protokół ICMP.",
      "odpowiedz": "Umożliwia kontrolę przeciążeń.",
      "odp": false
    },
    {
      "id": "2013-31-c",
      "pytanie": "31. Protokół ICMP.",
      "odpowiedz": "Wykorzystuje port 23 do komunikacji.",
      "odp": false
    },
    {
      "id": "2013-31-d",
      "pytanie": "31. Protokół ICMP.",
      "odpowiedz": "Wykorzystuje port 63 do komunikacji.",
      "odp": false
    },
    {
      "id": "2013-32-a",
      "pytanie": "32. Tylko jedna poprawna odpowiedź. Klient DNS pyta serwer DNS o nazwę domeny skojarzoną z adresem 10.20.30.40.",
      "odpowiedz": "Klient wyśle zapytanie o rekord A związany z domeną 10.20.30.40",
      "odp": false
    },
    {
      "id": "2013-32-b",
      "pytanie": "32. Tylko jedna poprawna odpowiedź. Klient DNS pyta serwer DNS o nazwę domeny skojarzoną z adresem 10.20.30.40.",
      "odpowiedz": "Klient wyśle zapytanie o rekord A związany z domeną 10.20.30.40.in-addr.arpa",
      "odp": false
    },
    {
      "id": "2013-32-c",
      "pytanie": "32. Tylko jedna poprawna odpowiedź. Klient DNS pyta serwer DNS o nazwę domeny skojarzoną z adresem 10.20.30.40.",
      "odpowiedz": "Klient wyśle zapytanie o rekord PTR związany z domeną 40.30.20.10.in-addr.arpa",
      "odp": true
    },
    {
      "id": "2013-32-d",
      "pytanie": "32. Tylko jedna poprawna odpowiedź. Klient DNS pyta serwer DNS o nazwę domeny skojarzoną z adresem 10.20.30.40.",
      "odpowiedz": "Klient wyśle zapytanie o rekord PTR związany z domeną 10.20.30.40.in-addr.arpa",
      "odp": false
    }
  ]
};