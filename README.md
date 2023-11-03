У api dadata на поддомене cleaner.dadata проблема с cors на их стороне, поэтому для корректной работы нужно  запустить браузер хром в no corse моде. Либо через консоль, либо через расширение:

расширение - https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
через консоль - https://alfilatov.com/posts/run-chrome-without-cors/

Также может закончиться количество бесплатных запросов к dadata и нужно будет зарегистрировать там новый аккаунт, получить новый apikey и вставить его в apiClient.ts файл