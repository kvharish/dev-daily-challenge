/*
  Initialize an individual's middle name (if there is any).
  Example:
  'Jack Ryan' => 'Jack Ryan'
  'Lois Mary Lane' => 'Lois M. Lane'
  'Dimitri' => 'Dimitri'
  'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

const initialize = (fullname) => fullname.split(' ')
                                         .map((name, index, names) => 
                                              (index === 0 || index === names.length - 1) ? name : `${name[0]}.`)
                                         .join(' ');
