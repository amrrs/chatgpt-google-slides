// Constants
const API_KEY = "sk-Lixxxxx";
const MODEL_TYPE = "gpt-3.5-turbo"; //chatGPT model

// Creates a custom menu in Google Slides
function onOpen() {
    SlidesApp.getUi().createMenu("ChatGPT")
        .addItem("Generate Prompt", "generatePrompt")
        .addItem("Generate Tweets", "generateTweets")
        .addToUi();
  }
  
  // Generates prompt based on the selected text and adds it to a slide
  function generateTweets() {
    const presentation = SlidesApp.getActivePresentation();
    const selectedText = presentation.getSelection().getCurrentPage().getShapes()[0].getText().asString();
    const slide = presentation.getSelection().getCurrentPage();
    const prompt = "Generate 3 Tweets on " + selectedText;
    const temperature = 0;
    const maxTokens = 2060;
  
    const requestBody = {
      model: MODEL_TYPE,
      messages: [{role: "user", content: prompt}],
      temperature,
      max_tokens: maxTokens,
    };
  
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_KEY,
      },
      payload: JSON.stringify(requestBody),
    };
  
  
    const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions", requestOptions);
    const responseText = response.getContentText();
    const json = JSON.parse(responseText);
    const generatedText = json['choices'][0]['message']['content'];
    Logger.log(generatedText);
    slide.insertTextBox(generatedText.toString());
  }

  // Generates prompt based on the selected text and adds it to a slide
  function generatePrompt() {
    const presentation = SlidesApp.getActivePresentation();
    const selectedText = presentation.getSelection().getCurrentPage().getShapes()[0].getText().asString();
    const slide = presentation.getSelection().getCurrentPage();
    const prompt = "Generate 3 points on " + selectedText;
    const temperature = 0;
    const maxTokens = 2060;
  
    const requestBody = {
      model: MODEL_TYPE,
      messages: [{role: "user", content: prompt}],
      temperature,
      max_tokens: maxTokens,
    };
  
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_KEY,
      },
      payload: JSON.stringify(requestBody),
    };
  
  
    const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions", requestOptions);
    const responseText = response.getContentText();
    const json = JSON.parse(responseText);
    const generatedText = json['choices'][0]['message']['content'];
    Logger.log(generatedText);
    slide.insertTextBox(generatedText.toString());
  }

