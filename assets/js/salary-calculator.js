function calculateSalary() {
    let grossSalary = parseFloat(document.getElementById("grossSalary").value) || 0;
    let highAltitude = document.getElementById("highAltitude").checked;

    let opv = grossSalary * 0.08; // Отчисления в ОПВ (8%)
    let socialTax = grossSalary * 0.02; // Социальные отчисления (2%)
    let taxableIncome = grossSalary - opv;
    let incomeTax = taxableIncome * 0.10; // Подоходный налог (10%)

    let netSalary = grossSalary - (opv + socialTax + incomeTax);

    if (highAltitude) {
        netSalary += grossSalary * 0.50; // Надбавка за высокогорье (50%)
    }

    document.getElementById("grossDisplay").innerText = grossSalary.toFixed(2);
    document.getElementById("opvDisplay").innerText = opv.toFixed(2);
    document.getElementById("socialDisplay").innerText = socialTax.toFixed(2);
    document.getElementById("taxableDisplay").innerText = taxableIncome.toFixed(2);
    document.getElementById("incomeTaxDisplay").innerText = incomeTax.toFixed(2);
    document.getElementById("highAltitudeDisplay").innerText = highAltitude ? (grossSalary * 0.50).toFixed(2) : "0.00";
    document.getElementById("netDisplay").innerText = netSalary.toFixed(2);
}
