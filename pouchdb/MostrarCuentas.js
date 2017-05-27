
baseDatos.allDocs(
{
  include_docs: true,
  attachments: true
}).then(function (result)
{
  console.log(result);
  res.json({"users": result.rows});
}).catch(function (err)
{
  console.log(err);
});
