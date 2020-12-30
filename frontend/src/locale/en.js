const vaccines = require("./EN/vaccines");
const diseases = require("./EN/diseases");
const packagers = require("./EN/packager");
export default {
  vaccines,
  diseases,
  packagers,
  home: "Home",
  vaccine: "Vaccine",
  news: "News",
  vaccineList: "Vaccine List",
  family: "Family",
  login: "login",
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
  noEvent: "There is no any event",
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
    roadmap: "Vaccine Roadmap",
    search: "Search",
    sortBy: "Sorted by",
    filterBy: "Filtered by",
    unspecified: "Unspecified",
    overdue: "Overdue",
    vaccinated: "Vaccinated",
    vaccinating: "Vaccinating",
    all: "All vaccines",
    vaccineName: "Vaccine name",
    diseaseName: "Disease",
    date: "Date",
    placeHolderSearch: "Enter Search Query",
    confirmLogout: "Do you want to logout?",
    logoutSuccess: "Logout successful",
    saveInfo: "Saved Your Information",
    success: "Successful",
    confirmEdit: "Are you sure you want to update your information?",
    continue: "Continue",
    yes: "Yes",
    no: "No"
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
  labelError: {
    required: "{} is required"
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
    save: "Save",
    logout: "Logout",
    search: "Search"
  },
  camera: {
    takePhoto: "Take a Photo",
    reset: "reset"
  }
};
