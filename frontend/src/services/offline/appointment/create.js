import db from "../db";

export default async data => {
  return await db.table("appointments").add(data);
};

export const toggleCreateAppointment = async (toggle, data) => {
  const vaccineId = data.vaccine;
  const childId = data.childId;
  const listFamilies = await db
    .table("families")
    .where("familyId")
    .equals(Number(childId))
    .toArray();

  const childInfo = listFamilies.find(child => child.familyId === childId);
  if (!childInfo) return;

  if (toggle) {
    const recordData = {
      childId,
      childname: childInfo.childname,
      selectedVaccines: vaccineId,
      receivingDate: data.receivingDate,
      batchNO: data.batchNO,
      hostpitalName: data.hostpitalName,
      doctorInfo: data.doctorInfo,
      freetext: data.freetext,
      recordImage: data.recordImage,
      photoDate: data.photoDate ?? new Date(),
      appointmentId: data.appointmentId
    };

    childInfo.receivedVaccines = [...childInfo.receivedVaccines, vaccineId];
    await Promise.all([
      db.table("records").add(recordData),
      db.table("appointments").update(Number(data.appointmentId), {
        dot: "green",
        status: "vaccinated"
      })
    ]);
  } else {
    childInfo.receivedVaccines = childInfo.receivedVaccines.filter(
      id => id !== vaccineId
    );
    await Promise.all([
      db.table("records").delete(data.recordId),
      db.table("appointments").update(Number(data.appointmentId), {
        dot: "gray",
        status: "in-progress"
      })
    ]);
  }
  await db.table("families").update(childId, childInfo);
};
