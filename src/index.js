import './style.css';

const axios = require('axios');
const cors = require('cors');

// ======================= WEBSITE DATA ===============================
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;
const siteBaseUrl = 'https://apis-sandbox.fedex.com/';

const url = siteBaseUrl + 'oauth/token/';
const payload = {
  grant_type: 'client_credentials',
  client_id: 'l7a481957eb38c425dbc232ea2b4c78537',
  client_secret: 'd3a44b9fc45b4c0b976fe2ac3f02ff66',
};
async function auth() {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', 'l7a481957eb38c425dbc232ea2b4c78537');
  params.append('client_secret', 'd3a44b9fc45b4c0b976fe2ac3f02ff66');

  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP error, status: ${response.status}`);
    }

    console.log('...got response');
  } catch (error) {
    console.error('Error while fetching:', error);
  }
}

console.log('testing auth function:');
auth();

// 'input' refers to JSON Payload

/*
let data = JSON.stringify(payload);
let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open('POST', 'https://apis-sandbox.fedex.com/oauth/token');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.send(data);
*/
