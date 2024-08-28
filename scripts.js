// Add any specific functionality if required, such as form validation or handling of the input changes.
// Currently, the functionality is static and doesn't require dynamic updates.

document.querySelectorAll('input[name="offer"]').forEach((input) => {
    input.addEventListener('change', (e) => {
      const totalDisplay = document.querySelector('.summary p:last-child');
      let totalAmount;
  
      switch (e.target.id) {
        case 'offer1':
          totalAmount = '$18.00 USD';
          break;
        case 'offer2':
          totalAmount = '$24.00 USD';
          break;
        case 'offer3':
          totalAmount = '$36.00 USD';
          break;
        default:
          totalAmount = '$0.00 USD';
      }
  
      totalDisplay.textContent = `Total: ${totalAmount}`;
    });
  });
  
  document.querySelectorAll('input[name="offer"]').forEach((input) => {
    input.addEventListener('change', (e) => {
      document.querySelectorAll('.offer').forEach((offer) => {
        offer.classList.remove('expanded');
      });
  
      const selectedOffer = e.target.closest('.offer');
      selectedOffer.classList.add('expanded');
    });
  });
  