// A. Get de uma lista de posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))

// B. Get um Post por Id (Input de Id)
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then((response) => response.json())
    .then((json) => console.log(json));

// C. Criar um Post com o verbo POST
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Titulo do novo post',
        body: 'Este é o conteúdo do novo post',
        userId: 1,
        id: 101
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    
// D. PUT (Atualizar) um post apenas para o ID 1
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'Post Atualizado',
      body: 'Conteúdo atualizado com sucesso',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

// E. DELETE um post apenas para o ID 1
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });  
  