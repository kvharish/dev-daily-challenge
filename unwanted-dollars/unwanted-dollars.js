/*
  If you are faced with an input box like this:
                                           +--------------+
  Enter the price of the item, in dollars: |              |
                                           +--------------+
  Do you put the dollar sign in or not?
  Inevitably, some people will type a dollar sign while others will leave it out.
  The instructions could be made clearer - but that won't stop those that don't read them.
  Write a function that converts a string representing a number into the number itself.
  Consider negative numbers and any extraneous space characters that the user might put in.
  If the given string does not represent a number, return 0.0.
  Sample Cases:
  money_value("12.34")
  money_value(" $5.67")
  money_value("-$ 0.1")
  money_value("$-2.3456")
  money_value("007")
  money_value(" $ 89")
  money_value("   .11")
  money_value("$.2")
  money_value("-.34")
  money_value("$$$")
*/

const moneyValue = (str) => isNaN(a = parseFloat(str.replace(/[^0-9.]/g, ''))) ? 0 : a;
