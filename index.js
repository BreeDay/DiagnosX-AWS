


var AWS = require("aws-sdk");
AWS.config.loadFromPath('./config.json');

var comprehendmedical = new AWS.ComprehendMedical({
  apiVersion: '2018-10-30'
});

var params = {
  Text: "Dewayne Johnson is a 50 yo man with h/o HTN, DM, and sleep apnea who presented to the ED complaining of chest pain. He states that the pain began the day before and consisted of a sharp pain that lasted around 30 seconds, followed by a dull pain that would last around 2 minutes. The pain was located over his left chest area somewhat near his shoulder. The following morning (of his presentation to the ED) he noticed the pain as he was getting out of bed. Once again it was a dull pain, preceded by a short interval of a sharp pain. The patient did experience some tingling in his right arm after the pain ceased. He continued to have several episodes of the pain throughout the morning, so his daughter-in-law decided to take him to the ED around 12:30pm. At the ED the patient was given nitroglycerin, which he claims helped alleviate the pain somewhat. Mr Johnson has not experienced any shortness of breath, nausea, or diaphoresis during these episodes of pain. He has never had chest pain in the past. His physical examination in the ED was normal except tachycardia. He will be observed overnight and if his condition continues to improve he will be discharged home with a diagnosis of angina and cardiology follow up "
}


comprehendmedical.detectEntitiesV2(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

