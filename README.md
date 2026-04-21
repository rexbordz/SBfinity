**SBfinity** is a lightweight browser-based integration that connects [Streamer.bot](https://streamer.bot/) and [TikFinity](https://tikfinity.zerody.one/app/) in real time. It listens to TikTok events via TikFinity and triggers **Custom Triggers** inside Streamer.bot — making it easy for streamers to handle TikTok events using their familiar Streamer.bot setup.

> [!NOTE]
> SBfinity does not replace TikFinity’s built-in automation features. It simply exposes basic TikTok event triggers to Streamer.bot as custom triggers. SBfinity cannot execute TikFinity’s internal actions — it’s designed only for streamers who prefer handling all logic and effects from within Streamer.bot.

⬆️ **UPDATE INSTRUCTIONS:** If you got prompted to update your SBfinity, just reimport the action [here](https://github.com/rexbordz/SBfinity/blob/main/sbfinity.sb). If you are freshly installing SBfinity, just follow the instructions below.

---

## **🔌 Requirements**

<img src="https://github.com/user-attachments/assets/77ff6913-e6d7-4fe0-b9a0-bf66f5e8f745" style="height: 1em; vertical-align: middle;"> **Streamer.Bot (For Twitch, YouTube, and/or Kick)** <br>
If you need help setting this up, visit their [website](https://streamer.bot/).

<img src="https://github.com/user-attachments/assets/3ec8eac2-17d2-4a97-a066-e55c1e29d2c5" style="height: 1em; vertical-align: middle;"> **Tikfinity (For TikTok)** <br>
You need this to be able to listen to TikTok events. If you need help setting this up, you can check out my [Tikfinity Setup Guide](https://www.notion.so/Tikfinity-Setup-Guide-241088f4f93e8051b991c6ef4b659934?pvs=21).

⬆️ **rexbordzUI.dll (Optional but recommended)** <br>
Downloading rexbordzUI.dll file is highly recommended  to make sure you get notified with the latest Streamer.bot action update. [Download here!](https://github.com/rexbordz/rexbordzUI/releases)

---

## **🚀 Installation**

1. Save **rexbordz.dll** in 📂**Streamerbot/dlls**. If you don’t have a dlls folder yet, just create one.
    
    <img width="697" height="259" alt="image" src="https://github.com/user-attachments/assets/335e3494-bf75-4ea0-81ef-3f3095d0369c" />

2. **Open Streamer.bot**
    
    Make sure WebSocket Server is **enabled**:
    
    <img width="998" height="693" alt="image" src="https://github.com/user-attachments/assets/19ed030d-34df-4e49-b9a3-87bd90737a73" />

    No need to change address or port unless you really want to for some reason. You can check the [Custom Settings](https://www.notion.so/SBfinity-241088f4f93e80028773ff595fa0d5fa?pvs=21) section if you want to connect to a custom address or port.


3. **Import Custom Triggers**
    - Copy the latest import code [here](https://github.com/rexbordz/SBfinity/blob/main/sbfinity.sb)
    - In Streamer.bot, click `Import` and paste the import code
    - Press `Yes`, if prompted to auto-run. Otherwise, you would need to restart Streamer.bot to see the new triggers.
        
        <img width="460" height="142" alt="image" src="https://github.com/user-attachments/assets/76f0dc81-d685-42da-95e4-244a50f882b8" />

5. **Add the Browser Source in OBS (or any broadcasting software you use that allows adding a browser source)**
    - Add this URL as a **browser source** in OBS to any scene. This source is invisible, so you don't need to worry about which scene to add it to. As long as it is added and enabled, it continually listens for TikTok events.
        
        ```
        https://rexbordz.github.io/SBfinity/
        ```
        
        <img width="1201" height="974" alt="image" src="https://github.com/user-attachments/assets/1635f95b-61b1-4606-b953-226bc5a7b7d0" />
        
    - ❌ **DO NOT** enable `Shutdown source when not visible` or else it will cause some problems.
6. **Open TikFinity**
    - Launch TikFinity, and make sure that you are connected to your TikTok account.

<aside>

> [!TIP]
> ✅ **SUCCESS!** You have successfully installed SBfinity. When TikFinity and Streamer.bot are running, SBfinity will connect to both.
---

## **🎯 Included Custom Triggers**

Custom Triggers are added automatically to Streamer.bot via the import. They can be found in `Custom > SBfinity (TikTok)`. These triggers also go along with arguments that you can use to set custom logic. Here is the list of all the triggers and some important arguments (Some info were taken from [TikTok Live Connector](https://github.com/zerodytrash/TikTok-Live-Connector?tab=readme-ov-file#streamend) by zerodytrash)**:**

> [!NOTE]
> *If you want to see all available arguments, check the Action History tab in Streamer.bot when the trigger runs in real time.*

### Common Arguments

These are the common arguments that most user-triggered events below pass to the trigger: 

| **Argument** | **Type** | **Description** |
| --- | --- | --- |
| nickname | string | Display name of the user that triggered the event |
| uniqueId | string | Username of the user that triggered the event |
| profilePictureUrl | string | Profile picture of the user that triggered the event |
| isModerator | bool | Tells you whether the user is a moderator or not |
| isNewGifter | bool | Tells you whether the user is a new gifter or not |
| isSubscriber | bool | Tells you whether the user is a subscriber or not |
| followRole | int | Tells you if the user is following the channel. Returns the following: <br> `0` = not a follower <br> `>1` = follower |



### Chat

Triggered every time a new chat comment arrives.

| **Argument** | **Type** | **Description** |
| --- | --- | --- |
| comment | string | Message that the user sent |

### Gift Received

Triggered every time a gift arrives. This waits until the streak ends before it fires.

| **Argument** | **Type** | **Description** |
| --- | --- | --- |
| diamondCount | int | Amount of coins a single unit of the gift costs |
| describe | string | “Sent [gift name]” phrase. That is literally it. |
| giftName | string | Name of the gift sent |
| giftPictureUrl | string | URL of the picture of the gift sent |
| repeatCount | int | Total amount of the gift sent within a streak |

### Follow

Triggered when a user follows the streamer. See [Common Arguments](#common-arguments).

### Like

Triggered when a viewer sends likes to the streamer. For streams with many viewers, this event is not always triggered by TikTok.

| **Argument** | **Type** | **Description** |
| --- | --- | --- |
| likeCount | int | Total likes sent within the event |

### Subscription

Triggers when a user subscribes. See [Common Arguments](#common-arguments).

### Share

Triggers when a user shares the stream. See [Common Arguments](#common-arguments).

### Treasure Chest Received

Triggered every time someone sends a treasure chest. See [Common Arguments](#common-arguments).

> [!NOTE]
> Don’t have much data to this yet. Will update once I have it

### Pinned Message

Triggered when a message is pinned in the chat room.

---

## **⚙️ Custom Settings**

You can kind of customize the widget by adding these parameters at the end of the URL. Here are the available options:

**Custom Streamer.bot Address:**

```xml
?address=[Insert custom address here]
```

**Custom Streamer.bot Port:**

```xml
?port=[Insert custom port here]
```

So with custom settings, your browser source link should look like this:

`widget-link.com?address=127.0.0.2?port=8081`

---

## 💝 Donate

Your donations help me create better content and improve stream quality! If you'd like to support my work and see more of it, you can donate through any of the following:

---

## **❤️ Credits**

<img src="https://github.com/user-attachments/assets/77ff6913-e6d7-4fe0-b9a0-bf66f5e8f745" style="height: 1em; vertical-align: middle;"> [**Streamer.bot**](https://streamer.bot/) – created by [nate1280](https://github.com/nate1280)

<img src="https://github.com/user-attachments/assets/3ec8eac2-17d2-4a97-a066-e55c1e29d2c5" style="height: 1em; vertical-align: middle;"> [**TikFinity**](https://tikfinity.zerody.one/app/) – by [zerodytrash](https://github.com/zerodytrash)

Big thanks to the creators of both tools. SBfinity is built entirely on top of their work.

---

## 📞 Support

For technical support or inquiries, please contact me through my Discord channel:

- <img src="https://github.com/user-attachments/assets/99e66009-11f1-4bcc-a06f-aa5c2f90524a" style="height: 1.5em;"> **[Discord Server]([https://discord.gg/cgufFBJKY7])**

    You can ask questions in the [Discord Server](https://discord.gg/cgufFBJKY7).
    
- 🐞 **Bug Reports**
    
    Post any bug reports in the [#🐞│bug-reports channel](https://discord.com/channels/789352409473875988/1317386476501205044) in my discord page
