//Insérer un et un seule document dans une collection
db.books.insertOne({title: 'Attack On Titan, To You, 2000 Years From Now', author: 'Hajime Isayama', pages: 208, genre: ['manga', 'horror'], rating: 9});

//Insérer plus d'un document dans une collection
db.books.insertMany([{title: 'Jujutsu Kaisen, Ryomen Sukuna', author: 'Gege Akutami', pages: 192, genre: ['manga', 'horror'], rating: 7}, {title: 'Chainsaw Man, Dog & Chainsaw', author: 'Tatsuki Fujimoto', pages: 192, genre: ['manga', 'action', 'drame'], rating: 4}]);

//Lors de l'insertion d'un document dans une collection inexistante, MongoDB crée automatiquement cette collection.
db.author.insertOne({name: 'J. K. Rowling', age: 58});
