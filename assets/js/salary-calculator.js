function calculateSalary() {
    let grossSalary = parseFloat(document.getElementById("grossSalary").value) || 0;
    let netSalary = 0;
    let employerCost = 0;

    // Налоги и отчисления
    const incomeTaxRate = 0.10; // Подоходный налог 10%
    const socialFundEmployee = 0.08; // Отчисления в Соцфонд от работника 8%
    const socialFundEmployer = 0.1725; // Отчисления в Соцфонд от работодателя 17.25%

    if (grossSalary > 0) {
        let incomeTax = grossSalary * incomeTaxRate;
        let socialEmployee = grossSalary * socialFundEmployee;
        let socialEmployer = grossSalary * socialFundEmployer;

        netSalary = grossSalary - (incomeTax + socialEmployee);
        employerCost = grossSalary + socialEmployer;

        document.getElementById("netSalary").innerText = netSalary.toFixed(2) + " KGS";
        document.getElementById("employerCost").innerText = employerCost.toFixed(2) + " KGS";
    } else {
        document.getElementById("netSalary").innerText = "0 KGS";
        document.getElementById("employerCost").innerText = "0 KGS";
    }
}
