import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const firebaseConfig = {
  apiKey: "AIzaSyAycYq1bXG5xNJtq75pzXgGd3ONoiJczEA",
  authDomain: "mu-senior.firebaseapp.com",
  projectId: "mu-senior",
  storageBucket: "mu-senior.appspot.com",
  messagingSenderId: "430977039067",
  appId: "1:430977039067:web:08a7760c600730f688eafe",
  measurementId: "G-FYFV5L0F2J",
};

admin.initializeApp(firebaseConfig);

export const sendNotificaton = functions.https.onRequest(async (req, res) => {
  const token = req.body.token;
  const payload = {
    notification: {
      title: "Firebase test trigger",
      body: `is now following you.`,
    },
  };
  const result = await admin.messaging().sendToDevice(token, payload);
  res.send(result);
});

const buildNotification = (data: any) => {
  const customData = data.customData;
  const childName = customData.childname;
  const time = customData.time;
  const vaccineId = customData.vaccineId;
  return {
    title: `${childName} Today ,${vaccineId}:${time}`,
  };
};
export const setNotificationByUsername = functions.https.onRequest(
  async (req, res) => {
    const username = req.body.username;
    if (!username) {
      res.status(404).send("Username not found");
      return;
    }

    try {
      const userQuery = await admin
        .firestore()
        .collection("/users")
        .doc(username)
        .get();
      const userInfo = userQuery.data();
      const appointmentsQuery = await admin
        .firestore()
        .collection("/users")
        .doc(username)
        .collection("appointments")
        .limit(3)
        .get();
      const listAppointments: any[] = [];
      appointmentsQuery.forEach((appo) => {
        listAppointments.push(buildNotification(appo.data()));
      });
      const deviceToken = userInfo?.deviceToken;
      if (deviceToken) {
        await Promise.all(
          listAppointments.map((appointment) =>
            admin.messaging().sendToDevice(deviceToken, {
              notification: {
                title: appointment.title,
              },
            })
          )
        );
      }
      res.send({
        listAppointments: listAppointments,
        userInfo,
      });
    } catch (e) {
      res.status(500).send(e);
    }
  }
);
