exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ success: false, message: 'Method Not Allowed' })
    };
  }

  try {
    const { name, email, company, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, message: 'Faltan campos requeridos' })
      };
    }

    // Enviar a FormSubmit.co (servicio gratuito)
    const response = await fetch('https://formsubmit.co/ajax/' + process.env.EMAIL_USER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        company: company || 'No especificada',
        message: message,
        _subject: `Nuevo contacto de ${name}`,
        _template: 'table'
      })
    });

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: 'Mensaje enviado' })
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, message: 'Error al enviar' })
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Error: ' + error.message })
    };
  }
};
