# Тестовое задание на позицию Vue-разработчика

### Описание тестового задания:

Вы разрабатываете функциональность по вводу адреса доставки на странице оформления заказа в интернет-магазине. Ввод адреса может осуществляться с помощью двух методов: карты и тестового поля. На карте пользователь может ткнуть в нужную точку (обратное геокодирование), а в текстовом поле указать адрес вручную (прямое геокодирование). Карта должна быть реализована через API Яндекс Карт, текстовое поле должно содержать подсказки по адресам от сервиса DaData.

Оба метода должны быть синхронизированы между собой. Если пользователь указывает адрес на карте, то полный адрес доставки должен подставиться в текстовое поле ввода. То же самое и в обратном порядке, при вводе адреса через текстовое поле, адрес должен автоматически отобразиться на карте. В результате ввода необходимо получить объект вида:
* city – населенный пункт;
* street – улица;
* house – номер дома;
* latitude – координаты адреса (широта);
* longitude – координаты адреса (долгота);
Независимо от метода ввода адреса координаты необходимо брать из
карты, т.к. там самый точный результат.

**Технические требования:**
* Приложение разработано на основе Nuxt.js (Vue.js) – разрешается
использовать, как Vue 2 так и Vue 3.
* Приложение разработано с использование TypeScript – степень
покрытия типами вы определяете самостоятельно, исходя из своих
религиозных соображений.
* Для реализации компонента карты разрешается использовать, как
нативное API так и взять готовую библиотеку-обертку.
* Для реализации компонента текстового поля разрешается
использовать, как нативное API так и взять готовую
библиотеку-обертку.
* Важно учесть расширяемость решения – «завтра» сервис карт или
подсказок могут замениться на другие и это не должно стать
проблемой для разработки.
* Дизайн и верстка остается на ваше усмотрение.
* Линтинг/структура директорий/код-стайл остается на ваше
усмотрение, разрабатывайте, как комфортно, как привыкли – никаких
ограничений нет.


### Комментарии к решению задания:
У api dadata на поддомене cleaner.dadata проблема с cors на их стороне, поэтому для корректной работы нужно  запустить браузер хром в no corse моде. Либо через консоль, либо через расширение:
* расширение - https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
* через консоль - https://alfilatov.com/posts/run-chrome-without-cors/

Также может закончиться количество бесплатных запросов к dadata (бесплатных всего 100). Тогда нужно будет зарегистрировать на dadata новый аккаунт, получить новый apikey и secretkey, а затем вставить их в apiClient.ts файл