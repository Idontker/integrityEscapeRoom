const gen_chat_ele = (left, text, time) => {
  // Create the outer div element
  var outerDiv = document.createElement("div");
  outerDiv.classList.add("flex", "flex-col");
  if (left) {
    outerDiv.classList.add("items-start");
  } else {
    outerDiv.classList.add("items-end");
  }

  // Create the inner div element
  var innerDiv = document.createElement("div");
  innerDiv.classList.add("rounded-lg", "p-4", "text-sm", "leading-snug");
  if (left) {
    innerDiv.classList.add("bg-gray-100", "text-back");
  } else {
    innerDiv.classList.add("bg-gray-950", "text-white");
  }

  // Create the text node and append it to the inner div
  var textNode = document.createElement("div");
  textNode.innerHTML = text;
  innerDiv.appendChild(textNode);

  // Create the span element
  var spanElement = document.createElement("span");
  spanElement.classList.add(
    "block",
    "text-xs",
    "text-gray-500",
    "dark:text-gray-400"
  );

  // Create the text node for the span and append it to the span element
  var spanTextNode = document.createTextNode(time);
  spanElement.appendChild(spanTextNode);

  // Append the span element to the inner div
  innerDiv.appendChild(spanElement);

  // Append the inner div to the outer div
  outerDiv.appendChild(innerDiv);

  return outerDiv;
};

const title_element = document.getElementById("title");
const chat_element = document.getElementById("chat");
const description = document.getElementById("description");
const protocol_element = document.getElementById("protocol");
const input_text = document.getElementById("input-text");

const init_chat = (chat) => {
  chat.forEach((ele) => {
    chat_element.appendChild(gen_chat_ele(ele.left, ele.text, ele.time));
  });
};

const init_protocol = (protocol) => {
  protocol_element.innerHTML = "";
  protocol.forEach((ele) => {
    protocol_element.innerHTML += `<div class="col-span-1 border-t-2 border-gray-400 pb-4">${ele.who}</div>`;
    protocol_element.innerHTML += `<div class="col-span-2 border-t-2 border-l-2 border-gray-400 pl-2 pb-4">${ele.what}</div>`;
  });
};

const init_description = (description_text) => {
  description.innerHTML = description_text;
};

let sendText = () => {};

const setup_sendText = (checker) => {
  sendText = () => {
    let text = input_text.value;
    if (checker(text)) {
      go_confetti();
    } else {
      alert("Leider hat die Authorisierung nicht funktioniert.");
    }
  };
};

const init_auth = (title, description, protocol, chat, checker) => {
  title_element.innerText = title;
  init_description(description);
  init_chat(chat);
  init_protocol(protocol);
  setup_sendText(checker);
};
