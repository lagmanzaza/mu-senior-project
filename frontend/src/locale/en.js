const vaccines = require("./EN/vaccines");
const diseases = require("./EN/diseases");
const packagers = require("./EN/packager");
export default {
  vaccines,
  diseases,
  packagers,
  home: "Home",
  vaccine: "Vaccine",
  vaccineList: "Vaccine List",
  family: "Family",
  packager: "Packager",
  setting: "Settings",
  event: "events",
  welcome: "Welcome Dear,",
  recentActivity: "Recent Activity",
  language: "Language",
  accountSetting: "Account Setting",
  appointmentSuggestion: "Appointment Suggestion",
  category: "Categories",
  children: "Children",
  adult: "Adult",
  ordering: "Order by",
  others: "Others",
  networkMode: {
    offline: "You are Offline now",
    online: "You are Online now"
  },
  vaccineDetailsPage: {
    title: "Vaccine Description",
    appointmentBtn: "Create an appointment",
    recordBtn: "Record Vaccine",
    description: "Short Description",
    suggestedAge: "Suggested Age",
    who: "Who Should Be Vaccinated ",
    warning: "Warning/Who should not use",
    vaccineReference:
      "Referrence: Centers for Disease Control and Prevention (www.cdc.gov)"
  },
  vaccinePackagerPage: {
    title: "Vaccine Packager"
  },
  recordVaccinePage: {
    title: "Record Vaccine",
    vaccineName: "Vaccine Name",
    batchNO: "Batch Number",
    receivingDate: "Receiving Date",
    hostpitalName: "Hospital Name",
    doctorInfo: "Medical Staff Id(For Medical Staff)",
    freetext: "Note Messages",
    recordTo: "Record to",
    uploadImage: "Upload an evidence (Incluing The Batch Number)",
    submitBtn: "Submit",
    cancelBtn: "cancel",
    packageMember: "Suggested Vaccine for"
  },
  label: {
    name: "Fullname",
    birthDate: "BirthDate",
    disease: "Congenital disease",
    vaccine: "Received vaccine",
    noneCongenitalDisease: "No Congenital Disease",
    updateChildInfoTitle: "Update Family's Member Infomation",
    age: "Age",
    reporttitle: "Immunity Status",
    roadmap: "Vaccine Roadmap"
  },
  labelAddAppointment: {
    child: "child name",
    vaccineList: "list vaccines",
    date: "date",
    time: "time",
    addAppointment: "add appointment",
    note: "additional note",
    nextAppointMent: "Next Appointment",
    vcName: "Vaccine name",
    complete: "Complete",
    day: "Days"
  },
  historyPage: {
    title: "History",
    received: "Received",
    hospital: "Hospital/Clinic",
    date: "Date",
    nohistory: "doesn't take any vaccine before"
  },
  button: {
    cancel: "Cancel",
    update: "Update",
    add: "Add",
    save: "Save"
  }
};
