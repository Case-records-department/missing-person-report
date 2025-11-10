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

  // Border around the PDF
  doc.setDrawColor(0, 0, 0); // Black border
  doc.setLineWidth(1);
  doc.rect(10, 10, 190, 270); // X, Y, Width, Height

  // Header
  doc.text("Department of Public Safety", 20, 20);
  doc.text("Missing Person Report", 20, 30);
  doc.text(`Case Number: ${data.caseNumber}`, 20, 40);

  // Redacted fields with black bars
  doc.text("Officer:", 20, 50);
  doc.rect(50, 45, 100, 10, "F"); // Black bar
  doc.text("Date:", 20, 60);
  doc.rect(50, 55, 100, 10, "F");
  doc.text("Location:", 20, 70);
  doc.rect(60, 65, 100, 10, "F");

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

  // CONFIDENTIAL Stamp
  doc.setTextColor(255, 0, 0); // Red color
  doc.setFontSize(40);
  doc.text("CONFIDENTIAL", 35, 120, { angle: 45 });
  doc.setTextColor(0, 0, 0); // Reset to black

  // Creepy Disclaimer
  doc.setFontSize(10);
  doc.text("NOTICE: This document is classified. Unauthorized disclosure is punishable by law.", 20, 200);

  doc.save(`${data.caseNumber}_report.pdf`);
});
