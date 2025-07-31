# SBfinity

SBfinity is a lightweight browser-based integration that connects [Streamer.bot](https://streamer.bot) and [TikFinity](https://tikfinity.zerody.one/app/) in real time. It listens to TikTok events via TikFinity and triggers **Custom Triggers** inside Streamer.bot — making it easy for streamers to handle TikTok events using their familiar Streamer.bot setup.

> ⚠️ **Note:** SBfinity does **not** replace TikFinity’s built-in automation features. It simply exposes basic TikTok event triggers to **Streamer.bot** as custom triggers. SBfinity cannot execute TikFinity’s internal actions — it’s designed only for streamers who prefer handling all logic and effects from within Streamer.bot.

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
     - Go to `Streamer.bot > Servers/Clients > WebSocket Server` 
     - Click `Start Server`
     - It is also recommended that `✅ Auto Start WebSocket Server` is checked.
     - No need to change address or port (keep default)

3. **Import Custom Triggers**
   - In Streamer.bot, click `Import` and paste this:
     ```
     U0JBRR+LCAAAAAAABADFV11v2kgUfV9p/4OVp11tQcYOTam0D+AUMElo+bANXvowX5gpY493PAacqv99ZwxOQqDdRJV2IznG99y59/jcO3Dn66+/GMZFTCS4eG981Q/qMQExUY8Xk86SJlQWF28OAMjligsNCbKDXOD7B2hDREZ5orFG3aybDwAmGRI0lQewimnQzAAGo9FKbon+b0DBtxkRNQgygg2aSBIJoJcZkCgfkhgTKYiiJuqQSwMk2JjSdbeMVjdcqYJlkiSZIbmh/FhN0pholylfG7d0QwyyIYnMjN8YXRMDrYDM3hgRXeqbNqmbDhpzQX435ErwPFo9pigxKWgUqTc1EBeCZClPME0iA+WZ5LEBkKabKe4ZxeSYbp5pR6rS8+WSIgqYERA44WhNpIEYVczqT3Xm4zxpo4NqSc5YhcWKTZzH/oPeGtTYt9LjAoOjWh44Kctfe4tRQSVMsS5Ki5igAS1cW9pXuHZpQbMGr94ua6gFrHcWANBu2RW5ctnfOcnJMbHSThIAGdExpcjJEbJDLMekK3jcV3XiolBOS8Cy73l9IqW257y+158lGKm6pUedBgvjebvupWFbUGRK53M5hCo3jx8qcIIjnqBc9UAiz6FVn2jZPx/lPC3Hs5IcveFTvud20wkuyJIoUoicpChh5/1iEVD1ZttssbijSPCML2V9+GG6WHSFSrrlYv32crHYXKpNbJt2o7VYxJnqdkZhHTN2cRzy8/P8sJDE4bgkj2fDFMYo8mx2j3u+/Lg1b65H6RYHgwwEd9Hc2q2QfReNGh13EjSVrckUfnU94pHrtCPU9ynssS9uP9yAYBQpnxQ7UVrhRMXTd7e93twWnSnuD9g8MIcObWt8oOPesgELrTJ/MbJ9dW9Jvz9IQwszRCPq95gIY5aD2bjpfhhuYNxkc3vMQsfNXGdggkDGQOftr/O51cph7H9RsdYu3Ubqs+12JXb7GfXMQeUX3XTHKWiMN6BY01unTT17XIRBV7qJmX584MyuvQ9R7sV+AmZDM5wNrpVeJrQaHopZElp+ceMMvCf5o3GP3UOrmYeB8g9GZWz8hP9tPE7/J47KlkWf6EMNonHQXJ/lmAxNFPsr6Pl5qXGvyXDRgbNJ58plQ+ehFs5Kx/VU3FS/h8L26yaD1s00q2pcXrfFu2hkrVbY6QzD2fB+HmBW9Uh5fRiOJk5zEgY4Raq2aD1sqPsG+uMCBDgJZy53WaVH+w/lz+ezUTQN/HtkdZNwcq4XdL5X8F+XMelysr76OW4NhuzhKrS8yOsxXeuyzm6ifKxQ7TdmkkmzgFZLavw1PbDXsNRXczvReGyxGPfvjuwv3WN+ryXc68t9DKej3nfIwCw8u8/C0uegbaPkHf1YW5yGyYi6/Se9W16dl/avd+hfT/cYsv0inHSuQU+9y79xDZpWGOw2qOcpDTt5OMP7XnAG01Fc1aPNKw1u9r3UB0FourTz2Mvtn+Ldg9YugzY6850QbmBvt8HFS/XsnOyv19bYs32KrGEBZh2lVSs/05/36jfgfm4P0nn8Yt2in987O8XBO6NRZf+PeHT1d8GAndMF9LpF+X3z6lp1Wuq3U138z5OhIBUE8TiljJwOZoepgoFiIoE4N8yUHhnYkDHJcian3AeC6jHvR75HXqdjyn7sxObSblrNq1qjqWbPS0jsGoAWqJngCpGmdWkr+8nS/WlBLVeHjOeYLFKdr6X/nmPVXPhsZC2x746te7IJJjud8Kn92+PDmQGvp5OdTn+IMwZSdbx5glfwIWDlvx+xj0Ko5XGsxtJj45bArDxFTIjYPBs5H0GnPGEcg/p8JB5JHM4Pjwe5RmNvIbuUC0mwnsp12cy6VX+3r8vpaaREL2vqyAbqb9W0+O0fjNQusmIOAAA=
     
     ```
   - Restart Streamer.Bot after importing to see the changes.

4. **Add the Browser Source in OBS (or any broadcasting software you use that allows adding a browser source)**
   - Add this URL as a **browser source** in OBS to any scene:
     ```
     https://rexbordz.github.io/SBfinity/
     ```
     This source is invisible, so you don't need to worry about which scene to add to. As long as it is added and enabled, it continually listens for TikTok events.
   - ❌ DO NOT enable `Shutdown source when not visible` or else it will cause some problems.

5. ✅ You're all set!
   - When TikFinity and Streamer.bot are running, SBfinity will connect to both.
   - Supported TikTok events will now trigger actions in Streamer.bot!

---

## 🎯 Included Custom Triggers

These trigger names are added automatically via the import. They can be found in `Custom > SBfinity (TikTok)`:

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
- `Stream Ended`

---

## ❤️ Credits

- **[Streamer.bot](https://streamer.bot)** – created by [nate1820](https://github.com/nate1280)
- **[TikFinity](https://tikfinity.zerody.one/app/)** – by [zerodytrash](https://github.com/zerodytrash)

Big thanks to the creators of both tools. SBfinity is built entirely on top of their work.

---

## ⚖️ License

This project is licensed under the [MIT License](LICENSE).
