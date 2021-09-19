
    var config = {
        // should be same as the id of the container created on 3rd step
        containerID: "sawo-container",
        // can be one of 'email' or 'phone_number_sms'
        identifierType: "email",
        // Add the API key copied from 2nd step
        apiKey: "48cbdab8-ae48-45fe-9838-75ef2c2eb4ce",
        // Add a callback here to handle the payload sent by sdk
        onSuccess: (payload) => {
            window.location = "./achievers-spot.html"
        },
    };
    var sawo = new Sawo(config);
    sawo.showForm();

