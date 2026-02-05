const sourceLanguage = document.getElementById("sourceLanguage");
const targetLanguage = document.getElementById("targetLanguage");
const textToTranslate = document.getElementById("textToTranslate");
const translateBtn = document.getElementById("translateBtn");
const resultBox = document.getElementById("resultBox");

translateBtn.addEventListener("click", async () => {
  const text = textToTranslate.value.trim();

  if (!text) {
    resultBox.textContent = "Please enter some text to translate.";
    resultBox.classList.add("empty");
    return;
  }

  if (sourceLanguage.value === targetLanguage.value) {
    resultBox.textContent = "Source and target languages must be different.";
    resultBox.classList.add("empty");
    return;
  }

  translateBtn.disabled = true;
  translateBtn.textContent = "Translating...";
  resultBox.innerHTML = '<div class="loading">Translating...</div>';
  resultBox.classList.remove("empty");

  try {
    const langPair = `${sourceLanguage.value}|${targetLanguage.value}`;
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langPair}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Translation failed. Please try again.");
    }

    const data = await response.json();

    if (data.responseStatus !== 200) {
      throw new Error(data.responseDetails || "Translation failed");
    }

    resultBox.textContent = data.responseData.translatedText;
    resultBox.classList.remove("empty");
  } catch (error) {
    resultBox.innerHTML = `<div class="error">Error: ${error.message}<br>Please check your internet connection and try again.</div>`;
    resultBox.classList.add("empty");
  } finally {
    translateBtn.disabled = false;
    translateBtn.textContent = "Translate";
  }
});

textToTranslate.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.ctrlKey) {
    translateBtn.click();
  }
});
