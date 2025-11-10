// Generate Case Number
const caseNumber = "CASE-" + Math.floor(100000 + Math.random() * 900000);
document.getElementById('case-number').textContent = caseNumber;

document.getElementById('report-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const data = {
    caseNumber: caseNumber,
    name: e.target.name.value,
    age: e.target.age.value,
    location: e.target.location.value,
    description: e.target.description.value,
    physiology: e.target.physiology.value,
    intelligence: e.target.intelligence.value,
    heart: e.target.heart.value,
    soul: e.target.soul.value
  };

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFont("courier", "normal");
  doc.setFontSize(14);

  // Header
  doc.text("Department of Public Safety", 20, 20);
  doc.text("Missing Person Report", 20, 30);
  doc.text(`Case Number: ${data.caseNumber}`, 20, 40);

  // Redacted fields
  doc.text("Officer: █████████████", 20, 50);
  doc.text("Date: █████████████", 20, 60);
  doc.text("Location: █████████████", 20, 70);

  // Victim Info
  doc.text(`Name: ${data.name}`, 20, 90);
  doc.text(`Age: ${data.age}`, 20, 100);
  doc.text(`Last Seen: ${data.location}`, 20, 110);
  doc.text(`Description: ${data.description}`, 20, 120);

  // Characteristics
  doc.text("Characteristics:", 20, 140);
  doc.text(`Physiology: ${data.physiology}`, 20, 150);
  doc.text(`Intelligence: ${data.intelligence}`, 20, 160);
  doc.text(`Heart: ${data.heart}`, 20, 170);
  doc.text(`Soul: ${data.soul}`, 20, 180);

  // Creepy Disclaimer
  doc.setFontSize(10);
  doc.text("NOTICE: This document is classified. Unauthorized disclosure is punishable by law.", 20, 200);

  doc.save(`${data.caseNumber}_report.pdf`);
});
