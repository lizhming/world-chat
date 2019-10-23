"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const cors = require("cors");
const corsHandler = cors({ origin: true });
const moment = require("moment");
const admin = require("firebase-admin");
//import * as firebase from 'firebase';
//import "firebase/firestore";
const twilio = require("twilio");
const sgMail = require("@sendgrid/mail");
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
admin.initializeApp({
    databaseURL: "https://letstalk-205602.firebaseio.com",
    projectId: "letstalk-205602",
    storageBucket: "letstalk-205602.appspot.com",
});
const db = admin.firestore();
const accountSid = 'ACc32a189e66e42dd7c1aaa1ff4341728f';
const authToken = '69115a88deee268cab375857af7eee28';
const client = twilio(accountSid, authToken);
sgMail.setApiKey('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');
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.forgotPasswordEmail = functions.https.onRequest((req, res) => {
    corsHandler(req, res, () => {
        if (req.method !== "POST") {
            res.status(400).send('Please send a POST request');
            return;
        }
        if (req.body.email !== null && req.body.email !== '' && req.body.email !== undefined) {
            db.collection('users').where('email', '==', req.body.email).get().then(querySnapshot => {
                console.log(querySnapshot.empty);
                if (!querySnapshot.empty) {
                    const code = generate();
                    let doc_id;
                    querySnapshot.forEach((doc) => {
                        //console.log(doc.id, " => ", doc.data());
                        doc_id = doc.id;
                    });
                    const template = `<html>
                    <head>
                    </head>
                    <body style="font-family: Arial; font-size: 12px;">
                    <div>
                        <p>
                            You have requested a forgot password from Word Chat App.
                        </p>
                        <p>
                            Please ignore this email if you did not request a password change.
                        </p>
                        <p>
                            <b>Follow this code: ${code} to change your password.</b>
                        </p>
                    </div>
                    </body>
                    </html>`;
                    const msg = {
                        to: req.body.email,
                        from: 'support@worldchatweb.com',
                        subject: 'World Chat Forgot Password',
                        html: template
                    };
                    const obj = {
                        $id: doc_id,
                        emailorphone: req.body.email,
                        forgotPasswordTempCodes: code,
                        hasConfirmed: false,
                        date: moment().valueOf()
                    };
                    db.collection('forgotPasswordTempCodes').add(obj).then((docRef) => {
                        console.log("Document written with ID: ", docRef.id);
                        sgMail.send(msg).then(responce => {
                            res.json({
                                success: true,
                                message: `Your Email ${req.body.email} mail sent successfully, if you not found into inbox, please check into spam.`
                            });
                        }).catch(err => {
                            res.json({
                                success: false,
                                message: err
                            });
                        });
                    }).catch((error) => {
                        console.error("Error adding document: ", error);
                    });
                }
                else {
                    res.json({
                        success: false,
                        message: "Your Email not found"
                    });
                }
            }).catch(err => {
                res.json({
                    success: false,
                    message: err
                });
            });
        }
        else {
            res.json({
                success: false,
                message: "Email not found..."
            });
        }
    });
});
exports.forgotPasswordPhone = functions.https.onRequest((req, res) => {
    corsHandler(req, res, () => {
        console.log(req.body);
        console.log(req.body);
        if (req.method !== "POST") {
            // res.status(400).send('Please send a POST request');
            res.status(400).send('Error');
            return;
        }
        if (req.body.phone !== null && req.body.phone !== '' && req.body.phone !== undefined) {
            db.collection('users').where('fullPhone', '==', req.body.phone).get().then(querySnapshot => {
                if (!querySnapshot.empty) {
                    const code = generate();
                    let doc_id;
                    querySnapshot.forEach((doc) => {
                        doc_id = doc.id;
                    });
                    const message = `You have requested a forgot password from Word Chat App. please use code: ${code} to change your password.`;
                    const obj = {
                        $id: doc_id,
                        emailorphone: req.body.phone,
                        forgotPasswordTempCodes: code,
                        hasConfirmed: false,
                        date: moment().valueOf()
                    };
                    db.collection('forgotPasswordTempCodes').add(obj).then((docRef) => {
                        console.log("Document written with ID: ", docRef.id);
                        client.messages.create({
                            body: message,
                            from: '+16503185332',
                            to: req.body.phone
                        }).then(msg => {
                            res.json({
                                success: true,
                                message: `Your Phone No ${req.body.phone} sms sent successfully`
                            });
                        }).catch(error => {
                            res.json({
                                success: false,
                                message: error.message
                            });
                        });
                    }).catch((error) => {
                        console.error("Error adding document: ", error);
                    });
                }
                else {
                    res.json({
                        success: false,
                        message: "Your Phone not found"
                    });
                }
            }).catch(err => {
                res.json({
                    success: false,
                    message: err
                });
            });
        }
        else {
            res.json({
                success: false,
                message: "Phone no not found..."
            });
        }
    });
});
function generate() {
    return Math.floor(Math.random() * 9000) + 1000;
}
exports.sendMessage = functions.https.onRequest((req, res) => {
    // response.send("Hello from Firebase!");
    corsHandler(req, res, () => {
        const db = admin.firestore();
        // let newMessage = req.body.message;
        // let conversation = req.body.conversation;
        let tokens = req.body.tokens;
        // console.log(req.body.message);
        // let readBy = req.body.readBy;
        // newMessage.time = moment.utc().format('YYYY-MM-DD HH:mm:ss')
        // db.collection('conversations').doc(conversation.$id).collection('messages').add(newMessage);
        // db.collection('conversations').doc(conversation.$id).update({
        //   lastMessage: newMessage,
        //   readBy: readBy
        // });
        if (tokens && tokens.length) {
            tokens.forEach((token) => {
                const payload = {
                    notification: {
                        sound: 'default',
                        tag: 'World Chat Message',
                        title: 'World Chat',
                        body: 'New message received!'
                    }
                };
                if (token && token.language && token.name) {
                    payload.notification.title = token.name;
                    if (req.body.message && req.body.message.message) {
                        payload.notification.body = req.body.message.message[token.language];
                    }
                }
                admin.messaging().sendToDevice(token.token || token, payload);
            });
            setTimeout(() => {
                res.status(200).send(JSON.stringify({ data: 'Sent Notification' }));
            }, 400);
        }
        else {
            res.status(200).send(JSON.stringify({ data: 'No Tokens' }));
        }
    });
});
// exports.sendMessage = functions.https.onRequest((req, res) => {
//   // response.send("Hello from Firebase!");
//   corsHandler(req, res, () => {
//     const db = admin.firestore();
//
//     // let newMessage = req.body.message;
//     // let conversation = req.body.conversation;
//     let tokens = req.body.tokens;
//
//     client.messages
//       .create({
//         body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//         from: '+15017122661',
//         to: '+15558675310'
//       })
//       .then(message => console.log(message.sid))
//       .done();
//
//     res.status(200).send(JSON.stringify({data: 'Sent Notification'}))
//
//   })
// })
//# sourceMappingURL=index.js.map