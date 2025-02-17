//Exporting the "formatCurrency" function can be used in other files
export function formatCurrency(amount) {

  //Creating a new 'Intl.NumberFormat' instatnce for formatting numbers based on the British English locale ('en-GB')
    return new Intl.NumberFormat('en-GB', {

      //Setting the formatting style to 'currency' to represent the number as a monetary value
      style: 'currency',

      //Specifying the currency as British Pound Sterling ('GBP)
      currency: 'GBP',

      //Setting the minimum number of fraction digits to 0
    }).format(amount);
  }