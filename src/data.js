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
      "odp": false
    },
    {
      "id": "2019-2-b",
      "pytanie": "2. Załóżmy, że routery A i B są bezpośrednio połączone i wykorzystują algorytm routingu dynamicznego oparty na wektorach odległości z włączonym mechanizmem zatruwania ścieżek z metryką równą liczbie hopów. Tablica routingu A zawiera wpis określający, że istnieje ścieżka długości 3 do routera X, na której pierwszym krokiem jest router B. Router B wysyła do routera A informację, że jego odległość od X wynosi 5. Co zrobi router A?",
      "odpowiedz": "Zaktualizuje swój wpis, zmieniając odległość do routera X na 6.",
      "odp": true
    },
    {
      "id": "2019-2-c",
      "pytanie": "2. Załóżmy, że routery A i B są bezpośrednio połączone i wykorzystują algorytm routingu dynamicznego oparty na wektorach odległości z włączonym mechanizmem zatruwania ścieżek z metryką równą liczbie hopów. Tablica routingu A zawiera wpis określający, że istnieje ścieżka długości 3 do routera X, na której pierwszym krokiem jest router B. Router B wysyła do routera A informację, że jego odległość od X wynosi 5. Co zrobi router A?",
      "odpowiedz": "Zaktualizuje swój wpis, zmieniając odległość do routera X na 8.",
      "odp": false
    },
    {
      "id": "2019-2-d",
      "pytanie": "2. Załóżmy, że routery A i B są bezpośrednio połączone i wykorzystują algorytm routingu dynamicznego oparty na wektorach odległości z włączonym mechanizmem zatruwania ścieżek z metryką równą liczbie hopów. Tablica routingu A zawiera wpis określający, że istnieje ścieżka długości 3 do routera X, na której pierwszym krokiem jest router B. Router B wysyła do routera A informację, że jego odległość od X wynosi 5. Co zrobi router A?",
      "odpowiedz": "Powyższa informacja nie dotrze do A ze względu na mechanizm zatruwania ścieżek.",
      "odp": false
    },
    {
      "id": "2019-3-a",
      "pytanie": "3. Zaznacz prawdziwe zdania o sumach kontrolnych i kodach.",
      "odpowiedz": "Jeśli odległość Hamminga między dowolną parą kodów wynosi co najmniej 4, to takie kodowanie potrafi wykryć 3 błędy pojedynczych bitów.",
      "odp": true
    },
    {
      "id": "2019-3-b",
      "pytanie": "3. Zaznacz prawdziwe zdania o sumach kontrolnych i kodach.",
      "odpowiedz": "Sumy kontrolne CRC stosowane są w warstwie łącza danych.",
      "odp": true
    },
    {
      "id": "2019-3-c",
      "pytanie": "3. Zaznacz prawdziwe zdania o sumach kontrolnych i kodach.",
      "odpowiedz": "Kody MAC stosowane są do korekcji błędów transmisji.",
      "odp": false
    },
    {
      "id": "2019-3-d",
      "pytanie": "3. Zaznacz prawdziwe zdania o sumach kontrolnych i kodach.",
      "odpowiedz": "Jeśli odległość Hamminga między dowolną parą kodów wynosi co najmniej 4, to takie kodowanie potrafi skorygować 2 błędy pojedynczych bitów.",
      "odp": false
    },
    {
      "id": "2019-4-a",
      "pytanie": "4. Zaznacz prawdziwe zdania",
      "odpowiedz": "Mechanizm Go-Back-N jest szczególnym przypadkiem ogólnego mechanizmu okna przesuwnego, w którym okno odbiorcy jest równe 1.",
      "odp": true
    },
    {
      "id": "2019-4-b",
      "pytanie": "4. Zaznacz prawdziwe zdania",
      "odpowiedz": "Mechanizm Stop-And-Wait jest szczególnym przypadkiem ogólnego mechanizmu okna przesuwnego, w którym okno odbiorcy jest równe 1.",
      "odp": false
    },
    {
      "id": "2019-4-c",
      "pytanie": "4. Zaznacz prawdziwe zdania",
      "odpowiedz": "Mechanizm Stop-And-Wait jest szczególnym przypadkiem ogólnego mechanizmu okna przesuwnego, w którym okno nadawcy jest równe 1.",
      "odp": true
    },
    {
      "id": "2019-4-d",
      "pytanie": "4. Zaznacz prawdziwe zdania",
      "odpowiedz": "Mechanizm Go-Back-N jest szczególnym przypadkiem ogólnego mechanizmu okna przesuwnego, w którym okno nadawcy jest równe 1.",
      "odp": false
    },
    {
      "id": "2019-5-a",
      "pytanie": "5. Załóżmy, że interfejs enp0s0 jest już aktywny. Po wpisaniu linuksowego polecenia ip addr add 10.1.1.15/24 dev enp0s0 następujące ustawienia zostaną skonfigurowane dla sieci podłączonej do interfejsu enp0s0:",
      "odpowiedz": "Brama domyślna zostanie ustawiona na 10.0.0.1.",
      "odp": false
    },
    {
      "id": "2019-5-b",
      "pytanie": "5. Załóżmy, że interfejs enp0s0 jest już aktywny. Po wpisaniu linuksowego polecenia ip addr add 10.1.1.15/24 dev enp0s0 następujące ustawienia zostaną skonfigurowane dla sieci podłączonej do interfejsu enp0s0:",
      "odpowiedz": "Brama domyślna zostanie ustawiona na 10.1.1.1.",
      "odp": false
    },
    {
      "id": "2019-5-c",
      "pytanie": "5. Załóżmy, że interfejs enp0s0 jest już aktywny. Po wpisaniu linuksowego polecenia ip addr add 10.1.1.15/24 dev enp0s0 następujące ustawienia zostaną skonfigurowane dla sieci podłączonej do interfejsu enp0s0:",
      "odpowiedz": "Adres rozgłoszeniowy zostanie ustawiony na 10.1.1.255.",
      "odp": true
    },
    {
      "id": "2019-5-d",
      "pytanie": "5. Załóżmy, że interfejs enp0s0 jest już aktywny. Po wpisaniu linuksowego polecenia ip addr add 10.1.1.15/24 dev enp0s0 następujące ustawienia zostaną skonfigurowane dla sieci podłączonej do interfejsu enp0s0:",
      "odpowiedz": "Adres rozgłoszeniowy zostanie ustawiony na 10.255.255.255.",
      "odp": false
    },
    {
      "id": "2019-6-a",
      "pytanie": "6. Tylko jedna poprawna odpowiedź. Na komputerze użytkownik uruchomił program ping, pingając adres innego komputera w lokalnej sieci ethernetowej. Co (i w jakiej kolejności) znajdzie się w wysyłanych przez kartę sieciową danych?",
      "odpowiedz": "Nagłówek ramki, nagłówek pakietu IP, nagłówek ICMP, dane ICMP, suma kontrolna CRC",
      "odp": true
    },
    {
      "id": "2019-6-b",
      "pytanie": "6. Tylko jedna poprawna odpowiedź. Na komputerze użytkownik uruchomił program ping, pingając adres innego komputera w lokalnej sieci ethernetowej. Co (i w jakiej kolejności) znajdzie się w wysyłanych przez kartę sieciową danych?",
      "odpowiedz": "Nagłówek ramki, nagłówek ICMP, dane ICMP, suma kontrolna CRC",
      "odp": false
    },
    {
      "id": "2019-6-c",
      "pytanie": "6. Tylko jedna poprawna odpowiedź. Na komputerze użytkownik uruchomił program ping, pingając adres innego komputera w lokalnej sieci ethernetowej. Co (i w jakiej kolejności) znajdzie się w wysyłanych przez kartę sieciową danych?",
      "odpowiedz": "Nagłówek ramki, nagłówek pakietu IP, dane ICMP, suma kontrolna CRC",
      "odp": false
    },
    {
      "id": "2019-6-d",
      "pytanie": "6. Tylko jedna poprawna odpowiedź. Na komputerze użytkownik uruchomił program ping, pingając adres innego komputera w lokalnej sieci ethernetowej. Co (i w jakiej kolejności) znajdzie się w wysyłanych przez kartę sieciową danych?",
      "odpowiedz": "Nagłówek ramki, suma kontrolna CRC, nagłówek pakietu IP, nagłówek ICMP",
      "odp": false
    },
    {
      "id": "2019-7-a",
      "pytanie": "7. Które z poniższych zdań są prawdziwe w przypadku protokołu TCP?",
      "odpowiedz": "Wykorzystuje algorytm okna przesuwnego.",
      "odp": true
    },
    {
      "id": "2019-7-b",
      "pytanie": "7. Które z poniższych zdań są prawdziwe w przypadku protokołu TCP?",
      "odpowiedz": "Otrzymuje strumień danych z warstwy sieciowej i dzieli go na segmenty.",
      "odp": false
    },
    {
      "id": "2019-7-c",
      "pytanie": "7. Które z poniższych zdań są prawdziwe w przypadku protokołu TCP?",
      "odpowiedz": "Potrafi dokonywać konwersji pomiędzy różnymi formatami plików.",
      "odp": false
    },
    {
      "id": "2019-7-d",
      "pytanie": "7. Które z poniższych zdań są prawdziwe w przypadku protokołu TCP?",
      "odpowiedz": "Umożliwia kontrolę przepływu.",
      "odp": true
    },
    {
      "id": "2019-8-a",
      "pytanie": "8. Jądro systemu odebrało segment TCP w pakiecie IP i zapisało zawartość segmentu do bufora odbiorczego związanego z pewnym gniazdem. Na podstawie jakich informacji w segmencie zostało wybrane gniazdo?",
      "odpowiedz": "Lokalny port",
      "odp": true
    },
    {
      "id": "2019-8-b",
      "pytanie": "8. Jądro systemu odebrało segment TCP w pakiecie IP i zapisało zawartość segmentu do bufora odbiorczego związanego z pewnym gniazdem. Na podstawie jakich informacji w segmencie zostało wybrane gniazdo?",
      "odpowiedz": "Zdalny adres IP",
      "odp": true
    },
    {
      "id": "2019-8-c",
      "pytanie": "8. Jądro systemu odebrało segment TCP w pakiecie IP i zapisało zawartość segmentu do bufora odbiorczego związanego z pewnym gniazdem. Na podstawie jakich informacji w segmencie zostało wybrane gniazdo?",
      "odpowiedz": "MTU",
      "odp": false
    },
    {
      "id": "2019-8-d",
      "pytanie": "8. Jądro systemu odebrało segment TCP w pakiecie IP i zapisało zawartość segmentu do bufora odbiorczego związanego z pewnym gniazdem. Na podstawie jakich informacji w segmencie zostało wybrane gniazdo?",
      "odpowiedz": "Rozmiar okna",
      "odp": false
    },
    {
      "id": "2019-9-a",
      "pytanie": "9. Jaka maska podsieci umożliwi wykorzystanie dokładnie 510 adresów IP do adresowania komputerów?",
      "odpowiedz": "255.255.254.0",
      "odp": true
    },
    {
      "id": "2019-9-b",
      "pytanie": "9. Jaka maska podsieci umożliwi wykorzystanie dokładnie 510 adresów IP do adresowania komputerów?",
      "odpowiedz": "255.255.252.0",
      "odp": false
    },
    {
      "id": "2019-9-c",
      "pytanie": "9. Jaka maska podsieci umożliwi wykorzystanie dokładnie 510 adresów IP do adresowania komputerów?",
      "odpowiedz": "255.255.255.0",
      "odp": false
    },
    {
      "id": "2019-9-d",
      "pytanie": "9. Jaka maska podsieci umożliwi wykorzystanie dokładnie 510 adresów IP do adresowania komputerów?",
      "odpowiedz": "255.255.0.0",
      "odp": false
    },
    {
      "id": "2019-10-a",
      "pytanie": "10. Które zdania dotyczące współczesnych wersji protokołu HTTP są prawdziwe?",
      "odpowiedz": "Wykorzystuje protokół UDP",
      "odp": false
    },
    {
      "id": "2019-10-b",
      "pytanie": "10. Które zdania dotyczące współczesnych wersji protokołu HTTP są prawdziwe?",
      "odpowiedz": "Typem MIME dla wysyłanej strony HTML jest text/plain",
      "odp": false
    },
    {
      "id": "2019-10-c",
      "pytanie": "10. Które zdania dotyczące współczesnych wersji protokołu HTTP są prawdziwe?",
      "odpowiedz": "Serwer korzysta z portu 80",
      "odp": true
    },
    {
      "id": "2019-10-d",
      "pytanie": "10. Które zdania dotyczące współczesnych wersji protokołu HTTP są prawdziwe?",
      "odpowiedz": "Pliki do serwera można wysyłać korzystając z metody GET",
      "odp": false
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
      "odp": false
    },
    {
      "id": "2019-15-b",
      "pytanie": "15. Tylko jedna poprawna odpowiedź. Przeglądarka WWW nawiązała połączenie z serwerem WWW. Pakiet zawierający całe żądanie HTTP gubi się. Co się stanie?",
      "odpowiedz": "Po pewnym czasie przeglądarka WWW ponownie wyśle pakiet",
      "odp": false
    },
    {
      "id": "2019-15-c",
      "pytanie": "15. Tylko jedna poprawna odpowiedź. Przeglądarka WWW nawiązała połączenie z serwerem WWW. Pakiet zawierający całe żądanie HTTP gubi się. Co się stanie?",
      "odpowiedz": "Po pewnym czasie warstwa transportowa ponownie wyśle pakiet",
      "odp": true
    },
    {
      "id": "2019-15-d",
      "pytanie": "15. Tylko jedna poprawna odpowiedź. Przeglądarka WWW nawiązała połączenie z serwerem WWW. Pakiet zawierający całe żądanie HTTP gubi się. Co się stanie?",
      "odpowiedz": "Po pewnym czasie serwer WWW wyśle żądanie o ponowne przesłanie zagubionego pakietu",
      "odp": false
    },
    {
      "id": "2019-16-a",
      "pytanie": "16. Zaznacz prawdziwe zdania.",
      "odpowiedz": "44.44.44.44/30 jest adresem przypisywanym komputerowi",
      "odp": false
    },
    {
      "id": "2019-16-b",
      "pytanie": "16. Zaznacz prawdziwe zdania.",
      "odpowiedz": "127.127.127.127/25 jest adresem rozgłoszeniowym",
      "odp": true
    },
    {
      "id": "2019-16-c",
      "pytanie": "16. Zaznacz prawdziwe zdania.",
      "odpowiedz": "192.168.1.0/8 jest adresem sieci",
      "odp": false
    },
    {
      "id": "2019-16-d",
      "pytanie": "16. Zaznacz prawdziwe zdania.",
      "odpowiedz": "10.10.10.0/24 jest adresem sieci",
      "odp": true
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
      "odp": false
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
      "id": "2019-21-e",
      "pytanie": "21. Zaznacz techniki routingu dynamicznego pomagające uniknąć cykli w routingu.",
      "odpowiedz": "wymaga komunikatów kontrolnych wysyłanych przez routery",
      "odp": false
    },
    {
      "id": "2019-21-f",
      "pytanie": "21. Zaznacz techniki routingu dynamicznego pomagające uniknąć cykli w routingu.",
      "odpowiedz": "zakłada, że utrata pakietów nastąpiła na skutek przepełnienia kolejek",
      "odp": true
    },
    {
      "id": "2019-21-g",
      "pytanie": "21. Zaznacz techniki routingu dynamicznego pomagające uniknąć cykli w routingu.",
      "odpowiedz": "zakłada, że utrata pakietów nastąpiła na skutek błędów warstwy fizycznej",
      "odp": false
    },
    {
      "id": "2019-21-h",
      "pytanie": "21. Zaznacz techniki routingu dynamicznego pomagające uniknąć cykli w routingu.",
      "odpowiedz": "preferuje transmisje o większym czasie RTT",
      "odp": false
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
      "odp": false
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
      "odp": true
    },
    {
      "id": "2019-27-b",
      "pytanie": "27. W jakich warstwach są używane poniższe mechanizmy?",
      "odpowiedz": "Typ MIME stosowany jest w warstwie sieciowej",
      "odp": false
    },
    {
      "id": "2019-27-c",
      "pytanie": "27. W jakich warstwach są używane poniższe mechanizmy?",
      "odpowiedz": "Kontrola przepływu stosowana jest w warstwie sieciowej",
      "odp": false
    },
    {
      "id": "2019-27-d",
      "pytanie": "27. W jakich warstwach są używane poniższe mechanizmy?",
      "odpowiedz": "Routing stosowany jest w warstwie łącza danych",
      "odp": false
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
      "pytanie": "31. Tylko jedna poprawna odpowiedź. Przez łącze 1 Mbit o czasie propagacji 2 ms ($ms = 10^{-3}\\ s$) przesyłamy 500-bajtowy pakiet. Ile czasu upłynie od momentu nadania pierwszego bitu do momentu otrzymania ostatniego bitu?",
      "odpowiedz": "2,5 ms",
      "odp": false
    },
    {
      "id": "2019-31-b",
      "pytanie": "31. Tylko jedna poprawna odpowiedź. Przez łącze 1 Mbit o czasie propagacji 2 ms ($ms = 10^{-3}\\ s$) przesyłamy 500-bajtowy pakiet. Ile czasu upłynie od momentu nadania pierwszego bitu do momentu otrzymania ostatniego bitu?",
      "odpowiedz": "4 ms",
      "odp": false
    },
    {
      "id": "2019-31-c",
      "pytanie": "31. Tylko jedna poprawna odpowiedź. Przez łącze 1 Mbit o czasie propagacji 2 ms ($ms = 10^{-3}\\ s$) przesyłamy 500-bajtowy pakiet. Ile czasu upłynie od momentu nadania pierwszego bitu do momentu otrzymania ostatniego bitu?",
      "odpowiedz": "18 ms",
      "odp": false
    },
    {
      "id": "2019-31-d",
      "pytanie": "31. Tylko jedna poprawna odpowiedź. Przez łącze 1 Mbit o czasie propagacji 2 ms ($ms = 10^{-3}\\ s$) przesyłamy 500-bajtowy pakiet. Ile czasu upłynie od momentu nadania pierwszego bitu do momentu otrzymania ostatniego bitu?",
      "odpowiedz": "6 ms",
      "odp": true
    },
    {
      "id": "2019-32-a",
      "pytanie": "32. Które zdania dotyczące protokołu DNS są prawdziwe?",
      "odpowiedz": "DNS służy tylko do zamiany nazw domen na adresy IP, do zamiany adresów IP na nazwy domen wykorzystywany jest odrębny protokół",
      "odp": false
    },
    {
      "id": "2019-32-b",
      "pytanie": "32. Które zdania dotyczące protokołu DNS są prawdziwe?",
      "odpowiedz": "Jedna domena może mieć przypisanych wiele adresów IP",
      "odp": true
    },
    {
      "id": "2019-32-c",
      "pytanie": "32. Które zdania dotyczące protokołu DNS są prawdziwe?",
      "odpowiedz": "Rekord NS umożliwia określenie serwera nazw odpowiedzialnego za daną domenę",
      "odp": true
    },
    {
      "id": "2019-32-d",
      "pytanie": "32. Które zdania dotyczące protokołu DNS są prawdziwe?",
      "odpowiedz": "Strefą jest dowolny podzbiór zbioru nazw domen",
      "odp": false
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
      "odp": true
    },
    {
      "id": "2019-36-b",
      "pytanie": "36. Komputer A nawiązuje połączenie z komputerem B za pomocą TCP. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Komputer A rozpocznie od wysłania segmentu z ustawionym bitem SYN",
      "odp": true
    },
    {
      "id": "2019-36-c",
      "pytanie": "36. Komputer A nawiązuje połączenie z komputerem B za pomocą TCP. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Komputer B może wysłać segment z danymi już po otrzymaniu pierwszego segmentu z ustawionym bitem RST",
      "odp": false
    },
    {
      "id": "2019-36-d",
      "pytanie": "36. Komputer A nawiązuje połączenie z komputerem B za pomocą TCP. Zaznacz prawdziwe zdania.",
      "odpowiedz": "Komputer A może wysłać segment z danymi dopiero po otrzymaniu pierwszego segmentu z danymi od B",
      "odp": false
    },
    {
      "id": "2019-37-a",
      "pytanie": "37. Jakie wiążą poprawę wydajności komunikacji za pośrednictwem protokołu HTTP?",
      "odpowiedz": "Zapytania ARP",
      "odp": false
    },
    {
      "id": "2019-37-b",
      "pytanie": "37. Jakie wiążą poprawę wydajności komunikacji za pośrednictwem protokołu HTTP?",
      "odpowiedz": "Sender Policy Framework (SPF)",
      "odp": false
    },
    {
      "id": "2019-37-c",
      "pytanie": "37. Jakie wiążą poprawę wydajności komunikacji za pośrednictwem protokołu HTTP?",
      "odpowiedz": "Sieci CDN",
      "odp": true
    },
    {
      "id": "2019-37-d",
      "pytanie": "37. Jakie wiążą poprawę wydajności komunikacji za pośrednictwem protokołu HTTP?",
      "odpowiedz": "Połączenia trwałe (wiele komunikatów HTTP w jednym połączeniu TCP)",
      "odp": true
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
  ]
};