import { decodeJwt } from 'https://cdn.jsdelivr.net/npm/jose@4.14.4/+esm';

  function decodeJwtResponse(jwt) {
    try {
      const decodedPayload = decodeJwt(jwt);
    //   console.log('Decoded Payload:', decodedPayload);
      return decodedPayload;
    } catch (error) {
      alert('Error decoding JWT:', error.message);
      return null;
    }
  }

// TO MAKE FUNCTION GLOBAL
window.decodeJwtResponse = decodeJwtResponse;