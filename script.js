const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Propmt to select media stream, pass to video element, then plat

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch error here
    console.log("Whooops, error here", error);
  }
}

button.addEventListener("click", async () => {
  // disable button
  button.disabled = true;
  //   Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset button
  button.disabled = false;
});

// On load
selectMediaStream();
