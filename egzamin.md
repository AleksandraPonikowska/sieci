# 2019

## 1. Dlaczego router ma więcej niż jeden adres IP?
- Jeden adres IP jest zawsze zarezerwowany do wysyłania pakietów do bramy domyślnej. / NIE
- Do każdego wpisu z tablicy routingu konieczny jest osobny adres IP. / NIE
- Jeden adres służy tylko do przyjmowania pakietów a drugi tylko do ich wysyłania. / NIE
- Każdy z interfejsów sieciowych routera jest zazwyczaj w odrębnej sieci i tym interfejsom przypisane są adresy z tych sieci. / TAK

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

