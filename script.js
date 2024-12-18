function handleCredentialResponse(response) {
    
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.

    const responsePayload = decodeJwtResponse(response.credential);
    // console.log(responsePayload);

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('First Name: ' + responsePayload.given_name);
    console.log('Last Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);
    console.log("Email Verified: " + responsePayload.email_verified);      
}