fetch('http://localhost:4000/projects-list')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

  fetch('http://localhost:4000/projects-list')
  .then(res => res.json())
  .then(projects =>
    dispatch({
      type: FETCH_PROJECTS,
      payload: projects
    })
  );