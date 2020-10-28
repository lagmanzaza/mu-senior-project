const vaccines = require("./TH/vaccines");
const diseases = require("./TH/diseases");
export default {
  vaccines,
  diseases,
  home: "หน้าหลัก",
  vaccine: "วัคซีน",
  vaccineList: "รายการวัคซีน",
  family: "ครอบครัว",
  packager: "แพ็กเกจวัคซีนเสริม",
  setting: "ตั้งค่า",
  event: "กิจกรรมที่ต้องทำ",
  recentActivity: "วันนัดที่กำลังจะถึงเร็วๆนี้",
  welcome: "ยินดีต้อนรับคุณ ",
  language: "ภาษา",
  accountSetting: "ตั้งค่าบัญชี",
  appointmentSuggestion: "แนะนำการนัดหมาย",
  category: "ประเภทวัคซีน",
  children: "สำหรับเด็ก",
  adult: "สำหรับผู้ใหญ่",
  sorting: "จัดเรียงวัคซีน",
  others: "อื่นๆ",
  networkMode: {
    offline: "คุณออฟไลน์อยู่",
    online: "คุณออนไลน์อยู่"
  },
  vaccineDetailsPage: {
    title: "รายละเอียดวัคซีน",
    suggestedAge: "อายุที่ควรได้รับวัคซีน",
    who: "บุคคลที่ควรได้รับวัคซีน และอายุที่ควรรับวัคซีน",
    appointmentBtn: "กำหนดวันฉีดวัคซีน",
    recordBtn: "บันทึกวัคซีน",
    description: "รายละเอียดโดยย่อ",
    warning: "คำเตือน/บุคคลที่ไม่ควรฉีด",
    vaccineReference:
      "ที่มาข้อมูล: ตำราวัคซีนและการสร้างเสริมภูมิคุ้มกันโรค ปี 2562 กรมควบคุมโรค กระทรวงสาธารณะสุข"
  },
  vaccinePackagerPage: {
    title: "แพ็กเกจวัคซีนเสริม"
  },
  recordVaccinePage: {
    title: "จดบันทึกวัคซีน",
    vaccineName: "ชื่อวัคซีน",
    batchNO: "เลขล็อตการผลิต",
    receivingDate: "วันที่ได้รับวัคซีน",
    hostpitalName: "ชื่อโรงพยาบาลที่รับวัคซีน",
    doctorInfo: "รหัสบุคลากรทางการแพทย์(สำหรับเจ้าหน้าที่)",
    freetext: "บันทึกข้อความ/รายละเอียดเพิ่มเติม",
    recordTo: "บันทึกการฉีดให้กับ",
    uploadImage: "อัพโหลดรูปภาพหลักฐานการฉีดวัคซีน (เลขล๊อตวัคซีน)",
    submitBtn: "บันทึกข้อมูล"
  },
  label: {
    name: "ชื่อ - นามสกุล",
    birthDate: "วันเกิด",
    disease: "โรคประจำตัว",
    vaccine: "วัคซีนที่เคยได้รับ",
    noneCongenitalDisease: "ไม่มีโรคประจำตัว",
    updateChildInfoTitle: "อัปเดตข้อมูลสมาชิกในครอบครัว"
  },
  labelAddAppointment: {
    child: "ชื่อเด็ก",
    vaccineList: "รายการวัคซีน",
    date: "วันที่",
    time: "เวลา",
    addAppointment: "เพิ่มการนัดหมาย",
    note: "ข้อมูลเพิ่มเติม"
  },
  button: {
    cancel: "ยกเลิก",
    update: "อัปเดต",
    add: "เพิ่ม",
    save: "บันทึก"
  },

  // FOR MOCK UI : Example of vaccine Packager
  vaccinePackages: [
    {
      packageId: "pk0001",
      packageTitle: "วัคซีนแนะนำสำหรับผู้เดินทางไปประเทศออสเตรเลีย",
      packageSubTitle: "",
      vaccineInPackage: [
        {
          vaccineId: "vc0008",
          vaccineMedicalName: "Measles Mumps and Rubella Vaccine: MMR",
          vaccineNameNormal: "วัคซีนรวมป้องกันโรคหัด-คางทูม-หัดเยอรมัน",
          shortDes:
            "เด็กทุกคนที่แข็งแรงดี ควรได้รับวัคซีนป้องกันโรคหัด-คางทูม-หัดเยอรมัน อย่างน้อย 2 ครั้ง กําหนดให้ฉีดครั้งแรกเมื่ออายุ 9-12 เดือน ส่วนเข็มที่สองแนะนําให้ฉีดเมื่ออายุ 2 ปีครึ่งการฉีดเข็มที่ 2 นี้ มีความสําคัญเพื่อเร่งสร้างภูมิคุ้มกันในเด็กที่ได้รับวัคซีนครั้งแรกแล้วไม่ได้ผล (primary failure) จากการ ฉีดเข็มแรกที่อายุ 9 เดือน ซึ่งยังมีภูมิคุ้มกันจากแม่ที่ส่งผ่านมาแต่เกิดมารบกวนการสร้างภูมิคุ้มกัน หรือ อาจพลาดโอกาสที่จะได้รับวัคซีนครั้งแรกมิฉะนั้นจะมีจํานวนเด็กที่ไม่มีภูมิต้านทานสะสมมากจนอาจเกิด การระบาดขึ้นได้ ส่วนในภาคเอกชนที่แพทย์นัดฉีดเข็มแรกที่ 12 เดือนอาจฉีดเข็มที่ 2 ที่อายุ 22 หรือ ที่ 4-6 ปีก็ได้ แต่แนะนํา 21 ปีมากกว่า เพื่อให้สอดคล้องกันทั่วประเทศ\nในกรณีที่มีการระบาดหรือเกิดความเสี่ยงต่อการติดเชื้อหัดในเด็กเล็ก สามารถให้วัคซีน เข็ม แรกได้ตั้งแต่อายุ 6 เดือน ในกรณีนี้ควรให้วัคซีนเมื่ออายุ 12 เดือน และ อายุ 22 ปี ตามปกติ และถ้า ความเสี่ยงในการสัมผัสเชื้อนี้เกิดขึ้นในเด็กที่เคยฉีดเข็มที่ 1 มาแล้ว อาจให้เข็มที่ 2 ได้เร็วขึ้นแต่ต้องห่าง จากเข็มแรกอย่างน้อย 1 เดือน แต่ควรระวังว่าในกรณีนี้เข็มที่ 2 ต้องฉีดหลังอายุ 12 เดือนขึ้นไปเท่านั้น\nในเด็กที่ติดเชื้อเอชไอวีให้ฉีดวัคซีน MMR เช่นเดียวกับเด็กปกติ ไม่จําเป็นต้องตรวจภาวะการ ติดเชื้อเอชไอวีก่อนฉีดวัคซีน MMR ทั้งนี้ยกเว้นกรณีที่มีอาการเอดส์เต็มขั้นหรือ clinical category “C” (CDC classification) หรือมีภาวะภูมิคุ้มกันบกพร่องอย่างรุนแรงหรือ immunological category “3” ซึ่ง\nมีระดับ CD4 <15% (CDC classification) 1ซึ่งไม่ควรให้ฉีดวัคซีนมีชีวิตรวมทั้งวัคซีน MMR เพราะอาจ เกิดผลแทรกซ้อนที่รุนแรงและการสร้างภูมิคุ้มกันต่อวัคซีนไม่ดี\nหญิงวัยเจริญพันธุ์ทุกคนที่แข็งแรงดี และไม่เคยได้รับวัคซีนนี้มาก่อนในวัยเด็ก ควรได้รับวัคซีน - MMR หรือ MR อย่างน้อย 1 ครั้งและควรฉีดก่อนการตั้งครรภ์ 1 เดือน\nบุคลากรทางการแพทย์ทุกคนที่ยังไม่เคยรับวัคซีน MMR มาก่อนควรได้รับ MMR หรือ MR เร็วที่สุด\n"
        },
        {
          vaccineId: "vc0011",
          vaccineMedicalName: "Hepatitis A",
          vaccineNameNormal: "ตับอักเสบเอ",
          shortDes:
            "วัคซีนไวรัสตับอักเสบเอ เป็นวัคซีนที่มีประสิทธิภาพและความปลอดภัยสูง แต่ยังไม่อยู่ในแผน ของกระทรวงสาธารณสุข การใช้วัคซีนจึงขึ้นกับการพิจารณาเป็นรายบุคคล สามารถแนะนําให้ฉีดในเด็ก ทุกคน และในผู้ใหญ่ที่ยังไม่มีภูมิคุ้มกัน ซึ่งควรตรวจเลือดเพื่อดูว่ามีภูมิคุ้มกันหรือไม่ ก่อนจะฉีด แนะนํา ให้ตรวจเลือดเฉพาะผู้ใหญ่ ไม่ต้องตรวจในเด็ก เพราะโอกาสที่เด็กจะติดเชื้อมาก่อนน้อยมาก ควรพิจารณา ให้ฉีดอย่างยิ่งในผู้ที่มีความเสี่ยงต่อโรคตับรุนแรงเช่น ผู้ที่เป็นโรคตับเรื้อรัง ควรให้วัคซีนแก่ผู้ประกอบอาหาร ผู้ที่อยู่ในสถาบันที่มีคนอยู่ด้วยกันเป็นจํานวนมาก เช่น เด็กที่อาศัยอยู่รวมกันในสถานเลี้ยงเด็กประจํา โดยเฉพาะเด็กที่มีความพิการทางสมอง ที่อาจเกิดการระบาดของโรคได้บ่อย สถานกักกัน และกองทัพ ชายรักร่วมเพศ คนที่ติดยาเสพติดทั้งชนิดฉีดและไม่ได้ฉีดเข้าเส้น\nสําหรับผู้ที่จะเดินทางไปในที่ที่มีการระบาดหรือมีความชุกของโรคสูง ควรฉีดวัคซีนอย่างน้อย 2-4 สัปดาห์ก่อนเดินทาง โดยสามารถฉีดวัคซีนชนิดเชื้อตายสําหรับป้องกันก่อนสัมผัสโรคได้ในเด็กอายุ ตั้งแต่ 6 เดือนขึ้นไป วัคซีนป้องกันตับอักเสบเอที่ให้ในเด็กอายุ 6-11 เดือนจะไม่นับเข็มนั้น และจะต้อง ให้วัคซีนอีก 2 ครั้งที่อายุ 12 เดือนขึ้นไป สําหรับผู้ที่อายุ 40 ปีขึ้นไป ผู้ที่มีภูมิคุ้มกันบกพร่อง และผู้ที่เป็น โรคตับเรื้อรัง รวมทั้งผู้ที่จะรีบเดินทางภายใน 2 สัปดาห์ ซึ่งวัคซีนจะยังไม่ทันกระตุ้นภูมิคุ้มกันได้อย่างเพียงพอ บุคคลเหล่านี้ควรได้รับทั้งวัคซีนและอิมมูโนโกลบูลิน สําหรับเด็กอายุน้อยกว่า 6 เดือน และผู้ที่ไม่สามารถ ให้วัคซีนได้ ควรได้รับอิมมูโนโกลบูลินก่อนเดินทางโดยให้อิมมูโนโกลบูลินเข้ากล้ามเนื้อ (คนละตําแหน่ง กับวัคซีน ถ้าให้วัคซีนร่วมด้วย) ในขนาด 0.1 มล./กก. สําหรับการอยู่ในพื้นที่เสี่ยงนานน้อยกว่า 1 เดือน และขนาด 0.2 มล./กก. สําหรับการอยู่ในพื้นที่เสี่ยงนานถึง 2 เดือน และให้ขนาด 0.2 มล./กก. ซ้ําทุก 2 เดือน ในกรณีที่อยู่ในพื้นที่เสี่ยงมากกว่า 2 เดือนขึ้นไป10\n"
        }
      ]
    },

    {
      packageId: "pk0002",
      packageTitle: "วัคซีนแนะนำสำหรับปี 2020",
      packageSubTitle: "",
      vaccineInPackage: [
        {
          vaccineId: "vc0018",
          vaccineMedicalName: "Dengue vaccine",
          vaccineNameNormal: "วัคซีนไข้เลือดออก",
          shortDes:
            "องค์การอนามัยโลก สมาคมโรคติดเชื้อแห่งประเทศไทย และสมาคมโรคติดเชื้อในเด็ก แห่งประเทศไทย แนะนําให้วัคซีนไข้เลือดออกสําหรับเด็กและผู้ใหญ่อายุ9-45 ปีที่เคยติดเชื้อไวรัสเดงกีมาก่อน เนื่องจากพบว่าประสิทธิภาพของวัคซีนจะสูงกว่ากลุ่มที่ไม่เคยติดเชื้อเดงกีมาก่อน นอกจากนี้ในเด็กอายุ 9-16 ปี ที่ไม่เคยติดเชื้อมาก่อน อาจเกิดโรครุนแรงได้ หากติดเชื้อหลังฉีดไปแล้ว 2-3 ปี จึงไม่แนะนําให้ฉีด ในผู้ที่ไม่เคยติดเชื้อมาก่อน\nการประเมินการติดเชื้อมาก่อนอาศัย 1) ประวัติป่วยเป็นไข้เลือดออก 2) การตรวจเลือดพบว่า มีแอนติบอดี ต่อไวรัสเด็งกี่ และ 3) อายุของผู้รับวัคซีน\nในเด็กควรซักประวัติ ร่วมกับพิจารณาตรวจเลือดเพื่อดูว่าเคยมีภูมิต่อเชื้อไวรัสไข้เลือดออกก่อน จะพิจารณาฉีดวัคซีน แต่ปัจจุบันวิธีที่เป็นมาตรฐานในการตรวจหาแอนติบอดีก่อนฉีดวัคซีนไข้เลือดออก ได้แก่การตรวจ Plague neutralization (PRNT) ยังไม่มีบริการ จึงต้องใช้การตรวจโดยชุดตรวจที่มีใช้ทั่วไป เพื่อการวินิจฉัยไข้เลือดออกเมื่อเจ็บป่วยแล้ว นํามาใช้เพื่อบอกว่าเคยติดเชื้อมาก่อนหรือไม่ ซึ่งชุดตรวจ เหล่านั้นเมื่อนํามาใช้เพื่อการนี้จะมีความแม่นยําต่ํา แต่สําหรับผู้ใหญ่ เนื่องจากมีข้อมูลจากการสํารวจ ทางระบาดวิทยาโดยการตรวจระดับภูมิคุ้มกัน พบว่าเคยมีการติดเชื้อไวรัสเดงกีแล้วมากกว่าร้อยละ 907 ดังนั้นผู้ใหญ่อาจพิจารณาฉีดวัคซีนไข้เลือดออกได้เลย\n"
        },
        {
          vaccineId: "vc0019",
          vaccineMedicalName: "Meningococcal conjugate หรือ MenACWY vaccines",
          vaccineNameNormal: "ไข้กาฬหลังแอ่น\nชนิดคอนจูเกต",
          shortDes:
            "- MCV-DT (MenactraTM) ในผู้ที่อายุ9 เดือน-55 ปี\n- MCV-CRM (MenveoTM) ในผู้ที่อายุ2-55 ปี\n- ข้อบ่งชึ้เหมือน MeningococcalPolysaccharide Vaccine ข้างต้น\n- เด็กอายุ 9-23 เดือน ฉีด 2 เข็ม ห่างกัน 3 เดือน\n- เด็กอายุ 2 ปีขึ้นไป และผู้ใหญ่ ถ้ามีความเสี่ยงต่อการไปสัมผัสโรคเท่านั้น (ข้อ 1-3) ให้ 1 เข็ม ถ้ามีความเสี่ยงเพราะม้ามไม่ทำงาน หรือขาดสารคอมพลีเม้นต์ให้ฉีด 2 เข็มห่างกัน 2 เดือน\n- เด็กอายุ 11-18 ปีแข็งแรงดีที่จะไปเรียนในประเทศที่กำหนดให้ต้องฉีด ให้ฉีด 1 เข็ม และฉีดซ้ำอีกครั้งเมื่ออายุ16 ปี ถ้าฉีดเข็มแรกก่อนอายุ 16 ปี โดยต้องห่างจากเข็มแรกอย่างน้อย 2 เดือน\n- การฉีดกระตุ้นซ้ำ ควรให้เมื่อยังมีความเสี่ยงโดยฉีด 5 ปีหลังเข็มสุดท้าย กรณีเป็นผู้มีภูมิคุ้มกันในการต้านทานเชื้อนี้บกพร่อง (ข้อ 4) ให้ฉีดทุก 5 ปี\n"
        }
      ]
    }
  ]
};
