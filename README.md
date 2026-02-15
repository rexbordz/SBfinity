**SBfinity** is a lightweight browser-based integration that connects [Streamer.bot](https://streamer.bot/) and [TikFinity](https://tikfinity.zerody.one/app/) in real time. It listens to TikTok events via TikFinity and triggers **Custom Triggers** inside Streamer.bot — making it easy for streamers to handle TikTok events using their familiar Streamer.bot setup.

> [!NOTE]
> SBfinity does not replace TikFinity’s built-in automation features. It simply exposes basic TikTok event triggers to Streamer.bot as custom triggers. SBfinity cannot execute TikFinity’s internal actions — it’s designed only for streamers who prefer handling all logic and effects from within Streamer.bot.

⬆️ **UPDATE INSTRUCTIONS:** If you got prompted to update your SBfinity, just reimport the action [here](#-installation). If you are freshly installing SBfinity, just follow the instructions below.

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

- <img src="https://github.com/user-attachments/assets/99e66009-11f1-4bcc-a06f-aa5c2f90524a" style="height: 1.5em;"> **[Discord Server](https://discord.gg/pJWEPzbdfa)**

    You can ask questions in the [🗨️❓│support forum](https://discord.com/channels/789352409473875988/1327979423835623464) or  [#❓│support channel](https://discord.com/channels/789352409473875988/800788710789742622)
    
- 🐞 **Bug Reports**
    
    Post any bug reports in the [#🐞│bug-reports channel](https://discord.com/channels/789352409473875988/1317386476501205044) in my discord page
