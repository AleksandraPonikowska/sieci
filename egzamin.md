# 2019

## 1. Dlaczego router ma więcej niż jeden adres IP?
- Jeden adres IP jest zawsze zarezerwowany do wysyłania pakietów do bramy domyślnej. / NIE 
- Do każdego wpisu z tablicy routingu konieczny jest osobny adres IP. / NIE
- Jeden adres służy tylko do przyjmowania pakietów a drugi tylko do ich wysyłania. / NIE / Routery działają w trybie pełnego dupleksu
- Każdy z interfejsów sieciowych routera jest zazwyczaj w odrębnej sieci i tym interfejsom przypisane są adresy z tych sieci. / TAK / Zadaniem routera jest łączenie różnych sieci. Aby mógł on "widzieć" sieci i przekazywać między nimi pakiety, musi być fizycznie lub logicznie częścią każdej z nich.

## 2. Załóżmy, że routery A i B są bezpośrednio połączone i wykorzystują algorytm routingu dynamicznego oparty na wektorach odległości z włączonym mechanizmem zatruwania ścieżek z metryką równą liczbie hopów. Tablica routingu A zawiera wpis określający, że istnieje ścieżka długości 3 do routera X, na której pierwszym krokiem jest router B. Router B wysyła do routera A informację, że jego odległość od X wynosi 5. Co zrobi router A?
- Zignoruje tę informację, gdyż jego obecna trasa jest lepsza. / NIE
- Zaktualizuje swój wpis, zmieniając odległość do routera X na 6. / TAK
- Zaktualizuje swój wpis, zmieniając odległość do routera X na 8. / NIE
- Powyższa informacja nie dotrze do A ze względu na mechanizm zatruwania ścieżek. / NIE

## 3. Zaznacz prawdziwe zdania o sumach kontrolnych i kodach.
- Jeśli odległość Hamminga między dowolną parą kodów wynosi co najmniej 4, to takie kodowanie potrafi wykryć 3 błędy pojedynczych bitów. / TAK
- Sumy kontrolne CRC stosowane są w warstwie łącza danych. / TAK
- Kody MAC stosowane są do korekcji błędów transmisji. / NIE
- Jeśli odległość Hamminga między dowolną parą kodów wynosi co najmniej 4, to takie kodowanie potrafi skorygować 2 błędy pojedynczych bitów. / NIE

## 4. Zaznacz prawdziwe zdania
- Mechanizm Go-Back-N jest szczególnym przypadkiem ogólnego mechanizmu okna przesuwnego, w którym okno odbiorcy jest równe 1. / TAK
- Mechanizm Stop-And-Wait jest szczególnym przypadkiem ogólnego mechanizmu okna przesuwnego, w którym okno odbiorcy jest równe 1. / NIE
- Mechanizm Stop-And-Wait jest szczególnym przypadkiem ogólnego mechanizmu okna przesuwnego, w którym okno nadawcy jest równe 1. / TAK
- Mechanizm Go-Back-N jest szczególnym przypadkiem ogólnego mechanizmu okna przesuwnego, w którym okno nadawcy jest równe 1. / NIE

## 5. Załóżmy, że interfejs enp0s0 jest już aktywny. Po wpisaniu linuksowego polecenia ip addr add 10.1.1.15/24 dev enp0s0 następujące ustawienia zostaną skonfigurowane dla sieci podłączonej do interfejsu enp0s0:
- Brama domyślna zostanie ustawiona na 10.0.0.1. / NIE
- Brama domyślna zostanie ustawiona na 10.1.1.1. / NIE
- Adres rozgłoszeniowy zostanie ustawiony na 10.1.1.255. / TAK
- Adres rozgłoszeniowy zostanie ustawiony na 10.255.255.255. / NIE

## 6. Tylko jedna poprawna odpowiedź. Na komputerze użytkownik uruchomił program ping, pingając adres innego komputera w lokalnej sieci ethernetowej. Co (i w jakiej kolejności) znajdzie się w wysyłanych przez kartę sieciową danych?
- Nagłówek ramki, nagłówek pakietu IP, nagłówek ICMP, dane ICMP, suma kontrolna CRC / TAK
- Nagłówek ramki, nagłówek ICMP, dane ICMP, suma kontrolna CRC / NIE
- Nagłówek ramki, nagłówek pakietu IP, dane ICMP, suma kontrolna CRC / NIE
- Nagłówek ramki, suma kontrolna CRC, nagłówek pakietu IP, nagłówek ICMP / NIE

## 7. Które z poniższych zdań są prawdziwe w przypadku protokołu TCP?
- Wykorzystuje algorytm okna przesuwnego. / TAK
- Otrzymuje strumień danych z warstwy sieciowej i dzieli go na segmenty. / NIE
- Potrafi dokonywać konwersji pomiędzy różnymi formatami plików. / NIE
- Umożliwia kontrolę przepływu. / TAK

## 8. Jądro systemu odebrało segment TCP w pakiecie IP i zapisało zawartość segmentu do bufora odbiorczego związanego z pewnym gniazdem. Na podstawie jakich informacji w segmencie zostało wybrane gniazdo?
- Lokalny port / TAK
- Zdalny adres IP / TAK
- MTU / NIE
- Rozmiar okna / NIE

## 9. Jaka maska podsieci umożliwi wykorzystanie dokładnie 510 adresów IP do adresowania komputerów?
- 255.255.254.0 / TAK
- 255.255.252.0 / NIE
- 255.255.255.0 / NIE
- 255.255.0.0 / NIE

## 10. Które zdania dotyczące współczesnych wersji protokołu HTTP są prawdziwe?
- Wykorzystuje protokół UDP / NIE
- Typem MIME dla wysyłanej strony HTML jest text/plain / NIE
- Serwer korzysta z portu 80 / TAK
- Pliki do serwera można wysyłać korzystając z metody GET / NIE

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
- Po pewnym czasie przeglądarka WWW wyśle zapytanie ARP / NIE
- Po pewnym czasie przeglądarka WWW ponownie wyśle pakiet / NIE
- Po pewnym czasie warstwa transportowa ponownie wyśle pakiet / TAK
- Po pewnym czasie serwer WWW wyśle żądanie o ponowne przesłanie zagubionego pakietu / NIE

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

## Pytanie 22. Mechanizm kontroli przeciążenia wykorzystywany w TCP:
- wymaga komunikatów kontrolnych wysyłanych przez routery / NIE
- zakłada, że utrata pakietów nastąpiła na skutek przepełnienia kolejek / TAK
- zakłada, że utrata pakietów nastąpiła na skutek błędów warstwy fizycznej / NIE
- preferuje transmisje o większym czasie RTT / NIE

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
- Nawiązywanie połączenia stosowane jest w warstwie transportowej / TAK
- Typ MIME stosowany jest w warstwie sieciowej / NIE
- Kontrola przepływu stosowana jest w warstwie sieciowej / NIE
- Routing stosowany jest w warstwie łącza danych / NIE


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
- DNS służy tylko do zamiany nazw domen na adresy IP, do zamiany adresów IP na nazwy domen wykorzystywany jest odrębny protokół / NIE
- Jedna domena może mieć przypisanych wiele adresów IP / TAK
- Rekord NS umożliwia określenie serwera nazw odpowiedzialnego za daną domenę / TAK
- Strefą jest dowolny podzbiór zbioru nazw domen / NIE


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
- Komputer A może wysłać segment z danymi już po otrzymaniu pierwszego segmentu z ustawionym bitem ACK / TAK
- Komputer A rozpocznie od wysłania segmentu z ustawionym bitem SYN / TAK
- Komputer B może wysłać segment z danymi już po otrzymaniu pierwszego segmentu z ustawionym bitem RST / NIE
- Komputer A może wysłać segment z danymi dopiero po otrzymaniu pierwszego segmentu z danymi od B / NIE

## 37. Jakie wiążą poprawę wydajności komunikacji za pośrednictwem protokołu HTTP?
- Zapytania ARP / NIE
- Sender Policy Framework (SPF) / NIE
- Sieci CDN / TAK
- Połączenia trwałe (wiele komunikatów HTTP w jednym połączeniu TCP) / TAK

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