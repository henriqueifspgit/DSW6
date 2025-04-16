const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const output = document.getElementById('resultado');

document.getElementById('getAll').addEventListener('click', () => {
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      output.textContent = JSON.stringify(data, null, 2);
    })
    .catch(err => {
      output.textContent = 'Erro ao buscar todos os posts: ' + err;
    });
});

document.getElementById('getById').addEventListener('click', () => {
  const id = document.getElementById('postId').value;
  fetch(`${apiUrl}/${id}`)
    .then(res => res.json())
    .then(data => output.textContent = JSON.stringify(data, null, 2))
    .catch(err => output.textContent = 'Erro ao buscar post por ID: ' + err);
});

document.getElementById('createPost').addEventListener('click', () => {
  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({
      title: 'Novo post',
      body: 'Conteúdo do post',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(res => res.json())
    .then(data => output.textContent = JSON.stringify(data, null, 2))
    .catch(err => output.textContent = 'Erro ao criar post: ' + err);
});

document.getElementById('updatePost').addEventListener('click', () => {
  fetch(`${apiUrl}/1`, {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'Post atualizado',
      body: 'Conteúdo atualizado do post',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(res => res.json())
    .then(data => output.textContent = JSON.stringify(data, null, 2))
    .catch(err => output.textContent = 'Erro ao atualizar post: ' + err);
});

document.getElementById('deletePost').addEventListener('click', () => {
  fetch(`${apiUrl}/1`, {
    method: 'DELETE',
  })
    .then(() => output.textContent = 'Post deletado com sucesso.')
    .catch(err => output.textContent = 'Erro ao deletar post: ' + err);
});