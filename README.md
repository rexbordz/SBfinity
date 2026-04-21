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

⬆️ **rexbordz.dll (Optional but recommended)** <br>
Downloading rexbordz.dll file is highly recommended  to make sure you get notified with the latest Streamer.bot action update. [Download here!](https://github.com/rexbordz/SBfinity/releases/tag/1.0.0)

---

## **🚀 Installation**

1. Save **rexbordz.dll** in 📂**Streamerbot/dlls**. If you don’t have a dlls folder yet, just create one.
    
    <img width="697" height="259" alt="image" src="https://github.com/user-attachments/assets/335e3494-bf75-4ea0-81ef-3f3095d0369c" />

2. **Open Streamer.bot**
    
    Make sure WebSocket Server is **enabled**:
    
    <img width="998" height="693" alt="image" src="https://github.com/user-attachments/assets/19ed030d-34df-4e49-b9a3-87bd90737a73" />

    No need to change address or port unless you really want to for some reason. You can check the [Custom Settings](https://www.notion.so/SBfinity-241088f4f93e80028773ff595fa0d5fa?pvs=21) section if you want to connect to a custom address or port.


3. **Import Custom Triggers**
    - In Streamer.bot, click `Import` and paste this:
        
        ```
        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
        ```
        
    - Press `Yes`, if prompted to auto-run. Otherwise, you would need to restart Streamer.bot to see the new triggers.
        
        <img width="460" height="142" alt="image" src="https://github.com/user-attachments/assets/76f0dc81-d685-42da-95e4-244a50f882b8" />

4. **Add the Browser Source in OBS (or any broadcasting software you use that allows adding a browser source)**
    - Add this URL as a **browser source** in OBS to any scene. This source is invisible, so you don't need to worry about which scene to add it to. As long as it is added and enabled, it continually listens for TikTok events.
        
        ```
        https://rexbordz.github.io/SBfinity/
        ```
        
        <img width="1201" height="974" alt="image" src="https://github.com/user-attachments/assets/1635f95b-61b1-4606-b953-226bc5a7b7d0" />
        
    - ❌ **DO NOT** enable `Shutdown source when not visible` or else it will cause some problems.
5. **Open TikFinity**
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
