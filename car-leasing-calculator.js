document.addEventListener("DOMContentLoaded", () => {
  const carTypeElement = document.getElementById("car-type");
  const carValueTextElement = document.getElementById("car-value-text");
  const carValueRangeElement = document.getElementById("car-value-range");
  const leasePeriodTextElement = document.getElementById("lease-period-text");
  const leasePeriodRangeElement = document.getElementById("lease-period-range");
  const downPaymentTextElement = document.getElementById("down-payment-text");
  const downPaymentRangeElement = document.getElementById("down-payment");

  const leasingCostElement = document.getElementById("leasing-cost");
  const downPaymentAmountElement = document.getElementById("down-payment-amount");
  const monthlyInstallmentElement = document.getElementById("monthly-installment");
  const interestRateElement = document.getElementById("interest-rate");

  const updateValues = () => {
    const carType = carTypeElement.value;
    const carValue = parseFloat(carValueTextElement.value);
    const leasePeriod = parseFloat(leasePeriodTextElement.value);
    const downPaymentPercent = parseFloat(downPaymentTextElement.value);

    const interestRate = carType === "new" ? 2.99 : 3.7;
    const downPaymentAmount = carValue * (downPaymentPercent / 100);
    const monthlyInterestRate = interestRate / 12 / 100;

    leasingCostElement.textContent = `€${totalCost.toFixed(2)}`;
    downPaymentAmountElement.textContent = `€${downPaymentAmount.toFixed(2)}`;
    interestRateElement.textContent = `${interestRate}%`;
  };

  const syncInputs = (sourceElement, targetElement) => {
    targetElement.value = sourceElement.value;
    updateValues();
  };

  carValueTextElement.addEventListener("input", () =>
    syncInputs(carValueTextElement, carValueRangeElement)
  );
  carValueRangeElement.addEventListener("input", () =>
    syncInputs(carValueRangeElement, carValueTextElement)
  );

  leasePeriodTextElement.addEventListener("input", () =>
    syncInputs(leasePeriodTextElement, leasePeriodRangeElement)
  );
  leasePeriodRangeElement.addEventListener("input", () =>
    syncInputs(leasePeriodRangeElement, leasePeriodTextElement)
  );

  downPaymentTextElement.addEventListener("input", () =>
    syncInputs(downPaymentTextElement, downPaymentRangeElement)
  );
  downPaymentRangeElement.addEventListener("input", () =>
    syncInputs(downPaymentRangeElement, downPaymentTextElement)
  );

  carTypeElement.addEventListener("change", updateValues);

  updateValues();
});
