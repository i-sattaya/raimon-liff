function createUniversalLink() {
  const link1 = liff.permanentLink.createUrl()
  document.getElementById("universalLink1").append(link1)

  liff.permanentLink.setExtraQueryParam('param=9')
  const link2 = liff.permanentLink.createUrl()
  document.getElementById("universalLink2").append(link2)
}

async function shareMsg() {
  await liff.shareTargetPicker([
    {
      type: "text",
      text: "This message was sent by ShareTargetPicker"
    }
  ])
}

function logOut() {
  liff.logout()
  window.location.reload()
}

function closed() {
  liff.closeWindow()
}

async function scanCode() {
  const result = await liff.scanCode()
  document.getElementById("scanCode").append(result.value)
}

function openWindow() {
  liff.openWindow({
    url: "https://line.me",
    external: true
  })
}

async function getFriendship() {
  const friend = await liff.getFriendship()
  document.getElementById("friendship").append(friend.friendFlag)
  if (!friend.friendFlag) {
    if (confirm("คุณยังไม่ได้เพิ่ม Bot เป็นเพื่อน จะเพิ่มเลยไหม?")) {
      window.location = "https://line.me/R/ti/p/@YOUR-BOT-ID"
    }
  }
}

async function sendMsg() {
  if (liff.getContext().type !== "none") {
    await liff.sendMessages([
      {
        "type": "sticker",
        "stickerId": 1,
        "packageId": 1
      }
    ])
    alert("Message sent")
  }
}

function getContext() {
  if (liff.getContext() != null) {
    document.getElementById("type").append(liff.getContext().type)
    document.getElementById("viewType").append(liff.getContext().viewType)
    document.getElementById("utouId").append(liff.getContext().utouId)
    document.getElementById("roomId").append(liff.getContext().roomId)
    document.getElementById("groupId").append(liff.getContext().groupId)
  }
}

async function getUserProfile() {
  const profile = await liff.getProfile()
  document.getElementById("pictureUrl").src = profile.pictureUrl
  document.getElementById("userId").append(profile.userId)
  document.getElementById("statusMessage").append(profile.statusMessage)
  document.getElementById("displayName").append(profile.displayName)
  document.getElementById("decodedIDToken").append(liff.getDecodedIDToken().email)
}

function getEnvironment() {
  document.getElementById("os").append(liff.getOS())
  document.getElementById("language").append(liff.getLanguage())
  document.getElementById("version").append(liff.getVersion())
  document.getElementById("accessToken").append(liff.getAccessToken())
  document.getElementById("isInClient").append(liff.isInClient())
  if (liff.isInClient()) {
    document.getElementById("btnLogOut").style.display = "none"
  } else {
    document.getElementById("btnMsg").style.display = "none"
    document.getElementById("btnScanCode").style.display = "none"
    document.getElementById("btnClose").style.display = "none"
  }
}
