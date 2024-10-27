<div align="center">
  <h1> Darwin Bot </h1>
</div>

Darwin is the discord bot for the server **Command Space**, commonly call **CMDS**.

It's used and created for our own purpose, so don't expect it to match your server need, but feel free to take some code or idea to create yours or directly fork it.

# Features

All the features below can change and evolve. This is used has our todo list. 🙂️

- [ ] Voice channel creation on join
- [ ] Ticket system
- [ ] RSS Feed from blogs
- [ ] User setup (OS, WM/DE, Theme, IDE, ...)
- [ ] Your idea ? -> [Feature Request](https://github.com/Cosmeak/darwin/issues)

# Installation

`TODO`: setup docker and continious deployment.

# Contributing

#### 1. Install project on your machine

```sh
# Clone the project or fork it
$ git clone git@github.com:Cosmeak/darwin.git
```

### 2. Setup project

Since the project use deno, all dependencies come from the cache, you don't need to install something other than the deno runtime.

```sh
$ cp .env.example .env
```

And then add your own discord bot token .

#### 3. Run the server

The development server use the watcher from deno, you don't need to think about relaunch it. 🙂️

```sh
$ deno run dev
```

#### 4. Coding time

All events and command are auto-imported inside the bot, you just need to deploy commands to let discord know about their existence.

```sh
$ deno run command:deploy
```

#### Useful informations

Be careful not to add an already existing event, this can cause an overwrite of one of them.

The command can be place under multiple folder and will still be imported.

# License

Refer to the [License](LICENSE).
