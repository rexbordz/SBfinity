# SBfinity

**SBfinity** is a lightweight browser-based integration that connects [Streamer.bot](https://streamer.bot) and [TikFinity]([https://github.com/zerodytrash/TikFinity](https://tikfinity.zerody.one/app/)) in real time. It listens to events from TikTok via TikFinity and sends them to Streamer.bot as **Custom Triggers**, so you can build actions in Streamer.bot for TikTok interactions — a great tool for those who are more comfortable with using [Streamer.Bot].

---

## 🔌 Requirements

- [Streamer.bot](https://streamer.bot)
- [TikFinity Desktop App](https://tikfinity.zerody.one/app/) 

---

## 🚀 Installation

1. **Open TikFinity**
   - Launch TikFinity and connect to your TikTok account.
   - Ensure you are receiving live events.

2. **Open Streamer.bot**
   - Make sure WebSocket Server is **enabled**:
     - Go to `Streamer.bot > Settings > Websocket Server`.
     - ✅ Check **Enable Websocket Server**
     - No need to change host or port (keep default `ws://localhost:8080`)

3. **Import Custom Triggers**
   - In Streamer.bot, go to `Actions > Import` and paste this:
     ```
     [Insert Import String or .sb file link here]
     ```
   - Restart Streamer.Bot after importing to see the changes.

4. **Add the Browser Source in OBS (or any broadcasting software you use that allows adding a browser source)**
   - Add this URL as a **browser source** in OBS to any scene:
     ```
     https://rexbordz.github.io/sbfinity/
     ```
   - ❌ DO NOT enable `Shutdown source when not visible` or else it will cause some problems.

5. ✅ You're all set!
   - When TikFinity and Streamer.bot are running, SBfinity will connect to both.
   - Supported TikTok events will now trigger actions in Streamer.bot!

---

## 🎯 Included Custom Triggers

These trigger names are added automatically via the import:

- `Chat`
- `Gift Received`
- `Follow`
- `Like`
- `Subscription`
- `Share`
- `Treasure Chest Received`
- `Pinned Message`
- `Tikfinity Connected` - triggers when TikFinity has successfully connected to your TikTok stream
- `Tikfinity Disconnected` -triggers when TikFinity gets disconnected from your TikTok stream
- `tikfinity.streamEnd`

---

## ❤️ Credits

- **[Streamer.bot](https://streamer.bot)** – created by [nate1820](https://github.com/nate1280)
- **[TikFinity (TLC)](https://github.com/zerodytrash/TikFinity)** – by [zerodytrash](https://github.com/zerodytrash)

Big thanks to the creators of both tools. SBfinity is built entirely on top of their work.

---

## ⚖️ License

This project is licensed under the [MIT License](LICENSE).
