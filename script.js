let streamerbotConnected = false;
let tikfinityConnected = false;

// Global sbClient so we can use it in other functions too
let sbClient = null;

// DOM elements
const waitingSB = document.getElementById("waiting-streamerbot");
const successSB = document.getElementById("success-streamerbot");
const waitingTF = document.getElementById("waiting-tikfinity");
const successTF = document.getElementById("success-tikfinity");

// Show green box and hide red box
function showSuccess(source) {
  if (source === "streamerbot") {
    waitingSB.classList.add("fade-out");
    setTimeout(() => {
      waitingSB.classList.add("hidden");
      successSB.classList.remove("hidden", "fade-out");

      // Fade green box after 2 seconds
      setTimeout(() => {
        successSB.classList.add("fade-out");
      }, 2000);
    }, 500);
  }

  if (source === "tikfinity") {
    waitingTF.classList.add("fade-out");
    setTimeout(() => {
      waitingTF.classList.add("hidden");
      successTF.classList.remove("hidden", "fade-out");

      // Fade green box after 2 seconds
      setTimeout(() => {
        successTF.classList.add("fade-out");
      }, 2000);
    }, 500);
  }
}

// Reset layout if disconnected
function updateStatusBoxes() {
  if (!streamerbotConnected) {
    waitingSB.classList.remove("hidden", "fade-out");
    successSB.classList.add("hidden");
  }

  if (!tikfinityConnected) {
    waitingTF.classList.remove("hidden", "fade-out");
    successTF.classList.add("hidden");
  }
}

// Streamer.Bot setup
function connectStreamerbotClient() {
  sbClient = new StreamerbotClient();
  sbClient.socket.onopen = () => {
    if (!streamerbotConnected) {
      streamerbotConnected = true;
      console.log("✅ Connected to Streamer.Bot");
      showSuccess("streamerbot");
    }
  };

  sbClient.socket.onclose = () => {
    if (streamerbotConnected) {
      console.warn("❌ Disconnected from Streamer.Bot");
    }
    streamerbotConnected = false;
    updateStatusBoxes();
    setTimeout(connectStreamerbotClient, 2000);
  };
}

// TikFinity setup
function connectTikFinity() {
  const socket = new WebSocket("ws://localhost:21213");

  socket.onopen = () => {
    if (!tikfinityConnected) {
      tikfinityConnected = true;
      console.log("✅ Connected to TikFinity");
      showSuccess("tikfinity");
    }
  };

  socket.onclose = () => {
    if (tikfinityConnected) {
      console.warn("❌ Disconnected from TikFinity");
    }
    tikfinityConnected = false;
    updateStatusBoxes();
    setTimeout(connectTikFinity, 2000);
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
          if (gift.giftType === 1 && !gift.repeatEnd) return;
          console.log(`${gift.nickname || gift.uniqueId} sent ${gift.giftName} x${gift.repeatCount}`);
          sbClient.executeCodeTrigger("tikfinity.gift", gift);
          break;
        }

        case "follow": {
          const follow = data.data;
          console.log(`${follow.nickname || follow.uniqueId} followed!`);
          sbClient.executeCodeTrigger("tikfinity.follow", follow);
          break;
        }

        case "subscribe": {
          const sub = data.data;
          console.log(`${sub.nickname || sub.uniqueId} subscribed!`);
          sbClient.executeCodeTrigger("tikfinity.subscribe", sub);
          break;
        }

        case "like": {
          const like = data.data;
          console.log(`${like.nickname || like.uniqueId} sent ${like.likeCount} likes`);
          sbClient.executeCodeTrigger("tikfinity.like", like);
          break;
        }

        case "share": {
          const share = data.data;
          console.log(`${share.nickname || share.uniqueId} shared the stream!`);
          sbClient.executeCodeTrigger("tikfinity.share", share);
          break;
        }

        case "chat": {
          const chat = data.data;
          console.log(`${chat.nickname || chat.uniqueId} ➝ ${chat.comment}`);
          sbClient.executeCodeTrigger("tikfinity.chat", chat);
          break;
        }

        case "envelope": {
          const envelope = data.data;
          console.log('envelope received', data);
          sbClient.executeCodeTrigger("tikfinity.envelope", envelope);
          break;
        }

        case "roomPin": {
          const roomPin = data.data;
          console.log('A message has been pinned.');
          sbClient.executeCodeTrigger("tikfinity.roomPin", roomPin);
          break;
        }

        case "connected": {
          const connected = data.data;
          console.log('Tikfinity has successfully connected to your TikTok LIVE!');
          sbClient.executeCodeTrigger("tikfinity.connected", connected);
          break;
        }

        case "disconnected": {
          const disconnected = data.data;
          console.log('Oh no! Tikfinity got disconnected from your TikTok LIVE.');
          sbClient.executeCodeTrigger("tikfinity.disconnected", disconnected);
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

// Run both
connectStreamerbotClient();
connectTikFinity();
