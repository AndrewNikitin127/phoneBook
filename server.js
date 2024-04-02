import http from 'http';

const server = http.createServer((request, response) => {
  request.on('error', err => {
    // Обрабатываем ошибки
    console.error(err);
  }).on('end', () => {
    response.on('error', err => {
      // Обрабатываем ошибки
      console.error(err);
    });
    // Устанавливаем код ответа
    response.statusCode = 200;
    // Устанавливаем заголовки
    response.setHeader('Content-Type', 'application/json');

    const message = 'sss sdd  The dddPhodddnebook';
    // Устанавливаем данные в ответе
    response.write(message);
    // Завершаем соединение
    response.end();
  });

  request.resume(); //  !!!
})

server.listen(8080, () => {
    console.log('Server has been started')});