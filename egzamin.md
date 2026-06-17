# 2019

## 1. Dlaczego router ma więcej niż jeden adres IP?
- Jeden adres IP jest zawsze zarezerwowany do wysyłania pakietów do bramy domyślnej. / NIE 
- Do każdego wpisu z tablicy routingu konieczny jest osobny adres IP. / NIE
- Jeden adres służy tylko do przyjmowania pakietów a drugi tylko do ich wysyłania. / NIE / Routery działają w trybie pełnego dupleksu
- Każdy z interfejsów sieciowych routera jest zazwyczaj w odrębnej sieci i tym interfejsom przypisane są adresy z tych sieci. / TAK / Zadaniem routera jest łączenie różnych sieci. Aby mógł on "widzieć" sieci i przekazywać między nimi pakiety, musi być fizycznie lub logicznie częścią każdej z nich.

## 2. Załóżmy, że routery A i B są bezpośrednio połączone i wykorzystują algorytm routingu dynamicznego oparty na wektorach odległości z włączonym mechanizmem zatruwania ścieżek z metryką równą liczbie hopów. Tablica routingu A zawiera wpis określający, że istnieje ścieżka długości 3 do routera X, na której pierwszym krokiem jest router B. Router B wysyła do routera A informację, że jego odległość od X wynosi 5. Co zrobi router A?
- Zignoruje tę informację, gdyż jego obecna trasa jest lepsza. / NIE / W wektorach odległości (np. protokół RIP) router ufa swojemu sąsiadowi. Skoro router A dociera do X za pośrednictwem routera B, to musi uwierzyć w każdą nową wartość podaną przez B (nawet gorszą), ponieważ i tak cały jego ruch przechodzi przez ten węzeł.
- Zaktualizuje swój wpis, zmieniając odległość do routera X na 6. / TAK / Złota zasada wektora odległości: odległość całkowita to "odległość sąsiada do celu" plus "odległość od nas do sąsiada". Skoro B podaje odległość 5, a przejście z A do B to 1 skok (są bezpośrednio połączone), to nowa trasa z A do X wynosi: 5 + 1 = 6.
- Zaktualizuje swój wpis, zmieniając odległość do routera X na 8. / NIE / Wartość matematycznie błędna. Router A aktualizuje dystans wyłącznie na podstawie nowej informacji od B (5) i kosztu dotarcia do B (1). Stara wartość na tablicy (3) jest w tym momencie po prostu zastępowana, a nie dodawana.
- Powyższa informacja nie dotrze do A ze względu na mechanizm zatruwania ścieżek. / NIE / Zatruwanie ścieżek (route poisoning) działa inaczej – polega na oznaczaniu całkowicie zerwanych lub niedostępnych tras nieskończonym kosztem (np. jako 16 skoków w RIP), aby szybko wygasić fałszywe informacje. Ten mechanizm nie blokuje przesyłania standardowych, poprawnych aktualizacji metryk (takich jak przesłana tu wartość 5) pomiędzy routerami.

## 3. Zaznacz prawdziwe zdania o sumach kontrolnych i kodach.
- Jeśli odległość Hamminga między dowolną parą kodów wynosi co najmniej 4, to takie kodowanie potrafi wykryć 3 błędy pojedynczych bitów. / TAK / Wzór na zdolność wykrywania błędów to d >= e + 1 (gdzie d to odległość Hamminga, a e to liczba błędów do wykrycia). Skoro odległość wynosi 4, kod z łatwością poradzi sobie z zauważeniem 3 błędów.
- Sumy kontrolne CRC stosowane są w warstwie łącza danych. / TAK / Suma kontrolna CRC (Cykliczny Kod Nadmiarowy) jest fizycznie doklejana na samym końcu każdej ramki Ethernet (jako tzw. sekwencja FCS). Oznacza to, że sprawdza ona poprawność transmisji w warstwie łącza danych (warstwa 2).
- Kody MAC stosowane są do korekcji błędów transmisji. / NIE / Kody MAC (Message Authentication Code) to pojęcie kryptograficzne. Służą one wyłącznie do upewnienia się, że nikt celowo nie podmienił wiadomości po drodze (autentyczność i integralność), ale nie posiadają wbudowanych mechanizmów do naprawiania uszkodzonych bitów.
- Jeśli odległość Hamminga między dowolną parą kodów wynosi co najmniej 4, to takie kodowanie potrafi skorygować 2 błędy pojedynczych bitów. / NIE / Wzór na zdolność korekcji (czyli nie tylko wykrycia, ale i naprawienia) błędów jest znacznie bardziej rygorystyczny: d >= 2e + 1. Przy odległości wynoszącej 4, ten kod gwarantuje bezbłędne naprawienie tylko 1 błędu. Do skorygowania 2 błędów potrzebowalibyśmy odległości wynoszącej minimum 5.

## 4. Zaznacz prawdziwe zdania
- Mechanizm Go-Back-N jest szczególnym przypadkiem ogólnego mechanizmu okna przesuwnego, w którym okno odbiorcy jest równe 1. / TAK / W Go-Back-N nadawca może wysłać wiele ramek na raz, ale odbiorca ma bufor (okno) o rozmiarze dokładnie 1. Oznacza to, że czeka tylko na jedną, konkretną ramkę w odpowiedniej kolejności. Jeśli dostanie ramkę z przyszłości (poza kolejnością), bezwzględnie ją odrzuca.
- Mechanizm Stop-And-Wait jest szczególnym przypadkiem ogólnego mechanizmu okna przesuwnego, w którym okno odbiorcy jest równe 1. / NIE / Samo stwierdzenie, że okno odbiorcy wynosi 1, to definicja protokołu Go-Back-N (patrz punkt wyżej). To, co wyróżnia mechanizm Stop-And-Wait na tle innych algorytmów, to ograniczenie po stronie nadawcy.
- Mechanizm Stop-And-Wait jest szczególnym przypadkiem ogólnego mechanizmu okna przesuwnego, w którym okno nadawcy jest równe 1. / TAK / Nazwa mówi sama za siebie ("zatrzymaj się i czekaj"). Nadawca "wypuszcza" w sieć tylko jedną ramkę (jego okno nadawcze wynosi 1) i zamraża transmisję do momentu, aż nie dostanie na nią potwierdzenia (ACK).
- Mechanizm Go-Back-N jest szczególnym przypadkiem ogólnego mechanizmu okna przesuwnego, w którym okno nadawcy jest równe 1. / NIE / Zaletą mechanizmu Go-Back-N jest właśnie to, że okno nadawcy jest większe niż 1 (wynosi N). Dzięki temu nadawca nie musi tracić czasu na czekanie i może wysłać pakiet wielu ramek jedna po drugiej, zanim otrzyma pierwsze potwierdzenia.

## 5. Załóżmy, że interfejs enp0s0 jest już aktywny. Po wpisaniu linuksowego polecenia ip addr add 10.1.1.15/24 dev enp0s0 następujące ustawienia zostaną skonfigurowane dla sieci podłączonej do interfejsu enp0s0:
- Brama domyślna zostanie ustawiona na 10.0.0.1. / NIE / Polecenie ip addr add służy wyłącznie do przypisania adresu IP oraz określenia rozmiaru podsieci na danym interfejsie. Konfiguracja routingu to osobny proces. Aby ustawić bramę domyślną, należy użyć polecenia ip route add default via <adres_bramy>.
- Brama domyślna zostanie ustawiona na 10.1.1.1. / NIE / Polecenie ip addr add służy wyłącznie do przypisania adresu IP oraz określenia rozmiaru podsieci na danym interfejsie. Konfiguracja routingu to osobny proces. Aby ustawić bramę domyślną, należy użyć polecenia ip route add default via <adres_bramy>.
- Adres rozgłoszeniowy zostanie ustawiony na 10.1.1.255. / TAK / Maska /24 (czyli 255.255.255.0) oznacza, że pierwsze trzy oktety określają sieć, a ostatni – hosty. System Linux samodzielnie kalkuluje z tego adres rozgłoszeniowy (broadcast), zmieniając bity hosta na same jedynki. Daje to w efekcie adres 10.1.1.255.
- Adres rozgłoszeniowy zostanie ustawiony na 10.255.255.255. / NIE / Adres 10.255.255.255 zostałby wyliczony przez system tylko wtedy, gdybyś użył maski /8 (domyślnej dla starych sieci klasy A), czyli polecenia: ip addr add 10.1.1.15/8. My podaliśmy jednak precyzyjną maskę /24.

## 6. Tylko jedna poprawna odpowiedź. Na komputerze użytkownik uruchomił program ping, pingając adres innego komputera w lokalnej sieci ethernetowej. Co (i w jakiej kolejności) znajdzie się w wysyłanych przez kartę sieciową danych?
- Nagłówek ramki, nagłówek pakietu IP, nagłówek ICMP, dane ICMP, suma kontrolna CRC / TAK / Zadziałała tutaj zasada hermetyzacji (enkapsulacji). Program ping generuje dane i dodaje nagłówek ICMP. To trafia do warstwy sieciowej, która dokleja nagłówek IP. Na koniec trafia to do warstwy łącza danych (Ethernet), która dodaje nagłówek ramki na początku, a na samym końcu dokleja sumę kontrolną (CRC), aby zweryfikować poprawność całości.
- Nagłówek ramki, nagłówek ICMP, dane ICMP, suma kontrolna CRC / NIE / Brakuje nagłówka IP. Komunikaty ICMP nie potrafią podróżować samodzielnie w samej ramce Ethernet – zawsze muszą być "zapakowane" w protokół IP, który nadaje im adresy źródłowe i docelowe.
- Nagłówek ramki, nagłówek pakietu IP, dane ICMP, suma kontrolna CRC / NIE / Brakuje nagłówka ICMP. Bez niego odbiorca nie wiedziałby, czy przesłane dane to żądanie odpowiedzi (Echo Request), odpowiedź (Echo Reply), czy może informacja o błędzie.
- Nagłówek ramki, suma kontrolna CRC, nagłówek pakietu IP, nagłówek ICMP / NIE / Błędna kolejność. Suma kontrolna CRC (tzw. sekwencja FCS w ramce Ethernet) z definicji znajduje się na samym końcu przesyłanych danych (jako zwiastun/trailer ramki), a nie w środku.

## 7. Które z poniższych zdań są prawdziwe w przypadku protokołu TCP?
- Wykorzystuje algorytm okna przesuwnego. / TAK / Okno przesuwne to fundament wydajności TCP. Pozwala nadawcy wysyłać wiele kolejnych segmentów danych bez konieczności zatrzymywania się i czekania na potwierdzenie (ACK) każdego z nich z osobna.
- Otrzymuje strumień danych z warstwy sieciowej i dzieli go na segmenty. / NIE / Kierunek przepływu danych jest tu odwrotny. TCP odbiera strumień z warstwy aplikacji (z góry), dzieli go na mniejsze paczki (segmenty) i dopiero wtedy przesyła w dół do warstwy sieciowej (IP).
- Potrafi dokonywać konwersji pomiędzy różnymi formatami plików. / NIE / TCP jest całkowicie "ślepe" na zawartość. Interesuje go tylko bezpieczne i bezbłędne przesłanie surowych bajtów. Konwersją plików, kodowaniem czy szyfrowaniem zajmują się wyższe warstwy (np. prezentacji lub aplikacji).
- Umożliwia kontrolę przepływu. / TAK / Dzięki polu "rozmiar okna" w swoim nagłówku, TCP potrafi dynamicznie regulować prędkość transmisji, aby upewnić się, że szybki nadawca nie "zaleje" danymi wolniejszego odbiorcy.

## 8. Jądro systemu odebrało segment TCP w pakiecie IP i zapisało zawartość segmentu do bufora odbiorczego związanego z pewnym gniazdem. Na podstawie jakich informacji w segmencie zostało wybrane gniazdo?
- Lokalny port / TAK / Port (np. 80 dla serwera WWW) to kluczowa informacja w nagłówku TCP. To on mówi systemowi operacyjnemu, do jakiej konkretnie aplikacji (do którego gniazda) mają trafić odebrane dane.
- Zdalny adres IP / TAK / Każde aktywne połączenie TCP jest identyfikowane przez unikalną "czwórkę": lokalny port, lokalny IP, zdalny port i zdalny IP. Dzięki obecności zdalnego adresu IP w pakiecie, serwer wie, od którego z wielu podłączonych klientów pochodzą dane, i kieruje je do właściwego gniazda.
- MTU / NIE / MTU (Maximum Transmission Unit) określa jedynie maksymalny fizyczny rozmiar pakietu (np. 1500 bajtów), jaki może przejść przez sieć. Nie służy do identyfikacji czy adresowania.
- Rozmiar okna / NIE / Rozmiar okna (Window Size) to parametr w nagłówku TCP służący wyłącznie do kontroli przepływu (mówi o tym, ile wolnego miejsca w buforze ma odbiorca). Nie bierze udziału w procesie przydzielania pakietu do odpowiedniej aplikacji.

## 9. Jaka maska podsieci umożliwi wykorzystanie dokładnie 510 adresów IP do adresowania komputerów?
- 255.255.254.0 / TAK / 2^n - 2, Maska 255.255.254.0 kończy się dokładnie dziewięcioma zerami w zapisie dwójkowym.
- 255.255.252.0 / NIE / 2^n - 2
- 255.255.255.0 / NIE / 2^n - 2
- 255.255.0.0 / NIE / 2^n - 2

## 10. Które zdania dotyczące współczesnych wersji protokołu HTTP są prawdziwe?
- Wykorzystuje protokół UDP / NIE / Klasyczne i najczęściej omawiane wersje HTTP (1.1 oraz 2) opierają się na niezawodnym protokole TCP, który gwarantuje, że dane dotrą w całości.
- Typem MIME dla wysyłanej strony HTML jest text/plain / NIE / Właściwy typ MIME, który mówi przeglądarce "to jest strona internetowa, wyrenderuj ją", to text/html. Z kolei text/plain to czysty tekst – przeglądarka wyświetliłaby po prostu surowy kod źródłowy zamiast ładnej strony.
- Serwer korzysta z portu 80 / TAK / Port 80 to od lat standardowy, domyślny port dla klasycznej (nieszyfrowanej) komunikacji HTTP.
- Pliki do serwera można wysyłać korzystając z metody GET / NIE / Metoda GET służy do pobierania danych z serwera. Dodatkowo umieszcza ona parametry w samym adresie URL (co ma bardzo rygorystyczne limity pojemności). Do przesyłania większych paczek danych, w tym plików, służy metoda POST (lub PUT), która ukrywa zawartość w tzw. ciele (body) żądania.

## 11. Komputer z prywatnym adresem IP 192.168.0.10 wysłał datagram UDP pod adres 22.22.22.22 do portu 53 i datagram UDP pod adres 33.33.33.33 do portu 123. W obu przypadkach źródłowym numerem portu był 12345. Pośredniczący router z funkcją NAT zamienił w obu przypadkach adres źródłowy na 11.11.11.11:34567.
- Router może być ograniczonym asymetrycznym (restricted cone) NAT / TAK
- Router może być asymetrycznym ograniczonym portowo (port-restricted cone) NAT / TAK
- Router może być pełnym asymetrycznym (full cone) NAT / TAK
- Router może być symetrycznym NAT / NIE


## 12. Które zdania dotyczące sieci bezprzewodowych 802.11 są prawdziwe?
- Dostęp do kanału opiera się na mechanizmie odczekiwania wykładniczego / TAK
- Protokół wykorzystuje przeskakiwanie częstotliwości (frequency hopping) / NIE
- Jeśli nie słyszymy transmisji, to rozpoczęcie nadawania nie spowoduje interferencji u odbiorcy / NIE
- Dostęp do kanału opiera się na wykrywaniu kolizji / NIE

## 13. Które z poniższych zdań są prawdziwe w przypadku protokołu UDP?
- Otrzymuje strumień danych z warstwy aplikacji i dzieli go na datagramy / NIE
- Wysyłane datagramy są potwierdzane / NIE
- Wysyłane datagramy zawierają w nagłówku UDP numer sekwencyjny / NIE
- Jest protokołem bezpołączeniowym / TAK


## 14. Które z poniższych zdań są prawdziwe w przypadku protokołu IP (wersji 4)?
- Nagłówek protokołu IP zawiera adres MAC karty odbiorcy / NIE
- Pakiety IP są enkapsulowane w ramkach warstwy łącza danych / TAK
- Umożliwia kontrolę przeciążenia / NIE
- Jest połączeniowy / NIE

## 15. Tylko jedna poprawna odpowiedź. Przeglądarka WWW nawiązała połączenie z serwerem WWW. Pakiet zawierający całe żądanie HTTP gubi się. Co się stanie?
- Po pewnym czasie przeglądarka WWW wyśle zapytanie ARP / NIE / Protokół ARP służy do znajdowania adresów fizycznych MAC w sieci lokalnej na samym początku komunikacji. Skoro połączenie z serwerem zostało już pomyślnie nawiązane, urządzenia wiedzą już, dokąd kierować ruch.
- Po pewnym czasie przeglądarka WWW ponownie wyśle pakiet / NIE / Przeglądarka to warstwa aplikacji. Jej zadaniem jest przekazać żądanie HTTP "w dół" do systemu operacyjnego i czekać na odpowiedź. Nie zajmuje się ona śledzeniem i retransmisją pojedynczych, zagubionych w sieci pakietów.
- Po pewnym czasie warstwa transportowa ponownie wyśle pakiet / TAK / HTTP korzysta z protokołu TCP w warstwie transportowej, który gwarantuje niezawodność. Jeśli nadawca (Twój system) nie otrzyma od serwera potwierdzenia (tzw. ACK) w ustalonym czasie, warstwa transportowa automatycznie wyśle zgubiony pakiet ponownie.
- Po pewnym czasie serwer WWW wyśle żądanie o ponowne przesłanie zagubionego pakietu / NIE / Serwer fizycznie nie wie, że przeglądarka cokolwiek wysłała, skoro pakiet zgubił się po drodze. Serwer po prostu "milczy" i oczekuje na dane. Ciężar zorientowania się, że pakiet zaginął (na podstawie braku potwierdzenia), spoczywa wyłącznie na nadawcy.

## 16. Zaznacz prawdziwe zdania.
- 44.44.44.44/30 jest adresem przypisywanym komputerowi / NIE
- 127.127.127.127/25 jest adresem rozgłoszeniowym / TAK
- 192.168.1.0/8 jest adresem sieci / NIE
- 10.10.10.0/24 jest adresem sieci / TAK

## 17. Sieć 192.168.15.128/25 została podzielona na 5 rozłącznych podsieci, tak żeby każdy adres był w dokładnie jednej z nich. Czy podany adres może być adresem rozgłoszeniowym w jakiejś z tych podsieci?
- 192.168.15.223 / TAK
- 192.168.15.251 / NIE
- 192.168.15.135 / NIE
- 192.168.15.255 / TAK

## 18. Które zdania dotyczące programu traceroute są prawdziwe?
- Traceroute wysyła kolejne pakiety o coraz mniejszych wartościach pola TTL / NIE
- Traceroute służy do przypisywania adresów IP / NIE
- Traceroute opiera się na technice wykrywania MTU dla ścieżki / NIE
- W przypadku wysłania pakietu o polu TTL równym t, odległy o t przeskoków router niebędący docelowym komputerem odpowie komunikatem echo reply / NIE

## 19. Bezpośrednim efektem wywołania na gnieździe TCP funkcji connect() jest:
- Wywołanie funkcji connect() jest dozwolone tylko w przypadku gniazd UDP / NIE
- Wysłanie segmentu z ustawionym bitem ACK / NIE
- Wysłanie segmentu z ustawionymi bitami SYN i ACK / NIE
- Wysłanie segmentu z ustawionym bitem SYN / TAK

## 20. Komputerowi został przypisany adres IP równy 10.0.0.255/23 a brama domyślna została wybrana jako 10.0.1.0. Zaznacz prawdziwe zdania.
- Komputer będzie mógł komunikować się bez pośrednictwa routera ze wszystkimi adresami IP z podsieci 10.0.0.0/8 / TAK
- Komputer nie będzie mógł się komunikować się z bramą domyślną, gdyż leży poza jego podsiecią / NIE
- Podany adres IP komputer jest błędny, gdyż jest adresem rozgłoszeniowym / NIE
- Podany adres IP komputer jest błędny, gdyż jest adresem sieci / NIE

## 21. Zaznacz techniki routingu dynamicznego pomagające uniknąć cykli w routingu.
- Certyfikaty SSL / NIE
- Wysyłanie informacji o zmianie topologii sieci (np. awarii łącza) zaraz po jej wykryciu / TAK
- Wykrywanie MTU dla ścieżki / NIE
- Zatruwanie ścieżki / TAK

## 22. Mechanizm kontroli przeciążenia wykorzystywany w TCP:
- wymaga komunikatów kontrolnych wysyłanych przez routery / NIE / Klasyczny mechanizm kontroli przeciążenia w TCP działa w modelu end-to-end (od końca do końca). Nadawca sam wnioskuje, że sieć jest zakorkowana, obserwując opóźnienia i brak potwierdzeń. Nie polega na żadnych specjalnych komunikatach czy ostrzeżeniach generowanych przez pośredniczące routery.
- zakłada, że utrata pakietów nastąpiła na skutek przepełnienia kolejek / TAK / To absolutnie fundamentalne założenie protokołu TCP. Skoro kable i światłowody rzadko psują dane, TCP przyjmuje w ciemno, że jeśli pakiet zginął, to z powodu przeciążenia w sieci – po prostu nie zmieścił się w przepełnionym buforze jakiegoś routera i został odrzucony. Po takim incydencie TCP natychmiast zwalnia tempo nadawania.
- zakłada, że utrata pakietów nastąpiła na skutek błędów warstwy fizycznej / NIE / Jest dokładnie odwrotnie (patrz punkt wyżej). TCP zakłada, że sprzęt jest w miarę bezbłędny. Z tego powodu protokół ten czasami radzi sobie gorzej w sieciach bezprzewodowych (np. Wi-Fi), gdzie pakiety często gubią się przez zwykłe zakłócenia fizyczne. TCP błędnie interpretuje to jako korki w sieci i niepotrzebnie zmniejsza prędkość pobierania.
- preferuje transmisje o większym czasie RTT / NIE / Czas RTT (Round Trip Time) to czas, jakiego pakiet potrzebuje na dotarcie do celu i powrót z potwierdzeniem. TCP faworyzuje połączenia o krótkim RTT. Im szybciej do nadawcy wracają potwierdzenia (ACK), tym szybciej jego "okno nadawcze" się powiększa i transmisja się rozpędza. Połączenia z dużym RTT (np. satelitarne) rozkręcają się znacznie wolniej.

## 23. Zaznacz prawdziwe zdania
- Protokół BitTorrent służy do przesyłania plików / TAK
- Protokół HTTP służy do pobierania stron WWW / TAK
- Protokół POP3 służy do wysyłania poczty elektronicznej do serwera / NIE
- Protokół SMTP służy do pobierania poczty elektronicznej z serwera / NIE / SMTP jest do wysyłania (send), IMAP jest do pobierania

## 24. Do wiadomości została dołączona suma CRC wykorzystująca wielomian x^4 + 1.
- Dowolna zmiana polegająca na zmianie pojedynczego bitu zostanie wykryta / TAK
- Do wiadomości zostały dołączone 5 bity sumy kontrolnej / NIE / Tyle bitów, ile stopień wielomianu
- Do wiadomości zostało dołączonych 6 bitów sumy kontrolnej / NIE / Tyle bitów, ile stopień wielomianu
- Dowolna zmiana polegająca na zmianie dwóch dowolnych bitów zostanie wykryta / NIE

## 25. Które zdania dotyczące szyfrowania są prawdziwe?
- RSA jest szyfrem monoalfabetycznym / NIE
- Algorytmy szyfrowania asymetrycznego są zazwyczaj wolniejsze niż algorytmy szyfrowania symetrycznego / TAK
- One-time pad - jest szyfrem monoalfabetycznym / NIE
- W algorytmach szyfrowania symetrycznego wiadomość szyfrujemy i deszyfrujemy za pomocą tego samego klucza / TAK

## 26. Adres 123.5.66.63 jest adresem rozgłoszeniowym przy masce podsieci:
- /26 / TAK
- /24 / NIE
- /25 / NIE
- /28 / TAK

## 27. W jakich warstwach są używane poniższe mechanizmy?
- Nawiązywanie połączenia stosowane jest w warstwie transportowej / TAK / Za nawiązywanie połączeń odpowiada warstwa transportowa (np. protokół TCP), która ustala zasady komunikacji przed wysłaniem właściwych danych (tzw. 3-way handshake).
- Typ MIME stosowany jest w warstwie sieciowej / NIE / Typ MIME (np. text/html czy image/jpeg) określa format pliku i działa w warstwie aplikacji. Warstwy sieciowej (protokołu IP) nie interesuje, co znajduje się wewnątrz przesyłanego pakietu.
- Kontrola przepływu stosowana jest w warstwie sieciowej / NIE / Hamowanie zbyt szybkiego nadawcy to zadanie warstwy transportowej (np. TCP) lub łącza danych. Warstwa sieciowa po prostu przesyła pakiety w trybie "najlepiej jak potrafi".
- Routing stosowany jest w warstwie łącza danych / NIE / Wyznaczanie trasy dla pakietów (routing) to kluczowe zadanie warstwy sieciowej (wykorzystuje routery i adresy IP).


## 28. Jakie informacje są zawarte w nagłówku TCP?
- rozmiar okna nadawczego / NIE
- rozmiar okna odbiorczego / TAK
- port nadawcy / TAK
- numer sekwencyjny / TAK


## 29. Jeśli maską podsieci jest /26, to następujący adres można przypisać komputerowi:
- 10.3.1.191 / NIE
- 192.23.1.192 / NIE
- 10.23.1.32 / TAK
- 172.13.160.1 / TAK

## 30. Tylko jedna poprawna odpowiedź. Które linuksowe polecenie wyświetli routery na trasie do komputera o adresie 10.20.30.40?
- traceroute 10.20.30.40 / TAK
- ping 10.20.30.40 / NIE
- ip route 10.20.30.40 / NIE
- ip link 10.20.30.40 / NIE


## 31. Tylko jedna poprawna odpowiedź. Przez łącze 1 Mbit o czasie propagacji 2 ms ($ms = 10^{-3}\ s$) przesyłamy 500-bajtowy pakiet. Ile czasu upłynie od momentu nadania pierwszego bitu do momentu otrzymania ostatniego bitu?
- 2,5 ms / NIE
- 4 ms / NIE
- 18 ms / NIE
- 6 ms / TAK


## 32. Które zdania dotyczące protokołu DNS są prawdziwe?
- DNS służy tylko do zamiany nazw domen na adresy IP, do zamiany adresów IP na nazwy domen wykorzystywany jest odrębny protokół / NIE / Służy do tego tzw. Odwrotny DNS (Reverse DNS), który wciąż jest częścią tego samego protokołu. Wykorzystuje się w nim rekordy PTR (Pointer Records)
- Jedna domena może mieć przypisanych wiele adresów IP / TAK / Giganci jak Netflix czy Google muszą mieć kilka serwerów i rozkładają obciążenie między nimi (DNS Round Robin)
- Rekord NS umożliwia określenie serwera nazw odpowiedzialnego za daną domenę / TAK / NS - name server
- Strefą jest dowolny podzbiór zbioru nazw domen / NIE / Strefą jest spójny podzbiór


## 33. W typowej kryptografii asymetrycznej:
- Łatwo złamać klucz, jeśli znamy parę tekst jawny + szyfrogram / NIE / Mega trudny problem matematyczny
- Szyfrujemy wiadomość kluczem publicznym odbiorcy / TAK / 
- Szyfrujemy wiadomość kluczem prywatnym nadawcy / NIE / Szyfrowanie kluczem prywatnym hasza wiadomości to podpis cyfrowy
- Szyfrujemy wiadomość kluczem prywatnym odbiorcy / NIE / Po co miałby sam sobie szyfrować, publicznym się to robi

## 34. Zaznacz prawdziwe zdania w przypadku systemów autonomicznych.
- BGP jest protokołem stanu łączy / NIE
- OSPF jest jednym z protokołów routingu stosowanym wewnątrz systemu autonomicznego / TAK
- RIP jest protokołem stosowanym powszechnie do routingu pomiędzy systemami autonomicznymi / NIE
- Każdy system autonomiczny w Internecie musi posiadać co najmniej dwa połączenia z innymi / NIE


## 35. Tablica routingu zawiera następujące 6 wpisów (podsieć, którędy słać): 0.0.0.0/0 przez router C, 10.0.0.0/24 przez router A, 10.0.0.128/25 przez router B, 10.0.0.192/26 przez router A, 10.0.1.0/24 przez router A, 10.0.2.0/23 przez router A
- Możliwe jest skonstruowanie równoważnej tablicy routingu zawierającej 4 wpisy / TAK
- Możliwe jest skonstruowanie równoważnej tablicy routingu zawierającej 7 wpisów / TAK
- Możliwe jest skonstruowanie równoważnej tablicy routingu zawierającej 3 wpisy / TAK
- Możliwe jest skonstruowanie równoważnej tablicy routingu zawierającej 2 wpisy / NIE

## 36. Komputer A nawiązuje połączenie z komputerem B za pomocą TCP. Zaznacz prawdziwe zdania.
- Komputer A może wysłać segment z danymi już po otrzymaniu pierwszego segmentu z ustawionym bitem ACK / TAK / Nawiązywanie połączenia składa się z trzech kroków. Komputer A wysyła SYN, a w odpowiedzi otrzymuje od B pakiet SYN-ACK (to jest pierwszy otrzymany pakiet z bitem ACK). Gdy tylko A go odbierze, wysyła ostatnie potwierdzenie i w tym samym momencie może do niego dołączyć pierwsze użyteczne dane (np. żądanie HTTP).
- Komputer A rozpocznie od wysłania segmentu z ustawionym bitem SYN / TAK / To bezwzględnie pierwszy krok przy tworzeniu każdego nowego połączenia TCP. Flaga SYN (Synchronize) informuje serwer: "chcę nawiązać połączenie" i synchronizuje początkowe numery sekwencyjne dla pakietów.
- Komputer B może wysłać segment z danymi już po otrzymaniu pierwszego segmentu z ustawionym bitem RST / NIE / Flaga RST (Reset) służy do awaryjnego, twardego zresetowania (zerwania) połączenia (np. gdy port jest zamknięty lub wystąpił błąd). Po otrzymaniu RST jakiekolwiek przesyłanie danych jest niemożliwe – połączenie zostaje natychmiast przerwane.
- Komputer A może wysłać segment z danymi dopiero po otrzymaniu pierwszego segmentu z danymi od B / NIE / Protokół TCP jest dwukierunkowy i niezależny. Gdy tylko połączenie zostanie nawiązane, komputer A (zazwyczaj klient) nie musi na nic czekać i wręcz najczęściej jako pierwszy wysyła dane (np. zapytanie o stronę WWW). Nie musi czekać, aż serwer wyśle swoje dane jako pierwszy.

## 37. Jakie rozwiązania poprawiają wydajności komunikacji za pośrednictwem protokołu HTTP?
- Zapytania ARP / NIE / Protokół ARP działa w niższych warstwach i służy do zamiany adresów IP na adresy fizyczne MAC w sieci lokalnej.
- Sender Policy Framework (SPF) / NIE / SPF to mechanizm zabezpieczający pocztę e-mail (korzysta z rekordów TXT w DNS, aby zapobiegać podszywaniu się pod nadawcę).
- Sieci CDN / TAK / CDN (Content Delivery Network) to rozproszone sieci serwerów, które przechowują kopie plików strony (np. grafiki, skrypty) blisko użytkownika końcowego. Dzięki temu dane pokonują krótszą drogę, co drastycznie poprawia czas ładowania stron HTTP.
- Połączenia trwałe (wiele komunikatów HTTP w jednym połączeniu TCP) / TAK / Standardowo każde zapytanie HTTP wymagałoby nawiązania nowego połączenia TCP (co zajmuje czas i zasoby). Mechanizm Keep-Alive (połączenia trwałe) pozwala pobrać wiele elementów strony (np. plik HTML, CSS i obrazki) w ramach raz otwartego "tunelu", co znacząco przyspiesza komunikację.

## 38. Które zdania dotyczące protokołu CSMA/CD są prawdziwe?
- Jest wykorzystywany w sieciach bezprzewodowych / NIE
- Wymaga potwierdzania odbieranych ramek / NIE
- Jeśli jest wiele komputerów, które chcą nadać ramkę, to komputer, któremu właśnie powiodła się transmisja ma większe szanse nadania kolejnej ramki niż pozostali / TAK
- Wykorzystuje algorytm odczekiwania wykładniczego / TAK


## 39. Zaznacz prawdziwe zdania.
- W sieci 192.168.0.0/26 dokładnie 60 adresów IP można przypisać komputerom / NIE
- W sieci 192.168.0.0/24 dokładnie 126 adresów IP można przypisać komputerom / NIE
- W sieci 192.168.0.0/28 dokładnie 16 adresów IP można przypisać komputerom / NIE
- W sieci 192.168.0.0/29 dokładnie 6 adresów IP można przypisać komputerom / TAK

## 40. Tylko jedna poprawna odpowiedź. W pewnym typie Ethernetu wysłanie pojedynczego bitu zajmuje 1/100 mikrosekundy ($1\ mikrosekunda = 10^{-6}\ sekundy$). Wszystkie ramki mają po 20 bajtów (160 bitów). Zakładamy, że sygnał w kablu rozchodzi się z prędkością 200 000 km/s. Jaka jest maksymalna odległość między dwoma komputerami umożliwiająca działanie protokołowi CSMA/CD?
- 40 m / NIE
- 800 m / NIE
- 400 m / NIE
- 160 m / TAK


# 2013

## 2. Protokol SSH
- umozliwia prace zdalna / TAK
- wykorzystuje uwierzytelnianie za pomoca kryptografii asymetrycznej / TAK
- wykorzystuje szyfrowanie za pomoca kryptografii asymetrycznej / TAK
- wykorzystuje szyfrowanie za pomoca kryptografii symetrycznej / TAK

## 3. Zaznacz prawdziwe zdania o routingu hierarchicznym
- stosowany jest wylacznie wewnatrz systemow autonomycznych / NIE
- stosowany jest w internecie / TAK
- pozwala zredukowac rozmiar tablicy routingu / TAK
- jego istota jest przesylanie segmentow TCP w pakietach IP / NIE

## 4. Ktore z ponziszych zdan sa prawdziwe w przypadku protokolu TCP?
- otrzymuje strumien danych z wartswy sieciowej i dzieli go na segmenty / NIE
- wszystkie gniazda sa gniazdami nasluchujacymi / NIE
- potrafi dokonywac konwersji miedzy roznymi formatami plikow / TAK
- wysylane dane sa potwierdzane / TAK

## 5. Ktore z ponziszych informacji opisuja gniazdo polaczone?
- zdalny port / TAK
- MTU / NIE
- lokalny port / TAK
- zdalny adres IP / TAK

## 6. Ktore z ponziszych zdan sa prawdziwe w przypadku Ethernetu?
- podczas transmisji moga wystepowac kolizje / TAK
- dostep do kanalu jest deterministyczny / NIE
- komputery przekazuja sobie token, by uzyskac dostep do kanalu / TAK
- wykorzystuje protokol CSMA/CA / NIE

## 9. Tylko 1 poprawna odpowiedz: Przy stosowaniu sumy kontrolnej crc opartej o wielomian x^2 + 1 do wiadomosci 100001 zostanie dolaczona suma kontrolna:
- 1 / NIE
- 10 / NIE
- 11 / TAK
- 01 / NIE

## 10. Podczas modelowego kończenia polaczenia w protokole TCP:
- przesylane sa dwa segmenty FIN / TAK
- strona wykonujaca zamkniecie bierne bedzie pozniej w stanie TIME WAIT / NIE
- strona, ktora wyslala pierwszy segment FIN, moze jeszcze potem nadawac dane / NIE
- strona, ktora wyslala pierwszy segment FIN, moze jeszcze potem odbierac dane / TAK

## 11. Ktore zdania dotyczace sieci bezprzewodowych 802.11 sa prawdziwe?
- protokol wykorzystuje przeskakiwanie czestotliwosci (frequency hopping) / NIE
- urzadzenia nadajace na takiej samej czestotliwosci wzajemnie sie zaklocaja / TAK
- urzadzenia pracujace na pasmie 2,4 Ghz moga byc od sievie bardziej oddalone niz pracujace na pasmie 5 Ghz/ TAK
- dostep do kanalu opiera sie na wykrywaniu kolizji tak jak w Ethernecie / NIE

## 12. Po wpisaniu polecenia ifconfig eth0 10.1.1.15 nastepujace ustawienia zostana skonfigurowane dla sieci podlaczonej do interfejsu eth0:
- adres rozgloszeniowy zsotanie ustawiony na 10.1.1.255 / TAK
- brama domyslna zostanie ustawiona na 10.0.0.1 / NIE
- polecenie zostanie odrzucone gdyz nie podani maski podsieci / NIE
- brama domyslna zostanie ustawiona na 10.1.1.1 / NIE

## 13. Ktore zdania dotyczace protokolu TCP sa prawdziwe?
- RTO oznacza czas, po uplywie ktorego niepotwierdzony segment zostanie wyslany ponownie / TAK
- wartosc RTO jest ustalana na podstawie zmierzonego czasu RTT / TAK
- wartosc RTO jest ustalana za pomoca protokolu ICMP / NIE
- wartosc RTO jest stala dla wszystkich segmentow i niezmienna przez caly czas trwania polaczenia / NIE

## 14. Zaznacz prawdziwe zdania:
- kanal simpleksowy umozliwia transmisje danych w obu kierunkach, ale tylko w jednym naraz / NIE
- Ethernet oparty na koncentratorach umozliwia uzyskanie pelnego dupleksu / TAK
- kanal poldupleksowy umozliwia transmisje danych tylko w jednym kierunku / NIE
- kanal pelnodupleksowy umozliwia transmisje danych w obu kierunkacj naraz / TAK

## 15. Zaznacz prawdziwe zdania:
- Protokol FTP sluzy do przesylania poczty elektronicznej / NIE
- Protokol DNS sluzy do przesylania plikow / NIE
- Protokol SMTP sluzy do pobierania poczty elektronicznej z serwera / NIE
- Protokol POP3 sluzy do wysylania poczty elektronicznej do serwera/ NIE

## 16. Jakie informacje sa zawarte w naglowku UDP?
- suma kontrolna / TAK
- numer sekwencyjny / NIE
- rozmiar okna / NIE
- dlugosc / TAK

## 20. Zaznacz prawdziwe zdania :
- Protokol BOOTP zamienia adresy MAC na adresy IP / TAK
- Protokol DNS zamienia nazwy domen na adresy IP/ TAK
- Protokol ARP zamienia adresy IP na adresy MAC / TAK
- Protokol DHCP zamienia adresy IP na adresy MAC / NIE