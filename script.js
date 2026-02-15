import { allowedGifts } from "./giftList.js";

// Settings configuration
const urlParams = new URLSearchParams(window.location.search);
const sbAddress = urlParams.get("address") || "127.0.0.1";
const sbPort = urlParams.get("port") || "8080";

// Global variables
const streamerbot = "streamerbot";
const tikfinity = "tikfinity";
const sbfinity = "SBfinity";
let streamerbotConnected = false;
let tikfinityConnected = false;
let notifications = document.querySelector('.notifications');

// Streamer.Bot setup
const sbClient = new StreamerbotClient({
  host: sbAddress,
  port: sbPort,

  onConnect: (data) => {
    if (!streamerbotConnected){
      streamerbotConnected = true;
      console.debug(`✅ Streamer.bot connected to ${sbAddress}:${sbPort}`)
      console.debug(data);
      createToast('success', 'fa-solid fa-circle-check', sbfinity, 'Connected to Streamer.bot', streamerbot);
    }
  },

  onDisconnect: () => {
    if (streamerbotConnected) {
      streamerbotConnected = false;
      console.warn("❌ Streamer.bot disconnected");
      createToast('warning', 'fa-solid fa-triangle-exclamation', sbfinity, 'Disconnected from Streamer.bot', streamerbot);
    }  
  }
});

// TikFinity setup
function connectTikFinity() {
  const socket = new WebSocket("ws://localhost:21213");

  socket.onopen = () => {
    if (!tikfinityConnected) {
      tikfinityConnected = true;
      console.log("✅ Connected to TikFinity");
      createToast('success', 'fa-solid fa-circle-check', sbfinity, 'Connected to Tikfinity', tikfinity);
    }
  };

  socket.onclose = () => {
    if (tikfinityConnected) {
      tikfinityConnected = false;
      console.warn("❌ Disconnected from TikFinity");
      createToast('warning', 'fa-solid fa-triangle-exclamation', sbfinity, 'Disconnected from Tikfinity', tikfinity);
    }
    setTimeout(connectTikFinity, 3000);
  };

  socket.onerror = (err) => {
    console.error("TikFinity WebSocket error:", err);
  };

  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      

      switch (data.event) {
        case "gift": {
          const gift = data.data;
          // TikTok streak handling
          if (gift.giftType === 1 && !gift.repeatEnd) return;

          // ⭐ ALWAYS fire general gift trigger
          sbClient.executeCodeTrigger("tikfinity.gift", gift);
          
          const rawName = gift.giftName || "";

          // ⭐ Step 1 — Check Allowed List
          const setKey = normalizeGiftForSet(rawName);
          if (!allowedGifts.has(setKey)) return;

          // ⭐ Step 2 — Build Trigger Name
          const normalized = normalizeGiftTriggerName(rawName);
          const amount = gift.diamondCount;

          const eventName = `tikfinity.gift.${normalized}_${amount}`;

          console.debug(
            `${gift.nickname || gift.uniqueId} sent ${rawName} (${amount})`
          );

          sbClient.executeCodeTrigger(eventName, gift);

          break;
        }

        case "follow": {
          const follow = data.data;
          console.debug(`${follow.nickname || follow.uniqueId} followed!`);
          sbClient.executeCodeTrigger("tikfinity.follow", follow);
          break;
        }

        case "subscribe": {
          const sub = data.data;
          console.debug(`${sub.nickname || sub.uniqueId} subscribed!`);
          sbClient.executeCodeTrigger("tikfinity.subscribe", sub);
          break;
        }

        case "like": {
          const like = data.data;
          console.debug(`${like.nickname || like.uniqueId} sent ${like.likeCount} likes`);
          sbClient.executeCodeTrigger("tikfinity.like", like);
          break;
        }

        case "share": {
          const share = data.data;
          console.debug(`${share.nickname || share.uniqueId} shared the stream!`);
          sbClient.executeCodeTrigger("tikfinity.share", share);
          break;
        }

        case "chat": {
          const chat = data.data;
          console.debug(`${chat.nickname || chat.uniqueId} ➝ ${chat.comment}`);
          sbClient.executeCodeTrigger("tikfinity.chat", chat);
          break;
        }

        case "envelope": {
          const envelope = data.data;
          console.debug('envelope received', data);
          sbClient.executeCodeTrigger("tikfinity.envelope", envelope);
          break;
        }

        case "roomPin": {
          const roomPin = data.data;
          console.debug('A message has been pinned.');
          sbClient.executeCodeTrigger("tikfinity.roomPin", roomPin);
          break;
        }

        case "streamEnd": {
          const streamEnd = data.data;
          console.log('Stream Ended.');
          sbClient.executeCodeTrigger("tikfinity.streamEnd", streamEnd);
          break;
        }

        default:
          break;
      }
    } catch (err) {
      console.error("Failed to process TikFinity event:", err);
    }
  };
}

// Toast notifications for connections
function createToast(type, icon, title, text, source){
    let newToast = document.createElement('div');
    let logo;
    if (source === "streamerbot") {
        logo = 'assets/images/streamerbot-logo.png';
    } else if (source === "tikfinity") {
        logo = "assets/images/tikfinity-logo.png";
    }

    newToast.innerHTML = `
        <div class="toast ${type}">
            <i class="${icon}"></i>
            <div class="content">
                <div class="title">${title}</div>
                <span>${text}</span>
            </div>
            <img class="toast-logo" src="${logo}" alt="${source} logo">
        </div>`;
    notifications.appendChild(newToast);
    newToast.timeOut = setTimeout(
        ()=>newToast.remove(), 3000
    )
}

function normalizeGiftTriggerName(name = "") {
  return name
    .toLowerCase()
    .trim()
    .replace(/\+/g, " plus ")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function normalizeGiftForSet(name = "") {
  return name.toLowerCase().trim();
}

connectTikFinity();
