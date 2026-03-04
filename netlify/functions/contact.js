exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, message: 'Method Not Allowed' })
    };
  }

  try {
    const { name, email, company, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, message: 'Faltan campos requeridos' })
      };
    }

    console.log('Contacto recibido:', { name, email, company });

    const https = require('https');
    const emailTo = process.env.EMAIL_USER;

    const postData = JSON.stringify({
      name: name,
      email: email,
      company: company || 'No especificada',
      message: message,
      _subject: `Nuevo contacto de ${name}`,
      _template: 'table'
    });

    const options = {
      hostname: 'formsubmit.co',
      path: `/ajax/${emailTo}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    await new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
          console.log('FormSubmit response:', res.statusCode, data);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve();
          } else {
            reject(new Error('FormSubmit error: ' + res.statusCode));
          }
        });
      });
      req.on('error', (e) => {
        console.error('Request error:', e);
        reject(e);
      });
      req.write(postData);
      req.end();
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Mensaje enviado correctamente' 
      })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Mensaje recibido' 
      })
    };
  }
};
