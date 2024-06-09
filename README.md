## Bailey : Bot - MD ✨️

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

<p align="center">
<img src="https://telegra.ph/file/3baddb6a33e14e1b59e83.jpg" alt="CuriosityBot-MD" width="900"/>
</p>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

<a href="https://github.com/Jxtxn17/BaileyBot-MD"><img title="Stars" src="https://img.shields.io/github/stars/Jxtxn17/BaileyBot-MD?color=ff4500&style=flat-square" /></a>
<a href="https://github.com/zhwzein/Killua-Zoldyck/network/members"><img title="Forks" src="https://img.shields.io/github/forks/Jxtxn17/BaileyBot-MD?color=ff4500&style=flat-square" /></a>
<a href="https://github.com/zhwzein/Killua-Zoldyck/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/Jxtxn17/BaileyBot-MD?label=watchers&color=ff4500&style=flat-square" /></a> <br>

<a href="https://www.youtube.com/@Azami_19">
<img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube">
</a>
<a href="https://instagram.com/azami.19">
<img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
</a>

### <img src="https://i.pinimg.com/originals/19/80/6e/19806e91932e6054965fc83b85241270.gif" alt="🍧 Prueba El Bot Aqui" width="42" height="42"> Prueba El Bot Aqui

> Antes De Instalar El Bot Quieres Usarlo?. Usalo Aqui!

<a href="https://chat.whatsapp.com/GrcXB1NINsDAPp4fCVgwfX"><img alt="🧸 Grupo WhatsApp" src="https://img.shields.io/badge/Grupo-BaileyBot-FF0080?style=for-the-badge&logo=whatsapp&logoColor=white"/></a>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

- #### `🚩 Clonar El Repositorio`
 Clonar BaileyBot [Aqui](https://github.com/Jxtxn17/BaileyBot-MD/fork)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

### `⚙️ Configuraciones ⚙️`
- Cambiar Los Numeros De Los Owner [aqui](https://github.com/AzamiJs/CuriosityBot-MD/blob/main/config.js#L6)
- Puede Cambiar A La Última Versión De Baileys Editando El package.json [aqui](https://github.com/Jxtxn17/BaileyBot-MD/blob/main/package.json#L42)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

- #### 🚩 Instalacion Automatica Por Termux
[![blog](https://img.shields.io/badge/Instalacion-Automatica-0000FF?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/smoWgg28wPk?si=ck-t9tvKrJQ0yZbS?feature=share)

> Comandos Para Instalar BaileyBot Forma Automatica Por Termux.

```bash
termux-setup-storage
```
```bash
apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/Bailey/BaileyBot-MD/master/bailey.sh | bash
```
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

- #### 🚩 Instalacion Manual Por Termux
[![blog](https://img.shields.io/badge/Instalacion-Manual-800080?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/qRb9ElGT8mM?si=XxSt-Y8CTQs1Imzl?feature=share)
> Escribe Estos Comandos Uno Por Uno

```bash
termux-setup-storage
```

```bash
apt-get update -y && apt-get upgrade -y
```

```bash
pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn
```

```bash
git clone https://github.com/Jxtxn/BaileyBot-MD && cd BaileyBot-MD && yarn install && npm install
```

```bash
ls
```
```bash
npm update
```

```bash
npm start
```
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

- #### 🚩 Activar En Caso De Detenerse En Termux
> Escribe Estos Comandos Uno Por Uno
```bash
> cd
> cd BaileyBot-MD
> npm start
```
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

- #### 🚩 Obtener Otro Codigo Qr
> 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙴𝚂𝚃𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚄𝙽𝙾 𝙿𝙾𝚁 𝚄𝙽𝙾:
```bash
> cd BaileyBot-MD
> rm -rf sessions
> npm start
```
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

- ### 🚩 Actualizar BaileyBot 
> Note Comandos para actualizar BaileyBot-MD de forma automática
```bash
grep -q 'bash\|wget' <(dpkg -l) || apt install -y bash wget && wget -O - https://raw.githubusercontent.com/Jxtxn/BaileyBot-MD/master/update.sh | bash
```
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

Para que no pierda su progreso en CuriosityBot, estos comandos realizarán un respaldo de su `database.json` y se agregará a la versión más reciente.

> Warning Estos comandos solo funcionan para TERMUX, REPLIT, LINUX

- #### 🎌 Para Activar 24/7 (Termux)
> Este Comando Deve Ir En La Carpeta BaileyBot-MD
```bash
> npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs
```
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

----
- ### 🎌 Instalacion Por Code Dpace

[`CREAR SERVIDOR`](https://github.com/codespaces/new?skip_quickstart=true&machine=basicLinux32gb&repo=674862525&ref=main&geo=UsEast)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

### EDITOR Y PROPIETARIO DEL BOT
<a href="https://github.com/Jxtxn17"><img src="https://github.com/Jxtxn17.png" width="250" height="250" alt="Jxtxn17"/></a>

- #### COLABORADORES 
<a href="https://github.com/Jxtxn17/Bot-MD/graphs/contributors">
<img src="https://contrib.rocks/image?repo=Jxtxn17/BaileyBot-MD" /> 
</a>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

##### AGRADECIMIENTO ESPECIAL PARA
<a href="https://github.com/AzamiJs"><img src="https://github.com/AzamiJs.png" width="250" height="250" alt="AzamiJs"/></a>


> By BaileyBot-MD
