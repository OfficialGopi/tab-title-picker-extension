document.getElementById("fetchBtn").addEventListener("click", async () => {
  let tabs = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  const title = tabs[0].title;
  document.getElementById("titleDisplay").textContent = title;
});
