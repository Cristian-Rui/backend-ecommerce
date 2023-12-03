const fs = require('fs')

const info = {
  contenidoStr: '',
  contenidoObj: {},
  size: 0
}

const leeryEscribir = async () => {
  const data = await fs.promises.readFile('./package.json', 'utf-8');

  info.contenidoStr = data.toString();
  const obj = JSON.parse(data);
  info.contenidoObj = obj;
  const status = await fs.promises.stat('./package.json')
  const size = await status.size;
  info.size = size;

  console.log({ info });

  const infoJson = JSON.stringify(info)
  await fs.promises.writeFile('./info.json', infoJson)
}

leeryEscribir();